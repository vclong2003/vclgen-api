import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule as BaseMongooseModule } from '@nestjs/mongoose';
import { EApiConfigKey } from 'src/config/api.config';

const mongooseModule = BaseMongooseModule.forRootAsync({
  useFactory: async (configService: ConfigService) => ({
    uri: await configService.get(EApiConfigKey.MongoDbUri),
  }),
  inject: [ConfigService],
});

@Global()
@Module({
  imports: [mongooseModule],
  exports: [mongooseModule],
})
export class MongooseModule {}
