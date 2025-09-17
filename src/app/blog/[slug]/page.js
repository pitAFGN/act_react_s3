import Link from "next/link";

export default function ArticuloPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Artículo: {slug}</h2>
      <p className="mb-4">
        Este es un artículo de ejemplo con el identificador <strong>{slug}</strong>.  
        Aquí podrías mostrar el contenido real del artículo.
      </p>

      <Link
        href="/blog"
        className="text-blue-600 hover:underline"
      >
        ← Volver a la lista de artículos
      </Link>
    </div>
  );
}
