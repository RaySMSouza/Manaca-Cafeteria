import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cardapio } from './pages/cardapio/cardapio';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Localizacao } from './pages/localizacao/localizacao';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'cardapio',
    component: Cardapio
  },
  {
    path: 'quem-somos',
    component: QuemSomos
  },
  {
    path: 'localizacao',
    component: Localizacao
  },
  {
    path: '**',
    redirectTo: ''
  }
];