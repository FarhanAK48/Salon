import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
// const { CapacitorGoogleAuth } = Plugins;
const { Capacitor } = Plugins;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registerForm!: FormGroup;
  user: any = null;
  constructor() {   
      debugger;
      GoogleAuth.initialize({
        clientId: '668744227736-iudfs0844ko5fak7tsnbo7tnjaqf889u.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });
   
  }

  async signInWithGoogle() { 
    try { 
      const result = await GoogleAuth.signIn();
   
      console.log('User:', result);
    } catch (error) {
      console.error('signInWithGoogle', error);
   
    }
  }




  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })  
  }

  async refresh() {
    this.user = await GoogleAuth.refresh();
    console.log('User', this.user)
  }

  async signOut() {
    try { 
      this.user = await GoogleAuth.signOut();
      console.log('User', this.user)
    } catch (error) {
      console.error('signInWithGoogle', error);     
    }   
  }


}
