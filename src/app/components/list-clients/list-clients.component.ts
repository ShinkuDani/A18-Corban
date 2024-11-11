import { Component, Inject } from '@angular/core';
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
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { clienteLiteInterface } from '../../interfaces/clienteLite';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'createClientDialog.html',
  styleUrl: './createClientDialog.css',
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
      clienteDialog:clienteLiteInterface,
      
    },
  ) { }

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
    addresses: [{
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      zipCode: '',
      note: ''
    }],
    emails: [{
      email: '',
      note: ''
    }],
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
  displayedColumns: string[] = ['Servico','Codigo', 'Nome', 'Associação','Cadastro' ];
  dataSource = this.customers;
  dataSource2 = this.searchCustomers;

  getClients(){
    this._corbanService.getCustomers().subscribe(
      data => {
        if (data) {
          this.customers = data.items as clienteLiteInterface[];
          console.log(this.customers);
          this.dataSource = data.items
        }
      }
    )
        
    }


  deleteClient(id:any){
    this._corbanService.deleteCustomer(id).subscribe(
      data => {
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
    this.searchInput.reset();

  }

  postCustomer(customer:clienteLiteInterface){
      this._corbanService.postCustomer(customer).subscribe(
        data => {
          if(data){
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
      addresses: [
        {
          street: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: '',
          zipCode: '',
          note: ''
        }
      ],
      emails: [
        {
        email: '',
        note: ''
      }
    ],
      phones: [
        {
        ddd: 0,
        number: 0,
        note: ''
      }
    ],
      documents: [
        {
          documentId: '',
          typeCode: 0,
          number: '',
          category: '',
          issuingDate: '',
          expirationDate: '',
          issuingEntity: '',
          issuingState: '',
          issuingCountry: '',
          securityCode: '',
          statusCode: 0,
          statusNote: '',
          files: 0
        }
      ],
      bankAccounts: [
        {
          bankAccountId: '',
          description: '',
          typeCode: 0,
          statusCode: 0,
          statusNote: '',
          bankCode: '',
          bankName: '',
          branchCode: '',
          accountNumber: '',
          personTypeCode: 0,
          countryIdentity: '',
          holderName: '',
          startDate: '',
          note: ''
        }
      ],
      benefits: [
        {
          benefitId: '',
          typeCode: 0,
          number: '',
          code: '',
          description: '',
          value: 0,
          netValue: 0,
          marginValue: 0,
          issuingDate: '',
          startDate: '',
          loanEligible: false,
          issuingState: '',
          issuingCountry: '',
          securityCode: '',
          statusCode: 0,
          statusNote: '',
          paymentMethodCode: 0,
          paymentMethodName: '',
          note: ''
        }
      ]
    };
    const dialogRef = this.dialog.open(CreateClientDialog, {
      data: {

        clienteDialog: newCustomer
       }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(newCustomer)
      if(newCustomer.name && newCustomer.nickname != ""){
        this.customers.push(newCustomer)
        console.log(this.customers[this.customers.length - 1])
        this.postCustomer(this.customers[this.customers.length - 1])
      }else{
        console.log("Usuário não Criado")
      }

    });
  }
}
