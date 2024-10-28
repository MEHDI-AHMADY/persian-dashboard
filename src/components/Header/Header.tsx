import { AvatarDemo } from "./Avatar";
import { IoIosNotifications } from "react-icons/io";
import Input from "../Input/Input";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Menu from "../Menu/Menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="mt-5 flex items-start justify-between">
      <div className="flex items-center gap-4 flex-1">
        <AvatarDemo />
        <IoIosNotifications className="text-2xl" />
      </div>

      <Input
        type="text"
        name="search"
        placeholder="جستجو کنید"
        parentClasses="flex-[3] -mt-4 max-w-[500px]"
      />

      <div className="md:hidden p-2">
          <IoIosMenu className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)}/>
      </div>

      {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </header>
  );
}
