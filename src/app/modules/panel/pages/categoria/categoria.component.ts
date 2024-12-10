import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../modelo/Categoria';
import { CategoriaService } from '../../../../service/categoria.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit{
  categories: Categoria[] = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriaService.getAllCategories().subscribe(
      (data) => {
        console.log('Datos obtenidos:', data); // Verifica lo que estás recibiendo
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

}
