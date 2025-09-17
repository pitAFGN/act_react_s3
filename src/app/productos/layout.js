import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Sección de Productos</h1>

      <nav className="mb-6">
        <ul className="flex space-x-4 text-blue-600">
          <li>
            <Link href="/productos/laptop" className="hover:underline">
              Laptops
            </Link>
          </li>
          <li>
            <Link href="/productos/smartphone" className="hover:underline">
              Smartphones
            </Link>
          </li>
          <li>
            <Link href="/productos/tablet" className="hover:underline">
              Tablets
            </Link>
          </li>
        </ul>
      </nav>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        {children}
      </div>
    </div>
  );
}
