import { Component, OnInit, Inject, NgModule } from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: clienteLiteInterface,
  ) {}

  phoneT: phone = {
    ddd: 0,
    number: 0,
    note: ''
  }


  onNoClick(): void {
    this.dialogRef.close(this.phoneT);
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
    @Inject(MAT_DIALOG_DATA) public data: clienteLiteInterface,
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
 
  ngOnInit(): void {
  let idCustomer = this._router.snapshot.paramMap.get('id');  
    this.getClient(idCustomer);
  }

  constructor(public dialog: MatDialog, private _corbanService:CorbanService,private _router: ActivatedRoute){}

  old:boolean = false;

  
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

  openDialog(numb: number): void {
    debugger
    let classeTemplate:any 
    if(numb == 1){
      //Name Parents
      classeTemplate = DetailDialogParentsNames
    }else if(numb == 2){
      //Phone
      classeTemplate = DetailDialogPhone
    }else if(numb == 3){
      //Note
      classeTemplate = DetailDialogNote
    }else if(numb == 4){
      //Email
      classeTemplate = DetailDialogEmail
    } else if(numb == 5){
      //Documento
      classeTemplate = DetailDialogDocument
    }

    const dialogRef = this.dialog.open(classeTemplate, {
      data: this.clienteDetailed,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clienteDetailed = result;
      console.log(result)
    });
  }
     


  addFilds(clienteAtualizado:any){
    debugger
    if(clienteAtualizado.phones[0].ddd != 0 && clienteAtualizado.phones[0].number != 0){
      this.clienteDetailed.phones.push(this.clienteDetailed.phones[0])
    }

    if(clienteAtualizado.email[0].email != ''){
      this.clienteDetailed.emails.push(clienteAtualizado.emails[0])
    }

    if(clienteAtualizado.addresses[0].zipCode != '' || clienteAtualizado.addresses[0].street != ''){
      this.clienteDetailed.addresses.push(clienteAtualizado.addresses[0])
    }

    if(clienteAtualizado.document[0].number !='' && clienteAtualizado.document[0].typeCode != 0){
      this.clienteDetailed.documents.push(clienteAtualizado.document[0])
    }

    if(clienteAtualizado.bankAccount[0].accountNumber != '' && clienteAtualizado.bankAccount[0].typeCode != 0){
      this.clienteDetailed.bankAccounts.push(clienteAtualizado.bankAccount[0])
    }  

    if(clienteAtualizado.benefit[0].number != '' && clienteAtualizado.benefit[0].typeCode != 0 ){
      this.clienteDetailed.benefits.push(clienteAtualizado.benefit[0])
    }

  }

}
