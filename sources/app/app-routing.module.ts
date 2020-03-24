import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NeuralNetworksCollectionComponent } from './modules/neural-networks/neural-networks-collection/neural-networks-collection.component';
import { NeuralNetworkDetailsComponent } from './modules/neural-networks/neural-network-details/neural-network-details.component';
import { ConfigurationsComponent } from './modules/configurations/configurations.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { ModelsCollectionComponent } from './modules/models/models-collection/models-collection.component';
import { ModelDetailsComponent } from './modules/models/model-details/model-details.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'neural-networks-collection', component: NeuralNetworksCollectionComponent },
    { path: 'neural-network-details/:id', component: NeuralNetworkDetailsComponent },
    { path: 'models-collection', component: ModelsCollectionComponent },
    { path: 'model-details', component: ModelDetailsComponent },
    { path: 'model-details/:id', component: ModelDetailsComponent },
    { path: 'configurations', component: ConfigurationsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
