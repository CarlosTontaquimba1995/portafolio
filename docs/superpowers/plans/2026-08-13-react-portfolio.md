# React Portfolio Implementation Plan

> **Estado:** plan histórico de la implementación inicial. La arquitectura de
> cinco rutas y React Router fue reemplazada por la página única con navegación
> por secciones descrita en el `README.md`.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir un portafolio React con cinco rutas que reproduzca fielmente los HTML de referencia, descargue el CV y genere correos mediante un formulario validado.

**Architecture:** Una SPA Vite/React con React Router en modo declarativo y un layout compartido. El contenido vive en datos TypeScript tipados; las páginas solo componen componentes reutilizables y layouts específicos. Tailwind CSS 4 concentra el sistema visual en tokens CSS-first.

**Tech Stack:** React 19, TypeScript, Vite, React Router 7, Tailwind CSS 4, Vitest, React Testing Library, user-event, ESLint.

**Spec:** `docs/superpowers/specs/2026-08-13-react-portfolio-design.md`

## Global Constraints

- Los cinco HTML de `C:\Users\carlos.tontaquimba\Downloads` son la fuente de verdad visual y de contenido.
- Rutas exactas: `/`, `/experiencia`, `/habilidades`, `/proyectos`, `/contacto`.
- No rediseñar ni agregar contenido visible ajeno a los HTML.
- Fondo `#0b1326`, primario `#89ceff`, ancho máximo `1200px`.
- Inter para títulos/cuerpo, JetBrains Mono para etiquetas y Material Symbols para iconos.
- El PDF fuente es `C:\Users\carlos.tontaquimba\Downloads\CARLOS VICENTE TONTAQUIMBA QUINCHUQUI- CV (1).pdf`.
- El formulario usa `mailto:`; no existe backend ni estado falso de envío.
- TypeScript estricto, interfaz responsive, foco visible y `prefers-reduced-motion`.
- No crear commits salvo petición explícita del usuario.

## File Map

### Configuración

- `package.json`: dependencias y scripts `dev`, `build`, `lint`, `typecheck`, `test`, `test:run`, `preview`.
- `vite.config.ts`: plugins React y Tailwind.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript estricto.
- `eslint.config.js`: lint para TypeScript y React.
- `index.html`: metadatos, fuentes y nodo raíz.

### Aplicación

- `src/main.tsx`: montaje de React.
- `src/app/App.tsx`: `BrowserRouter`.
- `src/app/routes.tsx`: árbol de rutas.
- `src/components/layout/AppLayout.tsx`: navbar, `Outlet`, scroll y footer condicional.
- `src/components/layout/Navbar.tsx`: navegación desktop/móvil.
- `src/components/layout/Footer.tsx`: footer de Contacto.

### UI y contenido

- `src/components/ui/BentoCard.tsx`: tarjeta base.
- `src/components/ui/MaterialIcon.tsx`: icono decorativo o etiquetado.
- `src/components/ui/TechChip.tsx`: chip normal/destacado.
- `src/data/portfolio.types.ts`: contratos de contenido.
- `src/data/portfolio.data.ts`: contenido exacto de los HTML.
- `src/styles/globals.css`: tema Tailwind, base global y utilidades compartidas.

### Páginas

- `src/pages/HomePage.tsx`
- `src/pages/ExperiencePage.tsx`
- `src/pages/SkillsEducationPage.tsx`
- `src/pages/ProjectsPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/NotFoundPage.tsx`

### Lógica y pruebas

- `src/utils/buildMailto.ts`
- `src/utils/buildMailto.test.ts`
- `src/test/setup.ts`
- `src/test/renderApp.tsx`
- `src/app/smoke.test.tsx`
- `src/app/content-routes.test.tsx`
- `src/components/layout/Navbar.test.tsx`
- `src/data/portfolio.data.test.ts`
- `src/pages/ProjectsPage.test.tsx`
- `src/pages/ContactPage.test.tsx`

### Assets

- `public/carlos-vicente-tontaquimba-cv.pdf`
- `public/images/profile.webp`
- `public/images/project-judicial.webp`
- `public/images/project-dashboard.webp`
- `public/images/project-microservices.webp`
- `public/images/quito-map.webp`

