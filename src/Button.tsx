export default function Button(props: { text: string }) {
  const { text } = props;
  return (
    <button
      className="bg-gray-700 text-sm md:text-base rounded-md 
      h-10 w-full text-white font-semibold hover:bg-green hover:text-gray-800 cursor-pointer"
    >
      {text}
    </button>
  );
}
