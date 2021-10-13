import { Component, OnInit } from '@angular/core';
import { Usuario } from './../data/usuario';
import { UsuariosService } from './../usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarioList:Usuario[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioList = this.usuariosService.getUsuarios();
  }

}
