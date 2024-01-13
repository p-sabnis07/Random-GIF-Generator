import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center relative overflow-x-hidden">
      <h1 className="bg-white rounded-lg text-center w-11/12 mt-[40px] px-10 py-2 text-4xl font-bold">RANDOM GIFs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;

// gap-y-10
