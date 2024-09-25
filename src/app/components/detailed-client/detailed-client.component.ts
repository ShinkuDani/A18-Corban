import { Component, OnInit, Inject } from '@angular/core';
import { clienteLiteInterface, addresses, bankAccounts, benefits, document, email, phone} from '../../interfaces/clienteLite';
import { CorbanService } from '../../services/corban.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

// 1 - Parents , 2 - Note
let dialogTemplate = ['dialogTemplates/detailDialogParentsNames.html', 'dialogTemplates/detailDialogNote.html']
let templateNumber = 0;

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

  getClient(id:any){
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
    this.dialogTemplate(numb)
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: this.clienteDetailed,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clienteDetailed = result;
     /*
      this._corbanService.putCustomer(this.clienteDetailed.customerId as string, this.clienteDetailed).subscribe(
        data => {
          if(data){
            //this._toastr.success('Usuário Alterado com Sucesso', 'Put')
            this.clienteDetailed = data
            templateNumber = 1;
          }
        }
      )
     
     
     */
    });
  }

  dialogTemplate(number:number){
    if(number == 1){
      //Note Template
       templateNumber = 0
    }else if( number == 2){
      //Parents Template
        templateNumber = 1
    } 
  }

}

//Note
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: dialogTemplate[templateNumber],
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
export class DialogOverviewExampleDialog {


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: clienteLiteInterface,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
