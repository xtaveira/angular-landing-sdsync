import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CtaResponse } from '../interfaces/cta.interface';

@Injectable({
  providedIn: 'root',
})
export class CtaService {
  private endpointUrl =
    'https://faed47pcwb7biktidlecuafuty@aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<CtaResponse> {
    const data = { name, email };

    return this.http.post<CtaResponse>(this.endpointUrl, data);
  }
}
