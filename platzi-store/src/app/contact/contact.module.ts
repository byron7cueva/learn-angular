import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule
    ]
})
export class ContactModule {

}