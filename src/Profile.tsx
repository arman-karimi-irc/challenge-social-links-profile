import img from "/assets/images/avatar-jessica.jpeg";
export default function Profile() {
  return (
    <div className="text-white flex flex-col items-center space-y-1">
      <img className="rounded-full w-[25%] min-w-16" src={img} alt="avatar" />
      <h2 className="text-xl mt-3">Jessica Randall</h2>
      <b className="text-green text-sm font-semibold">London, United Kingdom</b>
      <p className="text-xs md:text-sm text-gray-300 mt-5">
        "Front-end developer and avid reader."
      </p>
    </div>
  );
}
