export default function DocsPage({ params }) {
  const { slug = [] } = params;

  // Título dinámico
  const title =
    slug.length > 0
      ? `Documentación: ${slug.join(" / ")}`
      : "Documentación: Inicio";

  // Breadcrumbs (Docs > Sección1 > Sección2...)
  const breadcrumbs = ["Docs", ...slug].join(" > ");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      {/* Breadcrumbs */}
      <p className="text-gray-600 mb-4">{breadcrumbs}</p>

      {/* Contenido dinámico */}
      {slug.length > 0 ? (
        <p>Estás viendo la sección: {slug.join(" / ")}</p>
      ) : (
        <p>Bienvenido a la documentación principal.</p>
      )}
    </div>
  );
}
