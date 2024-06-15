import { useState , useEffect, createContext, useContext } from "react";
import React from "react";
import {
  getBusinesses,
  getCategories,
  getBusinessesByID,
} from "../services/businessService";
import { BusinessType } from "../Types/BusinessType.tsx";
import { CategoryType } from "../Types/CategoryType.tsx";

interface BusinessContextProp {
  businesses: BusinessType[];
  setBusinesses: React.Dispatch<React.SetStateAction<BusinessType[]>>;
  filteredBusinesses: BusinessType[];
  setFilteredBusinesses: React.Dispatch<React.SetStateAction<BusinessType[]>>;
  businessId: string | undefined;
  setBusinessId: React.Dispatch<React.SetStateAction<string | undefined>>;
  categories: CategoryType[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  fetchBusinesses: () => Promise<void>;
  fetchCategories: () => Promise<void>;

}

export const BusinessContext = createContext<BusinessContextProp | null > (null);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [businesses, setBusinesses] = useState<BusinessType[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<BusinessType[]>([]);
  const [businessId, setBusinessId] = useState<string | undefined>();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const fetchBusinesses = async () => {
    try {
      const data = await getBusinesses();
      setBusinesses(data);
      setFilteredBusinesses(data);
    } catch (e) {
      console.log("fetchBusinesses error:", e);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (e) {
      console.log("fetchCategories error:", e);
    }
  };

  // const fetchBusinessesByID = async () => {
  //   try {
  //     const data = await getBusinessesByID(id);
  //     setBusinessId(data);
  //   } catch (e) {
  //     console.log("fetchBusinessesById error:", e);
  //   }
  // };

  useEffect(() => {
    fetchBusinesses();
    fetchCategories();
    // fetchBusinessesByID();
  }, []);

  return (
    <BusinessContext.Provider
      value={{
        businesses,
        setBusinesses,
        filteredBusinesses,
        setFilteredBusinesses,
        businessId,
        setBusinessId,
        categories,
        setCategories,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => {
  const businessContext = useContext(BusinessContext);
  if (businessContext === undefined) {
    throw new Error("useBusinessContext must be inside a BusinessProvider");
  }
  return businessContext;
};