import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo endereço' })
  @ApiResponse({
    status: 201,
    description: 'O endereço foi criado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os endereços' })
  @ApiResponse({ status: 200, description: 'Endereços listados com sucesso.' })
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um endereço pelo seu ID' })
  @ApiResponse({ status: 200, description: 'Endereço encontrado.' })
  @ApiResponse({ status: 404, description: 'Endereço não encontrado.' })
  findOne(@Param('id') id: number) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um endereço pelo seu ID' })
  @ApiResponse({ status: 200, description: 'Endereço atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Endereço não encontrado.' })
  update(@Param('id') id: number, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um endereço pelo seu ID' })
  @ApiResponse({ status: 204, description: 'Endereço removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Endereço não encontrado.' })
  remove(@Param('id') id: number) {
    return this.addressService.remove(id);
  }
}
