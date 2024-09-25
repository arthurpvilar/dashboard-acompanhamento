import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';

import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { AccountSettingsDto } from './dto/account-settings.dto';
import { forgetPasswordDto } from './dto/forget-password.dto';
import { LoginDto } from './dto/login-company-dto';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova empresa' })
  @ApiBody({ type: CreateCompanyDto })
  @ApiResponse({ status: 201, description: 'Empresa criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos' })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as empresas' })
  @ApiResponse({ status: 200, description: 'Empresas recuperadas com sucesso' })
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma empresa pelo ID' })
  @ApiResponse({ status: 200, description: 'Empresa encontrada' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma empresa pelo ID' })
  @ApiBody({ type: UpdateCompanyDto })
  @ApiResponse({ status: 200, description: 'Empresa atualizada com sucesso' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma empresa pelo ID' })
  @ApiResponse({ status: 204, description: 'Empresa deletada com sucesso' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Login bem-sucedido' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  login(@Body() loginDto: LoginDto) {
    return this.companyService.login(loginDto);
  }

  @Post('recuperar-senha')
  @ApiOperation({ summary: 'Recuperar senha' })
  @ApiBody({ type: forgetPasswordDto })
  @ApiResponse({
    status: 200,
    description: 'E-mail de recuperação enviado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  recuperarSenha(@Body() forgetPasswordDto: forgetPasswordDto) {
    return this.companyService.recuperarSenha(forgetPasswordDto);
  }

  @Get('perfil/:id')
  @ApiOperation({ summary: 'Acessar perfil' })
  @ApiResponse({
    status: 200,
    description: 'Perfil da empresa recuperado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  acessarPerfil(@Param('id') id: string) {
    return this.companyService.acessarPerfil(id);
  }

  @Patch('configurar-conta/:id')
  @ApiOperation({ summary: 'Configurar conta' })
  @ApiBody({ type: AccountSettingsDto })
  @ApiResponse({ status: 200, description: 'Conta configurada com sucesso' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada' })
  configurarConta(
    @Param('id') id: string,
    @Body() accountSettingsDto: AccountSettingsDto,
  ) {
    return this.companyService.configurarConta(id, accountSettingsDto);
  }

  @Get('total-vagas/:companyId')
  @ApiOperation({ summary: 'Obter o total de vagas' })
  @ApiResponse({
    status: 200,
    description: 'Total de vagas recuperado com sucesso',
  })
  async getTotalJobs(@Param('companyId') companyId: string) {
    return this.companyService.getTotalJobs(companyId);
  }

  @Get('candidatos-por-vaga/:companyId')
  @ApiOperation({ summary: 'Obter o número de candidatos por vaga' })
  @ApiResponse({
    status: 200,
    description: 'Número de candidatos por vaga recuperado com sucesso',
  })
  async getCandidatesPerJob(@Param('companyId') companyId: string) {
    return this.companyService.getCandidatesPerJob(companyId);
  }

  @Get('total-visitas/:companyId')
  @ApiOperation({ summary: 'Obter o total de visitas' })
  @ApiResponse({
    status: 200,
    description: 'Total de visitas recuperado com sucesso',
  })
  async getTotalVisits(@Param('companyId') companyId: string) {
    return this.companyService.getTotalVisits(companyId);
  }

  @Get('numero-candidatos-por-dia/:companyId')
  @ApiOperation({ summary: 'Obter o número de candidatos por dia' })
  @ApiResponse({
    status: 200,
    description: 'Número de candidatos por dia recuperado com sucesso',
  })
  async getCandidatesPerDay(@Param('companyId') companyId: string) {
    return this.companyService.getCandidatesPerDay(companyId);
  }

  @Get('ultimas-candidaturas/:companyId')
  @ApiOperation({ summary: 'Obter as últimas candidaturas' })
  @ApiResponse({
    status: 200,
    description: 'Últimas candidaturas recuperadas com sucesso',
  })
  async getLastApplications(@Param('companyId') companyId: string) {
    return this.companyService.getLastApplications(companyId);
  }
}
