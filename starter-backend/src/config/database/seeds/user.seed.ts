import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '@modules/user/entities/user.entity';

export class UserSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(User);
    const password = await bcrypt.hash('admin', 10);
    await repository.insert([
      {
        id: '80759d4e-39eb-4c5a-aaf9-a030094092fc',
        fullName: 'Administrador',
        cpfOrCnpj: '00000000000',
        gender: 'Masculino',
        email: 'adm@gobe.com.br',
        password,
        mobilePhone: '+558398765432',
      },
    ]);
  }
}
