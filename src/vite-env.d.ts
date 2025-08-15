/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENWEATHER_KEY: string
  readonly GITHUB_PAGES?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
