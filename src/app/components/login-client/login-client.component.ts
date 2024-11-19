import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CorbanService } from '../../services/corban.service';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [
    MatToolbarModule,
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


constructor(private _corbanService:CorbanService, private _router: Router){}

  usuarioNome = new FormControl();
  usuarioSenha = new FormControl();

  gettingToken(){
    this._corbanService.getToken2(this.usuarioNome.value, this.usuarioSenha.value).subscribe(
      data => {
        if(data){
          localStorage.setItem('token', data.token);
          console.log('Login Realizado com Sucesso');
          this._router.navigate(['/listaClientes']);
        }else{
          window.alert('Não foi possivel Fazer Login')
          alert('Não foi possivel Fazer Login')
          console.log('Não foi possivel fazer o Login')
          this.usuarioSenha.reset()
        }
      }
    )
  }

}
