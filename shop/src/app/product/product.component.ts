import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:string ='Ürün Listesi';
  products:any[] = [
    {id:1,name:"Laptop",price:4500,categoryId:1,description:"Huawei D15",imageUrl:"https://yandex.com.tr/gorsel/search?p=1&text=laptop&pos=40&rpt=simage&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC1wzSdxWgAEolM9.jpg&from=tabbar"},
    {id:2,name:"Klavye",price:6500,categoryId:2,description:"Casper",imageUrl:"https://yandex.com.tr/gorsel/search?pos=15&from=tabbar&img_url=https%3A%2F%2Fantenka.by%2Fwp-content%2Fuploads%2F2019%2F03%2Ff36fc547f3b1c28c3c057727bab73c11ea2a53e9.jpg&text=laptop&rpt=simage"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
