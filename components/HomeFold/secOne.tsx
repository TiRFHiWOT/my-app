import HomeIcon from "./homeIcon";

export default function SecOne({
  width,
  CATEGORIES,
  categoryNo1,
  handleClick,
}) {
  return (
    <>
      <div
        className={`w-full h-auto ${
          width > 500 && width < 700 && "grid grid-cols-3"
        } ${width > 700 && width < 1000 && "grid grid-cols-4"} ${
          width > 1000 && "grid grid-cols-5"
        } border-4 border-gray-900  max-[500px]:grid-cols-3 max-[500px]:gap-10 gap-x-8 mt-4 justify-start flex-wrap max-[500px]:flex max-[500px]:mr-[15px] max-[500px]:justify-center`}
      >
        {(width > 1000 ? CATEGORIES.slice(0, categoryNo1) : CATEGORIES).map(
          (value, index) => (
            <div
              data-aos="zoom-in"
              onClick={() => handleClick(value)}
              key={index}
              className={
                "w-36 max-w-[120px] h-44 max-[800px]:h-36 max-[500px]:h-20 flex flex-col justify-between text-center "
              }
            >
              <HomeIcon value={value} index={index} />
            </div>
          )
        )}
      </div>
    </>
  );
}
