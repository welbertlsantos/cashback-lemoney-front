import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { ResponseApi } from '../../model/Response-api.model';
import { CashBackService } from '../../services/cash-back-service';
import { CashBack } from '../../model/Cashback.model';

@Component({
  selector: 'app-cash-back-new',
  templateUrl: './cash-back-new.component.html',
  styleUrls: ['./cash-back-new.component.css']
})
export class CashBackNewComponent implements OnInit {


  @ViewChild("form")
  form: NgForm

  cashBack: CashBack = new CashBack('',null,'','',0,'',0,0,null,null,'');
  shared: SharedService
  message : {};
  classCss : {};
  idProduto: String

  constructor(
    private cashBackService: CashBackService,
    private route: ActivatedRoute
  ) {
      this.shared = SharedService.getInstance();
   }

  ngOnInit() {
    let id:string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }
      
  }

  findById(id: string){
    this.cashBackService.findById(id).subscribe((res: CashBack) => {
      this.cashBack = res;
  } , err => {
    this.showMessage({
      type: 'error',
      text: err['error']['errors'][0]
    });
  });
  }


  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-'+type] =  true;
 }

 register(){
  this.message = {};
  this.cashBackService.createOrReplaceCashBack(this.cashBack).subscribe((responseApi:ResponseApi) => {
      this.cashBack = new CashBack('',null,'','',0,'',0,0,null,null,'');
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `CashBack incluído com sucesso!`
      });
  } , err => {
    this.showMessage({
      type: 'error',
      text: err['error']['errors'][0]
    });
  });
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
    }


 


}
