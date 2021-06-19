import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
imports: [MongooseModule.forRoot('mongodb+srv://dbuser:@stgnavalbase.tonvo.mongodb.net/pantry?retryWrites=true&w=majority'), ItemsModule],
controllers: [AppController],
providers: [AppService],
})

export class AppModule {}
