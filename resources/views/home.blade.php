@extends('layouts.app')

@section('content')
  <div class="uk-container">
    <div class="uk-flex-center" uk-gird>
      <div class="uk-width-3-4@s">
        <div class="uk-card">
          <div class="uk-card-header">Dashboard</div>

          <div class="uk-card-body">
            @if (session('status'))
              <div class="uk-alert-success" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>{{ session('status') }}</p>
              </div>
            @endif

            You are logged in!
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
