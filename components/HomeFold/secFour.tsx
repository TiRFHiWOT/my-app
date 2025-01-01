import HomeIcon from "./homeIcon";

export default function SecFour({ width, BUSINESSCATEGORIES, handleClick }) {
  return (
    <div
      className={
        "w-[500px] max-[800px]:w-[1200px] max-[800px]:mt-6 max-[1350px]:w-[400px] max-w-[500px] max-h-[380px] mr-3 pr-5"
      }
    >
      <div
        className={
          "w-full h-auto flex max-[1150px]:flex-row flex-row-reverse gap-9 max-[1150px]:mt-0 mt-4 max-[500px]:justify-center"
        }
      >
        {(width > 575
          ? BUSINESSCATEGORIES.slice(
              window.innerWidth <= 800 && window.innerWidth >= 500 ? 4 : 5,
              window.innerWidth <= 800 && window.innerWidth >= 500 ? 8 : 7
            )
          : []
        ).map((value, index) => (
          <div
            data-aos="zoom-in"
            onClick={() => handleClick(value)}
            key={index}
            className={
              "mr-2 w-36 max-w-[120px] h-44 max-[800px]:h-36 flex flex-col justify-between text-center"
            }
          >
            <HomeIcon value={value} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
