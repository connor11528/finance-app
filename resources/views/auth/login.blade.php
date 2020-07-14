@extends('layouts.app')

@section('content')
  <div class="uk-container">
    <div class="uk-flex-center" uk-grid>
      <div class="uk-width-1-2@s">
        <div class="uk-card">
          <div class="uk-card-header">{{ __('Login') }}</div>

          <div class="uk-card-body">
            <form method="POST" action="{{ route('login') }}">
              @csrf

              <div class="uk-margin">
                <label for="email" class="uk-form-label">{{ __('E-Mail Address') }}</label>

                <input id="email" type="email" class="uk-input @error('email') uk-form-danger @enderror" name="email"
                  value="{{ old('email') }}" required autocomplete="email" autofocus>

                @error('email')
                  <span class="uk-text-danger" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </div>

              <div class="uk-margin">
                <label for="password" class="uk-form-label">{{ __('Password') }}</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="uk-input @error('password') uk-form-danger @enderror"
                    name="password" required autocomplete="current-password">

                  @error('password')
                    <span class="uk-text-danger" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                  @enderror
                </div>
              </div>

              <div class="uk-margin">
                <label>
                  <input class="uk-checkbox" type="checkbox" name="remember" id="remember"
                    {{ old('remember') ? 'checked' : '' }}>
                  {{ __('Remember Me') }}
                </label>
              </div>

              <div class="uk-margin">
                <button type="submit" class="uk-button uk-button-primary">
                  {{ __('Login') }}
                </button>

                @if (Route::has('password.request'))
                  <a class="uk-button uk-button-link" href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                  </a>
                @endif
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
