import { DataSource } from 'typeorm';
import { Seeder, runSeeders } from 'typeorm-extension';
import { UserSeed } from './seeds/user.seed';

export class MainSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [UserSeed],
    });
  }
}
