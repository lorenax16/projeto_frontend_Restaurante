import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  public cliente: string | null | undefined;
  public pratos: any;
  public pedidosPratos: any = [];
  public valor_total= 0;
  public cliente_id = 0;
  public tempo = '';
  public status = '';
  constructor(private router: Router, private http: HttpClient) { }
 
  async ngOnInit() {
    console.log("cardapio 1")
    this.http.get<any>('http://localhost:3001/pratos').subscribe(async data => {
      console.log('-data', data);
      this.pratos = data;
    }, erro => { console.error('email não existe') })
  }

  adicionarPrato(prato: any){
    console.log(prato)
    this.pedidosPratos.push(prato)
    console.log(this.pedidosPratos)
  }

  removerPrato(prato: any) {
   this.pedidosPratos = this.pedidosPratos.filter((item: any) => item.id !== prato.id )
   console.log(this.pedidosPratos, "borro");
  }

  fazerPedido(){
    const payload = {
      pratos: this.pedidosPratos,
      valor_total: this.valor_total,
      cliente_id: this.cliente_id,
      tempo:  this.tempo,
      status: this.status
    }
    this.http.post('http://localhost:3001/pedidos', payload).subscribe(async data => {
      console.log('-data', data);
    }, erro => { console.error('email não existe') })
  }
}