---

### Task 1: Toolchain, test harness and visual foundation

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `eslint.config.js`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/styles/globals.css`
- Create: `src/test/setup.ts`
- Create: `src/app/smoke.test.tsx`

**Interfaces:**
- Produces: Vite build, Vitest jsdom environment, global Tailwind tokens and scripts used by all later tasks.

- [ ] **Step 1: Initialize package metadata and install current dependencies**

Create `package.json`:

```json
{
  "name": "carlos-tontaquimba-portfolio",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "typecheck": "tsc -b --pretty false",
    "test": "vitest",
    "test:run": "vitest run",
    "preview": "vite preview"
  }
}
```

Install latest releases through npm instead of hard-coding versions:

```powershell
npm install react react-dom react-router
npm install -D typescript vite @vitejs/plugin-react tailwindcss @tailwindcss/vite vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh @types/react @types/react-dom
```

- [ ] **Step 2: Add TypeScript, Vite and ESLint configuration**

Use this Vite contract:

```ts
/// <reference types="vitest/config" />

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
```

Set `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`, `jsx: "react-jsx"` and bundler module resolution in `tsconfig.app.json`.

- [ ] **Step 3: Write a failing smoke test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the portfolio brand', () => {
    render(<App />)
    expect(screen.getByText('CV.Dev')).toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Run the smoke test and verify RED**

Run: `npm run test:run -- src/app/smoke.test.tsx`

Expected: FAIL because `src/app/App.tsx` does not exist.

- [ ] **Step 5: Add the minimal entry point and temporary App**

```tsx
export function App() {
  return <div>CV.Dev</div>
}
```

Mount it from `src/main.tsx` with `createRoot`, `StrictMode`, and import `./styles/globals.css`.

- [ ] **Step 6: Define the exact CSS-first design tokens**

Start `globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-background: #0b1326;
  --color-surface: #0b1326;
  --color-surface-container-lowest: #060e20;
  --color-surface-container-low: #131b2e;
  --color-surface-container: #171f33;
  --color-surface-container-high: #222a3d;
  --color-surface-container-highest: #2d3449;
  --color-surface-bright: #31394d;
  --color-surface-variant: #2d3449;
  --color-primary: #89ceff;
  --color-primary-fixed: #c9e6ff;
  --color-primary-fixed-dim: #89ceff;
  --color-primary-container: #0ea5e9;
  --color-on-primary: #00344d;
  --color-on-primary-container: #003751;
  --color-on-background: #dae2fd;
  --color-on-surface: #dae2fd;
  --color-on-surface-variant: #bec8d2;
  --color-secondary: #bcc7de;
  --color-secondary-container: #3e495d;
  --color-on-secondary-container: #aeb9d0;
  --color-tertiary: #b7c8e1;
  --color-on-tertiary: #213145;
  --color-outline: #88929b;
  --color-outline-variant: #3e4850;
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --container-portfolio: 1200px;
  --spacing-base: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-gutter: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 64px;
}
```

Add base styles for dark background, antialiasing, selection, visible focus, Material Symbols and reduced motion.

- [ ] **Step 7: Verify the foundation**

Run:

```powershell
npm run test:run
npm run typecheck
npm run lint
npm run build
```

Expected: all commands exit with code 0.

### Task 2: Typed content model and shared visual primitives

**Files:**
- Create: `src/data/portfolio.types.ts`
- Create: `src/data/portfolio.data.ts`
- Create: `src/data/portfolio.data.test.ts`
- Create: `src/components/ui/BentoCard.tsx`
- Create: `src/components/ui/MaterialIcon.tsx`
- Create: `src/components/ui/TechChip.tsx`

**Interfaces:**
- Produces: `portfolio: PortfolioData`, `BentoCard`, `MaterialIcon`, and `TechChip`.
- `MaterialIcon` props: `{ name: string; label?: string; className?: string }`.
- `TechChip` props: `{ children: ReactNode; highlighted?: boolean }`.

- [ ] **Step 1: Define content interfaces**

```ts
export interface Experience {
  id: string
  role: string
  organization: string
  period: string
  contract?: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  layout: 'featured' | 'compact' | 'wide'
}

