import { createContext, useContext, useState, ReactNode } from "react";

interface CounterContextProps {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

function useCounter() {
  const context = useContext(CounterContext);
  if (!context) throw new Error("Counter must be used within CounterProvider");
  return context;
}

interface CounterProps {
  children: ReactNode;
  className?: string;
}

function Counter({ children, className }: CounterProps) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <div className={className}>{children}</div>
    </CounterContext.Provider>
  );
}

interface CountProps {
  className?: string;
}
function Count({ className }: CountProps) {
  const { count } = useCounter();
  return <span className={className ?? "counter-count"}>{count}</span>;
}

interface LabelProps {
  children: ReactNode;
  className?: string;
}
function Label({ children, className }: LabelProps) {
  return <span className={className ?? "counter-label"}>{children}</span>;
}

interface IncreaseProps {
  icon: string;
  className?: string;
}
function Increase({ icon, className }: IncreaseProps) {
  const { increase } = useCounter();
  return (
    <button className={className ?? "btn"} onClick={increase}>
      {icon}
    </button>
  );
}

interface DecreaseProps {
  icon: string;
  className?: string;
}
function Decrease({ icon, className }: DecreaseProps) {
  const { decrease } = useCounter();
  return (
    <button className={className ?? "btn"} onClick={decrease}>
      {icon}
    </button>
  );
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
