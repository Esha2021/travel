import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-dodo',
  templateUrl: './generate-dodo.component.html',
  styleUrls: ['./generate-dodo.component.scss']
})
export class GenerateDodoComponent implements OnInit {

  currentUser: any;
  roles: string[] = [];
  isLoggedIn = false;
  
  constructor(private _route: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    if(this.token.getToken()){
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;
    }
    if(!this.isLoggedIn){
      this._route.navigateByUrl('/login');
    }
    this.currentUser = this.token.getUser();
  
  }

}