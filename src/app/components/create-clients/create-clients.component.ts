import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  debugger
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
    addresses: [
        this.addressN
    ],
    phones: [
        this.phoneN
    ],
    emails: [
      this.emailN
    ],
    document: [
      this.documentN
    ],
    bankAccounts: [
      this.bankAccountN
    ],
    benefits: []
  }

  
  
  
  submitForm(){
    debugger
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

  getClient(id:string){
    debugger
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

  addFilds(){
    if(this.phoneN.ddd != 0 && this.phoneN.number != 0){
      this.clienteLite.phones.push(this.phoneN)
    }

    if(this.emailN.email != ''){
      this.clienteLite.emails.push(this.emailN)
    }

    if(this.addressN.zipCode != '' || this.addressN.street != ''){
      this.clienteLite.addresses.push(this.addressN)
    }

    if(this.documentN.number !=''){
      this.clienteLite.document.push(this.documentN)
    }

    if(this.bankAccountN.accountNumber != ''){
      this.clienteLite.bankAccounts.push(this.bankAccountN)
    }

    

    
    

    
    
  }
    

}
