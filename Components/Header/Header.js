import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <>
      <div className=" w-full">
        <div className="flex pt-5 items-center justify-center sm:justify-between px-4 sm:px-10">
          <div className="flex items-center w-full sm:max-w-[400px]  justify-between">
            <HeaderItem Icon={HomeIcon} name="Home" />
            <HeaderItem Icon={LightningBoltIcon} name="Trending" />
            <HeaderItem Icon={CheckCircleIcon} name="Wishlist" />
            <HeaderItem Icon={CollectionIcon} name="Collections" />
            <HeaderItem Icon={SearchIcon} name="Search" />
            <HeaderItem Icon={UserIcon} name="Me" />
          </div>
          <div className="w-[150px h-[100px] hidden sm:block">
            <Image
              src="https://www.seekpng.com/png/full/851-8516462_hulu-logo-on-black.png"
              width={100}
              height={80}
              objectFit="contain"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
