declare module 'express-useragent' {
  export interface UserAgent {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isBot: boolean;
    browser: string;
    version: string;
    os: string;
    platform: string;
    source: string;
  }

  export function parse(userAgentString: string): UserAgent;
}
