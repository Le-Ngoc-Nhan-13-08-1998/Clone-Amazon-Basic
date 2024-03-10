import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props) => {
  const startNumber = props.avgRating;
  const ratingNumber = props.ratings;

  return (
    <div className="flex">
      {Array.from({ length: startNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#f1b61F] fill-[#f1b61f] h-[20px]"
        />
      ))}
      {Array.from({ length: 5 - startNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#f1b61F] fill-[#f1b61f] h-[20px]"
        />
      ))}
      <span className="ml-3 text-blue-500">{ratingNumber} rating</span>
    </div>
  );
};

export default ProductRatings;
