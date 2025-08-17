// common/utils/get-client-ip.ts
import * as requestIp from 'request-ip'; 

export function getClientIp(req: Request): string {
  const ip = requestIp.getClientIp(req);
  return ip
}
