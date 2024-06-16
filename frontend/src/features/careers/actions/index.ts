"use server";
import careerRepository from "@/infrastructure/repositories/career-repository";

export const getCareers = async () => {
  const careers = await careerRepository.getCareers();
  return careers;
};
