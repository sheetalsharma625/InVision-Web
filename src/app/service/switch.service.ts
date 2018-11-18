import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Switch } from '../model/switch';

class SwitchesResponse {
  switchDetails: Switch[]
}

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor(private http: HttpClient) { }

  getSwitches(): Observable<Switch[]> {
    return this.http.get<SwitchesResponse>('http://192.168.1.12:8080/switches')
      .pipe(
        map(res => res.switchDetails)
      );
  }

  updateSwitchState(sw: Switch): Observable<Object> {
    return this.http.post<SwitchesResponse>(`http://192.168.1.12:8080/switches/${sw.id}/state/${sw.state.toLowerCase()}`, null);
  }
}
