import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardFlagEnum } from 'src/app/domains/card-flag.enum';
import { LogService } from 'src/app/_services/log.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-log',
  templateUrl: './send-log.component.html',
  styleUrls: ['./send-log.component.scss']
})
export class SendLogComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private logService: LogService,
    private _snackBar: MatSnackBar,
    private router: Router) { }


  sendLogForm = this.formBuilder.group({
    flag: '',
    transactionAt: '',
    client: '',
    value: null
  });

  onSubmit = this._sendLogData
  cardsFlag = CardFlagEnum

  ngOnInit(): void {
  }
    
  private _sendLogData() {
    const data = {
      flag: this.sendLogForm.value.flag,
      transactionAt: this.sendLogForm.value.transactionAt,
      client: this.sendLogForm.value.client,
      value: this.sendLogForm.value.value
    }
    this.logService.sendLog(data).subscribe(
      data => {
        this.sendLogForm.reset();
        this._openSnackBar("Enviado com sucesso", "Fechar");
      },
      err => {
        console.error(err)
        if (err.status === 401) {
          this._openSnackBar("Usuário sem permissão para executar essa ação - HTTP 401", "Fechar");
          this.router.navigate(['/login']);
        } else {
          this._openSnackBar("Erro ao enviar log", "Fechar");
        }
      }
    )
  }

  private _openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
