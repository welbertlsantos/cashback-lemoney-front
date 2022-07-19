import { Component, OnInit } from '@angular/core';
import { ResponseApi } from '../../model/Response-api.model';
import { CashBackService } from '../../services/cash-back-service';
import { DialogService } from '../../services/dialog.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-cash-back-list',
  templateUrl: './cash-back-list.component.html',
  styleUrls: ['./cash-back-list.component.css']
})
export class CashBackListComponent implements OnInit {

  shared : SharedService;
  message : {};
  classCss : {};
  listCashBack : {};

  constructor(
    private dialogService: DialogService,
    private cashBackService: CashBackService,
  ) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {
    this.findAll()
  }

  findAll() {
    this.cashBackService.findAllCashBackByUser(this.shared.user.id).subscribe(
      (res) => { this.listCashBack = res;
      },err => { this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });}  
    );
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

  delete(id:string) {
    this.dialogService.confirm('Você deseja excluir o cashback selecionado?')
    .then((candelete:boolean) => {
      if(candelete){
        this.message = {};
        this.cashBackService.deleteCashBack(id).subscribe((responseApi:ResponseApi) => {
            this.showMessage({
              type: 'success',
              text: `CashBack excluído com sucesso!`
            });
            this.findAll();
        } , err => {
          this.showMessage({
            type: 'error',
            text: err['error']['errors'][0]
          });
        });
      }
  });
  }

}
