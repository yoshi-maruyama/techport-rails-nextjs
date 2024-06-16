import CareerTopTemplate from "@/features/careers/components/career-top-template";
import { getUser } from "@/features/users/actions";
import { getCareers } from "@/features/careers/actions";

export default async function TopPage() {
  const user = await getUser();
  const careers = await getCareers();
  return <CareerTopTemplate user={user} careers={careers} />;
}
