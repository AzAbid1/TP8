import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];

    productForm: FormGroup = new FormGroup({
      ref:new FormControl(0),
      libelle: new FormControl(''),
      made: new FormControl('Tunisie'),
      categorie: new FormControl('Accessoires'),
      nouveau : new FormControl(false)
      });

      onSubmitForm(){
        console.log(this.productForm.value);
        console.log(this.productForm.value['ref']);
        console.log(this.productForm.get('libelle')?.value);
        console.log(this.productForm.controls.made.value);
        console.log(this.productForm.controls['nouveau'].value);
       }
      
  constructor() { }

  ngOnInit(): void {
  }

}
