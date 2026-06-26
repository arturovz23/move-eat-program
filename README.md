# Move Eat Program — Landing Page

Landing page del programa de nutrición deportiva Move Eat Program por Alexa Mendivil (@_nutrialexa).

## Stack

- [Astro](https://astro.build/) — framework de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com/) — estilos
- MercadoPago — link de pago externo

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo (localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Antes de publicar

1. Crear cuenta de MercadoPago para el negocio
2. Generar link de pago en el dashboard de MercadoPago
3. Reemplazar `LINK_DE_PAGO` en `src/components/Pricing.astro` con el link real
4. Actualizar `site` y `base` en `astro.config.mjs` con tu usuario de GitHub

## Publicar en GitHub Pages

```bash
# Crear repo en GitHub como: move-eat-program
git init
git add .
git commit -m "init: landing page move eat program"
git remote add origin https://github.com/TU_USUARIO/move-eat-program.git
git push -u origin main
```

Después activar GitHub Pages en Settings → Pages → Source: GitHub Actions.

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── ForWho.astro
│   ├── Benefits.astro
│   ├── HowItWorks.astro
│   ├── Pricing.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```
