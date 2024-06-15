import Header from "@/components/header/header";
import CareerList from "@/features/careers/components/career-list";
import { CareerTopTemplateProps } from "@/features/careers/types";

export default function CareerTopTemplate(props: CareerTopTemplateProps) {
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <CareerList />
    </div>
  );
}
