import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Postazioni {
  codice: string,
  nominativo: string,
  occupato: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:5000";

  caricaPosti(){
    return this.http.get<Postazioni>(this.url+"/view");
  }

  prenota(biglietto){
    // console.log(biglietto);
    return this.http.put(this.url+"/posti", biglietto);
  }

  cancella(biglietto){
    return this.http.put(this.url+"/cancella",biglietto);
  }
}
