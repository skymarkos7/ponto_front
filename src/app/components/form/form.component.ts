import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

// import { CartService } from '../cart.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = 'caboco';
  constructor(


    // private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {



    


    console.log('ssss');



  }
}
