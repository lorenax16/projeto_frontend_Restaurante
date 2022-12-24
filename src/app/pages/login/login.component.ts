import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// logica para funcionar a tela
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) { }
  public email = '';
  public cpf = '';
  public mesa = 0;
  // função que leva ao cardapio ou pedidos
  navigar() {
    console.log('ejecuto')
    const payload = {
      email: this.email,
      mesa: this.mesa,
      cpf: this.cpf,
    }
    this.http.post<any>('http://localhost:3001/login', payload).subscribe(async data => {
      console.log('-data', data);

      await localStorage.setItem('lorena.user', JSON.stringify(data))
      if (data.pedidos2.length > 0) {
        this.router.navigate(['/meus-pedidos'])
      } else {
        this.router.navigate(['/cardapio'])
      }
    }, erro => { console.error('email não existe') })
  }
}
