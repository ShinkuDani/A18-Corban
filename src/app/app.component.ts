import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorbanService } from './services/corban.service';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,

   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';

  
constructor(private _corbanService:CorbanService, private _router: Router){}

continuar:boolean = false;
usuarioNome = new FormControl('daniel-silvasales@hotmail.com');
usuarioSenha = new FormControl('DanielTesteCorban360');

gettingToken(){
  this._corbanService.getToken2(this.usuarioNome.value ?? '', this.usuarioSenha.value ?? '').subscribe(
    data => {
      if(data){
        localStorage.setItem('token', data.token);
        console.log('Login Realizado com Sucesso');
        this.continuar = true;
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

logOff(){
  this.continuar = false;
  this._router.navigate(['']);
}

}
