import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller';
// import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config'

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURL),
    ItemsModule,
    UsersModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
