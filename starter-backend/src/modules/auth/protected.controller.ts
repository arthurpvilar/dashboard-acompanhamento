import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('protected')
@Controller('protected')
export class ProtectedController {
  @Get('route')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Access a protected route' })
  @ApiResponse({
    status: 200,
    description: 'Successfully accessed protected route.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized protected.' })
  async getProtectedRoute(@Req() req) {
    return { message: 'Protected route accessed', user: req.user };
  }
}
