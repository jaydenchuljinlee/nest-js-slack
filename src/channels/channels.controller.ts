import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('/api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannels() {}  

  @Get(':name')
  getSpecificChannel() {

  }

  @Get(':name/chats')
  getChat(@Query() query) {
    
  }

  @Post(':name/chats')
  postChat() {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
