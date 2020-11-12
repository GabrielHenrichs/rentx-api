import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import UsersRepository from '@modules/users/repositories/UsersRepository';

export default async function checkAdmin(
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> {
    const user_id = request.user.id;

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user.admin) {
        throw new AppError('Unauthorized user as administrator');
    }

    return next();
}
