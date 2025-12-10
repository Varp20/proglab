"use server";

import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";

export async function registerUser(formData: IFormData) {
  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return { error: "Passwords are different" };
  }

  if (password.length < 6) {
    return { error: "Give me more symbols! (more than 6)" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Man, have you already registered? Try logging in, dude." };
    }

    const pwHash = await saltAndHashPassword(password);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: pwHash
      },
    });

    return user;
  } catch (error) {
    console.error("Beep! Beep! Registration Error!:", error);
    return { error: "Beep! Beep! Registration Error!" };
  }
}