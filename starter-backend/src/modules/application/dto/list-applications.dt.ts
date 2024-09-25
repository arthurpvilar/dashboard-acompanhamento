export class ListApplicationDto {
  id: number;
  companyId: string;
  jobId: number;
  candidateIds: string[];
  like: boolean;
  status: 'Em Andamento' | 'Cancelado' | 'Finalizado';
}