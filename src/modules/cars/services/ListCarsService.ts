import { getRepository } from 'typeorm';

import Car from '@modules/cars/infra/typeorm/entities/Car';

class ListCarsService {
    public async execute(): Promise<void> {
        const carsRepository = getRepository(Car);

        const cars = carsRepository.findAllCars;
    }
}

export default ListCarsService;
