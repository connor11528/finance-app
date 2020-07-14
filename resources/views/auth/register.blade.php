@extends('layouts.app')

@section('content')
  <div class="uk-container">
    <div class="uk-flex-center" uk-grid>
      <div class="uk-width-1-2@s">
        <div class="uk-card">
          <div class="uk-card-header">{{ __('Register') }}</div>

          <div class="uk-card-body">
            <form method="POST" action="{{ route('register') }}">
              @csrf

              <div class="uk-margin">
                <label for="name" class="uk-form-label">{{ __('Name') }}</label>

                <input id="name" type="text" class="uk-input @error('name') uk-form-danger @enderror" name="name"
                  value="{{ old('name') }}" required autocomplete="name" autofocus>

                @error('name')
                  <span class="uk-text-danger" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </div>

              <div class="uk-margin">
                <label for="email" class="uk-form-label">{{ __('E-Mail Address') }}</label>

                <input id="email" type="email" class="uk-input @error('email') uk-form-danger @enderror" name="email"
                  value="{{ old('email') }}" required autocomplete="email">

                @error('email')
                  <span class="uk-text-danger" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </div>

              <div class="uk-margin">
                <label for="password" class="uk-form-label">{{ __('Password') }}</label>

                <input id="password" type="password" class="uk-input @error('password') uk-form-danger @enderror"
                  name="password" required autocomplete="new-password">

                @error('password')
                  <span class="uk-text-danger" role="alert">
                    <strong>{{ $message }}</strong>
                  </span>
                @enderror
              </div>

              <div class="uk-margin">
                <label for="password-confirm" class="uk-form-label">{{ __('Confirm Password') }}</label>

                <div class="col-md-6">
                  <input id="password-confirm" type="password" class="uk-input" name="password_confirmation" required
                    autocomplete="new-password">
                </div>
              </div>

              <div class="uk-margin">
                <button type="submit" class="uk-button uk-button-primary">
                  {{ __('Register') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
