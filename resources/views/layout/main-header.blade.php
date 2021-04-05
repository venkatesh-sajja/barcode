<header class="header">
    <div class="p-0">
        <nav class="navbar navbar-expand-md justify-content-between">
        <div>
            <a id="sidebarCollapse" class="icon-menu header_nav_icon d-none"></a>
            <a class="navbar-brand" ><img loading="lazy"class="qr_code_logo_click" src="assets/images/qrcode-chimp.svg" ></a>
            </div>
            <div class=" ml-auto ">
                <ul class="navbar-nav chimp_header mb-1 mr-4">
                    <li class="nav-item active">
                        <a class="nav-link" id="home" href="{{route('home')}}">Home</a>
                    </li>
                    <li class="nav-item d-none " id="nav_dashboard_link" >
                        <a class="nav-link" href="user/404.html">Dashboard</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="pricing.html">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact-us/index.html">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="user_profile_header @guest  @else loggedIn @endguest">
            
                <div class="collapse navbar-collapse login_signup" id="navbarCollapse">
                    <div class="navbar-nav mr-auto">
                        
                    </div>
                    <div class="form-inline mt-2 mt-md-0">
                        <button class="btn btn-outline-primary mr-2 pl-4 pr-4" data-toggle="modal"
                        data-target="#signup-free">Login</button>
                        <button class="btn btn-primary  my-sm-0 pl-4 pr-4" data-toggle="modal"
                        data-target="#signup-free">Sign Up</button>
                    </div>
                </div>
                <div class="ml-auto user_profile_icon">
                    <div class="navbar_notification easin mr-2 d-none "><i class="icon-notification"></i></div>
                    <div class=" easin dropdown" >
                        <button class="dropdown-toggle navbar_profile_pic" id="user_profile_dropdown" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style="background-image:url(assets/images/profile_pic.svg)" ></button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="user_profile_dropdown">
                            <h6 class="dropdown-header border-bottom">
                               @guest  @else {{ auth()->user()->name }} @endguest</h6>
                            <a class="dropdown-item" href="user/404.html">Profile</a>
                            <a class="dropdown-item d-none" href="user/404.html">Setting</a>
                            <div class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</div>
                        </div>
                         <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>