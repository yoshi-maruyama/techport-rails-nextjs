import { getUser } from "@/features/users/actions";
import PortfolioTopTemplate from "@/features/portfolios/components/portfolio-top-template";
import { getPortfolios } from "@/features/portfolios/actions";

export default async function PortfoliosPage() {
  const user = await getUser();
  const portfolios = await getPortfolios();
  return <PortfolioTopTemplate user={user} portfolios={portfolios} />;
}
