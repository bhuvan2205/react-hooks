import { useId } from "react";

const Id = () => {
  const id = useId();
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh">
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold uppercase">Use ID</h1>
        </div>
        <div className="w-[50%]">
          <div className="my-4">
            <label htmlFor={`${id}_name`} className="pe-4 cursor-pointer">
              Name:
            </label>
            <input
              id={`${id}_name`}
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            rerum error quam praesentium excepturi ratione ad? Enim, doloribus
            nesciunt perferendis laudantium temporibus optio vitae non
            consequuntur quos eveniet iure sit libero odio pariatur aut nemo
            neque molestiae. Alias possimus id quae eius iure natus architecto
            animi quisquam deleniti e.
          </p>
          <div className="my-4">
            <label htmlFor={`${id}_email`} className="pe-4 cursor-pointer">
              Email:
            </label>
            <input
              id={`${id}_email`}
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Id;
