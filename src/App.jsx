import "./App.css";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="w-full flex justify-center items-center
    flex-col quickSand relative p-0 mx-auto my-auto">
      <Navbar />
      <div
        className="w-full h-screen flex flex-col md:flex-row
        items-center gap-2 md:-mt-10 md:px-[91px]"
      >
        <div className="w-full md:w-[61%] px-6 py-4">
          <h1
            className="text-[40px] md:text-[50px] lg:text-[80px] text-center
           md:text-left mt-6 leading-none tracking-tight"
          >
            <span className="text-orange-600">
              THE LEADING ONLINE CAR AUCTION
            </span>{" "}
            FOR DEALERS
          </h1>
          <p
            className="text-[18px] md:text-[32px] 
          font-thin text-center md:text-left"
          >
            Don't miss out on the inventory you need.
          </p>
        </div>
        <Carousel/>
      </div>
    </div>
  );
}

export default App;
