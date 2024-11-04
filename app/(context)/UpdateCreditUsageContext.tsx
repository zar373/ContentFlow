import { createContext } from "react";

export const UpdateCreditUsageContext=createContext<any>(null)

// interface UpdateCreditUsageContextType {
//     updateCreditUsage: unknown; // Replace `unknown` with a more specific type if possible
//     setUpdateCreditUsage: React.Dispatch<React.SetStateAction<unknown>>; // Same here
//   }
  
//   export const UpdateCreditUsageContext = createContext<UpdateCreditUsageContextType | undefined>(undefined);