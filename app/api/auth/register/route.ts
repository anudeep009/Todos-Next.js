import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/models/user.model";


export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    console.log({ email, password });

    const hashedPassword = await hash(password, 10);

    const response = await User.create({ email, password: hashedPassword });
    
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}