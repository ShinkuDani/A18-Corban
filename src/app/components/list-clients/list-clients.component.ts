import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CorbanService } from '../../services/corban.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule }from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule
  ],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})

export class ListClientsComponent implements OnInit {

  showFiller = true;

  constructor(private _corbanService : CorbanService, private _toastr:ToastrService){
  }

  ngOnInit(): void {
    this.getToken()
    this.getClients()
  }

  customers: Array<any> = new Array<any>();
  customer: any = {};

  idCustomer = new FormControl('');

  displayedColumns: string[] = ['Codigo', 'Nome', 'NickName' ,'CustomerID', 'Delete', 'CustomerAlter', 'CustomerDetails'];
  
  dataSource = this.customers;

  getToken(){
    this._corbanService.getToken().subscribe(result => {
      if (result)
        //this._toastr.success('Token Salvo')
        localStorage.setItem('token', result.token);
    })
  }

  getClients(){
    this._corbanService.getCustomers().subscribe(
      data => {
        if (data) {
          //this._toastr.success('Usuários pegos')
          console.log(data)
          this.customers = data.items;
          console.log(this.dataSource);
          this.dataSource = data.items

        }
      }
    )
  }

  deleteClient(id:any){
    this._corbanService.deleteCustomer(id).subscribe(
      data => {
        //this._toastr.warning('Usuário Deletado', 'Delete')
        this.getClients()
      }
    )
  }

  
}
