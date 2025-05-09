# Techzy - Monorepo

Este proyecto utiliza TurboRepo para gestionar múltiples aplicaciones en un solo repositorio.

## Estructura del Proyecto

- `frontend`: Aplicación principal para usuarios
- `frontend-admin`: Panel de administración
- `backend`: API y servicios de backend

## Comandos Disponibles

Para ejecutar todos los proyectos al mismo tiempo:

```bash
npm run dev
```

Para construir todos los proyectos:

```bash
npm run build
```

Para ejecutar un proyecto específico:

```bash
cd frontend
npm run dev

# o

cd frontend-admin
npm run dev

# o

cd backend
npm run dev
```

## Dependencias

Cada proyecto tiene sus propias dependencias definidas en su respectivo package.json. Las dependencias comunes y la configuración de TurboRepo se manejan en el package.json raíz.

## Configuración

La configuración de TurboRepo se encuentra en el archivo `turbo.json` en la raíz del proyecto.
