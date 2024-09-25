export class RetrieveAddressDto {
  id: number;
  cep: number;
  number: number;
  street: string;
  complement?: string;
  neighborhood: string;
  city: string;
  estate: string;
}
