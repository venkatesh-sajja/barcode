<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/',['as' => 'home_page', 'uses' => 'HomeController@index']);

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/qr_code_for_text', ['as' => 'qr_code_for_text', 'uses' => 'HomeController@qrCodeForText']);
Route::post('/custom_login', 'HomeController@custom_login')->name('custom_login');

Route::get('/get_url_qrcode', ['as' => 'get_url_qrcode', 'uses' => 'QrCodeGeneratorController@generateUrlCode']);
Route::any('/save_campaign', ['as' => 'save_campaign', 'uses' => 'QrCodeGeneratorController@saveCampiagn']);
Route::get('/vdcard', 'QrCodeGeneratorController@gnerateVDCard')->name('vdcard');
