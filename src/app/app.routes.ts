import { Routes } from '@angular/router';
import { ViewAnimalsComponent } from './components/view-animals/view-animals.component';
import { ViewEnclosComponent } from './components/view-enclos/view-enclos.component';
import { ViewSoigneursComponent } from './components/view-soigneurs/view-soigneurs.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalComponent } from './components/animal/animal.component';



export const routes: Routes = [
    { path: 'animaux', component: ViewAnimalsComponent },
    {path:'enclos', component: ViewEnclosComponent},
    {path:'soigneurs',component:ViewSoigneursComponent},
    {path:'contact', component: ViewContactComponent},
    {path:'animal-info',component:AnimalComponent},
    {path:"",component:HomeComponent}
  ];
  
