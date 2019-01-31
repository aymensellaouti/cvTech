import { Injectable } from '@angular/core';
import {Personne} from './Personne';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {debounceTime, distinctUntilChanged, throttleTime} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class CvService  {
  // private apiUrl = 'https://httpangular-5686d.firebaseio.com/data.json';
  private apiUrl = 'http://localhost:3000/api/personnes';
  personnes: Personne [];
  personne: Personne;
  constructor(private http: HttpClient) {
    this.initFakePersonne();
  }
  getCvs() {
    return this.personnes ;
  }
  loadPersonnes() {
    return this.http.get<Personne []>(this.apiUrl);
  }
  private initFakePersonne() {
    this.personnes = [
      new Personne(2,
        1234,
        'Sellaouti',
        'Aymen',
        'Enseignant',
        'as.jpg',
        36), new Personne(2,
        5678,
        'Sellaouti',
        'Aymen',
        'Enseignant',
        'as.jpg',
        36)
    ];
  }
  addPersonne(personne: Personne) {
    // const token = localStorage.getItem('token');
    // const params = new HttpParams()
    //   .set('access_token', localStorage.getItem('token'));
    // const headers = new HttpHeaders();
    // headers.append('Authorization', 'Bearer ${token}');
    // return this.http.post(this.apiUrl, personne, {headers});
    return this.http.post(this.apiUrl, personne);
  }
  saveCvs() {
    console.log('save Cvs');
    return this.http.put(this.apiUrl, this.personnes);
  }
    searchPersonnes(name: string): Observable<Personne[]> {
    if (!name.trim()) {
      return of([]);
    }
     // const filter = {name: name};
     const filter = (`{"where":{"name":{"like":"%${name}%"}}}`);
     const params = new HttpParams()
                    .set('filter', filter);
     return this.http.get<Personne[]>(`${this.apiUrl}`, {params}).pipe(
      throttleTime(4000),
      distinctUntilChanged()
    );
   }
   getPersonne(id): Observable<Personne> {
     return this.http.get<Personne>(this.apiUrl + `/${id}`);
   }
}
