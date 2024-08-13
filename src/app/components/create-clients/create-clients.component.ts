import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router'
import { clienteInterface } from '../../interfaces/cliente';
import { CorbanService } from '../../services/corban.service';
import { addresses, clienteLiteInterface, email, phone } from '../../interfaces/clienteLite';
import { MatButtonModule } from '@angular/material/button';

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


  constructor(private _corbanService:CorbanService){

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

  cliente: clienteInterface = {
    accountCode: '',
    customerId: '',
    parentTypeCode: 0,
    parentId: '',
    parentCode: 0,
    parentName: '',
    typeCode: 0,
    typeName: '',
    name: '',
    nickname: '',
    displayValue: '',
    birthDate: '',
    personTypeCode: 0,
    personTypeName: '',
    countryIdentity: '',
    sexTypeCode: 0,
    sexTypeName: '',
    maritalStatusCode: 0,
    maritalStatusName: '',
    weddingDate: '',
    spouseCountryIdentity: '',
    spouseName: '',
    motherName: '',
    fatherName: '',
    educationLevelCode: 0,
    educationLevelName: '',
    homeConditionCode: 0,
    homeConditionName: '',
    homeOccupationDate: '',
    naturalness: '',
    naturalnessState: '',
    nationality: '',
    countryOrigin: '',
    profession: '',
    role: '',
    admissionDate: '',
    grossIncome: 0,
    netIncome: 0,
    otherIncome: 0,
    equityValue: 0,
    paymentDay: 0,
    monthlyBilling: 0,
    annualBilling: 0,
    externalCode: '',
    addresses:{
      typeCode: 0,
      typeName: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      zipCode: '',
      note: '',
      statusCode: 0,
      statusName: ''
    } ,
    phones: {
      typeCode: 0,
      typeName: '',
      countryCode: 0,
      ddd: 0,
      number: 0,
      note: '',
      statusCode: 0,
      statusName: '',
      statusDate: '',
      statusColor: '',
      statusNote: '',
      primaryPhone: false
    },
    emails: {
      typeCode: 0,
      email: '',
      note: '',
      statusCode: 0
    },
    sites: {
      typeCode: 0,
      typeName: '',
      url: '',
      note: ''
    },
    documents: {
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
    },
    bankAccounts: {
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
    },
    benefits: {
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
    },
    fields: {
      key: '',
      label: '',
      dataType: '',
      value: '',
      values: []
    },
    statusCode: 0,
    statusName: '',
    statusDate: '',
    statusColor: '',
    statusNote: '',
    alertCode: 0,
    alertName: '',
    alertDate: '',
    alertColor: '',
    alertNote: '',
    storeId: '',
    brokerId: '',
    campaignId: '',
    originTypeCode: 0,
    originCode: 0,
    inputTypeCode: 0,
    tags: {
      id: '',
      code: 0,
      name: '',
      color: '',
      note: ''
    },
    properties: {
      id: '',
      type: '',
      key: '',
      label: '',
      value: '',
      values: [],
      display: '',
      dataType: '',
      properties: []
    },
    score: '',
    leadId: '',
    importId: '',
    note: '',
    draft: false,
    event: {code:0, name:''}
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
    addresses: [] ,
    phones: [],
    emails: [],
    note: '',
  }
  
  getClient(id:any){
    this._corbanService.getCustomer(id).subscribe(
      data => {
        this.cliente = data
        this.clienteLite = data
        console.log(data)
      }
    )
  }
  
  submitForm(){
    this._corbanService.postCustomer(this.clienteLite).subscribe(
      data => {
        debugger
        this.cliente = data
        this.clienteLite = data
        console.log('Data: ' + JSON.stringify(data))
      }
    )
    
  }

  putClient(){
    this.arraysInsert();
    this._corbanService.putCustomer(this.cliente.customerId, this.clienteLite).subscribe(
      data => {
        debugger
        this.cliente = data
        this.clienteLite = data
        console.log(data)
      }
    )
  }

  putClientArray() {
    this.arraysInsert();
    this._corbanService.putCustomer2(this.cliente.customerId, this.clienteLite).subscribe(
      data => {
        debugger
        this.cliente = data
        this.clienteLite = data
        console.log(data)
      }
    )

  }

  deleteClient(){
    this._corbanService.deleteCustomer(this.cliente.customerId).subscribe(
      data => {
        debugger
        console.log('Usuário Apagado')
      }
    )
  }

  
  arraysInsert(){
    this.clienteLite.addresses.push(this.address)
    this.clienteLite.emails.push(this.email)
    this.clienteLite.phones.push(this.phone)
  }
    

}
