import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Job } from '@modules/job/entities/job.entity';

export class JobSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Job);
    await repository.insert([
      {
        id: 'aef6af1d-c4a6-4fb5-b9f1-97896e12f0a9',
        title: 'Administrador',
        description: 'Some description',
        contractModel: 'CLT',
        remuneration: 500000,
        publicationDate: new Date(),
        locality: 'São Paulo',
        jobType: 'Full-time',
        requiredSkills: ['skill1', 'skill2'],
        desiredSkills: ['skill3'],
        startDate: new Date(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        logoUrl: 'http://example.com/logo.png',
        companyName: 'Example Company',
        salary: 600000,
        employmentType: 'Permanent',
        workRegime: 'Hybrid',
        workSchedule: '9am - 6pm',
        affirmativeAction: 'None',
        jobActivities: 'Some job activities',
        desiredCompetencies: ['competency1'],
        consideredDifferentials: ['differential1'],
        benefits: 'Some benefits',
        aboutCompany: 'Some information about the company',
      },
    ]);
  }
}
