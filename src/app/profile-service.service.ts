import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  private username: string;
  private clientId = 'bcad2c136257ea3e34e9';
  private clientSecret = '904654434de8a50175be4093e92a303affbaf021';

  page: any[];
  constructor(private http: HttpClient) { 
    console.log("service is now ready!");
   this.username = "Missy-Olivia";
  }

  getProfileInfo(){
    
      this.http.get((environment.apiUrl) + this.username + 
    "?client_id = " + this.clientId + "&client_secret=" + this.clientSecret).pipe(map(res => res)); 
  }
}
