import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/profile-service.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];

  constructor( private profileService:ProfileServiceService) { 
  
  }
    findProfile(){
      this.profileService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
    });
    
    }

  ngOnInit(): void {
  }

}
