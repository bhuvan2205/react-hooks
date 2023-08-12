import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const List = ({ nums }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(nums);
  }, [nums]);
  return (
    <div className="my-2 text-center">
      {items &&
        items?.map((item, index) => (
          <span className="px-2" key={index}>
            {item}
          </span>
        ))}
    </div>
  );
};

export default List;
