import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

// Al router se lo debe definir como modulo
@NgModule({
    // Agrgando importaciones para indicar las rutas a utilizar
    imports: [
        RouterModule.forChild(routes)
    ],
    // Para que otros modulos lo puedan utilizar
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {

}
