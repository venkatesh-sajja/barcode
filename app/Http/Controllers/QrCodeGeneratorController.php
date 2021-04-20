<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Filesystem\Filesystem;
use App\UserQrCode;

class QrCodeGeneratorController extends Controller
{
    /**
     * function to generate Qr Code for the given Url  
     */
    public function generateUrlCode(Request $request){
        $url = $request->url;
        $time =  'refreshed-qr-'.time().'.png';
        return view('sections.ajax-dynamic-qr-code', compact('url'));
    }

    /**
     * function to save the user specific campaign
     */
    public function saveCampiagn(Request $request){
        
        try{
            $user = Auth::user();
            $data_arr = array(
                'user_id' => $user->id,
                'type' => $request->qr_type,
                'value' => $request->value,
                'name' => $request->name
            );
            $code_exists = UserQrCode::where([
                ['user_id', $user->id],
                ['name', $request->name],
            ])->first();
            if($code_exists){ //if exists update the data
                UserQrCode::where([
                    ['user_id', $user->id],
                    ['name', $request->name],
                ])->update($data_arr);
            }else{ // if not insert
                UserQrCode::insert($data_arr);
            }
        }catch(\Exception $e){
            $return_arr = array(
                'message' => $e->getMessage(),
                'status' => false
            );
            return json_encode($return_arr);
        }
       $return_arr = array(
            'message' => 'data saved successfully..!',
            'status' => true
        );
        return json_encode($return_arr);
        
        

    } 
}
