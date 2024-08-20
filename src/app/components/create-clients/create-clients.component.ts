import { Component, Input, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule, ActivatedRoute } from '@angular/router'
import { CorbanService } from '../../services/corban.service';
import { addresses, bankAccounts, benefits, clienteLiteInterface, document, email, phone } from '../../interfaces/clienteLite';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    ReactiveFormsModule,
    MatToolbarModule
  ],
  templateUrl: './create-clients.component.html',
  styleUrl: './create-clients.component.scss'
})
export class CreateClientsComponent implements OnInit{

ngOnInit(): void {
  let idCustomer = this._router.snapshot.paramMap.get('id');  
  if(idCustomer == null){
    console.log('Cliente Novo') 
  } else {
    console.log(idCustomer)
    this.getClient(idCustomer)
  }
}

  constructor(private _corbanService:CorbanService, private _toastr:ToastrService, private _router: ActivatedRoute){
  }


  phone: phone = {
    ddd: undefined,
    number: undefined,
    note: undefined
  }

  address: addresses = {
    street: undefined,
    number: undefined,
    complement: undefined,
    district: undefined,
    city: undefined,
    state: undefined,
    zipCode: undefined,
    note: undefined
  }

  email: email = {
    email: undefined,
    note: undefined
  }

  document: document = {
    documentId: undefined,
    typeCode: undefined,
    number: undefined,
    category: undefined,
    issuingDate: undefined,
    expirationDate: undefined,
    issuingEntity: undefined,
    issuingState: undefined,
    issuingCountry: undefined,
    securityCode: undefined,
    statusCode: undefined,
    statusNote: undefined,
    files: undefined
  }

  bankAccount: bankAccounts = {
    bankAccountId: undefined,
    description: undefined,
    typeCode: undefined,
    statusCode: undefined,
    statusNote: undefined,
    bankCode: undefined,
    bankName: undefined,
    branchCode: undefined,
    accountNumber: undefined,
    personTypeCode: undefined,
    countryIdentity: undefined,
    holderName: undefined,
    startDate: undefined,
    note: undefined
  }

  benefit: benefits = {
    benefitId: undefined,
    typeCode: undefined,
    number: undefined,
    code: undefined,
    description: undefined,
    value: undefined,
    netValue: undefined,
    marginValue: undefined,
    issuingDate: undefined,
    startDate: undefined,
    loanEligible: false,
    issuingState: undefined,
    issuingCountry: undefined,
    securityCode: undefined,
    statusCode: undefined,
    statusNote: undefined,
    paymentMethodCode: undefined,
    paymentMethodName: undefined,
    note: undefined
  }

  clienteLite: clienteLiteInterface = {
    accountCode: undefined,
    customerId: undefined,
    name: undefined,
    nickname: undefined,
    birthDate: undefined,
    motherName: undefined,
    fatherName: undefined,
    nationality: undefined,
    naturalnessState: undefined,
    naturalness: undefined,
    note: undefined,
    addresses: [],
    phones: [],
    emails: [],
    document: [],
    bankAccounts: [],
    benefits: []
  }

  
  getClient(id:string){
    this._corbanService.getCustomer(id).subscribe(
      data => {
        if(data){
          this._toastr.success('Usuário Pego', 'Get')
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
        //console.log('Data: ' + JSON.stringify(data))
        }
      }
    )
    
  }

  putClient(){
    this.arraysInsert();
    this._corbanService.putCustomer(this.clienteLite.customerId as string, this.clienteLite).subscribe(
      data => {
        if(data){
          this._toastr.success('Usuário Alterado com Sucesso', 'Altered')
          this.clienteLite = data
        }
      }
    )
  }
  
  arraysInsert(){
    this.clienteLite.addresses.push(this.address)
    this.clienteLite.emails.push(this.email)
    this.clienteLite.phones.push(this.phone)
  }
    

}
