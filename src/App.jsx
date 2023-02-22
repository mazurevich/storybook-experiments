import "./App.css";
import { Button } from "./ui/components";

function App() {
  return (
    <div>
      <Button>Press me </Button>
      <h1 className="border-green-100  bg-gray-800 p-4 pt-2 text-vuejs md:p-3">
        Hello world
      </h1>
      <h1 className="mt-2 mb-4 bg-gray-800 p-3 text-green-400  md:bg-green-400">
        Hello world
      </h1>
    </div>
  );
}

export default App;
