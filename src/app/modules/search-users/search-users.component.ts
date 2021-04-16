import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SearchUserService} from './services/search-user.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {IUserResponse} from '../../models/user-response.interface';
import {Observable, of, Subject} from 'rxjs';
import {ModalService} from './services/modal.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.sass']
})
export class SearchUsersComponent implements OnInit {
  filtro_title = 'Filtro Ricerca User';
  formRicerca: string[] = [];

  users$: Observable<IUserResponse[] | null> = new Subject();


  constructor(
    readonly title: Title,
    readonly searchService: SearchUserService,
    readonly modal: ModalService,
    readonly spinner: NgxSpinnerService
  ) {
    this.title.setTitle('Ricerca User');
  }

  ngOnInit(): void {

  }


  ricerca({full_name, email, telefono}: IUserResponse): void {
    if (!!full_name) {
      this.users$ = this.searchService.getAllUser(full_name).pipe(
        tap(response => {
          console.log(response);
          if (!!response && response.length === 0) {
            this.modal.getAlert('Nessun risultato trovato', 'info');
          }else if (!!response && response.length > 0){
            this.modal.getAlert('Risultati ricevuti', 'success');
          }
        })
      );

    } else {
      this.users$ = this.searchService.getAllUser().pipe(
        tap(response => {
          console.log(response);
          if (!!response && response.length > 0) {
            this.modal.getAlert('Risultati ricevuti', 'success');
          } else if (!!response && response.length === 0) {
            this.modal.getAlert('Nessun risultato trovato', 'info');
          }
        })
      );
    }

  }

  elimina(id: string): void {
    this.modal.getModalWithPromise().then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (!!id) {
          this.users$ = this.searchService.deleteUser(id).pipe(
            switchMap(user => this.searchService.getAllUser().pipe(
              map(response => ({response, user})),
              catchError(error => of({
                response: null,
                user: {id: null, telefono: null, email: null, full_name: null, createdAt: null}
              }))
            )),
            tap(response => this.modal.getAlert('Utente Eliminato', 'success')),
            map(response => response.response)
          );
        }
      } else if (result.isDenied) {
        this.modal.getAlert('Nessuna Eliminazione', 'info');
      }
    });

  }
}
