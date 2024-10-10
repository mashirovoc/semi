"use client";

import SearchForm from "@/components/search/SearchForm";
import { useSearchParams } from "next/navigation";
import SearchResult from "./SearchResult";
const SearchPage = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  if (q) {
    return <SearchResult q={q} />;
  } else {
    return <SearchForm />;
  }
};

export default SearchPage;
