import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// model 
import { Technology } from '../models/technology.model';

// envioroment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly _http: HttpClient) { }


  public getTechnologies() {
    return this._http.get<Technology[]>(`${this.baseUrl}/technologies`);
  };

  public getTechnology(id: String) {
    return this._http.get<Technology>(`${this.baseUrl}/technology/${id}`);
  };

  public searchTechnology(query: String) {
    return this._http.get<Technology>(`${this.baseUrl}/technology/search/${query}`);
  };




}
