import { useContext } from "react";
import { SearchContext } from "../components/SearchProvider";

function useSearch() {
  return useContext(SearchContext);
}
export default useSearch;
