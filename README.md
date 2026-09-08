# Frökenhag

Frökenhag is a static, single-page website for educational material aimed at primary school. Phase 1 is a simple client-side React application with no backend, database, authentication, or server-side rendering.  
Phase 2 will implement a web shop to sell material. 


## Tech stack

Phase 1 is a deliberately minimal client-rendered static application:

- **React + React DOM** provide the component runtime and client-side mount. Rendering targets the `#root` container; state is limited to UI concerns such as the mobile-navigation toggle.
- **Vite** owns the development server, JSX/ESM transformation, dependency pre-bundling, asset fingerprinting, and production chunk generation. The project is configured for native ESM (`"type": "module"`).
- **Vanilla CSS** implements the design tokens, layout, breakpoints, and component styling from a single global stylesheet. There is no CSS framework, CSS-in-JS layer, or runtime styling dependency.
- **Static assets** enter through the module graph and are emitted as content-addressed files at build time, enabling cache-friendly deployment to a static host.
- **External resources** are limited to Google Fonts (Fredoka and Karla). The current phase has no application API, backend service, database, authentication flow, or analytics dependency.

The resulting `dist/` directory is a self-contained deployment artifact: HTML, hashed JavaScript/CSS bundles, and image assets.
