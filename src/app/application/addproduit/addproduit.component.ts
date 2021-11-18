import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];
  constructor() { }

  ngOnInit(): void {
  }

}
