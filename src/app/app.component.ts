import { Component } from '@angular/core';

import { PoPageLogin } from '@portinari/portinari-templates';
import { Router } from '@angular/router';
import { PoDialogService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading: boolean = false;

  constructor(private router: Router,private poDialog: PoDialogService) { }

  loginSubmit(formData: PoPageLogin) {
    this.loading = true;
    if (formData.login === 'exemplologin' && formData.password === '1234') {
      this.loading = false;
      this.router.navigate(['./home']);
    } else {
      this.poDialog.alert({
        ok: () => this.loading = false,
        title: 'Senha ou usuario invalidos',
        message: 'Favor verificar os dados digitados'
      });
    }
  }


}
