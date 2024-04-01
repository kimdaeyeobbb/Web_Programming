import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return <>Search {searchParams.get("q")}</>;
};

export default Search;
