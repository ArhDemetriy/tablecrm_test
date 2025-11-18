/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Токен для доступа к API документов продаж */
  readonly VITE_DOCS_SALES_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
