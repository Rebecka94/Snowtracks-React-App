import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
