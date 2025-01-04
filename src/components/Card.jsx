import Img01 from "../assets/images/01.png";

const Card = () => {
  return (
    <div className="max-w-[850px] bg-red-200 h-[380px] mx-auto">
      <div></div>
      <div className="max-w-sm overflow-hidden">
        <img
          src={Img01}
          alt="An image of a girl walking on the street of the mountain"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Card;
