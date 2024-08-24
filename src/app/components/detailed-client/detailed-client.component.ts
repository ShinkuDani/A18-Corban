import { Component, OnInit } from '@angular/core';
import { clienteLiteInterface } from '../../interfaces/clienteLite';
import { CorbanService } from '../../services/corban.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detailed-client',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatButtonModule],
  templateUrl: './detailed-client.component.html',
  styleUrl: './detailed-client.component.scss'
})
export class DetailedClientComponent implements OnInit{

  ngOnInit(): void {
  let idCustomer = this._router.snapshot.paramMap.get('id');  
    this.getClient(idCustomer);
  }

  constructor(private _corbanService:CorbanService,private _router: ActivatedRoute){
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
    document: [],
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


}
