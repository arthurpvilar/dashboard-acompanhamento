import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '@App/modules/user/entities/user.entity';
//import * as bcrypt from 'bcrypt';

export class UserSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(User);
    //const password = await bcrypt.hash('admin', 10);
    await repository.insert([
      {
        index: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
        username: 'arthurpvilar',
        fullName: 'Arthur Padilha Vilar Salvador',
        email: 'arthurpvilar@gmail.com',
        password:
          '$2a$10$SqQk66ZLb7DURKR.3fkTju4BO2psiaRuUpmTT0wAzEJR1tdz/zpZC', // admin
      },
    ]);
  }
}
