import { ApolloServer } from "@apollo/server";
import db from "../../../prisma/db";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

export type Context = {
    prisma?: PrismaClient
};

const server: ApolloServer = new ApolloServer<Context>({
    resolvers,
    typeDefs
})

export default startServerAndCreateNextHandler(server, {
    context: async (req, res) => ({ req, res, db }),
});
