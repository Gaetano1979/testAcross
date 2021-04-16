import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {IRicerca, Ricerca} from '../../../../models/ricerca';
import {IUserResponse} from '../../../../models/user-response.interface';

@Component({
  selector: 'filtro-ricerca',
  template: `
    <form [formGroup]="formSearch" (ngSubmit)="ricerca()">
      <div class="row ">
        <div class="col">
          <div class="form-floating mb-3">
            <input formControlName="full_name" type="text" class="form-control form-control-sm" id="name"
                   placeholder="Inserire nome e cognome">
            <label for="name">Nome e Cognome</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating mb-3">
            <input formControlName="email" type="email" class="form-control" id="email" placeholder="Inserire Email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating mb-5">
            <input formControlName="telefono" type="text" class="form-control" id="telefono" placeholder="Inserire Telefono">
            <label for="telefono">Telefono</label>
          </div>
        </div>
      </div>
      <div class="mb-3 d-flex">
        <button class="btn btn-sm btn-primary" type="submit">{{search_button}}</button>
        <a routerLink="/view-edit-user" class="btn btn-sm btn-secondary mx-3" type="button">Crea nuovo utente</a>
      </div>
    </form>
  `,
  styles: []
})
export class FiltroRicercaComponent implements OnInit {

  search_button = 'Ricerca';

  formSearch = this._fb.group({
    full_name: '',
    telefono: '',
    email: ''
  });


  @Output() formRicerca = new EventEmitter<IUserResponse>();

  constructor(
    readonly _fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  ricerca(): void {
    const ricerca: IUserResponse = this.formSearch.getRawValue();
    this.formRicerca.next(ricerca);

  }

  isNull<T, K extends keyof T>(form: T, key: K): T[K] {
    return form[key];
  }


}
