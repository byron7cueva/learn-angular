import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Anotacion para poder definir que es un componente
@Component({
    selector: 'app-product', // El nombre del tag html
    templateUrl: './product.component.html', // Url del template
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    // Ahora esta propiedad puede recibir datos de forma dinamica, enviados desde otro componente
    // Ahor va recibir este componente una propiedad desde otro componente
    @Input() product: Product;

    // Genrando una salida a traves de un vento
    // Se le debe indicar que tipo de dato se va emitir
    // Un output debe ser inicializado
    // Se lo puede inicializar con un valor inicial = new EventEmitter('valor');
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService,
        // tslint:disable-next-line: ban-types
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        if (isPlatformBrowser(this.platformId)) {
            console.log('1. Constructor');
        }
    }

    // Se ejecuta despues del constructor y cada vez que hay cambios en los inputs
    // Para utilizarlo la clase se debe implementar la interface OnChanges
    // Es la forma nativa de angular de dectectar cambios
    /* ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChange');
        console.log(changes);
    }*/

    // Se ejecuta una sola vez cuando ya este es puesto en pantalla
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            console.log('3. ngOnInit');
        }
    }

    // Este tiene una colision con onChange, ya que los dos se encargan de datectar cambios
    // Aca uno se puede hacer la deteccion de cambios pero customizada por uno
    ngDoCheck() {
        if (isPlatformBrowser(this.platformId)) {
            console.log('4. ngDoCheck');
        }
    }

    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            console.log('5. ngOnDestroy');
        }
    }

    addCart() {
        if (isPlatformBrowser(this.platformId)) {
            console.log('Anadir al carrito');
        }

        // Emitiendo las salida
        // Lo que se envia dentro de emit, se puede recibir a traves de la variable que genera angular llamada $event
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }
}
