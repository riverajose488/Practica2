import { Component, OnInit } from '@angular/core';
import { Usuario } from '../data/usuario';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  usuario: Usuario;
  usuariosSize: Number;

  constructor(private usuariosService: UsuariosService, private router:Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuario.identifier = this.activatedRoute.snapshot.params["identifier"];
    this.usuario = this.usuariosService.findOneUsuario(this.usuario.identifier);
  }

  exitUsuario(){
    this.router.navigate(["/"]);
  }

}
