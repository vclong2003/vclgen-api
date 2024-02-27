import { Module } from '@nestjs/common';
import { ConfigModule } from './shared-modules/config/config.module';
import { PinoLoggerModule } from './shared-modules/pino-logger/pino-logger.module';

@Module({
  imports: [ConfigModule, PinoLoggerModule],
  providers: [],
})
export class AppModule {}
