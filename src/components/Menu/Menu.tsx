import ListMenu from "./ListMenu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

const navAnimation = {
  hidden : {opacity : 0 , x : 100},
  show : {opacity : 1 , x : 0 , transition : {duration : 0.3}}
}

export default function Menu({ showMenu, setShowMenu }: MenuProps) {
  return (
    <div
      className={`md:hidden fixed inset-0 backdrop-blur-sm transition-opacity duration-300 flex justify-between ${
        showMenu ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => setShowMenu(false)}
    >
      <motion.nav
      initial="hidden"
      animate="show"
      variants={navAnimation}
        className={`z-50 flex flex-col gap-4 bg-primary p-4 w-72 h-screen ${
          showMenu ? "translate-x-0" : "translate-x-[300px]"
        }`}
      >
        <ListMenu />
      </motion.nav>

      <IoMdClose
        className="text-3xl mt-5 ml-5 cursor-pointer"
        onClick={() => setShowMenu(false)}
      />
    </div>
  );
}
