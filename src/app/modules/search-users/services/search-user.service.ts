import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  private _urlUser = `${environment.urlService}/users`;

  constructor(
    readonly http: HttpClient
  ) {
  }

  getAllUser(): Observable<any> {

    return this.http.get(
      this._urlUser,
      {
        observe: 'response',
      }
    );
  }
}
