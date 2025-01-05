import Divider from "../components/Divider";
import Arrow from "./Arrow";

const Card = ({ data }) => {
  const { number, title, subtitle, body, img, reverse } = data;
  return (
    <div className="max-w-[850px] h-[380px] mx-auto">
      <div className="grid grid-cols-6 h-full">
        <div
          className={`col-span-4 max-w-[70%] m-auto h-fit relative ${reverse} ? "col-start-1" : "col-start-auto" `}
        >
          <div className="flex items-center gap-3 text-[12px]">
            <Divider />
            <h6 className="uppercase font-sans text-secondary">{subtitle}</h6>
          </div>
          <div className="">
            <h1 className="font-serif absolute w-fit h-fit -top-1/3 right-72 opacity-30 p-0 text-[128px]">
              {number}
            </h1>
          </div>
          <div className="space-y-3">
            <h3 className="text-[38px] font-serif font-thin">{title}</h3>
            <p className="text-[10px] font-sans">{body}</p>
            <a href="" className="text-secondary flex items-center gap-3">
              read more <Arrow />
            </a>
          </div>
        </div>
        <div
          className={`overflow-hidden col-span-2 ${reverse} ? "col-start-1" : "col-start-auto"`}
        >
          <img src={img} alt="" className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
};

export default Card;
