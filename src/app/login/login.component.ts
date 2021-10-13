import { Component, OnInit } from '@angular/core';
import { Usuario } from '../data/usuario';
import { UsuariosService } from './../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;
  password:String;

  constructor(private usuariosService: UsuariosService, private router:Router) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  searchUsuario() {
    let createdNewUsuario:boolean = this.usuariosService.searchUsuario(this.usuario.identifier);


    if (createdNewUsuario) {
      alert("Usuario registrado");
      this.router.navigate(["/registro" ,this.usuario.identifier]);  
    } else {
      alert("Usuario no registrado.");
    }
  }
}
