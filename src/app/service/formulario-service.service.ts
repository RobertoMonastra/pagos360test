import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { map, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiceService {

  // private _baseUrl : string = 'https://api.sandbox.pagos360.com/report/collection/'
  private apiUrl = 'https://api.sandbox.pagos360.com';
  private apiKey = 'NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA';

  constructor(private http: HttpClient) { }

  public getCollections(date: string) {
    const url = `${this.apiUrl}/report/collection/${date}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get(url, { headers });
  }
}




