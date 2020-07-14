@extends('layouts.app')

@section('content')
  <div class="uk-container">
    <div class="uk-flex-center" uk-grid>
      <div class="uk-width-1-2@s">
        <div class="uk-card">
          <div class="uk-card-header">{{ __('Reset Password') }}</div>

          <div class="uk-card-body">
            @if (session('status'))
              <div class="uk-alert-success" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>{{ session('status') }}</p>
              </div>
            @endif

            <form method="POST" action="{{ route('password.email') }}">
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
                <button type="submit" class="uk-button uk-button-primary">
                  {{ __('Send Password Reset Link') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
