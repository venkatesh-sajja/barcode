@if ($image === null)
    {!! QrCode::style('round')
    ->eyeColor(0, 230, 20, 42, 20, 60, 232)
    ->size(260)
    // ->format('png')
    ->generate($url) !!}    
@else
    {!! QrCode::style('round')
    ->eyeColor(0, 230, 20, 42, 20, 60, 232)
    ->size(260)
    // ->format('png')
    ->merge('')
    ->generate($url) !!}        
    
@endif
