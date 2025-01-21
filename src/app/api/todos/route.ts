import { NextResponse } from 'next/server';
import prisma from '@/prisma';
import { getToken } from 'next-auth/jwt';

export async function GET(request: Request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const todos = await prisma.todo.findMany({
    where: { userId: token.id },
  });

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title } = await request.json();

  const todo = await prisma.todo.create({
    data: {
      title,
      userId: token.id,
    },
  });

  return NextResponse.json(todo);
}
