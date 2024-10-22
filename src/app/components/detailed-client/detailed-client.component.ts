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
import { MatIcon,MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

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
    MatMenuModule,
    MatIconModule
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
    @Inject(MAT_DIALOG_DATA) public data: {
      phone:phone
      name:string,
      },
  ) {}

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
      email:email
      name: string,
      },
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
      address:addresses
      name: string,
       },
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
      document:document
      name:string,
      
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
      bankAccount:bankAccounts,
      name:string,
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
      benefit:benefits
      name:string,
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
            MatIcon,
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
menu: any;

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
  openPhoneDialog(alter:boolean, id:number = 9999){

    debugger
    if(alter == true){
      const dialogRef = this.dialog.open(DetailDialogPhone, {
        data: {
          name: this.clienteDetailed.name,
          phone: this.clienteDetailed.phones[id]
          }
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clienteDetailed.phones[id] = result.phone
        this.putClient()
      });
    
    } else{
      const dialogRef = this.dialog.open(DetailDialogPhone, {
        data: {
          name: this.clienteDetailed.name, 
          phone: this.phoneN }
      });
      

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.phoneN = result.phone
        this.clienteDetailed.phones.push(this.phoneN)
        this.putClient()
      });
    }
    
  }

  //Mesma coisa de Cima
  openEmailDialog(alter:boolean, id:number = 9999 ){
    
    if(alter == true){
      const dialogRef = this.dialog.open(DetailDialogEmail, {
        data: {
          name: this.clienteDetailed.name,
          email: this.clienteDetailed.emails[id], 
           },
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clienteDetailed.emails[id] = result.email
        this.putClient()
      });
    } else{
      const dialogRef = this.dialog.open(DetailDialogEmail, {
        data: {
          name: this.clienteDetailed.name,
          email:this.emailN 
        },
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.emailN = result.email
        this.clienteDetailed.emails.push(this.emailN)
        this.putClient()
      });
    }
    
  }

   //Mesma coisa de Cima
   openAddressesDialog(alter:boolean, id:number = 9999){
    if(alter == true){
      const dialogRef = this.dialog.open(DetailDialogAddress, {
        data: {
          name: this.clienteDetailed.name, 
          address: this.clienteDetailed.addresses[id]
        }
    });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clienteDetailed.addresses[id] = result.address
        this.putClient()
      });
    } else {
      const dialogRef = this.dialog.open(DetailDialogAddress, {
        data: {
          name: this.clienteDetailed.name, 
          address:this.addressN
        },
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.addressN = result.address
        this.clienteDetailed.addresses.push(this.addressN)
        this.putClient()
      });
    }

  }

  //Mesma coisa do de cima.
  openDocumentDialog(alter:boolean, id:number = 9999){
    if(alter == true){
      const dialogRef = this.dialog.open(DetailDialogDocument, {
        data: {
          name:this.clienteDetailed.name, 
          document: this.clienteDetailed.documents[id]
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clienteDetailed.documents[id] = result.document
        this.putClient()
      });
    }else{
      const dialogRef = this.dialog.open(DetailDialogDocument, {
        data: {
          name:this.clienteDetailed.name, 
          document: this.documentN
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.documentN = result.document
        this.clienteDetailed.documents.push(this.documentN)
        this.putClient()
      });
    }
  }

  //Mesma coisa do de cima.
  openBankAccountDialog(alter:boolean, id:number = 9999){
    
    if(alter == true){
      const dialogRef = this.dialog.open(DetaildialogBankAccount, {
        data: {
          name:this.clienteDetailed.name, 
          bankAccount: this.clienteDetailed.bankAccounts[id]
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clienteDetailed.bankAccounts[id] = result.bankAccount
        this.putClient()
      });
    } else {
      const dialogRef = this.dialog.open(DetaildialogBankAccount, {
        data: {
          name:this.clienteDetailed.name, 
          bankAccount: this.bankAccountN,
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.bankAccountN = result.bankAccount
        this.clienteDetailed.bankAccounts.push(this.bankAccountN)
        this.putClient()
      });
    }
  }


  openBenefitsDialog(alter:boolean, id:number = 9999){
    
    if(alter == true){
      const dialogRef = this.dialog.open(DetaildialogBenefits, {
        data: {
          name:this.clienteDetailed.name,
          benefit:  this.clienteDetailed.benefits[id]
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.clienteDetailed.benefits[id] = result.benefit
        this.putClient()
        
      });
    } else{
      const dialogRef = this.dialog.open(DetaildialogBenefits, {
        data: {
          name:this.clienteDetailed.name, 
          benefit: this.benefitN
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.benefitN = result.benefit
        this.clienteDetailed.benefits.push(this.benefitN)
        this.putClient()
      });
    }
  }
     


}
