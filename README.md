# @betting-ground/prisma-lib

A reusable Prisma database services package for the betting ground application.

## Installation

This package is designed to be used as a local dependency in your project.

## Usage

### Import the module in your NestJS application:

```typescript
import { PrismaModule } from '@betting-ground/prisma-lib';

@Module({
  imports: [PrismaModule],
  // ... other module configuration
})
export class AppModule {}
```

### Use the services in your components:

```typescript
import { Injectable } from '@nestjs/common';
import { 
  PrismaReadService, 
  PrismaWriteService,
  PrismaReadLogsService,
  PrismaWriteLogsService,
  PrismaReadStatsService,
  PrismaWriteStatsService
} from '@betting-ground/prisma-lib';

@Injectable()
export class YourService {
  constructor(
    private readonly prismaRead: PrismaReadService,
    private readonly prismaWrite: PrismaWriteService,
  ) {}

  async getData() {
    return await this.prismaRead.yourModel.findMany();
  }

  async createData(data: any) {
    return await this.prismaWrite.yourModel.create({ data });
  }
}
```

## Environment Variables

Make sure to set the following environment variables:

- `SQL_READ_CONNECTION` - Main database read connection string
- `SQL_WRITE_CONNECTION` - Main database write connection string
- `SQL_LOGS_READ_CONNECTION` - Logs database read connection string
- `SQL_LOGS_WRITE_CONNECTION` - Logs database write connection string
- `SQL_STATS_READ_CONNECTION` - Statistics database read connection string
- `SQL_STATS_WRITE_CONNECTION` - Statistics database write connection string

## Build

```bash
npm run build
```

## Development

```bash
npm run dev
```
# betting-ground-library
