import backendClient from "@/lib/backend-client";
import Portfolio from "@/models/portfolio";

class PortfolioRepository {
  async getportfolios(): Promise<Portfolio[]> {
    const res = await backendClient.get("/api/v1/portfolios");
    if (res.ok) {
      const data = await res.json();
      return data.map((portfolio: any) => {
        return this.toModel(portfolio);
      });
    } else {
      return [];
    }
  }

  private toModel(data: any) {
    return new Portfolio(data.title, data.url, data.summary, data.notionKey);
  }
}

const portfolioRepository = new PortfolioRepository();
export default portfolioRepository;
