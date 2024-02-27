import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

const pinoLogger = LoggerModule.forRoot({
  pinoHttp: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

@Module({
  imports: [pinoLogger],
  exports: [pinoLogger],
})
export class PinoLoggerModule {}
