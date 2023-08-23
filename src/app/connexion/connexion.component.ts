import { Component } from '@angular/core';
import { tr } from '../Util';
import { Joueur } from '../modele/joueur'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  connexionVisible=true
  joueurConnecte:Joueur = new Joueur();

  creatinCompte() {
    tr("Creation d<un compte");
  }

  connexion() {
    tr("Connexion");
  }
}
