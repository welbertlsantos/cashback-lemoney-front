import { DialogService } from './services/dialog.service';
import { AuthGuard } from './components/security/auth.guard';
import { SharedService } from './services/shared.service';
import { TaskService } from './services/task.service';
import { CashBackService } from './services/cash-back-service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { routes } from './app.routers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AuthInterceptor } from './components/security/login/auth.interceptor';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TaskNewComponent } from './components/task-new/task-new.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { CashBackListComponent } from './components/cash-back-list/cash-back-list.component';
import { CashBackNewComponent } from './components/cash-back-new/cash-back-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent,
    UserListComponent,
    TaskNewComponent,
    TaskListComponent,
    TaskDetailComponent,
    CashBackListComponent,
    CashBackNewComponent,
    
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService, 
    SharedService,
    DialogService,
    TaskService,
    CashBackService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
