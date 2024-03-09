<?php

namespace MiladSarli\FilamentTransition;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Theme;
use Filament\Support\Color;
use Filament\Support\Facades\FilamentAsset;

class FilamentTransition implements Plugin
{
    public function getId(): string
    {
        return 'filament-transition';
    }

    public function register(Panel $panel): void
    {
        FilamentAsset::register([
            Theme::make('filament-transition', __DIR__ . '/../resources/dist/filament-transition.css'),
            AlpineComponent::make('filament-transition', __DIR__ . '/../resources/dist/filament-transition.js'),
        ]);

        $panel
            ->font('DM Sans')
            ->primaryColor(Color::Amber)
            ->secondaryColor(Color::Gray)
            ->warningColor(Color::Amber)
            ->dangerColor(Color::Rose)
            ->successColor(Color::Green)
            ->grayColor(Color::Gray)
            ->theme('filament-transition');
    }

    public function boot(Panel $panel): void
    {
        //
    }
}
