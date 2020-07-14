@extends('layouts.app')

@section('content')
  <div class="uk-container">
    <div class="uk-flex-center" uk-grid>
      <div class="uk-width-1-2@s">
        <div class="uk-card">
          <div class="uk-card-header">{{ __('Confirm Password') }}</div>

          <div class="uk-card-body">
            {{ __('Please confirm your password before continuing.') }}

            <form method="POST" action="{{ route('password.confirm') }}">
              @csrf

              <div class="uk-margin">
                <label for="password" class="uk-form-label">{{ __('Password') }}</label>

                <input id="password" type="password" class="uk-input @error('password') uk-form-danger @enderror"
                  name="password" required autocomplete="current-password">

                @error('password')
                  <span class="uk-text-danger" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </div>

              <div class="uk-margin">
                <button type="submit" class="uk-button uk-button-primary">
                  {{ __('Confirm Password') }}
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
