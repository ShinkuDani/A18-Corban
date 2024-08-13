import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CorbanService } from '../../services/corban.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule }from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule
  ],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})

export class ListClientsComponent {
  
  constructor(private _corbanService : CorbanService){

  }

  customers: Array<any> = new Array<any>();
  customer: any = {};

  idCustomer = new FormControl('');

  getToken(){
    this._corbanService.getToken().subscribe(result => {
      if (result)
        localStorage.setItem('token', result.token);
    })
  }

  getClients(){
    this._corbanService.getCustomers().subscribe(
      data => {
        if (data) {
          console.log(data)
          this.customers = data.items;
        }
      }
    )
  }

  getClient(id:any){ 
    this._corbanService.getCustomer(id).subscribe(
      data => {
        if (data) {
          console.log(data)
          this.customer = data;
        }
      }
    )
  }

  
}
