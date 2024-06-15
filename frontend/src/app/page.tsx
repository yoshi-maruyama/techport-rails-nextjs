import CareerTopTemplate from "@/features/careers/components/career-top-template";
import { getUser } from "@/features/users/actions";

export default async function TopPage() {
  const user = await getUser();
  return <CareerTopTemplate user={user} />;
}
