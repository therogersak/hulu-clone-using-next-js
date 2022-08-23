import requests from "../../Requests/requests";
import { useRouter } from "next/router";
import NavItem from "./NavItem";

export default function Nav() {
  const router = useRouter();
  const current = router.query.genre;
  return (
    <>
      <nav className="">
        <div className="flex items-center gap-[2rem]  sm:gap-[4rem] pb-1 px-5 sm:px-10 whitespace-nowrap overflow-x-scroll relative scrollbar-hide">
          {requests &&
            Object.entries(requests).map(([key, { title, url }]) => (
              <NavItem main={key}  title={title} current={current} key={key}  />
            ))}
          <div className="fixed top-[5rem]sm:top-[7.7rem] right-0 bg-gradient-to-l from-[#000] h-10 w-1/12" />
        </div>
      </nav>
    </>
  );
}
