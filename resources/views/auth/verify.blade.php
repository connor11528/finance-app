@extends('layouts.app')

@section('content')
  <div class="uk-container">
    <div class="uk-flex-center" uk-grid>
      <div class="uk-width-1-3@s">
        <div class="uk-card">
          <div class="uk-card-header">{{ __('Verify Your Email Address') }}</div>

          <div class="uk-card-body">
            @if (session('resent'))
              <div class="uk-alert-success" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>{{ __('A fresh verification link has been sent to your email address.') }}</p>
              </div>
            @endif

            {{ __('Before proceeding, please check your email for a verification link.') }}
            {{ __('If you did not receive the email') }},
            <form method="POST" action="{{ route('verification.resend') }}">
              @csrf
              <button type="submit" class="uk-button uk-button-link">
                {{ __('click here to request another') }}
              </button>.
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
