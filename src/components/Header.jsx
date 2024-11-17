import moment from "moment";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="flex items-center justify-center flex-col gap-3 py-4">
        <div>
          <img className="w-[300px]" src={Logo} alt="..." />
        </div>
        <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
        <p className="font-bold ">
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
