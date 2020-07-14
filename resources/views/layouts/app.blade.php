<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
  </head>

  <body>
    @auth
    <div id="app">
      <nav class="uk-navbar-container uk-margin" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo" href="{{ url('/') }}">{{ config('app.name', 'Laravel') }}</a>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <!-- Authentication Links -->
            @guest
              <li>
                <a href="{{ route('login') }}">{{ __('Login') }}</a>
              </li>

              @if (Route::has('register'))
                <li>
                  <a href="{{ route('register') }}">{{ __('Register') }}</a>
                </li>
              @endif
            @else
              <li>
                <a href="#">
                  {{ Auth::user()->name }} <span uk-icon="chevron-down"></span>
                </a>

                <div class="uk-navbar-dropdown">


                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                      </a>
                    </li>
                  </ul>

                  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                  </form>
                </div>
              </li>
            @endguest
          </ul>

        </div>
      </nav>

      <main>
        @yield('content')
      </main>
    </div>

    @else
      <main>
        @yield('content')
      </main>
    @endauth

    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
