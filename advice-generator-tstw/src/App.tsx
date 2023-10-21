import { useGlobalContext } from "./context";
import diceIcon from "./images/icon-dice.svg";

function App() {
  const { fetchAdvice, advice, adviceId } = useGlobalContext();

  return (
    <main className="h-screen	flex flex-col	items-center	justify-center">
      <section className="advice-container bg-[hsl(217,19%,24%)] w-[550px] text-center	py-[48px] px-[32px] rounded-[12px] relative">
        <h1 className="advice-title uppercase text-[12px] text-[hsl(150,100%,66%)] tracking-[4px] mb-[24px]">
          advice #{adviceId}
        </h1>

        <p className="advice-text font-extrabold	leading-[1.3] mb-[2rem]">
          &quot;{advice}&quot;
        </p>
        <div className="divider mb-[14px] text-center">
          <div className="divider-icon bg-[url('./images/pattern-divider-desktop.svg')] bg-contain	bg-no-repeat	h-[20px]" />
        </div>
        <div className="advice-btn bg-[hsl(150,100%,66%)] p-[15px] rounded-[50%] inline-block	absolute top-full	left-2/4	translate-y-[-50%] translate-x-[-50%] cursor-pointer	transition-all	duration-300	hover:shadow-xl">
          <img
            src={diceIcon}
            alt="dice icon"
            className="dice-icon"
            onClick={fetchAdvice}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
