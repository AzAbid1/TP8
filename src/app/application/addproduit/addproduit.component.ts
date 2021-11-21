import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];
  
    productForm:FormGroup = new FormGroup({});
  /**   productForm: FormGroup = new FormGroup({
      ref:new FormControl(0),
      libelle: new FormControl(''),
      made: new FormControl('Tunisie'),
      categorie: new FormControl('Accessoires'),
      nouveau : new FormControl(false)
      }); 
*/
      onSubmitForm(){
        console.log(this.productForm.value);
        console.log(this.productForm.value['ref']);
        console.log(this.productForm.get('libelle')?.value);
        console.log(this.productForm.controls.made.value);
        console.log(this.productForm.controls['nouveau'].value);
        this.produitService.addProduit(this.productForm.value);
       }

       onReset(){
        this.productForm.reset({
          reference:[0],
          libelle: [''],
          made: ['Tunisie'],
          categorie: ['Accessoires'],
          nouveau : false
        });
       }

       public get refProduct(){ 
        return this.productForm.get('reference'); 
      }

      isValidPattern():boolean{
        return this.productForm.controls['libelle'].errors?.pattern &&
        this.productForm.controls['libelle'].invalid &&
        this.productForm.controls['libelle'].dirty;
        }
       
      
  constructor(private fb:FormBuilder, private produitService:ProduitService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      reference:[0, Validators.required],
      libelle:['', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]],
      made: ['Tunisie'],
      categorie: ['Accessoires'],
      nouveau : false
      })
    this.productForm.get('nouveau')?.setValue(true);
    //modifie la valeur par défaut du champs nouveau 
  }

}
