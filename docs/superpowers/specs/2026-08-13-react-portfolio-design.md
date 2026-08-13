# Diseño del portafolio React

> **Estado:** especificación histórica del diseño inicial. La arquitectura de
> rutas aquí descrita fue reemplazada por una página única con cinco secciones;
> consulte el `README.md` para la arquitectura vigente.

## Objetivo

Recrear en React, con fidelidad visual y de contenido, los cinco HTML proporcionados:

- `inicio.html`
- `experiencia-profesional.html`
- `habilidadesyeducacion.html`
- `proyectos-destacados.html`
- `contactos.html`

El resultado será un portafolio estático, responsive y accesible. Los HTML son la fuente de verdad para la interfaz y el contenido visible. El PDF del CV se publicará únicamente como archivo descargable.

## Alcance

El sitio tendrá cinco rutas:

| Ruta | Página de referencia |
| --- | --- |
| `/` | `inicio.html` |
| `/experiencia` | `experiencia-profesional.html` |
| `/habilidades` | `habilidadesyeducacion.html` |
| `/proyectos` | `proyectos-destacados.html` |
| `/contacto` | `contactos.html` |

También incluirá una página 404. No habrá backend, autenticación, CMS ni persistencia.

## Tecnología

- Vite con la plantilla React + TypeScript.
- React 19.
- React Router 7 en modo declarativo.
- Tailwind CSS 4 mediante el plugin oficial de Vite y configuración CSS-first.
- Vitest, React Testing Library y `user-event`.
- ESLint y TypeScript en modo estricto.

La selección se apoya en la documentación vigente consultada mediante Context7: Vite ofrece una plantilla oficial React TypeScript; React recomienda dividir la UI por responsabilidades y pasar datos mediante props; React Router ofrece `BrowserRouter`, `NavLink`, `Routes`, `Route` y `Outlet` para SPA declarativas; Tailwind 4 permite definir tokens con `@theme`.

## Arquitectura

La aplicación se dividirá en cuatro áreas:

1. **Aplicación y rutas:** arranque, router, layout y página 404.
2. **Componentes compartidos:** navegación, footer y primitivas visuales.
3. **Páginas:** composición específica de cada HTML.
4. **Contenido:** datos TypeScript tipados, separados de los componentes.

Estructura prevista:

```text
src/
  app/
    App.tsx
    routes.tsx
  assets/
    cv/
    images/
  components/
    layout/
    ui/
  data/
    portfolio.data.ts
    portfolio.types.ts
  pages/
    HomePage.tsx
    ExperiencePage.tsx
    SkillsEducationPage.tsx
    ProjectsPage.tsx
    ContactPage.tsx
    NotFoundPage.tsx
  utils/
    buildMailto.ts
  styles/
    globals.css
  test/
    setup.ts
```

## Componentes

### Layout

- `AppLayout`: contiene la navegación, el área principal mediante `Outlet` y decide si muestra el footer.
- `Navbar`: usa `NavLink`, conserva el estado activo de los HTML y ofrece un menú móvil accesible.
- `Footer`: reproduce el footer de `contactos.html`. Para mantener la fidelidad, solo se muestra en `/contacto`, porque los otros HTML no contienen markup de footer.

### Primitivas visuales

- `BentoCard`: superficie, borde, radio y efecto hover compartidos.
- `TechChip`: etiqueta tecnológica normal o destacada.
- `MaterialIcon`: wrapper accesible para Material Symbols.

No se forzará una abstracción cuando las estructuras de dos páginas sean visualmente diferentes. La reutilización se limitará a elementos realmente compartidos.

## Modelo de contenido

`portfolio.types.ts` definirá los tipos de perfil, experiencia, habilidad, educación, idioma, proyecto y contacto. `portfolio.data.ts` contendrá los datos visibles extraídos de los HTML.

Las listas se renderizarán desde datos tipados y usarán claves estables. Las páginas no contendrán grandes bloques de contenido duplicado.

Los HTML prevalecen si existe alguna diferencia con el PDF. Por ejemplo, la etiqueta visible del nivel de Kichwa conservará el valor del HTML.

## Diseño visual

Se conservarán:

