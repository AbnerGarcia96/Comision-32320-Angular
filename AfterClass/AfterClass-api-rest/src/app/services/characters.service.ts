import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl = "https://rickandmortyapi.com/api/";

  constructor(
    private http: HttpClient
  ) { }


  getAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}character`);
  }



}
