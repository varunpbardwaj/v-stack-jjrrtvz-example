import GoBack from "../components/GoBack";
import useStore from "../states/store";
import useGetPokeQuery from "../api/useGetPokeQuery";
import POKE from "../assets/poke.png";
import Footer from "../components/Footer";

const DemoRouter = () => {
  const theme = useStore((state) => state.theme);
  const { data: getPokeData, isLoading } = useGetPokeQuery();

  return (
    <div
      className={`${
        theme ? "bg-dark-bg text-dark-fg" : "bg-light-bg text-light-fg"
      } min-h-screen pb-16`}
    >
      <GoBack theme={theme} />
      <div className="w-screen flex flex-col items-center">
        <img className="mt-16 w-56" src={POKE} alt="poke" />
        {!isLoading && (
          <div className="w-full mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20 lg:px-52">
            {getPokeData.results.map((poke, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center mx-10 border-b"
              >
                <img
                  className="mt-5 p-5 border-dark-fg"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    poke.url.split("/pokemon/")[1].split("/")[0]
                  }.svg`}
                  alt="poke"
                />
              </div>
            ))}
          </div>
        )}
        {isLoading && <div className="mt-12 text-xl">Loading...</div>}
      </div>
      <Footer />
    </div>
  );
};

export default DemoRouter;
