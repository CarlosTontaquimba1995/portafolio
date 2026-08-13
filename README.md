# Portafolio de Carlos Vicente Tontaquimba

Portafolio profesional de una sola página construido con React, TypeScript,
Vite y Tailwind CSS.

La ruta `/` compone Inicio, Experiencia, Habilidades, Proyectos y Contacto en
secciones consecutivas. La navegación usa hashes (`#inicio`, `#experiencia`,
`#habilidades`, `#proyectos` y `#contacto`) para desplazarse sin recargar.

## Desarrollo

```powershell
npm install
npm run dev
```

## Verificación

```powershell
npm run test:run
npm run test:e2e
npm run typecheck
npm run lint
npm run build
```

Las pruebas E2E requieren Chromium:

```powershell
npx playwright install chromium
```

## Despliegue

El proyecto no depende de un router del lado del cliente: toda la experiencia
vive en `/`. Se conservan las configuraciones de fallback para que los
proveedores sirvan el documento de entrada de forma consistente:

- Netlify y servicios compatibles: `public/_redirects`.
- Vercel: `vercel.json`.

Para otro proveedor, configure el fallback SPA equivalente antes de publicar.
