import { Component } from '@angular/core';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent {
  public pedidos: any;
  public cliente: string | null | undefined;
  async ngOnInit() {
    console.log("pedidos prueba");
    const data: any = await JSON.parse(localStorage.getItem('lorena.user')!);
    console.log(data)
    if (data) {
      console.log(data.pedidos2);
      this.cliente = data;
      this.pedidos = data.pedidos2;
      console.log(this.cliente, "cliente")
      console.log(this.pedidos, "pedidos")
    }
  }
}
