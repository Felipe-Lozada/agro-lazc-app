import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import {UserService} from '../services/user.service';

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
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private toastController: ToastController
    ) {
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

  async presentToast(message){
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  checkPassword(data){
    const userPhone = data.phoneNumber;
    const password = data.password;
    const cpassword = data.rpassword;
    this.registerForm.reset();

    return new Promise((resolve, reject) => {
      if(password === cpassword) {
        resolve({userPhone, password});
        console.log({userPhone, password});
      } else {
        reject('Las contraseñas no coinciden');
        console.error('Las contraseñas no coinciden');
      }
    });
  }

  async registerUser(info){
    // const userInfo = await this.checkPassword(info);
    // console.log(userInfo);
    // this.presentToast(userInfo);
    this.checkPassword(info)
    .then((data: any)=>{
      console.log(data);
    })

    .catch((err)=> {
      this.presentToast('las contraseñas no coinciden');
      console.error(err);
    });
  }

  ingresar(){
    this.navCtrl.navigateBack('/login');
  }



}
