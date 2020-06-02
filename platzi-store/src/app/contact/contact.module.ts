import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Se necesita este modulo para utilizar ngModel

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
    declarations: [
        LayoutComponent,
        ListComponent
    ],
    imports: [
        ContactRoutingModule,
        MaterialModule,
        FormsModule,
        CommonModule,
        SharedModule
    ]
})
export class ContactModule {

}
