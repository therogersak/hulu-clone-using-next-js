import Thumnail from "./Thumnail";
export default function Row({ results }) {
  console.log(results)
  return (
    <>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-3 lg:px-8 gap-4">
        {results &&
          results.map((data) => (
            <Thumnail
              img={data.backdrop_path}
              title={
                data.title ||
                data.original_title ||
                data.original_name ||
                data.name
              }
              description={data.overview}
              type={data.media_type}
              language={data.original_language}
            />
          ))}
      </div>
    </>
  );
}
