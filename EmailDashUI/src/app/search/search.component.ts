import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../myValidators';
import { SearchService } from '../search.service';
import { OrderDetails } from '../orderDetails';
import { GtConfig } from 'angular2-generic-table';
import { Observable } from 'rxjs/Observable';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
	orderId="";
	isSubmitted=false;
    form: FormGroup;
	orderDetails: OrderDetails[];
	configObject;
	ishtmlContent=false;
	htmlContent:string;
	loading=false;
	
    constructor( private fb: FormBuilder, private search: SearchService) {
		this.loading=false;
		this.isSubmitted=false;
		this.ishtmlContent=false;
		this.form = fb.group( {
            orderId: ['', Validators.compose( [
                Validators.required, Validators.minLength(3),
                MyValidators.cannotContainSpace
            ] )]
        });
		
		
		    };
			
			
    
    fetchOrderDetails(){
		this.loading=true;
		this.ishtmlContent=false;
		this.orderDetails=[];
		this.search.fetchorderDetails(this.orderId).subscribe(response=>this.orderDetails=response);
		setTimeout(() => this.loading=false, 3000);
		this.isSubmitted=true;
		}
	
	fetchHTMLContent(emailContent : string){
		this.ishtmlContent=true;
		this.htmlContent='<p> <b>Email Content '+emailContent+'</b></p>';
		
	}
	
}
