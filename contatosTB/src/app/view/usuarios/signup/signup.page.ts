import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/common/alert.service';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formCadastrar: FormGroup;


  constructor(private alert: AlertService, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { 
    this.formCadastrar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl(''),
      confSenha: new FormControl('')
    });
  }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confSenha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl(){
    return  this.formCadastrar.controls;
  }

  submitForm() : boolean{
    if(!this.formCadastrar.valid){
      this.alert.presentAlert('Erro', 'Erro ao preencher!')
      return false
    }else{
      this.cadastrar()
      return true;
    }
  }

  private cadastrar(){
    this.authService.signUpWithEmailAndPassword(this.formCadastrar.value['email'], this.formCadastrar.value['senha']).then((res) => {
      this.alert.presentAlert('Olá', 'Seja bem-vindo')
      this.router.navigate(["/signin"])
    }).catch((error) => {
      this.alert.presentAlert('Erro', 'Erro ao realizar cadastro')
      console.log(error.message);
    })

    
  }

}
