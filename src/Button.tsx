export default function Button(props: { text: string }) {
  const { text } = props;
  return (
    <button className="bg-gray-700 rounded-xl w-full text-white">{text}</button>
  );
}
