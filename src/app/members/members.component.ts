import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  email:string = '';
  note:string = '';
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {
	this.getNote();
	
	this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
		this.email = auth.google.email;
      }
    });	
	
	
  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }
  
  updateNote() {
	 
		var noteObj = this.af.database.list('/notes');
		noteObj.forEach(element => {
			var updateK = '';
			element.forEach(item => {
				if (item.email == this.email) {
					updateK = item.$key;
				}				
			});
			
			if (updateK != '') {
				noteObj.update(updateK, { note: this.note });
			} else {
				noteObj.push({'email': this.email, 'note': this.note});
			}		
		});
  }
  
  getNote() {
	  
		var noteObj = this.af.database.list('/notes');
		noteObj.forEach(element => {
			
			element.forEach(item => {
				if (item.email == this.email) {
					this.note = item.note;
				}				
			});
			

		});
		
  }


  ngOnInit() {
	  
  }
}
