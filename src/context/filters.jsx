import { createContext, useState } from "react";

//? 1. Crear contexto
export const FiltersContext = createContext();

//? 2. Crear provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 500,
  });
  return (
    <FiltersContext.Provider value={{filters, setFilters}}>
      {children}
    </FiltersContext.Provider>
  );
}
