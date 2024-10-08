import { Component, Inject, OnInit } from '@angular/core';
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
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'createClientDialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class CreateClientDialog {

  constructor(
    public dialogRef: MatDialogRef<CreateClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {
      //Client Basic Info
      costumerId:number, accountCode:string, 
      nickName:string, name:string,
      birthDay:string, email:string,
      phone:number, note:string
      //Adress Info
      zipCode:number, street:string,
      number:number, complement:string,
      district:string, city:string,
      state:string, motherName:string,
      fatherName:string, naturalness:string,
      naturalnessState:string, nationality:string,
      //Document Info
      documentTypeCode:string, documentNumber:string,
      documentIssuingDate:string, documentExpirationDate:string,
      documentIssuingEntity:string, 
      //Bank Account
      bankAccountTypeCode:string, bankName:string,
      bankCode:string, bankAccountId:number,
      accountNumber:string, 
      //Benefits
      benefitTypeCode:number,benefitNumber:string,
      benefitCode:string, benefitDescription:string,
      benefitValue:string, benefitNetValue:string,
      benefitIssuingDate:string, benefitStartDate:string
    },
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

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
