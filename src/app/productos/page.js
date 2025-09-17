import Link from "next/link";

export default function ProductosPage() {
  const productos = [
    { id: "1", nombre: "Laptop" },
    { id: "2", nombre: "Smartphone" },
    { id: "3", nombre: "Tablet" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ul className="list-disc pl-6 space-y-2">
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link
              href={`/productos/${producto.id}`}
              className="text-blue-600 hover:underline"
            >
              {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