export interface PortfolioData {
  profile: {
    name: string
    title: string
    summary: string
    about: string
    relocation: string
  }
  experiences: Experience[]
  skills: Record<string, string[]>
  education: Array<{ degree: string; institution: string }>
  languages: Array<{ name: string; level: string }>
  projects: Project[]
  contact: {
    email: string
    phoneDisplay: string
    phoneHref: string
    location: string
    linkedin: string
    github: string
  }
}
```

- [ ] **Step 2: Write failing data integrity tests**

```ts
import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio.data'

describe('portfolio data', () => {
  it('contains all source experience entries', () => {
    expect(portfolio.experiences).toHaveLength(7)
    expect(portfolio.experiences[0].role).toBe('Analista de Sistemas de Información 2')
  })

  it('preserves the source contact details', () => {
    expect(portfolio.contact.email).toBe('carlos.tontaquimba1995@gmail.com')
    expect(portfolio.contact.phoneHref).toBe('+593939618855')
  })

  it('contains the three featured projects', () => {
    expect(portfolio.projects.map(({ title }) => title)).toEqual([
      'Sistema de Gestión Judicial',
      'Panel de Control Frontend',
      'Plataforma E-commerce de Microservicios',
    ])
  })
})
```

- [ ] **Step 3: Run the data tests and verify RED**

Run: `npm run test:run -- src/data/portfolio.data.test.ts`

Expected: FAIL because `portfolio.data.ts` does not exist.

- [ ] **Step 4: Transcribe all content exactly**

Populate `portfolio.data.ts` from:

- `C:\Users\carlos.tontaquimba\Downloads\inicio.html`
- `C:\Users\carlos.tontaquimba\Downloads\experiencia-profesional.html`
- `C:\Users\carlos.tontaquimba\Downloads\habilidadesyeducacion.html`
- `C:\Users\carlos.tontaquimba\Downloads\proyectos-destacados.html`
- `C:\Users\carlos.tontaquimba\Downloads\contactos.html`

Use `satisfies PortfolioData` so missing or misspelled fields fail type checking. Preserve accents, capitalization, dates and visible labels from the HTML, including `Kichwa: Fluido`.

- [ ] **Step 5: Implement shared primitives**

`MaterialIcon` must expose named icons only when `label` exists:

```tsx
export function MaterialIcon({ name, label, className = '' }: MaterialIconProps) {
  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={`material-symbols-outlined ${className}`}
      role={label ? 'img' : undefined}
    >
      {name}
    </span>
  )
}
```

Implement `BentoCard` with `bg-surface-container-low border border-outline-variant rounded-lg` and the subtle primary hover glow. Implement `TechChip` with JetBrains Mono, 12 px text, 4/12 px padding, and highlighted primary variant.

- [ ] **Step 6: Verify data and primitives**

Run: `npm run test:run -- src/data/portfolio.data.test.ts && npm run typecheck`

Expected: PASS.

### Task 3: Routing, shared layout and responsive navigation

**Files:**
- Create: `src/app/routes.tsx`
- Modify: `src/app/App.tsx`
- Create: `src/components/layout/AppLayout.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/ScrollToTop.tsx`
- Create: `src/components/layout/Navbar.test.tsx`
- Create: `src/test/renderApp.tsx`
- Create: `src/pages/NotFoundPage.tsx`

**Interfaces:**
- Consumes: `portfolio.contact`, `MaterialIcon`.
- Produces: all route paths, active navigation, mobile menu, conditional footer and 404 behavior.

- [ ] **Step 1: Add a reusable router test helper**

```tsx
export function renderAt(route: string) {
  window.history.pushState({}, '', route)
  return render(<App />)
}
```

- [ ] **Step 2: Write failing navigation tests**

```tsx
describe('Navbar', () => {
  it('marks Experiencia as active', () => {
    renderAt('/experiencia')
    expect(screen.getByRole('link', { name: 'Experiencia' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const button = screen.getByRole('button', { name: 'Abrir menú' })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: 'Proyectos' }))
    expect(screen.queryByRole('navigation', { name: 'Navegación móvil' })).not.toBeInTheDocument()
  })

  it('renders a not-found page', () => {
    renderAt('/ruta-inexistente')
    expect(screen.getByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
  })
})
```

- [ ] **Step 3: Run navigation tests and verify RED**

Run: `npm run test:run -- src/components/layout/Navbar.test.tsx`

Expected: FAIL because the router layout does not exist.

- [ ] **Step 4: Implement declarative routes and layout**

Use this route tree:

```tsx
<Routes>
  <Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="experiencia" element={<ExperiencePage />} />
    <Route path="habilidades" element={<SkillsEducationPage />} />
    <Route path="proyectos" element={<ProjectsPage />} />
    <Route path="contacto" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
```

Temporarily create page exports with their final `<h1>` so the route tree compiles; subsequent tasks replace their bodies.

- [ ] **Step 5: Implement desktop and mobile navigation**

Centralize links:

```ts
export const navigation = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/experiencia', label: 'Experiencia' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
] as const
```

The active class must match the reference: primary text and 2 px primary bottom border. Add an accessible mobile button with `aria-expanded`, `aria-controls`, Escape handling, focus-visible styles and close-on-navigation.

- [ ] **Step 6: Implement footer and route-change behavior**

Use `useLocation` in `AppLayout`; render `Footer` only when `pathname === '/contacto'`. `ScrollToTop` calls `window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })` on pathname change.

- [ ] **Step 7: Run focused and full checks**

Run:

```powershell
npm run test:run -- src/components/layout/Navbar.test.tsx
npm run typecheck
npm run lint
```

Expected: PASS.

### Task 4: Home, experience and skills/education pages

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/ExperiencePage.tsx`
- Modify: `src/pages/SkillsEducationPage.tsx`
- Create: `src/app/content-routes.test.tsx`
- Copy: `public/carlos-vicente-tontaquimba-cv.pdf`
- Create: `public/images/profile.webp`
- Create: `public/images/quito-map.webp`

