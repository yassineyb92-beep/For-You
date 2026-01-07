import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './common/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { PromoCodesModule } from './promo-codes/promo-codes.module';
import { TablesModule } from './tables/tables.module';
import { WebsocketModule } from './websocket/websocket.module';
import { AppController } from './app.controller';
import { BullModule } from '@nestjs/bullmq';
import { Redis } from 'ioredis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('RATE_LIMIT_TTL') || 60,
        limit: config.get('RATE_LIMIT_MAX') || 100,
      }),
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const redisUrl = config.get('REDIS_URL') || 'redis://localhost:6379';
        return {
          connection: new Redis(redisUrl, {
            maxRetriesPerRequest: null,
          }),
        };
      },
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    MenuModule,
    OrdersModule,
    PaymentsModule,
    PromoCodesModule,
    TablesModule,
    WebsocketModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
