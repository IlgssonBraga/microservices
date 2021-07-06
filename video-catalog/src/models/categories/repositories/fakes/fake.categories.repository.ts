import { Category } from '../../entities/category.entity';
import { ICategoriesRepository } from '../ICategories.repository';

export class FakeCategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  public async find(): Promise<Category[]> {
    const categories = this.categories.map((category) => {
      if (category.deleted_at == null) {
        return category;
      }
    });
    return categories;
  }

  public create({ name, description }): Category {
    const category = {
      id: 1,
      id_uuid: '6a1476c1-b6b6-4ee5-9a9f-c825e5c47d90',
      created_at: new Date(1625527154709),
      updated_at: new Date(1625527154709),
      deleted_at: null,
      name,
      description,
      is_active: false,
    };
    return category;
  }

  public async save(category: Category): Promise<Category> {
    this.categories.push(category);
    return category;
  }

  // public async delete(id: string): void {
  //   const categoryIndex =
  // }

  public async findOne({ where: { name } }): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name == name);
    return category;
  }

  //   public async findById(id: string): Promise<Category | undefined> {}

  //   public async create(): Promise<Category> {}

  //   public async save(category: Category): Promise<Category> {}

  //   public async findByName(name: string): Promise<Category | undefined>;

  //   public async findOneOrFail(entrypoint: Date | null): Promise<Category>;

  //   public async findByDeletedAt(): Promise<Category | undefined> {}
}

export default new FakeCategoriesRepository();
