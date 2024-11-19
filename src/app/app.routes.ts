import { Routes } from '@angular/router';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';
import { DetailedClientComponent } from './components/detailed-client/detailed-client.component';
import { LoginClientComponent } from './components/login-client/login-client.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginClientComponent
    },
    {
        path:'listaClientes',
        component: ListClientsComponent
    },
    {
        path:'create',
        component: CreateClientsComponent
    },
    {
        path:'listaClientes/edit/:id',
        component: CreateClientsComponent
    },
    {
        path:'listaClientes/detail/:id',
        component: DetailedClientComponent
    },
    
];
