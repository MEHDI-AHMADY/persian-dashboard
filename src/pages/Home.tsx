import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
}
