import Link from "next/link";

export default function BlogPage() {
  const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-6 space-y-2">
        {articulos.map((articulo) => (
          <li key={articulo.slug}>
            <Link
              href={`/blog/${articulo.slug}`}
              className="text-blue-600 hover:underline"
            >
              {articulo.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
