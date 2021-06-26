import { Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create({ name, description }: CreateCategoryDto): Promise<Category> {
    const findCategory = await this.categoryRepository.find({
      where: { name },
    });

    if (findCategory) {
      throw new Error('erro');
    }

    const category = this.categoryRepository.create({
      name,
      description,
    });

    await this.categoryRepository.save(category);

    return category;
  }

  findAll() {
    const categories = this.categoryRepository.find();
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
