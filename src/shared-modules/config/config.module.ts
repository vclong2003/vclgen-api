import { Global, Module } from '@nestjs/common';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';

const configModule = BaseConfigModule.forRoot({
  load: [],
  cache: true,
});

@Global()
@Module({
  imports: [configModule],
  exports: [configModule],
})
export class ConfigModule {}
