import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUserResponse} from '../../../../models/user-response.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'lista-users',
  template: `
    <div class="row row-cols-3 g-4">
      <div class="col" *ngFor="let user of users">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{user?.full_name}}</h5>
            <p class="card-text">telefono: {{user?.telefono}}</p>
            <p class="card-text"><small class="text-muted">{{user?.email}}</small></p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-sm btn-outline-warning" type="button" (click)="modifica(user)">Modifica</button>
            <button class="btn btn-sm btn-outline-danger" type="button" (click)="elimina(user)">Elimina</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ListaUsersComponent implements OnInit {


  @Input() users: IUserResponse[] | null = [];
  @Output() userID = new EventEmitter<string>();


  constructor(
    readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  elimina(user: IUserResponse): void {
    this.userID.next(user.id);
  }

  modifica(user: IUserResponse): void {
    this.router.navigate(['view-edit-user', 'user', user.id], {state: {user}});
  }
}
