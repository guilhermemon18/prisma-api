import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { UserEntity } from './entities/user.entity';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
// import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  findAll() {
    // throw new UnauthorizedError('Nao autorizado');
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new NotFoundError('Usuario nao encontrado.');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
