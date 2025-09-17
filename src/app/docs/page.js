import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Documentación</h1>
      <p className="mb-4">Selecciona una sección de la documentación:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/docs/guia/instalacion" className="text-blue-600 hover:underline">
            Guía de Instalación
          </Link>
        </li>
        <li>
          <Link href="/docs/api/componentes" className="text-blue-600 hover:underline">
            API de Componentes
          </Link>
        </li>
      </ul>
    </div>
  );
}
