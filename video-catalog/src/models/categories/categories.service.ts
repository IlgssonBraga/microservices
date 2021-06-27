import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import HttpErrorException from '../../common/exceptions/http.exception';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create({ name, description }: CreateCategoryDto): Promise<Category> {
    const findCategory = await this.categoryRepository.findOne({
      where: { name },
    });

    if (findCategory && findCategory.deleted_at == null) {
      throw new HttpErrorException(
        'There is already a category with the same name',
        'Bad Request',
        400,
      );
    }

    if (findCategory && findCategory.deleted_at != null) {
      await this.categoryRepository.delete(findCategory.id);
    }

    const category = this.categoryRepository.create({
      name,
      description,
    });

    await this.categoryRepository.save(category);

    return category;
  }

  findAll() {
    const categories = this.categoryRepository.find({
      where: { deleted_at: null },
    });
    return categories;
  }

  async findOne(id: string) {
    const user = await this.categoryRepository.findOneOrFail({
      where: { id_uuid: id, deleted_at: null },
    });
    return user;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.findOneOrFail({ where: { id_uuid: id } });
    const checkName = await this.categoryRepository.findOne({
      where: { name: updateCategoryDto.name },
    });

    if (checkName && checkName.id_uuid != id && checkName.deleted_at == null) {
      throw new HttpErrorException(
        'There is already a category with the same name',
        'Bad Request',
        400,
      );
    }

    if (checkName && checkName.id_uuid != id && checkName.deleted_at != null) {
      await this.categoryRepository.delete({ id: checkName.id });
    }

    await this.categoryRepository.update({ id_uuid: id }, updateCategoryDto);
    const category = await this.categoryRepository.findOne({ id_uuid: id });
    return category;
  }

  async remove(id: string) {
    await this.categoryRepository.findOneOrFail({
      where: { id_uuid: id, deleted_at: null },
    });
    await this.categoryRepository.update(
      { id_uuid: id },
      { deleted_at: new Date() },
    );
    return;
  }
}
