import HomeIcon from "./homeIcon";

export default function SecSix({ width, BUSINESSCATEGORIES, handleClick }) {
  return (
    <div className={"w-full max-w-[800px] flex flex-col items-end text-start "}>
      <div
        className={
          "w-full h-auto grid grid-cols-7 gap-40 max-[500px]:gap-10 max-[1150px]:mt-12 mt-4 max-[500px]:flex max-[500px]:mt-20 max-[500px]:justify-center max-[500px]:mr-[15px]"
        }
      >
        {(width > 575
          ? BUSINESSCATEGORIES.slice(
              window.innerWidth <= 800 && window.innerWidth >= 500 ? 8 : 12
            )
          : []
        ).map((value, index) => (
          <div
            data-aos="zoom-in"
            onClick={() => handleClick(value)}
            key={index}
            className={
              "w-36 max-w-[120px] h-44 max-[800px]:h-36 max-[500px]:h-20 flex flex-col justify-between text-center"
            }
          >
            <HomeIcon value={value} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
