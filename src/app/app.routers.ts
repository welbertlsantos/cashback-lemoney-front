import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TaskNewComponent } from './components/task-new/task-new.component';
import { CashBackListComponent } from './components/cash-back-list/cash-back-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { CashBackNewComponent } from './components/cash-back-new/cash-back-new.component';


export const ROUTES: Routes = [
    { path: 'login' , component: LoginComponent },
    { path: '' , component:  HomeComponent, canActivate: [AuthGuard]},
    { path: 'user-new' , component: UserNewComponent, canActivate: [AuthGuard] },
    { path: 'user-new/:id' , component: UserNewComponent, canActivate: [AuthGuard] },
    { path: 'user-list' , component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'task-new' , component: TaskNewComponent, canActivate: [AuthGuard] },
    { path: 'task-new/:id' , component: TaskNewComponent, canActivate: [AuthGuard] },
    { path: 'cash-back-list' , component: CashBackListComponent, canActivate: [AuthGuard] },
    { path: 'cash-back-new' , component: CashBackNewComponent, canActivate: [AuthGuard] },
    { path: 'task-detail/:id' , component: TaskDetailComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);

