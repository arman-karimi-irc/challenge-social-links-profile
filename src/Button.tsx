export default function Button(props: { text: string }) {
  const { text } = props;
  return (
    <button className="bg-gray-700 text-sm md:text- rounded-md h-10 w-full text-white font-semibold">
      {text}
    </button>
  );
}
