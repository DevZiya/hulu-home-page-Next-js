import Image from "next/image";
import Logo from "../public/hulu-white.png";
import HeaderItems from "./HeaderItems";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  XIcon
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addSearchValue } from "../redux/searchReducer";

const Header = () => {
  const [iconValue, setIconValue] = useState("");
  const [searvhValue, setSearchValue] = useState(false);
  const [inputValue,setInputValue] =useState("")
  const dispatch = useDispatch()

  const getValue = (e) => {
    setIconValue(e);
  };

  const closeInput = () =>{
    setSearchValue(false)
    setIconValue("")
  }

  useEffect(()=>{
    dispatch(addSearchValue(inputValue))
  },[inputValue])

  useEffect(() => {
    iconValue === "SEARCH" ? setSearchValue(true) : setSearchValue(false);
  }, [iconValue]);
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <>
        <div className={searvhValue === false ? "flex flex-grow justify-evenly max-w-2xl " :" absolute top-[-150vw]"}>
          <HeaderItems title="HOME" Icon={HomeIcon} getValue={getValue} />
          <HeaderItems
            title="TRENDING"
            Icon={LightningBoltIcon}
            getValue={getValue}
          />
          <HeaderItems
            title="VERIFIED"
            Icon={BadgeCheckIcon}
            getValue={getValue}
          />
          <HeaderItems
            title="COLLECTIONS"
            Icon={CollectionIcon}
            getValue={getValue}
          />
          <HeaderItems title="SEARCH" Icon={SearchIcon} getValue={getValue} />
          <HeaderItems title="ACCOUNT" Icon={UserIcon} getValue={getValue} />
        </div>

        <div className={searvhValue !== false ? "flex items-center justify-center my-10 mx-10" : "absolute top-[-150vw]"}>
          <input type="text" placeholder="Search" 
          className="sm:w-56 h-10 md:w-96 rounded bg-gray-600 outline-none px-4 text-white" 
          onChange={(e)=>setInputValue(e.target.value)}
          />
          <XIcon className="h-8 mb-1 hover:animate-ping cursor-pointer px-4" onClick={closeInput} />
        </div>
      </>

      <Image className="object-contain" src={Logo} width={200} height={100} />
    </header>
  );
};

export default Header;
