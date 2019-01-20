import { Controller, Get } from '@nestjs/common';
import { GroupService } from '../services/group.service';

@Controller('api/group')
export class GroupController {  
  constructor(private readonly groupService: GroupService) {}

  @Get('event')
  findEvents() {
    return this.groupService.fetchEvent();
  }
}
