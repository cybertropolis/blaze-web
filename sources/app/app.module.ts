import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GestureConfig } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { SplashScreenService } from './services/splash-screen.service';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NeuralNetworksModule } from './modules/neural-networks/neural-networks.module';
import { ConfigurationsModule } from './modules/configurations/configurations.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelsModule } from './modules/models/models.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterModule,
        HttpClientModule,

        LayoutModule,

        AppRoutingModule,

        CoreModule,
        DashboardModule,
        NeuralNetworksModule,
        ConfigurationsModule,
        ModelsModule
    ],
    providers: [
        SplashScreenService,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: GestureConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