**Interfaces:**
- Consumes: `portfolio`, `BentoCard`, `TechChip`, `MaterialIcon`.
- Produces: source-faithful content for `/`, `/experiencia`, `/habilidades`.

- [ ] **Step 1: Write failing page-content tests**

```tsx
describe('portfolio content routes', () => {
  it.each([
    ['/', 'Carlos Vicente Tontaquimba Quinchuqui'],
    ['/experiencia', 'Experiencia Profesional'],
    ['/habilidades', 'Arsenal Técnico y Educación'],
  ])('renders %s', (route, heading) => {
    renderAt(route)
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
  })

  it('links the downloadable CV', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: /Descargar CV/i })).toHaveAttribute(
      'href',
      '/carlos-vicente-tontaquimba-cv.pdf',
    )
  })
})
```

- [ ] **Step 2: Run tests and verify RED**

Run: `npm run test:run -- src/app/content-routes.test.tsx`

Expected: at least the CV assertion fails.

- [ ] **Step 3: Copy required assets**

Copy the provided PDF without modifying it:

```powershell
Copy-Item "C:\Users\carlos.tontaquimba\Downloads\CARLOS VICENTE TONTAQUIMBA QUINCHUQUI- CV (1).pdf" "C:\Users\carlos.tontaquimba\Documents\React\portafolio\public\carlos-vicente-tontaquimba-cv.pdf"
```

Download the exact profile and Quito map URLs embedded in the source HTML to the named local image files. If the server does not provide WebP, preserve its returned format and update both filename and data path consistently.

- [ ] **Step 4: Implement Home**

Recreate the 12-column bento hero from `inicio.html`: profile card spans 8 columns, visual card spans 4, About spans 7 and Stack spans 5. The CV control is an anchor with `download`; Contactar routes to `/contacto`. Use the exact source copy and image alt text.

- [ ] **Step 5: Implement Experience**

Render all seven `portfolio.experiences` entries. Preserve the desktop timeline line, active-role glowing dot, period pills, organization hierarchy, achievement chevrons and chips. Use semantic `<ol>` for chronological entries and nested `<ul>` for achievements.

