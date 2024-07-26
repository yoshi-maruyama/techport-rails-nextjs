import Header from "@/components/header/header";
import { PortfolioTopTemplateProps } from "@/features/portfolios/types";
import styles from "@/features/portfolios/components/portfolio-top-template.module.scss";
import PortfolioItem from "@/features/portfolios/components/portfolio-item";

export default function PortfolioTopTemplate(props: PortfolioTopTemplateProps) {
  const { user, portfolios } = props;
  return (
    <div>
      <Header user={user} />
      <div className={styles.container}>
        {portfolios.map((portfolio) => {
          return (
            <PortfolioItem key={portfolio.notionKey} portfolio={portfolio} />
          );
        })}
      </div>
    </div>
  );
}
