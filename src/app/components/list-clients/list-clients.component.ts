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
import {MatMenuModule} from '@angular/material/menu';
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
    MatMenuModule,
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
    accountCode: '',
    customerId: '',
    name: '',
    nickname: '',
    birthDate: '',
    motherName: '',
    fatherName: '',
    nationality: '',
    naturalnessState: '',
    naturalness: '',
    note: '',
    addresses: [],
    emails: [],
    phones: [],
    documents: [],
    bankAccounts: [],
    benefits: []
  }]

  searchCustomers: clienteLiteInterface[] = [{
    accountCode: '',
    customerId: '',
    name: '',
    nickname: '',
    birthDate: '',
    motherName: '',
    fatherName: '',
    nationality: '',
    naturalnessState: '',
    naturalness: '',
    note: '',
    addresses: [],
    emails: [],
    phones: [],
    documents: [],
    bankAccounts: [],
    benefits: []
  }]

  searchInput = new FormControl();


  displayedColumns: string[] = ['Servico','Codigo', 'Nome', 'NickName' ,'CustomerID', 'Delete', 'CustomerAlter', 'CustomerDetails'];
  
  
    dataSource = this.customers;
    dataSource2 = this.searchCustomers;

  

    getToken(){
    this._corbanService.getToken().subscribe(result => {
      if (result)
        //this._toastr.success('Token Salvo')
        localStorage.setItem('token', result.token);
    })
  }

  getClients(){
     this.getToken()
     this._corbanService.getCustomers().subscribe(
      data => {
        if (data) {
          //this._toastr.success('Usuários pegos');
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
    for( let c = 0; c < this.customers.length; c++){
        if(this.customers[c].nickname?.toLowerCase().includes(this.searchInput.value.toLowerCase()) || this.customers[c].name?.toLowerCase().includes(this.searchInput.value.toLowerCase()))
        this.searchCustomers = this.customers.filter(customer => 
          customer.nickname?.toLowerCase().includes(this.searchInput.value.toLowerCase()) 
          || customer.name?.toLowerCase().includes(this.searchInput.value.toLowerCase()) 
        )
        this.dataSource2 = this.searchCustomers;
      }
      console.log(this.searchCustomers)
  }

  clearFilter(){
    this.searchCustomers = []
  }
}
