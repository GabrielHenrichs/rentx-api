import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/users/repositories/IAppointmentsRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IAppointmentsRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne(id);

        return user;
    }

    public async create({
        name,
        email,
        password,
        admin,
    }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
            admin,
        });

        await this.ormRepository.save(user);

        return user;
    }
}

export default UsersRepository;
