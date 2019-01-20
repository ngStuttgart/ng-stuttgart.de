import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetupModule } from '../api/meetup/meetup.module';

@Module({
  imports: [MeetupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
