import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuariosPage implements OnInit {

  alertButtons = ['Action'];


  constructor( private router: Router ) { }

  ngOnInit() {
  }


  addUsuarios(){
    this.router.navigate(['add-usuarios'])
  }

  

}
