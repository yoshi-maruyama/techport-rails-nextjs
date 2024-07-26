import Portfolio from "@/models/portfolio";
import User from "@/models/user";

export type PortfolioTopTemplateProps = {
  user: User;
  portfolios: Portfolio[];
};

export type PortfolioItemProps = {
  portfolio: Portfolio;
};
