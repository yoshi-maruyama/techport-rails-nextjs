"use server";

import portfolioRepository from "@/infrastructure/repositories/portfolio-repository";

export const getPortfolios = async () => {
  const portfolios = await portfolioRepository.getportfolios();
  return portfolios;
};
