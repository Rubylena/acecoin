import Form from "./components/Form/Form";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="bg-white pt-2 pb-8 md:pb-14 px-2 md:px-5 m-8 md:m-0">
      <div class="w-5 ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Close</title>
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
      </div>
      <div className="flex flex-col gap-14 md:flex-row md:justify-between p-2 md:p-10">
        <Form />
        <Card />
      </div>
    </div>
  );
}

export default App;
