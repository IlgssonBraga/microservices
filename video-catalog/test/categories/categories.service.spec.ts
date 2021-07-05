import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoriesService } from '../../src/models/categories/categories.service';
import { Category } from '../../src/models/categories/entities/category.entity';
import fakeCategoriesRepository from '../../src/models/categories/repositories/fakes/fake.categories.repository';

let categoriesService: CategoriesService;

describe('CategoriesController', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: fakeCategoriesRepository,
        },
      ],
    }).compile();

    categoriesService = await module.get<CategoriesService>(CategoriesService);
  });

  describe('testing categories service', () => {
    it('testing', async () => {
      const result = [
        {
          id: 1,
          id_uuid: '6a1476c1-b6b6-4ee5-9a9f-c825e5c47d90',
          created_at: new Date(1625527154709),
          updated_at: new Date(1625527154709),
          deleted_at: null,
          name: 'teste',
          description: 'teste',
          is_active: false,
        },
      ];
      expect(await categoriesService.findAll()).toEqual(result);
    });
  });
});
