import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftNav from "../components/layoutComponents/LeftNav";
import NAvBar from "../components/NAvBar";
import NewsLetter from "../components/NewsLetter";
import RightNav from "../components/layoutComponents/RightNav";

const MAinLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section>
          <NewsLetter />
          <nav>
            <NAvBar />
          </nav>
        </section>
      </header>
      <main>
        <div className="container mx-auto px-3 md:px-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="grid col-span-3">
              <LeftNav />
            </div>
            <div className="grid col-span-6 ">
              <Outlet />
            </div>
            <div className="grid col-span-3">
              <RightNav />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MAinLayout;
