import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {
  form: FormGroup | any;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required]
      }) ,
      description:new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required,Validators.maxLength(180)]
      }),
      price: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required,Validators.min(1)]
      }),
      // dateFrom: new FormControl(null,{
      //   updateOn: 'blur',
      //   validators:[Validators.required]
      // }),
      // dateTo: new FormControl(null,{
      //   updateOn: 'blur',
      //   validators:[Validators.required]
      // })


    });
  }

  onCreateOffer(){
    console.log(this.form);

  }




}
