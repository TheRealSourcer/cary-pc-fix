import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Privacy } from './pages/policies/privacy/privacy';
import { Refund } from './pages/policies/refund/refund';
import { Terms } from './pages/policies/terms/terms';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home - 4hourpc' },
    { path: 'about', component: About, title: 'About - 4hourpc' },
    { path: 'contact', component: Contact, title: 'Contact - 4hourpc' },
    { path: 'policies/privacy', component: Privacy, title: 'Privacy - Policies - 4hourpc'},
    { path: 'policies/refund', component: Refund, title: 'Refund - Policies - 4hourpc' },
    { path: 'policies/terms', component: Terms, title: 'Terms - Policies - 4hourpc' },
];
