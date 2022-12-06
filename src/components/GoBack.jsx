import { useNavigate } from "react-router-dom";

const GoBack = ({ theme }) => {
  const routeTo = useNavigate();

  const getNavTheme = () => {
    return theme
      ? "bg-nav-dark-bg text-nav-dark-fg"
      : "bg-nav-light-bg text-nav-light-fg";
  };

  return (
    <div className="p-5">
      <nav className={`p-6 rounded-xl ${getNavTheme()}`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span
            className="font-semibold text-lg tracking-tight cursor-pointer"
            onClick={() => routeTo("/")}
          >
            {"Back"}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default GoBack;
