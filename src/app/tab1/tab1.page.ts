import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from '../services/api.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, CurrencyPipe]
})
export class Tab1Page implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllProducts().subscribe(res => {
      this.products = res;
      this.isLoading = false;
    });
  }
}