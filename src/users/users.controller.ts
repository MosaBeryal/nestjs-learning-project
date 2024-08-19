import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // Get users
  @Get()
  findAll() {
    return ['User 1', 'User 2', 'User 3'];
  }
  //Get user by id
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return `User with ID: ${id}`;
  }
}
