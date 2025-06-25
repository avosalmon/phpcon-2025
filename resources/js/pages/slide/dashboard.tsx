import { SlideLayout } from "@/layouts/slide-layout";
import { ReactNode } from "react";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.layout = (page: ReactNode) => <SlideLayout>{page}</SlideLayout>;

export default Dashboard;
