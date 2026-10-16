import Portrait from "../../assets/portrait.webp";

function ProfileImage({ alt }: { alt: string }) {
  return (
    <img
      src={Portrait}
      alt={alt}
      width={288}
      height={288}
      className="h-36 w-36 rounded-full border border-zinc-400 dark:border-zinc-300"
    />
  );
}

export default ProfileImage;
