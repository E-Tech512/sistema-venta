import { Component } from '@angular/core';
import { Producto } from '../../../../modelo/Producto';
import { ProductoService } from '../../../../service/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.getAllProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al cargar productos', error);
      }
    );
  }
}
