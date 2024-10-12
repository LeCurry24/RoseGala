const homeSelect = () => {
  return (
    <div className="relative group rounded-lg w-56 bg-neutral-950 mb-5 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-400 before:rounded-full before:blur-lg ">
      <svg
        y="0"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        width="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        height="100"
        className="w-8 h-8 absolute right-0 -rotate-45 stroke-neutral-50 top-1.5 group-hover:rotate-0 duration-300"
      >
        <path
          strokeWidth={4}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
          className="svg-stroke-primary"
        />
      </svg>
      <select className="appearance-none hover:placeholder-shown: relative bg-transparent ring-0 outline-none border border-neutral-950 text-neutral-50 placeholder-neutral-50 text-sm focus:border-blue-400 font-bold rounded-lg   block w-full p-2.5">
        <option className="bg-neutral-700">Art</option>
        <option className="bg-neutral-700">Photography</option>
        <option className="bg-neutral-700">Graphic Design</option>
      </select>
    </div>
  );
};

export default homeSelect;
