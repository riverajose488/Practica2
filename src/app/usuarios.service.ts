import { Injectable } from '@angular/core';
import { Usuario } from './data/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[];

  constructor() {
    this.usuarios = [];
  }

  getUsuarios() {
    return this.usuarios;
  }

  setNewUsuario(newUsuario: Usuario): boolean {
    let usuariosResult = this.usuarios.filter(x => x.identifier == newUsuario.identifier);
    let usuarioExist = usuariosResult.length == 0;

    if (usuarioExist) {
      this.usuarios.push(newUsuario);
    }

    return usuarioExist;
  }

  searchUsuario(usuarioIdentifier: String): boolean {
    let usuariosResult = this.usuarios.filter(x => x.identifier == usuarioIdentifier);
    let usuarioExist = usuariosResult.length == 1;
    
    return usuarioExist;
  }

  findOneUsuario(usuarioIdentifier: String):Usuario{
    let usuario = this.usuarios.find(x => x.identifier == usuarioIdentifier);
    return usuario;
  }
}
