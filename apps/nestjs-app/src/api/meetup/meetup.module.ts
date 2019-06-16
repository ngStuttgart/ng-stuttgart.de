import { HttpModule, Module } from '@nestjs/common';
import { GroupController } from './controllers/group.controller';
import { GroupService } from './services/group.service';

export const MEETUP_API_URL = 'https://api.meetup.com';

@Module({
  imports: [HttpModule],
  providers: [GroupService],
  controllers: [GroupController]
})
export class MeetupModule {}
