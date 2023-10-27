import { Context } from "@/app/api/graphql/route";

export const resolvers = {
    Query: {
        users: async (_parent: any, args: any, context: Context) => {
            return await context.prisma?.users.findMany();
        }
    },
    Users: {
        type: async (_parent: any, args: any, context: Context) => {
            return await context.prisma?.roles.findMany();
        }
    }
  };