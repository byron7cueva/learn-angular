import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Para utilizar el NgModel se requiere el siguente modulo
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DemoRoutingModule,
        SharedModule
    ]
})
export class DemoModule {

}
