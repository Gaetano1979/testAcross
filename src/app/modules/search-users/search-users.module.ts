import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchUsersRoutingModule } from './search-users-routing.module';
import { SearchUsersComponent } from './search-users.component';
import { FiltroRicercaComponent } from './components/filtro-ricerca/filtro-ricerca.component';
import { ListaUsersComponent } from './components/lista-users/lista-users.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [SearchUsersComponent, FiltroRicercaComponent, ListaUsersComponent],
    imports: [
        CommonModule,
        SearchUsersRoutingModule,
        ReactiveFormsModule,
      HttpClientModule
    ]
})
export class SearchUsersModule { }
