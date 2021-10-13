import { Component, OnInit } from '@angular/core';
import { Usuario } from './../data/usuario';
import { UsuariosService } from './../usuarios.service';


@Component({
  selector: 'app-usuarios-registrados',
  templateUrl: './usuarios-registrados.component.html',
  styleUrls: ['./usuarios-registrados.component.css']
})
export class UsuariosRegistradosComponent implements OnInit {

  usuario:Usuario;
  usuariosSize:Number;

  constructor(private usuariosService: UsuariosService)  {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuariosSize = this.usuariosService.getUsuarios().length;
  }

  saveNewUsuario() {
    let createdNewUsuario:boolean = this.usuariosService.setNewUsuario(this.usuario);

    if (createdNewUsuario) {
      this.usuario = new Usuario();
      this.usuariosSize = this.usuariosService.getUsuarios().length;
    } else {
      alert("El Usuario ingresado ya existe. Intente de nuevo.");
    }
  }
}