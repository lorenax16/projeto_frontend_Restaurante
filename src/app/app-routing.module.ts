import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { LoginComponent } from './pages/login/login.component';
import { MeusPedidosComponent } from './pages/meus-pedidos/meus-pedidos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'meus-pedidos', component: MeusPedidosComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