- Fondo principal `#0b1326`.
- Acento primario `#89ceff`.
- Superficies navy y bordes definidos en los HTML.
- Inter para títulos y cuerpo.
- JetBrains Mono para etiquetas.
- Material Symbols para iconografía.
- Ancho máximo de 1200 px.
- Espaciado, radios, jerarquías tipográficas, grids bento y efectos hover.

Los tokens repetidos se centralizarán con `@theme` y variables CSS. Las páginas mantendrán sus diferencias legítimas de layout. El diseño de escritorio y los cortes responsive se compararán visualmente contra las referencias.

Las imágenes remotas se descargarán a `src/assets/images` cuando estén disponibles. Esto evita depender de URLs temporales y mantiene el resultado reproducible. El PDF:

`C:\Users\carlos.tontaquimba\Downloads\CARLOS VICENTE TONTAQUIMBA QUINCHUQUI- CV (1).pdf`

se copiará a los assets públicos con un nombre estable y el botón de Inicio iniciará su descarga.

## Navegación

`BrowserRouter` administrará las rutas. `NavLink` calculará el estado activo. El logo `CV.Dev` enlazará a Inicio.

En escritorio se conservará la barra horizontal. En móvil habrá un control con nombre accesible, estado expandido y navegación por teclado. Al cambiar de ruta, el menú se cerrará y el documento volverá al inicio.

Los enlaces de LinkedIn y GitHub abrirán una pestaña nueva con `noopener noreferrer`. El teléfono y el correo usarán protocolos `tel:` y `mailto:`.

## Formulario de contacto

El formulario será controlado por React y tendrá:

- Nombre obligatorio.
- Correo obligatorio y validado.
- Mensaje obligatorio.
- Mensajes de error asociados a cada campo.
- Foco en el primer campo inválido.

Si los datos son válidos, `buildMailto` generará una URL codificada hacia `carlos.tontaquimba1995@gmail.com`, con asunto y cuerpo prellenados, y abrirá el cliente de correo del usuario. No se afirmará que el mensaje fue enviado, porque `mailto:` no ofrece confirmación.

## Estados y errores

- Una ruta desconocida renderizará una página 404 con enlace a Inicio.
- Si una imagen no carga, conservará un fondo visual compatible y texto alternativo útil.
- Los campos inválidos mostrarán instrucciones concretas.
- El formulario no tendrá un estado falso de éxito.

## Accesibilidad

- HTML semántico con encabezados en orden.
- Enlace o control reconocible para cada interacción.
- Foco visible.
- Navegación completa por teclado.
- Etiquetas asociadas a inputs.
- `aria-current` mediante `NavLink`.
- Contraste conservado de la referencia.
- Respeto de `prefers-reduced-motion`.
- Los iconos decorativos quedarán ocultos para tecnologías de asistencia.

## Pruebas

Las pruebas cubrirán:

- Renderizado y contenido principal de las cinco rutas.
- Ruta activa de la navegación.
- Apertura y cierre del menú móvil.
- Renderizado de la página 404.
- Validación de los tres campos de contacto.
- Codificación correcta de la URL `mailto:`.
- Enlace de descarga del CV.

La implementación seguirá TDD para la lógica observable. Los detalles puramente visuales se verificarán mediante build y comparación en navegador.

## Verificación

Antes de considerar el trabajo terminado se ejecutarán:

1. Comprobación de tipos.
2. ESLint.
3. Tests.
4. Build de producción.
5. Vista previa del build.
6. Comparación visual en escritorio y móvil de las cinco rutas.
7. Prueba manual de navegación, descarga del CV, enlaces externos y generación del `mailto:`.

## Criterios de aceptación

- Las cinco rutas reproducen los HTML sin rediseño.
- La navegación funciona por URL y marca correctamente la página activa.
- La interfaz responde correctamente en escritorio y móvil.
- El contenido se obtiene de datos TypeScript tipados.
- El CV se descarga desde el botón de Inicio.
- El formulario valida sus campos y abre un correo prellenado.
- No hay errores de TypeScript, lint, tests ni build.
- El sitio es operable con teclado y respeta movimiento reducido.
