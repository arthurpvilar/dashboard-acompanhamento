import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Company } from '@modules/company/entities/company.entity';

export class CompanySeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Company);
    await repository.insert([
      {
        id: 'f08927ac-3e63-44b1-93a9-34b7b8fa4efc',
        name: 'Company',
        email: 'company@example.com',
        password: 'hashed_password',
        cnpj: '12345678000195',
        segment: 'Technology',
        address: '123 Tech Street',
        phone: '1234567890',
        responsible: 'Fulano',
        companyBanner: 'http://example.com/banner.jpg',
        notifications: true,
        silenced: false,
      },
    ]);
  }
}
