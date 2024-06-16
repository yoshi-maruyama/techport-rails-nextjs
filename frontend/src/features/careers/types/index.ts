import Career from "@/models/career";
import User from "@/models/user";

export type CareerTopTemplateProps = {
  user: User;
  careers: Career[];
};

export type CareerListProps = {
  careers: Career[];
};

export type CareerItemProps = {
  career: Career;
};
