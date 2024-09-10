import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CorbanService } from '../../services/corban.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule }from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule
  ],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})

export class ListClientsComponent implements OnInit {

  
  
  constructor(private _corbanService : CorbanService, private _toastr:ToastrService){
  }

  ngOnInit(): void {
    this.getToken()
    this.getClients()
  }

  customers: Array<any> = new Array<any>();
  customer: any = {};

  idCustomer = new FormControl('');

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.customers;


  getToken(){
    this._corbanService.getToken().subscribe(result => {
      if (result)
        //this._toastr.success('Token Salvo')
        localStorage.setItem('token', result.token);
    })
  }

  getClients(){
    this._corbanService.getCustomers().subscribe(
      data => {
        if (data) {
          //this._toastr.success('Usuários pegos')
          console.log(data)
          this.customers = data.items;
          console.log(this.dataSource);

        }
      }
    )
  }

  deleteClient(id:any){
    this._corbanService.deleteCustomer(id).subscribe(
      data => {
        //this._toastr.warning('Usuário Deletado', 'Delete')
        this.getClients()
      }
    )
  }

  
}
