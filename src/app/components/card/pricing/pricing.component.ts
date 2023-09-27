import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
   @Input() 
  gameType:string ="Digital Ps4"
   @Input()
  gamePrice:string ="399,90"
  
  
  
  ngOnInit(): void {
   
  }

  
}
