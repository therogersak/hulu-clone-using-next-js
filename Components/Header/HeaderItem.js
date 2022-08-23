function HeaderItem({ Icon, name }) {
  return (
    <>
      <di className="flex items-center flex-col cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 text-white group-hover:animate-bounce" />
        <span className="opicity-0 group-hover:opacity-100">{name}</span>
      </di>
    </>
  );
}

export default HeaderItem;
