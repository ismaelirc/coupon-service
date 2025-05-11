import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CouponModule,
    DatabaseModule,
  ],
  providers: [],
})
export class AppModule { }
