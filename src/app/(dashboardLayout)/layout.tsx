"use client";

import Contents from "@/components/ui/Content";
import SideBar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/service/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!!userLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router, userLoggedIn]);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
