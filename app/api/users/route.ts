// "use server"

// import { connect } from "../mongodb";
// import User from '../models/user.model';

// export const getUsers = async (): Promise<any> => {
//     connect();
//     const usersQuery = User.find().populate({ path: 'user', model: User });
//     const users = await usersQuery.exec();
//     return users;
// }

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"
import db from "@/prisma/db";

const createUserSchema = z.object({
    userName: z.string().min(4).max(1000),
    name: z.string().min(5),
    years: z.number()
});

export const POST = async (request: NextRequest): Promise<any> => {
	const body = await request.json();
	const validation = createUserSchema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}
	const newUser = await db.users.create({
		data: { userName: body.userName, name: body.name, years: body.years, type: body.type },
    });

    return NextResponse.json(newUser, { status: 201 });
};