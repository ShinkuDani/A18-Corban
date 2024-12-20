import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
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
    MatToolbarModule,
    MatIconModule
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

  phoneN: phone = {
    ddd:0,
    number:0,
    note:''
  }

  emailN: email = {
    email: '',
    note: ''
  }

  addressN: addresses = {
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    zipCode: '',
    note: ''
  }

  documentN: document = {
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

  bankAccountN: bankAccounts = {
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

  benefitN: benefits = {
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
    addresses: [
        this.addressN
    ],
    phones: [
        this.phoneN
    ],
    emails: [
      this.emailN
    ],
    documents: [
      this.documentN
    ],
    bankAccounts: [
      this.bankAccountN
    ],
    benefits: [
      this.benefitN
    ]
  }

  
  
  //Create Cliente
  submitForm(){
    if(this.clienteLite.customerId){
      this.putClient()
    } else {
      this._corbanService.postCustomer(this.clienteLite).subscribe(
        data => {
          if(data){
            //this._toastr.success('Usuário Criado com Sucesso', 'Post')
            this.clienteLite = data
          }
        }
      )
    }
  }

  //Get Cliente
  getClient(id:string){
    this._corbanService.getCustomer(id).subscribe(
      data => {
        if(data){
         // this._toastr.success('Usuário Pego', 'Get')
          this.clienteLite = data
          console.log(this.clienteLite)
        } 
      }
    )
  }

  //Alter Cliente
  putClient(){
    debugger
    this.addFilds()
    this._corbanService.putCustomer(this.clienteLite.customerId as string, this.clienteLite).subscribe(
      data => {
        if(data){
          //this._toastr.success('Usuário Alterado com Sucesso', 'Put')
          this.clienteLite = data
        }
      }
    )
  }
  
  removePhone(number: number){
    for(let x = 0; x < this.clienteLite.phones.length; x++ ){
      if(this.clienteLite.phones[x].number == number){
        this.clienteLite.phones.splice(x, 1)
      }
    }
  }

  removeEmail(email: string){
    for(let x = 0; x < this.clienteLite.emails.length; x++ ){
      if(this.clienteLite.emails[x].email == email){
        debugger
        this.clienteLite.emails.splice(x, 1)
      }
    }
  }

  removeDocument(documentidN: string){
    for(let x = 0; x < this.clienteLite.documents.length; x++ ){
      if(this.clienteLite.documents[x].documentId == documentidN){
        debugger
        this.clienteLite.documents.splice(x, 1)
      }
    }
  }

  removeBank(bankAccountIdN: string){
    for(let x = 0; x < this.clienteLite.bankAccounts.length; x++ ){
      if(this.clienteLite.bankAccounts[x].bankAccountId == bankAccountIdN){
        debugger
        this.clienteLite.bankAccounts.splice(x, 1)
      }
    }
  }

  addFilds(){
    debugger
    if(this.phoneN.ddd != 0 && this.phoneN.number != 0){
      this.clienteLite.phones.push(this.phoneN)
    }

    if(this.emailN.email != ''){
      this.clienteLite.emails.push(this.emailN)
    }

    if(this.addressN.zipCode != '' || this.addressN.street != ''){
      this.clienteLite.addresses.push(this.addressN)
    }

    if(this.documentN.number !='' && this.documentN.typeCode != 0){
      this.clienteLite.documents.push(this.documentN)
    }

    if(this.bankAccountN.accountNumber != '' && this.bankAccountN.typeCode != 0){
      this.clienteLite.bankAccounts.push(this.bankAccountN)
    }  

    if(this.benefitN.number != '' && this.benefitN.typeCode != 0 ){
      this.clienteLite.benefits.push(this.benefitN)
    }

  }
    

}
