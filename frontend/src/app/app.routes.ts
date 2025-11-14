import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Privacy } from './pages/policies/privacy/privacy';
import { Refund } from './pages/policies/refund/refund';
import { Terms } from './pages/policies/terms/terms';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'policies/privacy', component: Privacy},
    { path: 'policies/refund', component: Refund },
    { path: 'policies/terms', component: Terms},
];
