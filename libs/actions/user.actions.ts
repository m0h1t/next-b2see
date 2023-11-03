"use server";

import { User } from "@/app/users/page";
import { revalidateTag } from "next/cache";

export const getUsers = async (): Promise<any> => {
	const users = await fetch(`https://next-b2see-6499p9s6t-mohit-hiralals-projects.vercel.app/api/users`, {
		cache: "no-cache",
		next: {
			tags: ["users"],
		},
	});
	return users.json();
};

export const addUserToDb = async (f: FormData): Promise<any> => {
	const name = f.get("name")?.toString();
	const userName = f.get("userName")?.toString();
	const years = f.get("years")?.toString() ?? "0";
	const type = f.get("type")?.toString();
	const user: User = {
		name: name,
		userName: userName,
		years: +years,
		type: type
	};

	await fetch(`https://next-b2see-6499p9s6t-mohit-hiralals-projects.vercel.app/api/users`, {
		method: "PUT",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json"
		}
	});

	

	revalidateTag("users");
};
