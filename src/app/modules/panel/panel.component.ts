import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductoComponent } from './pages/producto/producto.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CategoriaComponent,ProductoComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
