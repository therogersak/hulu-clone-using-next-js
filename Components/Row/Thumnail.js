import Image from "next/image";
const base_url = "https://image.tmdb.org/t/p/original";

export default function Thumnail({ img, title, description, type, language }) {
  return (
    <>
      <div className="flex flex-col space-y-2 text-white p-1">
        <Image
          src={`${base_url}${img}`}
          width={450}
          height={300}
          objectFit="cover"
          className="rounded-sm shadow-xl"
        />
        <div className="flex items-center justify-between px-2">
          <h3 className="font-bold text-[18px]">{title}</h3>
         {
          type ?  <span className="p-1 text-[12px]  shadow-xl uppercase border border-green-400">
          {type}
        </span> : <span className="uppercase text-green-500 font-bold text-sm shadow-2xl p-1 px-3">{language}</span>
         }
        </div>
        <p className="whitespace-nowrap truncate w-15 px-2">{description}</p>
      </div>
    </>
  );
}
