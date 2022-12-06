import useStore from "../states/store";

const SuspenseLoader = () => {
  const theme = useStore((state) => state.theme);

  const getNavTheme = () => {
    return theme
      ? "bg-nav-dark-bg text-nav-dark-fg"
      : "bg-nav-light-bg text-nav-light-fg";
  };

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center text-xl font-bold ${getNavTheme()}`}
    >
      Loading...
    </div>
  );
};

export default SuspenseLoader;
