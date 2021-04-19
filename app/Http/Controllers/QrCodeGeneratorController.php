<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Filesystem\Filesystem;
use JeroenDesloovere\VCard\VCard;

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

    public function gnerateVDCard(){
        return view('vcard.vcard_form');
    }
    public function gnerateVDCard1(){
        $vcard = new VCard();

        // define variables
        $lastname = 'Desloovere';
        $firstname = 'Jeroen';
        $additional = '';
        $prefix = '';
        $suffix = '';

        // add personal data
        $vcard->addName($lastname, $firstname, $additional, $prefix, $suffix);

        // add work data
        $vcard->addCompany('Siesqo');
        $vcard->addJobtitle('Web Developer');
        $vcard->addRole('Data Protection Officer');
        $vcard->addEmail('info@jeroendesloovere.be');
        $vcard->addPhoneNumber(1234121212, 'PREF;WORK');
        $vcard->addPhoneNumber(123456789, 'WORK');
        $vcard->addAddress(null, null, 'street', 'worktown', null, 'workpostcode', 'Belgium');
        $vcard->addLabel('street, worktown, workpostcode Belgium');
        $vcard->addURL('http://www.jeroendesloovere.be');

       // $vcard->addPhoto(__DIR__ . '/landscape.jpeg');

        // return vcard as a string
        //return $vcard->getOutput();

        // return vcard as a download
        return $vcard->download();
    }
}
