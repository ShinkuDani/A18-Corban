import { Component, OnInit, Inject, NgModule, numberAttribute } from '@angular/core';
import { clienteLiteInterface, addresses, bankAccounts, benefits, document, email, phone} from '../../interfaces/clienteLite';
import { CorbanService } from '../../services/corban.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';

//Parents
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogParentsNames.html',
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
export class DetailDialogParentsNames {

  constructor(
    public dialogRef: MatDialogRef<DetailDialogParentsNames>,
    @Inject(MAT_DIALOG_DATA) public data: clienteLiteInterface,
  ) {}


  onNoClick(): void {
    console.log(this.data)
    this.dialogRef.close();
  }
}

//Note
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogNote.html',
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
export class DetailDialogNote {

  constructor(
    public dialogRef: MatDialogRef<DetailDialogNote>,
    @Inject(MAT_DIALOG_DATA) public data: clienteLiteInterface,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

//Phone
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogPhone.html',
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
export class DetailDialogPhone {

  constructor(
    public dialogRef: MatDialogRef<DetailDialogPhone>,
    @Inject(MAT_DIALOG_DATA) public data: {name:string, ddd: number, number: number},
  ) {}

  /*
  phoneT: phone = {
    ddd: 0,
    number: 0,
    note: ''
  }
 */

  onNoClick(): any {
    this.dialogRef.close();
  }
}

//Email
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogEmail.html',
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
export class DetailDialogEmail {

  constructor(
    public dialogRef: MatDialogRef<DetailDialogEmail>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name: string,
      email:string, 
      note:string},
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}


//Addresses
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogAddresses.html',
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
export class DetailDialogAddress {

  constructor(
    public dialogRef: MatDialogRef<DetailDialogAddress>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name: string,
      street: string,
      number: string,
      district: string,
      city: string,
      state:string,
      cep:string },
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

//Document
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogDocument.html',
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
export class DetailDialogDocument {

  constructor(
    public dialogRef: MatDialogRef<DetailDialogDocument>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name:string,
      documentType:string,
      documentNumber:string,
      documentCategory:string,
      documentIssuingData:string,
      documentIssuingEntity:string,
      documentIssuingState:string

    },
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

//Contas Bancarias
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogBankAccount.html',
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
export class DetaildialogBankAccount {

  constructor(
    public dialogRef: MatDialogRef<DetaildialogBankAccount>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name:string,
      bankTypeCode:number, 
      bankCode:string, 
      bankName:string, 
      accountNumber:string
    },
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

//Benefits
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogTemplates/detailDialogBenefits.html',
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
export class DetaildialogBenefits {

  constructor(
    public dialogRef: MatDialogRef<DetaildialogBenefits>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name:string,
      benefitsTypeCode:number, 
      benefitNumber:string, 
      benefitCode:string, 
      benefitValue:number,
      benefitNetValue:number,
      benefitIssueDate:string
    },
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-detailed-client',
  standalone: true,
  imports: [MatToolbarModule,
             RouterModule, 
             MatButtonModule,
             MatFormFieldModule,
             FormsModule,
             ReactiveFormsModule,
             ],
  templateUrl: './detailed-client.component.html',
  styleUrl: './detailed-client.component.scss'
})
export class DetailedClientComponent {

// Objetos Vazios
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

  clienteDetailed: clienteLiteInterface = {
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
  }

  constructor(public dialog: MatDialog, private _corbanService:CorbanService,private _router: ActivatedRoute){
    let idCustomer = this._router.snapshot.paramMap.get('id');  
    this.getClient(idCustomer);
  }
  
  old:boolean = false;

  //Services
  async getClient(id:any){
    this._corbanService.getCustomer(id).subscribe(
      data =>{
        this.clienteDetailed = data;
      }
    )
  }

  putClient(){
    this._corbanService.putCustomer(this.clienteDetailed.customerId as string, this.clienteDetailed).subscribe(
      data => {
        if(data){
          //this._toastr.success('Usuário Alterado com Sucesso', 'Put')
          this.clienteDetailed = data
        }
      }
    )
  }



  styleChange(){
    if(this.old == true){
      this.old = false;
    } else {
      this.old = true;
    }
  }

  //Classes de dos Dialogs
  openParentsDialog(){
    const dialogRef = this.dialog.open(DetailDialogParentsNames, {
      data: {motherName: this.clienteDetailed.motherName, fatherName: this.clienteDetailed.fatherName, name: this.clienteDetailed.name}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clienteDetailed.name = result.name
      this.clienteDetailed.motherName = result.motherName
      this.clienteDetailed.fatherName = result.fatherName
    });
  }

  openNoteDialog(){
    const dialogRef = this.dialog.open(DetailDialogNote, {
      data: {name: this.clienteDetailed.name, note: this.clienteDetailed.note},

    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clienteDetailed.note = result;
      this.putClient()
    });
  }

  //Precisa implementar um For no HTML para demonstrar todos os phones, e declarar 
  //um objeto  por fora para adicionar o mesmo aos phones caso precise.
  openPhoneDialog(){
    const dialogRef = this.dialog.open(DetailDialogPhone, {
      data: {name: this.clienteDetailed.name, ddd: this.phoneN.ddd, phoneNumber: this.phoneN.number }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.phoneN.ddd = result.ddd
      this.phoneN.number = result.number 
      this.clienteDetailed.phones.push(this.phoneN)
      this.putClient()
    });
  }

  //Mesma coisa de Cima
  openEmailDialog(){
    const dialogRef = this.dialog.open(DetailDialogEmail, {
      data: {name: this.clienteDetailed.name,
         email: this.emailN.email, 
         note: this.emailN.note},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.emailN.email = result.email
      this.emailN.note = result.note
      this.clienteDetailed.emails.push(this.emailN)
      this.putClient()
    });
  }

   //Mesma coisa de Cima
   openAddressesDialog(){
    const dialogRef = this.dialog.open(DetailDialogAddress, {
      data: {name: this.clienteDetailed.name, 
        street: this.addressN.street, 
        number: this.addressN.number,
        district: this.addressN.district,
        city: this.addressN.city,
        state: this.addressN.state,
        cep: this.addressN.zipCode},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addressN.street = result.street,
      this.addressN.number = result.number,
      this.addressN.district = result.district
      this.addressN.city = result.city
      this.addressN.state = result.state
      this.addressN.zipCode = result.cep
      this.clienteDetailed.addresses.push(this.addressN)
      this.putClient()
    });
  }

  //Mesma coisa do de cima.
  openDocumentDialog(){
    const dialogRef = this.dialog.open(DetailDialogDocument, {
      data: {
        name:this.clienteDetailed.name, 
        documentType: this.documentN.typeCode,
        documentCategory: this.documentN.category,
        documentNumber: this.documentN.number, 
        documentIssuingData: this.documentN.issuingDate,
        documentIssuingEntity: this.documentN.issuingEntity, 
        documentIssuingState: this.documentN.issuingState
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.documentN.typeCode = result.documentType
      this.documentN.number = result.documentNumber
      this.documentN.category = result.documentCategory
      this.documentN.issuingDate = result.documentIssuingData
      this.documentN.issuingEntity = result.documentIssuingEntity
      this.documentN.issuingState = result.documentIssuingState
      this.clienteDetailed.documents.push(this.documentN)
      this.putClient()
    });
  }

  //Mesma coisa do de cima.
  openBankAccountDialog(){
    const dialogRef = this.dialog.open(DetaildialogBankAccount, {
      data: {
        name:this.clienteDetailed.name, 
        bankTypeCode: this.bankAccountN.typeCode,
        bankCode: this.bankAccountN.bankCode, 
        bankName: this.bankAccountN.bankName,
        accountNumber: this.bankAccountN.accountNumber
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bankAccountN.typeCode = result.bankTypeCode
      this.bankAccountN.bankCode = result.bankCode
      this.bankAccountN.bankName = result.bankName
      this.bankAccountN.accountNumber = result.accountNumber
      this.clienteDetailed.bankAccounts.push(this.bankAccountN)
      this.putClient()
    });
  }


  openBenefitsDialog(){
    const dialogRef = this.dialog.open(DetaildialogBenefits, {
      data: {
        name:this.clienteDetailed.name, 
        benefitsTypeCode: this.benefitN.typeCode,
        benefitNumber: this.benefitN.number,
        benefitCode: this.benefitN.code,
        benefitValue: this.benefitN.value, 
        benefitNetValue: this.benefitN.netValue,
        benefitIssueDate: this.benefitN.issuingDate,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.benefitN.typeCode = result.benefitsTypeCode
      this.benefitN.number = result.benefitNumber
      this.benefitN.code = result.benefitCode
      this.benefitN.value = result.benefitValue
      this.benefitN.netValue = result.benefitNetValue
      this.benefitN.issuingDate = result.benefitIssueDate
      this.clienteDetailed.benefits.push(this.benefitN)
      this.putClient()
      
    });
  }
     


}
