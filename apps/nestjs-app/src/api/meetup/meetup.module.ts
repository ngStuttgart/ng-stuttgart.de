import { Module, HttpModule } from '@nestjs/common';
import { GroupService } from './services/group.service';
import { GroupController } from './controllers/group.controller';

export const MEETUP_API_URL = 'https://api.meetup.com';

@Module({
  imports: [HttpModule],
  providers: [GroupService],
  controllers: [GroupController]
})
export class MeetupModule {}
