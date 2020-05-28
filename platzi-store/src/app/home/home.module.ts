// Dependencia para poder generar un modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

// Cada modulo en angular debe tener un routing
@NgModule({
    // Las declarations, son los componentes que va tener el modulo
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    imports: [
        // Para que le modulo reconozca las directivas con las que biene angular
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule {

}
