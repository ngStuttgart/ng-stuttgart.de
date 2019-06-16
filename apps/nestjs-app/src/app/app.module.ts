import { Module } from '@nestjs/common';

import { MeetupModule } from '../api/meetup/meetup.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MeetupModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
