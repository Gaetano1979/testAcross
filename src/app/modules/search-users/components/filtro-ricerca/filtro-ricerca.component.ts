import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'filtro-ricerca',
  template: `
    <form [formGroup]="formSearch" >
      <div class="row ">
        <div class="col">
          <div class="form-floating mb-3">
            <input formControlName="name" type="text" class="form-control form-control-sm" id="name" placeholder="Inserire nome">
            <label for="name">Nome</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating mb-3">
            <input formControlName="cognome" type="text" class="form-control" id="cognome" placeholder="Inserire cognome">
            <label for="cognome">Cognome</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating mb-5">
            <input formControlName="email" type="email" class="form-control" id="email" placeholder="Inserire email">
            <label for="cognome">Email</label>
          </div>
        </div>
      </div>




      <div class="mb-3 d-flex">
        <button class="btn btn-primary" type="submit">{{search_button}}</button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class FiltroRicercaComponent implements OnInit {

  search_button = 'Ricerca';

  formSearch = this._fb.group({
    name:'',
    cognome:'',
    email:''
  })

  constructor(
    readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}