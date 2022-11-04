import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';
import { of } from 'rxjs';

describe('UsuariosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsuariosService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {
    const mockDatos = [
      {"usuario":"Avery.Douglas","contrasena":"vY8VIYqwqZ6_oSQ","admin":true,"canLoad":false,"canActivateChild":true,"id":"1"},
      {"usuario":"Cielo_Stanton77","contrasena":"Xc_ipPOo2vXFJ_M","admin":false,"canLoad":true,"canActivateChild":true,"id":"2"}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuarios().subscribe((usuarios) => {
      const mockDatos2 = [
        {"usuario":"Avery.Douglas","contrasena":"vY8VIYqwqZ6_oSQ","admin":true,"canLoad":false,"canActivateChild":true,"id":"1"},
        {"usuario":"Cielo_Stanton77","contrasena":"Xc_ipPOo2vXFJ_M","admin":false,"canLoad":true,"canActivateChild":true,"id":"2"}
      ];
      expect(usuarios).toEqual(mockDatos2);
      done();
    })
  })
});
