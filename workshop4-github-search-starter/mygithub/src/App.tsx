import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";

import SearchResponse from "./types/searchResponse";

export default function App() {
  const [searchResponse, setSearchResponse] = useState<SearchResponse>({
    isFirst:true,
    isLoading:false,
    isError:false,
    users:[]
  });

  return (
    <div className="container">
      <Search onSetSearchResponse={setSearchResponse} />
      <List {...searchResponse} />
    </div>
  );
}
