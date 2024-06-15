import Header from "@/components/header/header";
import CareerList from "@/features/careers/components/career-list";

export default function CareerTopTemplate(props: any) {
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <CareerList />
    </div>
  );
}
