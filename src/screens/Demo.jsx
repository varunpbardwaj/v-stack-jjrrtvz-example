import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import useStore from "../states/store";
import Navigate from "../components/Navigate";

const Demo = () => {
  const theme = useStore((state) => state.theme);

  return (
    <div
      className={`${
        theme ? "bg-dark-bg text-dark-fg" : "bg-light-bg text-light-fg"
      } min-h-screen`}
    >
      <Navbar theme={theme} />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 px-5 pt-20">
        <div className="flex flex-col">
          <div className="text-xl text-center">Stack</div>
          <div className="flex flex-col text-md text-center font-light pt-5">
            <span className="pt-1">Jotai</span>
            <span className="pt-1">React Query</span>
            <span className="pt-1">React Router</span>
            <span className="pt-1">Tailwind CSS</span>
            <span className="pt-1">TypeScript</span>
            <span className="pt-1">Vite</span>
            <span className="pt-1">Zustand</span>
          </div>
        </div>
        <div className="flex flex-col mt-20 sm:mt-0">
          <div className="text-xl text-center">Counter App</div>
          <div className="flex justify-center pt-5">
            <Counter theme={theme} />
          </div>
          <div className="text-md flex justify-center pt-12">
            Value from .env: {import.meta.env.VITE_DEMO_VARIABLE}
          </div>
          <div className="flex justify-center pt-16">
            <Navigate />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
