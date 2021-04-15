import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SearchUserService} from './services/search-user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.sass']
})
export class SearchUsersComponent implements OnInit {
  filtro_title = 'Filtro Ricerca User';




  constructor(
    readonly title: Title,
  ) {
    this.title.setTitle('Ricerca User');
  }

  ngOnInit(): void {

  }



}
