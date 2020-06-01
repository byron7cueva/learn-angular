import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { environment } from '../../../environments/environment';

const URL_API = `${environment.url_api}/products/`;

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    // Lo que va ejecutar antes de cada prueba
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    // Obteniendo las referencias
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    // Validar que el servicio ha sido exitosamente creado
    expect(service).toBeTruthy();
  });

  // Es buena practica agrupar los casos de prueba de cada metodo
  describe('Test for getAllProducts', () => {
    it('should return array products', () => {
      // En pruebas se utilizar el mantra de las tres A
      // Arrange: Preparar
      // Act: De actuar, ejecutar el metodo que queremos probar
      // Assert: Resolver la hipotesis, o ver si funciona como esperabamos
      // Arrange
      const expectData = [
        {
          id: '1',
          title: 'asas',
          price: 1212,
          description: 'asas',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 'sdfsf',
          price: 1212,
          description: 'asas',
          image: 'img/img.jpg'
        }
      ];

      let dataError, dataResponse;

      // Act
      service.getAllProducts()
      .subscribe(
        response => {
        dataResponse = response;
      },
      error => {
        dataError = error;
      });

      const req = httpTestingController.expectOne(URL_API);
      req.flush(expectData);
      // Assert
      expect(dataResponse.lenght).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
      });
  });
});
