/// <reference types="vite/client" />

declare module 'stylelint-config-recommended' {
  const config: { rules?: Record<string, unknown> };
  export default config;
}

declare module 'stylelint-config-standard' {
  const config: { rules?: Record<string, unknown> };
  export default config;
}
