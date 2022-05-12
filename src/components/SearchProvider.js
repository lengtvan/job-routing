import { createContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { createSearchParams, useSearchParams } from "react-router-dom";

const SearchContext = createContext();
function SearchProvider({ children }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
