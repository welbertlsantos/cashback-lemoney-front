import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CashBack } from '../../model/cashback.model';
import { SharedService } from './../../services/shared.service';
import { CashBackServiceService } from '../../services/cash-back-service.service';

@Component({
  selector: 'app-cask-back-detail',
  templateUrl: './cask-back-detail.component.html',
  styleUrls: ['./cask-back-detail.component.css']
})
export class CaskBackDetailComponent implements OnInit {

  cashBack = new CashBack('',null,'','',0,'',0,0,new Date(),new Date(),'');
  shared: SharedService;
  message : {};
  classCss : {};

  constructor( 
    private cashService: CashBackServiceService,
    private route: ActivatedRoute
  ) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {
  }

}
