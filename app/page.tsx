// import Userdata from "@/app/component/userdata";
import { Apes_img } from "./component/Apes_img";
import Footer from "./component/Footer";
import Tasks from "./component/Tasks";

export default function Home() {
  return (
    <main>
      <Apes_img />
      <Tasks />
      {/* <Userdata /> */}
      <Footer />
    </main >
  )
}