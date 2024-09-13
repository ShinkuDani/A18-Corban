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
import { clienteLiteInterface } from '../../interfaces/clienteLite';

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

export class ListClientsComponent {

  showFiller = true;

  constructor(private _corbanService : CorbanService, private _toastr:ToastrService){
    this.getClients()
  }

  

  //customers: Array<any> = new Array<any>();
  customers: clienteLiteInterface[] = [{
    accountCode: undefined,
    customerId: undefined,
    name: undefined,
    nickname: '',
    birthDate: undefined,
    motherName: undefined,
    fatherName: undefined,
    nationality: undefined,
    naturalnessState: undefined,
    naturalness: undefined,
    note: undefined,
    addresses: [],
    emails: [],
    phones: [],
    documents: [],
    bankAccounts: [],
    benefits: []
  }]
  customer: any = {};

  searchInput = new FormControl();
  searchCustomers = new Array();
  searchCustomers2 = '';


  displayedColumns: string[] = ['Codigo', 'Nome', 'NickName' ,'CustomerID', 'Delete', 'CustomerAlter', 'CustomerDetails'];
  
  dataSource = this.customers;

   getToken(){
    this._corbanService.getToken().subscribe(result => {
      if (result)
        //this._toastr.success('Token Salvo')
        localStorage.setItem('token', result.token);
    })
  }

  async getClients(){
    this.getToken()
    this._corbanService.getCustomers().subscribe(
      data => {
        if (data) {
          //this._toastr.success('Usuários pegos');
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

  searchFilter(){
    //debugger
    let searchCustomers3: any[] = []
    for( let c = 0; c < this.customers.length; c++){
        searchCustomers3 = this.customers.filter(customer => customer.nickname?.toLowerCase().includes(this.searchInput.value.toLowerCase()))
        //this.searchCustomers = this.customers[c].name.filter((name:any) => name.toLowerCase() == this.searchInput.value?.toLocaleLowerCase()) 
        //console.log("Nome: " + this.searchCustomers)
      }
      console.log(searchCustomers3)
  }
}
