import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {IUserResponse} from '../../models/user-response.interface';
import {SearchUserService} from '../search-users/services/search-user.service';
import {ModalService} from '../search-users/services/modal.service';

type State = { user: IUserResponse, navigationId: number };

@Component({
  selector: 'app-view-edit-user',
  templateUrl: './view-edit-user.component.html',
  styleUrls: ['./view-edit-user.component.sass']
})
export class ViewEditUserComponent implements OnInit {


  private _data: Data | null = null;
  private _params: { id: string } | null = null;


  submit_button: string | null = null;


  formUser: FormGroup = this._fb.group({
    id: null,
    full_name: null,
    telefono: null,
    email: null
  });
  titleCard: string | null = null;

  constructor(
    readonly activate: ActivatedRoute,
    readonly router: Router,
    readonly location: Location,
    readonly _fb: FormBuilder,
    readonly service: SearchUserService,
    readonly modal: ModalService
  ) {


    this.activate.params.subscribe((data) => {
      console.log(data);
      this.params = data as { id: string };
    });

    this._isState(location.getState() as State);


    this.activate.data.subscribe(data => {
      // console.log(data);
      this.data = data;
      if ('title' in data) {
        switch (data.title) {
          case 'New User':
            this.submit_button = 'Crea Nuovo';
            this.titleCard = 'Creazione nuovo Utente';
            break;
          case 'Edit User':
            this.submit_button = 'Modifica User';
            this.titleCard = 'Modifica Utente esistente';
            break;
          default:
            this.submit_button = 'Crea Nuovo';
        }
      }
    });
  }

  ngOnInit(): void {

  }

  submit(): void {
    const user: IUserResponse = this.formUser.getRawValue();
    if (!!this.data && !!this.data.edit) {
      this.service.setUser(user).subscribe(userPut => this._modal(`User Modificato correttamente`));
    } else {
      this.service.postNewUser(user).subscribe(userPost => this._modal(`User creato correttamente`));
    }
  }

  private _isState(state: State): void {
    // console.log(state);
    if (!!state && !!state.user) {
      this.formUser.patchValue({...state.user});
    } else if (!!this.params && !!this.params.id) {
      // console.log(state);
      this.service.getUserId(this.params.id).subscribe(user => this.formUser.patchValue({...user}));
    }
  }

  private _modal(title: string): void {
    this.modal.getAlert(title, 'success');
  }


  get data(): Data | null {
    return this._data;
  }

  set data(value: Data | null) {
    this._data = value;
  }

  get params(): { id: string } | null {
    return this._params;
  }

  set params(value: { id: string } | null) {
    this._params = value;
  }
}
