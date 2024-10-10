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
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

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

  constructor(private _corbanService : CorbanService,public dialog: MatDialog,  private _toastr:ToastrService){
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

  postCustomer(customer:clienteLiteInterface){
      this._corbanService.postCustomer(customer).subscribe(
        data => {
          if(data){
            //this._toastr.success('Usuário Criado com Sucesso', 'Post')
            this.customers = data
          }
        }
      )
    }

  openCreateClientDialog(){
    let newCustomer: clienteLiteInterface = {
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
    };
    const dialogRef = this.dialog.open(CreateClientDialog, {
      data: {
        //Client Basic Info
      costumerId: newCustomer.customerId, accountCode:newCustomer.accountCode, 
      nickName:newCustomer.nickname, name:newCustomer.name,
      birthDay:newCustomer.birthDate, email:newCustomer.emails[newCustomer.emails.length + 1].email,
      phone:newCustomer.phones[newCustomer.phones.length + 1].number, note:newCustomer.note,
      //Adress Info
      zipCode:newCustomer.addresses[newCustomer.addresses.length + 1].zipCode, street:newCustomer.addresses[newCustomer.addresses.length + 1].street,
      number:newCustomer.addresses[newCustomer.addresses.length + 1].number, complement:newCustomer.addresses[newCustomer.addresses.length + 1].complement,
      district:newCustomer.addresses[newCustomer.addresses.length + 1].district, city:newCustomer.addresses[newCustomer.addresses.length + 1].city,
      state:newCustomer.addresses[newCustomer.addresses.length + 1].state, motherName:newCustomer.motherName,
      fatherName:newCustomer.fatherName, naturalness:newCustomer.naturalness,
      naturalnessState:newCustomer.naturalness, nationality:newCustomer.nationality,
      //Document Info
      documentTypeCode:newCustomer.documents[newCustomer.documents.length + 1].typeCode, documentNumber:newCustomer.documents[newCustomer.documents.length + 1].number,
      documentIssuingDate:newCustomer.documents[newCustomer.documents.length + 1].issuingDate, documentExpirationDate:newCustomer.documents[newCustomer.documents.length + 1].expirationDate,
      documentIssuingEntity:newCustomer.documents[newCustomer.documents.length + 1].issuingEntity, 
      //Bank Account
      bankAccountTypeCode:newCustomer.bankAccounts[newCustomer.bankAccounts.length + 1].typeCode, bankName:newCustomer.bankAccounts[newCustomer.bankAccounts.length + 1].bankName,
      bankCode:newCustomer.bankAccounts[newCustomer.bankAccounts.length + 1].bankCode, bankAccountId:newCustomer.bankAccounts[newCustomer.bankAccounts.length + 1].bankAccountId,
      accountNumber:newCustomer.bankAccounts[newCustomer.bankAccounts.length + 1].accountNumber, 
      //Benefits
      benefitTypeCode:newCustomer.benefits[newCustomer.benefits.length + 1].typeCode,benefitNumber:newCustomer.benefits[newCustomer.benefits.length + 1].number,
      benefitCode:newCustomer.benefits[newCustomer.benefits.length + 1].code, benefitDescription:newCustomer.benefits[newCustomer.benefits.length + 1].description,
      benefitValue:newCustomer.benefits[newCustomer.benefits.length + 1].value, benefitNetValue:newCustomer.benefits[newCustomer.benefits.length + 1].netValue,
      benefitIssuingDate:newCustomer.benefits[newCustomer.benefits.length + 1].issuingDate, benefitStartDate:newCustomer.benefits[newCustomer.benefits.length + 1].startDate
       }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.customers.push(newCustomer)
      this.postCustomer(newCustomer)
    });
  }
}
