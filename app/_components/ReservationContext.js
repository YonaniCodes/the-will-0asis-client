"use client";
import { createContext, useContext, useState } from "react";
createContext;
const initalState = { from: undefined, to: undefined };
const ReservationContext = createContext();
export default function ReservationProvider({ children }) {
  const [range, setRange] = useState(initalState);
  const resetRange = () => setRange(initalState);
  return (
    <ReservationContext.Provider value={{ setRange, range, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("Context used out its context");
  return context;
}
