// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const todo1 = await prisma.todo.create({
    data: {
      title: "Prisma add support for MongoDB",
      complete: false,
    },
  });

  const todo2 = await prisma.todo.create({
    data: {
      title: "What's new in Prisma? (Q1/22)",
      complete: false,
    },
  });

  console.log({ todo1, todo2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
