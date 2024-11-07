import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CorbanService } from '../../services/corban.service';

@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login-client.component.html',
  styleUrl: './login-client.component.scss'
})
export class LoginClientComponent {


constructor(private _corbanService:CorbanService){}

  usuarioNome = new FormControl();
  usuarioSenha = new FormControl();

  printandoUser(){
    console.log(this.usuarioNome.value)
    console.log(this.usuarioSenha.value)

    if(this.usuarioNome.value == 'daniel-silvasales@hotmail.com' && this.usuarioSenha.value == 'DanielTesteCorban360'){
      //console.log('Pegando Token')
      
      this._corbanService.getToken().subscribe(
        result => {
          if(result){
            localStorage.setItem('token', result.token);
            //console.log(`Token: ${localStorage.getItem('token')}`)
            console.log('Token Pego')
          }

        }
      )
      
      
    }
  }

  gettingToken(){
    let usuarioNomeT:string = this.usuarioNome.value.toString().trim()
    let usuarioSenhaT:string = this.usuarioSenha.value.toString().trim()

    this._corbanService.getToken2(usuarioNomeT, usuarioSenhaT).subscribe(
      data => {
        if(data){
          localStorage.setItem('token', data.token);
        }
      }
    )
  }

}
