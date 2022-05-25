import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

const SearchContext = createContext();
function SearchProvider({ children }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const searchJobs = () => {
    navigate({
      pathname: "jobs",
      search: `?${createSearchParams({
        query: `${q}`,
      })}`,
    });
  };
  return (
    <SearchContext.Provider
      value={{
        q,
        setQ,
        searchJobs,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
