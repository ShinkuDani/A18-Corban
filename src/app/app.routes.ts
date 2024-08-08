import { Routes } from '@angular/router';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';

export const routes: Routes = [
    {
        path:'',
        component: ListClientsComponent
    },
    {
        path:'create',
        component: CreateClientsComponent
    }
];
