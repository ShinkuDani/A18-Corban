import { Routes } from '@angular/router';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';
import { DetailedClientComponent } from './components/detailed-client/detailed-client.component';

export const routes: Routes = [
    {
        path:'',
        component: ListClientsComponent
    },
    {
        path:'create',
        component: CreateClientsComponent
    },
    {
        path:'edit/:id',
        component: CreateClientsComponent
    },
    {
        path:'detailes/:id',
        component: DetailedClientComponent
    }
];
