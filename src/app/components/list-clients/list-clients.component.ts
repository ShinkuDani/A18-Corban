import { Component, inject } from '@angular/core';
import { CorbanService } from '../../services/corban.service';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})
export class ListClientsComponent {

  corbanService = inject(CorbanService)

  getClients(){
    console.log('Botão Funcionando')
    this.corbanService.getCustomers2().subscribe(
      data => {
        console.log(data)
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
