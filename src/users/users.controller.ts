import {
  Body,
  Controller,
  Get,
  HttpCode,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/:userId')
  @HttpCode(200)
  async getById(@Req() request) {
    return this.userService.getById(request.userId);
  }
}
