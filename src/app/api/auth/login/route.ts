import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import prisma from '@/prisma';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = sign({ id: user.id, email: user.email }, process.env.NEXTAUTH_SECRET!, {
    expiresIn: '1d',
  });

  return NextResponse.json({ message: 'Login successful', token });
}