- [ ] **Step 6: Implement Skills and Education**

Recreate the 8/4 column bento layout: languages, backend, frontend, databases and Cloud & DevOps on the left; education timeline, human languages and Quito card on the right. Preserve exact source labels and highlights.

- [ ] **Step 7: Verify the three routes**

Run:

```powershell
npm run test:run -- src/app/content-routes.test.tsx
npm run typecheck
npm run lint
npm run build
```

Expected: PASS.

### Task 5: Projects page and local project imagery

**Files:**
- Modify: `src/pages/ProjectsPage.tsx`
- Create: `src/pages/ProjectsPage.test.tsx`
- Create: `public/images/project-judicial.webp`
- Create: `public/images/project-dashboard.webp`
- Create: `public/images/project-microservices.webp`

**Interfaces:**
- Consumes: `portfolio.projects`, `MaterialIcon`, `TechChip`.
- Produces: exact `/proyectos` bento gallery.

- [ ] **Step 1: Write failing project tests**

```tsx
describe('ProjectsPage', () => {
  it('renders all projects and their layout content', () => {
    renderAt('/proyectos')
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByText('Sistema de Gestión Judicial')).toBeInTheDocument()
    expect(screen.getByText('Panel de Control Frontend')).toBeInTheDocument()
    expect(screen.getByText('Plataforma E-commerce de Microservicios')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test and verify RED**

Run: `npm run test:run -- src/pages/ProjectsPage.test.tsx`

Expected: FAIL while the page only renders its initial heading.

- [ ] **Step 3: Download exact source images**

Read the three `background-image` URLs from `proyectos-destacados.html` and save them under `public/images`. Verify each response is an image and each file has non-zero size.

- [ ] **Step 4: Implement the project variants**

Map `Project['layout']` to:

```ts
const projectLayoutClass = {
  featured: 'md:col-span-8',
  compact: 'md:col-span-4',
  wide: 'md:col-span-12 md:flex-row',
} satisfies Record<Project['layout'], string>
```

Preserve image heights, borders, opacity, title hierarchy, descriptive copy, stack group labels and action labels. Links whose source value is only `#` must not trigger navigation; render them as descriptive disabled controls with `aria-disabled="true"` because no real destination was provided.

- [ ] **Step 5: Verify Projects**

Run: `npm run test:run -- src/pages/ProjectsPage.test.tsx && npm run typecheck && npm run lint`

Expected: PASS.

### Task 6: Contact form validation and mailto behavior

**Files:**
- Create: `src/utils/buildMailto.ts`
- Create: `src/utils/buildMailto.test.ts`
- Modify: `src/pages/ContactPage.tsx`
- Create: `src/pages/ContactPage.test.tsx`

**Interfaces:**
- Produces: `buildMailto(input: ContactFormValues): string`.
- `ContactFormValues`: `{ name: string; email: string; message: string }`.

- [ ] **Step 1: Write failing mailto unit tests**

```ts
describe('buildMailto', () => {
  it('encodes the subject and body', () => {
    expect(
      buildMailto({
        name: 'María Pérez',
        email: 'maria@example.com',
        message: 'Hola Carlos & equipo',
      }),
    ).toBe(
      'mailto:carlos.tontaquimba1995@gmail.com?subject=Contacto%20desde%20el%20portafolio%20-%20Mar%C3%ADa%20P%C3%A9rez&body=Nombre%3A%20Mar%C3%ADa%20P%C3%A9rez%0ACorreo%3A%20maria%40example.com%0A%0AMensaje%3A%0AHola%20Carlos%20%26%20equipo',
    )
  })
})
```

- [ ] **Step 2: Run unit test and verify RED**

Run: `npm run test:run -- src/utils/buildMailto.test.ts`

Expected: FAIL because the utility does not exist.

- [ ] **Step 3: Implement the pure mailto builder**

