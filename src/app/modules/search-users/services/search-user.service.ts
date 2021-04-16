import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {IUserResponse} from '../../../models/user-response.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  private _urlUser = `${environment.urlService}/users`;

  constructor(
    readonly http: HttpClient
  ) {
  }

  private getAllUserHttpResponse(filtro?: string): Observable<HttpResponse<IUserResponse[]>> {
    let params: HttpParams = new HttpParams();

    if (!!filtro) {
      params = params.set('search', filtro);
    }

    return this.http.get<IUserResponse[]>(
      this._urlUser,
      {
        observe: 'response',
        params
      }
    );
  }


  getAllUser(filtro?: string): Observable<IUserResponse[] | null> {
    return this.getAllUserHttpResponse(filtro).pipe(
      map(response => response.body)
    );
  }

  getUserId(id: string): Observable<IUserResponse | null> {
    return this.http.get<IUserResponse>(`${this._urlUser}/${id}`, {observe: 'response'}).pipe(
      map(response => response.body)
    );
  }

  postNewUser(user: IUserResponse): Observable<IUserResponse | null> {
    return this.http.post<IUserResponse>(`${this._urlUser}`, user, {observe: 'response'}).pipe(
      map(response => response.body)
    );
  }

  setUser(user: IUserResponse): Observable<IUserResponse | null> {
    return this.http.put<IUserResponse>(`${this._urlUser}/${user.id}`, user, {observe: 'response'}).pipe(
      map(response => response.body)
    );
  }

  deleteUser(id: string): Observable<IUserResponse | null> {
    return this.http.delete<IUserResponse>(`${this._urlUser}/${id}`, {observe: 'response'}).pipe(
      map(response => response.body)
    );
  }


}
