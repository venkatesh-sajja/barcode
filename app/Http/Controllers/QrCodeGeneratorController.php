<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Filesystem\Filesystem;
use App\UserQrCode;
use JeroenDesloovere\VCard\VCard;

class QrCodeGeneratorController extends Controller
{
    /**
     * function to generate Qr Code for the given Url  
     */
    public function generateUrlCode(Request $request){
        $url = $request->url;
        $image = null;
        $time =  'refreshed-qr-'.time().'.png';
        return view('sections.ajax-dynamic-qr-code', compact('url', 'image'));
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
    public function gnerateVDCard(){
        return view('vcard.vcard_form');
    }
    // public function gnerateVDCard1(){
    //     $vcard = new VCard();

    //     // define variables
    //     $lastname = 'Desloovere';
    //     $firstname = 'Jeroen';
    //     $additional = '';
    //     $prefix = '';
    //     $suffix = '';

    //     // add personal data
    //     $vcard->addName($lastname, $firstname, $additional, $prefix, $suffix);

    //     // add work data
    //     $vcard->addCompany('Siesqo');
    //     $vcard->addJobtitle('Web Developer');
    //     $vcard->addRole('Data Protection Officer');
    //     $vcard->addEmail('info@jeroendesloovere.be');
    //     $vcard->addPhoneNumber(1234121212, 'PREF;WORK');
    //     $vcard->addPhoneNumber(123456789, 'WORK');
    //     $vcard->addAddress(null, null, 'street', 'worktown', null, 'workpostcode', 'Belgium');
    //     $vcard->addLabel('street, worktown, workpostcode Belgium');
    //     $vcard->addURL('http://www.jeroendesloovere.be');

    //    // $vcard->addPhoto(__DIR__ . '/landscape.jpeg');

    //     // return vcard as a string
    //     //return $vcard->getOutput();

    //     // return vcard as a download
    //     return $vcard->download();
    // }

    /**
     * function to upload the custom logo for qr code
     */
    public function uploadCustomLogo(Request $request){
        try{
            $file_name = time().'.'.$request->logo->extension();
            $request->logo->move(public_path('uploads'), $file_name);
            
        }catch(\Exception $e){
            $return_arr = array(
                'message' => $e->getMessage(),
                'status' => false
            );
            return json_encode($return_arr);
        }
        $return_arr = array(
            'message' => 'uploaded successfully',
            'status' => true,
            'image' => $file_name
        );
        return json_encode($return_arr);
    }
}
