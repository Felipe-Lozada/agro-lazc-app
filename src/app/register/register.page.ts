import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  validation_message = {
    phoneNumber:{
      type: 'pattern', message: 'Numero de teleofono no valido'
    }
  };
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
      this.registerForm = this.formBuilder.group({
        phoneNumber: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[+]*([{0,1}[0-9]{1,4}){1,4}[\s\./0-9]]*$'), //Aqio va el patron de un numero de celular
          Validators.minLength(10)
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^.{4,10}'),
          Validators.minLength(4),
          Validators.maxLength(10),
        ])),
        rpassword: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^.{4,10}'),
          Validators.minLength(4),
          Validators.maxLength(10)
        ]))
      });
  }

  ngOnInit() {
  }

  ingresar(){
    this.navCtrl.navigateBack('/login');
  }

  registerUser(data){
    console.log(data);
    this.registerForm.reset();
  }

}
