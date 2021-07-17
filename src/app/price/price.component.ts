import { Component, OnInit } from '@angular/core';


export interface Price{
  service_name:string,
  service_description:string,
  service_cost:number
}

const DATA: Price[] = [
  {service_name: 'Заміна дисплею', service_description: 'Заміна модуля дисплея', service_cost: 1500, },
  {service_name: 'Заміна usb порту', service_description: 'Заміна usb порту, з усуненням дефектів', service_cost: 800},
  {service_name: 'Заміна аудіо порту', service_description: 'Заміна аудіо порту', service_cost: 500},
  {service_name: 'Встановленя прошивки', service_description: 'Встановлення та налаштування операційної системи', service_cost: 1000},

];


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  displayedColumns: string[] = ['service_name', 'service_description', 'service_cost'];
  dataSource = DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
