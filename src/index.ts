// Base service
export { BasePrismaService } from './prisma/base/base-prisma.service';

// Main database services
export { PrismaReadService } from './prisma/main/prisma-read-main.service';
export { PrismaWriteService } from './prisma/main/prisma-write-main.service';

// Logs database services
export { PrismaReadLogsService } from './prisma/logs/prisma-read-logs.service';
export { PrismaWriteLogsService } from './prisma/logs/prisma-write-logs.service';

// Statistics database services
export { PrismaReadStatsService } from './prisma/statistics/prisma-read-statistics.service';
export { PrismaWriteStatsService } from './prisma/statistics/prisma-write-statistics.service';

// Module
export { PrismaModule } from './prisma/prisma.module';

// Common utilities
export * from './common/utils/logger';
export * from './common/utils/response-builder.util';
export * from './common/utils/get-country-util';
export * from './common/utils/html-sanitier';
export * from './common/utils/link-sanitizer';
export * from './common/utils/get-client-device';
export * from './common/utils/get-client-ip';
export * from './common/utils/date.util';

// Common interfaces
export * from './common/interface/response.interface';

// Common enums
export * from './common/enums/account-type.enum';
export * from './common/enums/app-environment';

// Common decorators
export * from './common/decorators/level.decorator';
export * from './common/decorators/public.decorator';
export * from './common/decorators/roles.decorator';
export * from './common/decorators/user.decorator';

// Common DTOs
export * from './common/dto/user-dto';

// Common exceptions
export * from './common/exceptions/base.error';

// Common filters
export * from './common/filters/all-exceptions.filter';
// Note: PrismaExceptionFilter is not exported as it requires specific Prisma types
// The consuming application should handle Prisma exceptions directly

// Common guards
export * from './common/guards/jwt-auth.guard';
export * from './common/guards/level.guard';
export * from './common/guards/roles.guard';
export * from './common/guards/ws-jwt.guard';

// Common i18n - JSON files are not exported, they are imported directly when needed
