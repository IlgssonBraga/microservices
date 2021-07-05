import { Category } from '../entities/category.entity';

export interface ICategoriesRepository {
  find(): Promise<Category[]>;
  //   findById(id: string): Promise<Category | undefined>;
  //   create(): Promise<Category>;
  //   save(category: Category): Promise<Category>;
  //   delete(id: string): void;
  //   findByName(name: string): Promise<Category | undefined>;
  //   findByDeletedAt(entrypoint: Date | null): Promise<Category | undefined>;
  //   findOneOrFail(): Promise<Category>;
}
