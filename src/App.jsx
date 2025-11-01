import Footer from "./Footer";
import Nav from "./Nav";
import { Nody } from "./Nody";
import Services from "./Services";

export default function App() {
  return (
    <div>
      <Nav />
      <Nody />
      <div className="flex flex-col md:flex-row gap-3 p-3 bg-blue-100 md:justify-center">
        <Services title="Web Development" des="We create responsive and scalable websites tailored to your business goals." />
        <Services title="UI/UX Design" des="We design intuitive interfaces that provide the best user experience." />
        <Services title="Mobile Apps" des="We build cross-platform mobile apps that delight users and grow businesses." />

      </div>
      <Footer />
    </div>
  );
}
