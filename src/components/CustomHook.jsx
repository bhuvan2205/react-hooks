import useLocalStorage from "../hooks/useLocalStorage";

const CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh]">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">
            Use LocalStorage <br />
            Custom Hook
          </h1>
        </div>
      </div>
    </>
  );
};

export default CustomHook;
