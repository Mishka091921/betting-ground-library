declare module 'request-ip' {
  export function getClientIp(req: any): string;
  export function mw(): any;
}
