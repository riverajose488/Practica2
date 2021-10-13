import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HolaComponent } from './hola/hola.component';
import { LoginComponent } from './login/login.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosRegistradosComponent } from './usuarios-registrados/usuarios-registrados.component';

const routes: Routes = [
  { path:'' , redirectTo:'login' , pathMatch:'full'},
  { path:'login' , component:LoginComponent},
  { path:'registro' , component:UsuariosRegistradosComponent},
  { path:'lista' , component:UsuariosListaComponent},
  { path:'hola' , component:HolaComponent}
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  providers:[],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
