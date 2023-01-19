import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form:FormGroup| any;
  constructor() {}

  ngOnInit(){
    this.form=new FormGroup({
      email:new FormControl(null,{
        updateOn:'blur',
        validators:[Validators.required]
      }),
      password:new FormControl(null,{
        updateOn:'blur',
        validators:[Validators.required]
      })
    });
  }

  clck(){
    console.log(this.form);

  }

}
