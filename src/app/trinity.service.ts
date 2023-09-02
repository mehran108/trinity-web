import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrinityService {

constructor(public http: HttpClient) { }
  GetInstruments(params: any) {
    return this.http.get<Array<any>>(`https://trinityrepertoireapi.azurewebsites.net/api/Instrument/GetInstruments`, {params})
  }
  GetRepertoire(params: any) {
    return this.http.get<Array<any>>(`https://trinityrepertoireapi.azurewebsites.net/api/Instrument/GetRepertoire`, {params})
  }
}
