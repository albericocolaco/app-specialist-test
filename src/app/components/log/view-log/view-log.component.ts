import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.scss']
})
export class ViewLogComponent implements OnInit {

  expensiveData: any = []
  displayedColumns: string[] = ['operadora','cliente','valorTotal']

  constructor(
    private clientSevice: ClientService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this._getValues()
  }

  private _getValues() {
    this.clientSevice.getExpensiveClientByCardFlag().subscribe(
      data => {
        this.expensiveData = data
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
