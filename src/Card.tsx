import Profile from "./Profile";
import Button from "./Button";

export default function Card() {
  return (
    <div className="p-3">
      <Profile />
      <div className="space-y-2">
        <Button text="GitHub" />
        <Button text="Frontend Mentor" />
        <Button text="LinkedIn" />
        <Button text="Twitter" />
        <Button text="Instagram" />
      </div>
    </div>
  );
}
