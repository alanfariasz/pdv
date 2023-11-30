import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.page.html',
  styleUrls: ['./add-usuarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddUsuariosPage implements OnInit {

  constructor(private router:Router) { }
  id: string = ""
  nome: string = ""
  cpf: string = ""
  email: string = ""
  senha: string= ""
  nivel: string= ""

  ngOnInit() {
  }

  Usuarios() {
    this.router.navigate(['usuarios'])
  }

  cadastrar(){}

  editar(){}
}
