import SearchPage from "@/components/search/SearchPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "探す",
};

const page = () => {
  return <SearchPage />;
};

export default page;
