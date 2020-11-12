import { Router } from 'express';

import CreateCarService from '@modules/cars/services/CreateCarService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import checkAdmin from '@modules/users/infra/http/middlewares/checkAdmin';

const carsRouter = Router();

carsRouter.use(ensureAuthenticated);

carsRouter.use(checkAdmin);

carsRouter.post('/', async (request, response) => {
    const { name, brand, daily_value } = request.body;

    const createCar = new CreateCarService();

    const car = await createCar.execute({
        name,
        brand,
        daily_value,
    });

    return response.json(car);
});

export default carsRouter;
