import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private _router: Router) { }

  /**
   * Doit rediriger l'utilisateur vers le lien /produits
   * Le composant appelé dans le fichier app-routing doit permettre ainsi
   * l'affichage de la liste des produits
   */
  toAnimauxList(): void {
    this._router.navigateByUrl(`/animaux`);
  }

  
  /**
   * Doit rediriger l'utilisateur vers le lien /clients
   * Le composant appelé dans le fichier app-routing doit permettre ainsi
   * l'affichage de la liste des clients
   */
  toEnclosList(): void {
    this._router.navigateByUrl(`/enclos`);
  }

  toSoigneursList(): void {
    this._router.navigateByUrl(`/soigneurs`);
  }

  toContactList(): void {
    this._router.navigateByUrl(`/contact`);
  }
  toAcceuil(): void {
    this._router.navigateByUrl(`/`);
  }
  

}
