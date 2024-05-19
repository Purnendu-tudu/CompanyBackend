import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    //here we are c

}


//here run our main function 

main().catch(e =>{console.error(e);process.exit(1)}).finally(async () => {await prisma.$disconnect});
