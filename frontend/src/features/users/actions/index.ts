"use server";

import userRepository from "@/infrastructure/repositories/user-repository";

export const getUser = async () => {
  const user = await userRepository.getUser();
  return user;
};
