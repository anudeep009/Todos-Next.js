import prisma from '@/prisma';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response('Invalid email or password', { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return new Response('User already exists', { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: { email, password },
  });

  return new Response(JSON.stringify(newUser), { status: 201 });
}
