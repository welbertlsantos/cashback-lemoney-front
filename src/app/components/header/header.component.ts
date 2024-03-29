import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shared: SharedService

  constructor() {
    this.shared = SharedService.getInstance();
    this.shared.user = new User('','','');
   }

  ngOnInit() {
  }

  signOut(): void {
    this.shared.token = '';
    this.shared.user = null;
    window.location.href = "/login";
    window.location.reload();

  }

}
