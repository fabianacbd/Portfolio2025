// src/data/projects.ts
export const projects = [
  {
    slug: "mi-primer-proyecto",
    metadata: {
      title: "Mi Primer Proyecto",
      summary: "Descripción corta del proyecto",
      publishedAt: "2024-03-01",
      image: "/images/projects/proyecto1.jpg",
      images: ["/images/projects/proyecto1.jpg"],
      team: [
        {
          name: "Tu Nombre",
          avatar: "/images/avatar.jpg",
          linkedIn: "https://linkedin.com/in/tuusuario",
        },
      ],
    },
    content: `
## Sobre el proyecto

Este proyecto lo he creado manualmente sin usar la API.

- Next.js
- TypeScript
- Once UI
    `,
  },
  {
    slug: "otro-proyecto",
    metadata: {
      title: "Otro Proyecto",
      summary: "Otro proyecto añadido a mano",
      publishedAt: "2024-05-10",
      image: "/images/projects/proyecto2.jpg",
      images: ["/images/projects/proyecto2.jpg"],
      team: [],
    },
    content: `
## Detalles

Más contenido en **MDX** o markdown.
    `,
  },
];
