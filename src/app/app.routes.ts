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
        path:'criar',
        component: CreateClientsComponent
    },
    {
        path:'listaClientes/editar/:id',
        component: CreateClientsComponent
    },
    {
        path:'listaClientes/detalhes/:id',
        component: DetailedClientComponent
    },
    
];
