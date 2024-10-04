import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  BadRequestException,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: CreateUserDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // Rota para a rota protegida deve vir antes das rotas com parâmetros dinâmicos
  @Get('protected-route')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Protected route' })
  @ApiResponse({ status: 200, description: 'Successfully accessed protected route.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getProtectedRoute(@Req() req) {
    return { message: 'Protected route accessed', user: req.user };
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: 200,
    description: 'User retrieved successfully.',
    type: CreateUserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update user information' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully.',
    type: UpdateUserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiBody({ type: UpdateUserDto })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req,
  ) {
    if (req.user.id !== id) {
      throw new BadRequestException('You can only update your own profile.');
    }
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete user account' })
  @ApiResponse({ status: 200, description: 'User deleted successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async delete(@Param('id') id: string, @Req() req) {
    if (req.user.id !== id) {
      throw new BadRequestException('You can only delete your own account.');
    }
    return this.userService.deleteUser(id);
  }
}
