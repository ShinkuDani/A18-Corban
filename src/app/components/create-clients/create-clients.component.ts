import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router'
import { CorbanService } from '../../services/corban.service';
import { addresses, bankAccounts, benefits, clienteLiteInterface, document, email, phone } from '../../interfaces/clienteLite';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-clients',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule,
    RouterModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-clients.component.html',
  styleUrl: './create-clients.component.scss'
})
export class CreateClientsComponent {


  constructor(private _corbanService:CorbanService, private _toastr:ToastrService){
  }

  idCustomer = new FormControl('');

  phone: phone = {
    ddd: 0,
    number: 0,
    note: ''
  }

  address: addresses = {
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    zipCode: '',
    note: ''
  }

  email: email = {
    email: '',
    note: ''
  }

  document: document = {
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

  bankAccount: bankAccounts = {
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

  benefit: benefits = {
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

  clienteLite: clienteLiteInterface = {
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
    phones: [],
    emails: [],
    document: [],
    bankAccounts: [],
    benefits: []
  }
  
  getClient(id:any){
    this._corbanService.getCustomer(id.value).subscribe(
      data => {
        if(data){
          debugger
          this._toastr.success('Usuários pegos', 'Get')
          this.clienteLite = data
          console.log(data)
        }
      }
    )
  }
  
  submitForm(){
    this._corbanService.postCustomer(this.clienteLite).subscribe(
      data => {
        if(data){
          this._toastr.success('Usuário Criado com Sucesso', 'Created')
        this.clienteLite = data
        console.log('Data: ' + JSON.stringify(data))
        }
      }
    )
    
  }

  putClient(){
    this.arraysInsert();
    this._corbanService.putCustomer(this.clienteLite.customerId, this.clienteLite).subscribe(
      data => {
        if(data){
          this._toastr.success('Usuário Alterado com Sucesso', 'Altered')
          this.clienteLite = data
          console.log(data)
        }
      }
    )
  }

  deleteClient(id:any){
    let clienteLite2:clienteLiteInterface;
    this._corbanService.deleteCustomer(id).subscribe(
      data => {
        debugger
        this._toastr.warning('Usuário Deletado com Sucesso', 'Deleted')
        this.clienteLite = clienteLite2;
      }
    )
  }

  
  arraysInsert(){
    this.clienteLite.addresses.push(this.address)
    this.clienteLite.emails.push(this.email)
    this.clienteLite.phones.push(this.phone)
  }
    

}
