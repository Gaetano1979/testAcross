import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="container-fluid">
      <h1 class="h1 text-info">{{title_page}}</h1>
      <hr>
      <div class="row align-items-center justify-content-center" style="height: 80vh">
        <div class="col-5 shadow" style="height: 25vh">
          <div class="d-flex flex-column align-self-center" style="margin-top: 15%">
            <a [routerLink]="link_searc" type="button" class="btn btn-primary">{{title_button}}</a>
            <a [routerLink]="link_create" type="button" class="btn btn-secondary mt-5">{{title_button_user}}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  title_page = 'Welcome to test Gaetano Sabino';
  title_button = 'Cercare User';
  title_button_user = 'Creare User';
  link_searc = '/search-users';
  link_create = '/view-edit-user';

  constructor(
    readonly title: Title
  ) {
    this.title.setTitle('Welcome page');
  }

  ngOnInit(): void {
  }

}
