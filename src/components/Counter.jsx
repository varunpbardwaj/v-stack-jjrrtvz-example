import { useAtom } from "jotai";
import counterAtom from "../atoms/counter";

const Counter = ({ theme }) => {
  const [count, setCouter] = useAtom(counterAtom);
  const getButtonTheme = () => {
    return theme
      ? "bg-nav-light-bg text-nav-light-fg"
      : "bg-nav-dark-bg text-nav-dark-fg";
  };

  return (
    <button
      className={`text-sm px-5 py-2 rounded-full ${getButtonTheme()}`}
      onClick={() => setCouter(count + 1)}
    >
      Count is {count}
    </button>
  );
};

export default Counter;
