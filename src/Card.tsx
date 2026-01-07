import Profile from "./Profile";
import Button from "./Button";

export default function Card() {
  return (
    <div className="p-5 bg-gray-800 rounded-xl">
      <Profile />
      <div className="space-y-3.5 mt-4">
        <Button text="GitHub" />
        <Button text="Frontend Mentor" />
        <Button text="LinkedIn" />
        <Button text="Twitter" />
        <Button text="Instagram" />
      </div>
    </div>
  );
}
