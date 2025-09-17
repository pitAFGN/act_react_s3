import Link from "next/link";

export default function ProductoPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Producto: {id}</h2>
      <p className="mb-4">
        Este es un producto de ejemplo llamado <strong>{id}</strong>.  
        Aquí podrías mostrar información más detallada.
      </p>

      <Link
        href="/productos"
        className="text-blue-600 hover:underline"
      >
        ← Volver a la lista de productos
      </Link>
    </div>
  );
}
