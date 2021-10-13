import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosRegistradosComponent } from './usuarios-registrados/usuarios-registrados.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { LoginComponent } from './login/login.component';
import { HolaComponent } from './hola/hola.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosRegistradosComponent,
    UsuariosListaComponent,
    LoginComponent,
    HolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
