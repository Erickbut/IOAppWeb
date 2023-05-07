import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;

/* first the import of prismaclient after the declaration prisma in
    global definition, for use to the long of our code 
    after create the constant client that search in the globalthis.prisma or create a new prisma client
    and then if conditional checks if we are in development phase by checking if the client
    is not in production 
    This code is cause nextJS13 hot reloading can cause a bunch or many of this
    new prisma clients, that give us a warning in the terminal 
    for this way we asign the prisma client to a globalThis variable 
    which is not afected by hot reload so this is the best practice for using prisma with nextJS 
*/