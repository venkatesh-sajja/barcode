<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Filesystem\Filesystem;

class QrCodeGeneratorController extends Controller
{
    /**
     * function to generate Qr Code for the given Url  
     */
    public function generateUrlCode(Request $request){
        $url = $request->url;
        $user = Auth::user();
        $time =  'refreshed-qr-'.time().'.png';
        $file = new Filesystem;
        $file->cleanDirectory(public_path()."/qr-code");
    
        QrCode::style('round')
        ->eyeColor(0, 230, 20, 42, 20, 60, 232)
        ->size(200)
        ->format('png')
        ->generate($url, public_path()."/qr-code/".$time);
        echo json_encode(array('image' => $time));
    }
}
