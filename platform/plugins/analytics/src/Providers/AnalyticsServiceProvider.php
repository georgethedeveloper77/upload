<?php

namespace Botble\Analytics\Providers;

use Botble\Analytics\Analytics;
use Botble\Analytics\AnalyticsClient;
use Botble\Analytics\AnalyticsClientFactory;
use Botble\Analytics\Exceptions\InvalidConfiguration;
use Botble\Analytics\Facades\AnalyticsFacade;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class AnalyticsServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(AnalyticsClient::class, function () {
            return AnalyticsClientFactory::createForConfig(config('plugins.analytics.general'));
        });

        $this->app->bind(Analytics::class, function () {
            if (empty(setting('analytics_view_id', config('plugins.analytics.general.view_id')))) {
                throw InvalidConfiguration::viewIdNotSpecified();
            }

            if (!setting('analytics_service_account_credentials')) {
                throw InvalidConfiguration::credentialsIsNotValid();
            }

            return new Analytics(
                $this->app->make(AnalyticsClient::class),
                setting('analytics_view_id', config('plugins.analytics.general.view_id'))
            );
        });

        AliasLoader::getInstance()->alias('Analytics', AnalyticsFacade::class);
    }

    public function boot()
    {
        $this->setNamespace('plugins/analytics')
            ->loadAndPublishConfigurations(['general', 'permissions'])
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets();

        $this->app->booted(function () {
            $this->app->register(HookServiceProvider::class);
        });
    }
}
