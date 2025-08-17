export interface I18nServiceInterface {
  translate(key: string, lang: string, params?: Record<string, any>): string;
}
