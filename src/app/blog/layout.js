import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div className="p-6">
      {/* Título principal de la sección */}
      <h1 className="text-3xl font-bold mb-6">Sección de Blog</h1>

      {/* Navegación secundaria */}
      <nav className="mb-6">
        <ul className="flex space-x-4 text-blue-600">
          <li>
            <Link href="/blog/articulo-1" className="hover:underline">
              Artículo 1
            </Link>
          </li>
          <li>
            <Link href="/blog/articulo-2" className="hover:underline">
              Artículo 2
            </Link>
          </li>
          <li>
            <Link href="/blog/articulo-3" className="hover:underline">
              Artículo 3
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contenido dinámico */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        {children}
      </div>
    </div>
  );
}
