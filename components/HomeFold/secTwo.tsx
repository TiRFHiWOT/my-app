import HomeIcon from "./homeIcon";

export default function SecTwo({
  BUSINESSCATEGORIES,
  categoryNo1,
  handleClick,
  width,
}) {
  return (
    <div
      className={
        "w-full h-auto grid grid-cols-7 max-[500px]:grid-cols-3 max-[500px]:gap-10 gap-40 mt-4 justify-start flex-wrap max-[500px]:flex max-[500px]:mr-[15px] max-[500px]:justify-center"
      }
    >
      {(width > 575
        ? BUSINESSCATEGORIES.slice(0, categoryNo1)
        : BUSINESSCATEGORIES
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
  );
}
