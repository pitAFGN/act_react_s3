import Link from "next/link";
import "./globals.css"; // si usas estilos globales

export const metadata = {
  title: "Mi Sitio Web",
  description: "Ejemplo de layout en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Barra de navegación */}
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "#f4f4f4",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        {/* Contenido dinámico */}
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
