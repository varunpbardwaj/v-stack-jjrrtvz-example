import useStore from "../states/store";

const Navbar = ({ theme }) => {
  const setTheme = useStore((state) => state.setTheme);

  const getNavTheme = () => {
    return theme
      ? "bg-nav-dark-bg text-nav-dark-fg"
      : "bg-nav-light-bg text-nav-light-fg";
  };

  return (
    <div className="p-5">
      <nav
        className={`flex items-center justify-between flex-wrap p-6 rounded-xl ${getNavTheme()}`}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-lg tracking-tight">vStack</span>
        </div>
        <div className="flex items-center flex-shrink-0 text-white">
          <span
            className="text-md tracking-tight cursor-pointer"
            onClick={() => setTheme(!theme)}
          >
            {theme ? "LIGHT" : "DARK"}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