```ts
export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export function buildMailto({ name, email, message }: ContactFormValues): string {
  const subject = `Contacto desde el portafolio - ${name.trim()}`
  const body = `Nombre: ${name.trim()}\nCorreo: ${email.trim()}\n\nMensaje:\n${message.trim()}`
  return `mailto:carlos.tontaquimba1995@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
```

- [ ] **Step 4: Write failing interaction tests**

```tsx
describe('ContactPage', () => {
  it('shows actionable errors and focuses the first invalid field', async () => {
    const user = userEvent.setup()
    renderAt('/contacto')
    await user.click(screen.getByRole('button', { name: 'Enviar Mensaje' }))
    expect(screen.getByLabelText('Nombre')).toHaveFocus()
    expect(screen.getByText('Ingresa tu nombre.')).toBeInTheDocument()
    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument()
    expect(screen.getByText('Escribe un mensaje.')).toBeInTheDocument()
  })

  it('opens a mailto URL for valid values', async () => {
    const user = userEvent.setup()
    const assign = vi.spyOn(window.location, 'assign').mockImplementation(() => undefined)
    renderAt('/contacto')
    await user.type(screen.getByLabelText('Nombre'), 'Ana')
    await user.type(screen.getByLabelText('Email'), 'ana@example.com')
    await user.type(screen.getByLabelText('Mensaje'), 'Hola')
    await user.click(screen.getByRole('button', { name: 'Enviar Mensaje' }))
    expect(assign).toHaveBeenCalledWith(expect.stringMatching(/^mailto:/))
  })
})
```

If jsdom prevents spying on `window.location.assign`, inject an `openMailto: (url: string) => void` prop with a default implementation and test the injected function.

- [ ] **Step 5: Implement the controlled form**

Use one state object for values and one for errors. Validate trimmed name/message and email against `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Associate errors using `aria-invalid` and `aria-describedby`. Store refs for all fields and focus the first invalid field in source order.

Recreate the exact 8/4 bento contact layout, details, social links and footer from `contactos.html`.

- [ ] **Step 6: Run contact checks**

Run:

```powershell
npm run test:run -- src/utils/buildMailto.test.ts src/pages/ContactPage.test.tsx
npm run typecheck
npm run lint
```

Expected: PASS.

### Task 7: Full verification and visual parity

**Files:**
- Modify only files with verified defects.

**Interfaces:**
- Consumes: complete application.
- Produces: production-ready, visually checked portfolio.

- [ ] **Step 1: Run the automated quality gate**

Run:

```powershell
npm run test:run
npm run typecheck
npm run lint
npm run build
```

Expected: all commands exit with code 0 and Vite produces `dist`.

- [ ] **Step 2: Start the production preview**

Run: `npm run preview -- --host 127.0.0.1`

Expected: Vite reports a local preview URL and remains running.

- [ ] **Step 3: Compare all desktop routes**

At approximately 1440×900, inspect:

- `/`
- `/experiencia`
- `/habilidades`
- `/proyectos`
- `/contacto`
- `/ruta-inexistente`

For each route compare typography, 1200 px content width, 24 px gutters, card spans, colors, borders, image crops, active navigation and footer visibility against its source HTML.

- [ ] **Step 4: Compare mobile behavior**

At approximately 390×844, verify:

- no horizontal overflow;
- cards collapse in source order;
- headings remain readable;
- menu opens, traps no focus, closes on Escape and navigation;
- controls meet visible focus requirements;
- contact inputs and action button fit the viewport.

- [ ] **Step 5: Exercise real interactions**

Verify:

- CV download returns the provided PDF.
- LinkedIn, GitHub, telephone and direct email links have correct destinations.
- Contact validation rejects empty and malformed values.
- Valid contact values open a correctly prefilled mail client.
- Unknown route links back to Inicio.

- [ ] **Step 6: Verify reduced motion and asset failures**

Emulate `prefers-reduced-motion: reduce`; ensure transitions and smooth scrolling are disabled. Block one image request and confirm its container and alternative description remain usable.

- [ ] **Step 7: Run the final quality gate after visual fixes**

Run:

```powershell
npm run test:run
npm run typecheck
npm run lint
npm run build
```

Expected: all commands exit with code 0. Do not claim completion without recording these results.
