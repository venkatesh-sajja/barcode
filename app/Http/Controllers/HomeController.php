<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->except('custom_login');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home.home');
    }
    public function custom_login(Request $request){
        $data =[];
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if($request->login_type == 'login'){
            if (\Auth::attempt([
                'email' => $request->email,
                'password' => $request->password])
            ){
                $data['data']['user_img'] = 'assets/images/profile_pic.svg';
                $data['data']['name'] = auth()->user()->name;
            }else{
                $data['errorMsg'] = 'User details not found';
            }
        }else{
            $data['data'] = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $data['data']['user_img'] = 'assets/images/profile_pic.svg';
            $data['data']['name'] = auth()->user()->name;
        }
        return $data;

    }
}
