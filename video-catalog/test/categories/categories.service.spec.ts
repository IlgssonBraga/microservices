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

  it('should be able to create one category', async () => {
    const category = await categoriesService.create({
      name: 'teste1',
      description: 'teste1',
    });

    expect(category.name).toEqual('teste1');
    expect(category.description).toEqual('teste1');
  });

  it('should be able to return all categories', async () => {
    const category = await categoriesService.create({
      name: 'teste',
      description: 'teste',
    });

    expect(await categoriesService.findAll()).toContainEqual(category);
  });
});
