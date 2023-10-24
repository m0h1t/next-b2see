"use server"

import { connect } from "../mongodb";
import User from '../models/user.model';

export const getUsers = async (): Promise<any> => {
    connect();
    const usersQuery = User.find().populate({ path: 'user', model: User });
    const users = await usersQuery.exec();
    return users;
}