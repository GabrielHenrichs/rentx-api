import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IAppointmentsRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findById(id: string): Promise<User | undefined>;
}
