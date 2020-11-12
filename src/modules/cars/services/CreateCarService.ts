import { getRepository } from 'typeorm';

import Car from '@modules/cars/infra/typeorm/entities/Car';

interface Request {
    name: string;
    brand: string;
    daily_value: number;
}

class CreateCarService {
    public async execute({ name, brand, daily_value }: Request): Promise<Car> {
        const carsRepository = getRepository(Car);

        const car = carsRepository.create({
            name,
            brand,
            daily_value,
        });

        await carsRepository.save(car);

        return car;
    }
}

export default CreateCarService;
