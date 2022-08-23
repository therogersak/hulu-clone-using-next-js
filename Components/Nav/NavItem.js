import React from "react";
import { useRouter } from "next/router";
function NavItem({ main, active, title, current }) {
    const router = useRouter()

  return <>
  <div >
  <h2
                className="font-bold text-[16px]  sm:text-xl text-gray-200 hover:text-green-500 cursor-pointer transtion duration-100 transform hover:scale-120 active:text-red-500"
                onClick={() => {
                  router.push(`/?genre=${main}`);
                  localStorage.setItem("path", current);
                }}
              >
                {title}
              </h2>
  </div>
  </>;
}

export default NavItem;
