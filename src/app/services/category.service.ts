import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CategoryService {

  constructor(private http : HttpClient) {
   }

   getCategoryList(){
     return this.http.get("/server/api/v1/categories");
   }

   getAuctionListByCategoryId(id : number){
     return this.http.get('/server/api/v1/categories/category/' + id);
   }
   
}
