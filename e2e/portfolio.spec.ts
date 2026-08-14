import { expect, test } from '@playwright/test'

const sections = [
  { id: 'inicio', label: 'Home', heading: 'Carlos Vicente Tontaquimba Quinchuqui' },
  { id: 'experiencia', label: 'Experience', heading: 'Professional Experience' },
  { id: 'habilidades', label: 'Skills', heading: 'Technical Arsenal and Education' },
  { id: 'proyectos', label: 'Projects', heading: 'Architecture in Practice.' },
  { id: 'contacto', label: 'Contact', heading: "Let's connect" },
] as const

test('the root renders every portfolio section in order', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  const response = await page.goto('/')
  expect(response?.ok()).toBe(true)

  await expect(page.locator('main > section')).toHaveCount(5)
  expect(
    await page.locator('main > section').evaluateAll((elements) =>
      elements.map((element) => element.id),
    ),
  ).toEqual(sections.map(({ id }) => id))

  for (const section of sections) {
    await expect(
      page.locator(`#${section.id}`).getByRole('heading', {
        name: section.heading,
      }),
    ).toBeAttached()
  }

  await expect(page.locator('#contacto footer')).toHaveCount(1)
  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  )
  expect(horizontalOverflow).toBeLessThanOrEqual(1)

  const brokenImages = await page.locator('img').evaluateAll((images) =>
    images
      .filter(
        (image) =>
          !(image instanceof HTMLImageElement) ||
          !image.complete ||
          image.naturalWidth === 0,
      )
      .map((image) => image.getAttribute('src')),
  )
  expect(brokenImages).toEqual([])
  expect(consoleErrors).toEqual([])
})

test('desktop navigation updates hashes and the visible active section', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.startsWith('mobile'))
  await page.goto('/')

  const navigation = page.getByRole('navigation', {
    name: 'Main navigation',
  })

  for (const section of sections) {
    const link = navigation.getByRole('link', { name: section.label })
    await link.click()
    await expect(page).toHaveURL(new RegExp(`#${section.id}$`))
    await expect(link).toHaveAttribute('aria-current', 'location')
    await expect(page.locator(`#${section.id}`)).toBeInViewport()
  }
})

test('desktop navigation replays the arrival fade', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.startsWith('mobile'))
  await page.goto('/')

  const navigation = page.getByRole('navigation', {
    name: 'Main navigation',
  })
  const experience = page.locator('#experiencia')

  await navigation.getByRole('link', { name: 'Experience' }).click()
  await expect(experience).toHaveClass(/is-arriving/, { timeout: 3_000 })
  await expect(experience).not.toHaveClass(/is-arriving/, { timeout: 3_000 })

  await navigation.getByRole('link', { name: 'Home' }).click()
  await expect(page.locator('#inicio')).toHaveClass(/is-arriving/, {
    timeout: 3_000,
  })
  await navigation.getByRole('link', { name: 'Experience' }).click()
  await expect(experience).toHaveClass(/is-arriving/, { timeout: 3_000 })
})

test('source content and destinations remain available', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#experiencia article')).toHaveCount(7)
  await expect(page.locator('#proyectos article')).toHaveCount(3)

  const download = page.getByRole('link', { name: /Download CV/i })
  await expect(download).toHaveAttribute('href', '/cv-en.pdf')
  const pdfResponse = await page.request.get('/cv-en.pdf')
  expect(pdfResponse.ok()).toBe(true)
  expect(pdfResponse.headers()['content-type']).toContain('application/pdf')
  const spanishPdf = await page.request.get('/cv-es.pdf')
  expect(spanishPdf.ok()).toBe(true)

  await expect(
    page.getByRole('link', { name: '+593 939618855' }).first(),
  ).toHaveAttribute('href', 'tel:+593939618855')
  await expect(
    page.getByRole('link', { name: 'LinkedIn' }).first(),
  ).toHaveAttribute('href', /linkedin\.com/)
  await expect(
    page.locator('#contacto').getByRole('link', { name: 'GitHub' }).first(),
  ).toHaveAttribute('href', 'https://github.com/CarlosTontaquimba1995')
  await expect(
    page.getByRole('link', { name: 'Chat on WhatsApp' }),
  ).toHaveAttribute('href', 'https://wa.me/593939618855')
})

test('mobile menu uses a section hash and closes', async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'))

  await page.goto('/')
  const menuButton = page.getByRole('button', { name: 'Open menu' })
  await menuButton.click()
  await expect(
    page.getByRole('button', { name: 'Close menu' }),
  ).toHaveAttribute('aria-expanded', 'true')
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Projects' })
    .click()

  await expect(page).toHaveURL(/#proyectos$/)
  await expect(
    page.getByRole('navigation', { name: 'Mobile navigation' }),
  ).toHaveCount(0)
  await expect(page.locator('#proyectos')).toBeInViewport()
})

test('reduced motion shows all sections without animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')

  const motionStyles = await page.locator('#experiencia').evaluate((element) => {
    const styles = getComputedStyle(element)
    return {
      opacity: styles.opacity,
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
      transform: styles.transform,
    }
  })
  expect(motionStyles).toEqual({
    opacity: '1',
    scrollBehavior: 'auto',
    transform: 'none',
  })
})

test('the single page matches the approved visual composition', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('#contacto footer')).toBeVisible()
  await expect(page).toHaveScreenshot('single-page.png', {
    animations: 'disabled',
    fullPage: true,
  })
})

test('the architect card has no background portrait', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Systems Architect')).toBeVisible()
  await expect(page.locator('img[src="/images/profile.webp"]')).toHaveCount(0)
})
