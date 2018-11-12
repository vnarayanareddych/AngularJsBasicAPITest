import { Component, OnInit } from '@angular/core';
import { InteSpriService } from '../inte-spri.service';

@Component({
  selector: 'app-inter-spring-boot',
  templateUrl: './inter-spring-boot.component.html',
  styleUrls: ['./inter-spring-boot.component.css']
})
export class InterSpringBootComponent implements OnInit {
  dta: any;
  refNo: any;
  TxnRefno: any;
  taxInvo:any;
  constructor(private service: InteSpriService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.dta = data;
      console.log("response1" ,this.dta[0]);
      this.refNo= this.dta[0].txnRefNo;
    this.TxnRefno= this.dta[0].partnerTxnRefNo;
    this.taxInvo= this.dta[0].taxInvoiceNumber;
   console.log(this.refNo)
    });
    
  }

 

}
