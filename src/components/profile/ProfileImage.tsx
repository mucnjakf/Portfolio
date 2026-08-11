import Portrait from "../../assets/portrait.png";

function ProfileImage() {
  return (
    <img
      src={Portrait}
      alt="Portrait"
      className="h-36 w-36 rounded-full border border-zinc-400 dark:border-zinc-300"
    />
  );
}

export default ProfileImage;
