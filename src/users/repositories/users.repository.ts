import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
    data: createUserDto,
})

const users = await prisma.user.findMany()
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<UserEntity[]> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    })
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

}
