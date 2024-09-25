import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Candidate } from '@modules/candidate/entities/candidate.entity';
import { Job } from '@modules/job/entities/job.entity';

export class CandidateSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Candidate);
    const jobRepository = dataSource.getRepository(Job);

    await repository.insert([
      {
        name: 'Candidate 1',
        applicationStatus: 'Applied',
        location: 'Some City',
        applicationDate: new Date(),
        compatibility: 90.5,
      },
      {
        name: 'Candidate 2',
        applicationStatus: 'Interviewing',
        location: 'Another City',
        applicationDate: new Date(),
        compatibility: 85.2,
      },
    ]);
  }
}
