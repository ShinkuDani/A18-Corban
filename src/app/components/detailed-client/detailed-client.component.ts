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

  phoneT: phone = {
    ddd: 0,
    number: 0,
    note: ''
  }


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
    @Inject(MAT_DIALOG_DATA) public data: {name: string, email:string, note:string},
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
    @Inject(MAT_DIALOG_DATA) public data: clienteLiteInterface,
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
      typeCode:number, 
      bankCode:string, 
      bankName:string, 
      bankAccountNumber:string
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
      benefitNumber:number, 
      benefitcode:number, 
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
export class DetailedClientComponent implements OnInit{

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

  ngOnInit(): void {
    //let idCustomer = this._router.snapshot.paramMap.get('id');  

  }

  constructor(public dialog: MatDialog, private _corbanService:CorbanService,private _router: ActivatedRoute){
    let idCustomer = this._router.snapshot.paramMap.get('id');  
    this.getClient(idCustomer);
  }
  
  old:boolean = false;

  async getClient(id:any){
    this._corbanService.getCustomer(id).subscribe(
      data =>{
        this.clienteDetailed = data;
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

  openParentsDialog(){
    const dialogRef = this.dialog.open(DetailDialogParentsNames, {
      data: {motherName: this.clienteDetailed.motherName, fatherName: this.clienteDetailed.fatherName, name: this.clienteDetailed.name}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clienteDetailed.name = result.name
      this.clienteDetailed.motherName = result.motherName
      this.clienteDetailed.fatherName = result.fatherName

      console.log(result)
    });
  }

  openNoteDialog(){
    const dialogRef = this.dialog.open(DetailDialogNote, {
      data: {name: this.clienteDetailed.name, note: this.clienteDetailed.note},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clienteDetailed.note = result;
      console.log(result)
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
    });
  }

  //Mesma coisa de Cima
  openEmailDialog(){
    const dialogRef = this.dialog.open(DetailDialogEmail, {
      data: {name: this.clienteDetailed.name, emails: this.emailN.email, note: this.emailN.note},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.emailN.email = result.email
      this.emailN.note = result.note
      this.clienteDetailed.emails.push(this.emailN)
    });
  }

  //Mesma coisa do de cima.
  openDocumentDialog(){
    const dialogRef = this.dialog.open(DetailDialogDocument, {
      data: {
        name:this.clienteDetailed.name, 
        documentType: this.documentN.typeCode,
        documentNumber: this.documentN.number, 
        documentIssuingData: this.documentN.issuingDate,
        documentIssuingEntity: this.documentN.issuingEntity, 
         documentIssuingState: this.documentN.issuingState
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.documentN.typeCode = result.documentType
      this.documentN.number = result.number
      this.documentN.issuingDate = result.issuingDate
      this.documentN.issuingEntity = result.issuingEntity
      this.documentN.issuingState = result.issuingState
      this.clienteDetailed.documents.push(this.documentN)
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
        accountNumer: this.bankAccountN.accountNumber
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bankAccountN.typeCode = result.bankTypeCode
      this.bankAccountN.bankCode = result.bankCode
      this.bankAccountN.bankName = result.bankName
      this.bankAccountN.accountNumber = result.accountNumer
      this.clienteDetailed.bankAccounts.push(this.bankAccountN)
    });
  }


  openBenefitsDialog(){
    const dialogRef = this.dialog.open(DetaildialogBenefits, {
      data: {
        name:this.clienteDetailed.name, 
        benefitsTypeCode: this.benefitN.typeCode,
        benefitNumero: this.benefitN.number,
        benefitcodigo: this.benefitN.code,
        benefitValue: this.benefitN.value, 
        benefitNetValue: this.benefitN.netValue,
        benefitIssueDate: this.benefitN.issuingDate
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.benefitN.typeCode = result.benefitsTypeCode
      this.benefitN.number = result.benefitNumero
      this.benefitN.code = result.benefitcodigo
      this.benefitN.value = result.benefitValue
      this.benefitN.netValue = result.benefitNetValue
      this.benefitN.issuingDate = result.benefitIssueDate

      this.clienteDetailed.benefits.push(this.benefitN)
    });
  }
     


}
