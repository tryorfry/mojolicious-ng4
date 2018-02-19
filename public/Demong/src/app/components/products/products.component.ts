import { Component, OnInit } from '@angular/core';
import {ApiclientService} from '../../services/apiclient.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private apiclient: ApiclientService) { }

  ngOnInit() {
    this.products = this.apiclient.getData('http://localhost:8080/Demo/hello');
  }
}
