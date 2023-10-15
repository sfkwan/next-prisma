import { prisma } from "@/db";
import { log } from "console";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ message: "Deleted ,Item" }, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { completed } = await req.json();

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete: completed,
    },
  });

  return NextResponse.json({ message: "Patch Item" }, { status: 200 });
}
