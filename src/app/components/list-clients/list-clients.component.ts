import { Component, inject } from '@angular/core';
import { CorbanService } from '../../services/corban.service';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})

// interface TokenResult {
//   expires: string;
//   token: string;
//   userName: string;
// };

export class ListClientsComponent {
  corbanService = inject(CorbanService)

  customers: Array<any> = new Array<any>();

  getToken(){
    this.corbanService.getToken().subscribe(result => {
      if (result)
        localStorage.setItem('token', result.token);
    })
  }

  getClients(){
    console.log('Botão Funcionando')
    this.corbanService.getCustomers2().subscribe(
      data => {
        if (data) {
          console.log(data)
          this.customers = data.items;
        }
      }
    )
  }

  getClients2(){
    console.log('Botão Funcionando')
    this.corbanService.getCustomers2().subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
