import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('/api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query) {
    
  }

  @Post(':id/chats')
  postChat() {}
}
