import { Body, Controller, Delete, Get, Post, Put, Query, Req, Res, UseInterceptors } from '@nestjs/common';
import { UndefinedToNullInterCeptor } from 'src/common/interceptors/undefinedToNulI.interceptor';
import { User } from 'src/common/user.decorator';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterCeptor)
@Controller('/api/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.userService.postUsers(data.email, data.nickname, data.password);
  }

  @Post('login')
  login(@User() user) {
    return user.user;
  }

  @Post('logout')
  logout(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', {httpOnly: true});
    res.send('ok');
  }

}
