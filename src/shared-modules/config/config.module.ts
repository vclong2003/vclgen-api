import { Global, Module } from '@nestjs/common';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import apiConfig from 'src/config/api.config';
import jwtConfig from 'src/config/jwt.config';
import passwordConfig from 'src/config/password.config';

const configModule = BaseConfigModule.forRoot({
  load: [apiConfig, jwtConfig, passwordConfig],
  cache: true,
});

@Global()
@Module({
  imports: [configModule],
  exports: [configModule],
})
export class ConfigModule {}
