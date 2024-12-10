import { Categoria } from "./Categoria";

export interface Producto {
  id: number;
  name: string;
  categoria: Categoria;  // Relación con Categoria
}
