import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"
import db from "@/prisma/db";

const createUpdateUserSchema = z.object({
    userName: z.string().min(4).max(1000),
    name: z.string().min(5),
    years: z.number()
});

const deleteUserSchema = z.object({ userName: z.string().min(4) });

export const PUT = async (request: NextRequest): Promise<any> => {
	const body = await request.json();
	const validation = createUpdateUserSchema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}
	const newUser = await db.users.create({
		data: { userName: body.userName, name: body.name, years: body.years, type: body.type },
    });

    return NextResponse.json(newUser, { status: 201 });
};

export const GET = async (request: NextRequest): Promise<any> => { 
	const users = await db.users.findMany();
	return NextResponse.json(users, { status: 200 });
}

export const POST = async (request: NextRequest): Promise<any> => {
	const body = await request.json();
	const validation = createUpdateUserSchema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

	await db.users.update({
		where: {
			userName: body.userName
		}, data: {
			userName: body.userName,
			name: body.name,
			years: body.years,
			type: body.type
		}
	});

	return NextResponse.json("success", { status: 200 });
}

export const DELETE = async (request: NextRequest): Promise<any> => {
	const body = await request.json();

	const validation = deleteUserSchema.safeParse(body);
	if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

	await db.users.delete({ where: { userName: body.userName } });
	return NextResponse.json("success", { status: 200 });
}