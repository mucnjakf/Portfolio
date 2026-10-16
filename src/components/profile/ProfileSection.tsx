import ProfileImage from "./ProfileImage.tsx";
import IconLinkSecondary from "../button/IconLinkSecondary.tsx";
import MinimalistIcon from "../display/MinimalistIcon.tsx";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Badge from "../display/Badge.tsx";
import Title from "../typography/Title.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import Divider from "../display/Divider.tsx";
import ProfileHighlight from "./ProfileHighlight.tsx";
import ProfileScrollButton from "./ProfileScrollButton.tsx";
import { DataService } from "../../services/dataService.tsx";
import { LuPhone, LuMail } from "react-icons/lu";
import ScrollReveal from "../animation/ScrollReveal.tsx";

function ProfileSection() {
  const profile = DataService.getProfile();

  return (
    <div className="mx-auto w-full max-w-[1300px]">
      <ScrollReveal>
        <div className="grid grid-cols-1 items-center gap-8 min-[650px]:grid-cols-12 min-[650px]:gap-5">
          <div className="col-span-1 flex justify-center min-[650px]:col-span-4 lg:col-span-3">
            <ProfileImage alt={`Portrait of ${profile.fullName}`} />
          </div>

          <div
            data-bg-mute
            className="col-span-1 flex flex-col items-center gap-4 text-center min-[650px]:col-span-8 min-[650px]:items-start min-[650px]:text-left lg:col-span-9"
          >
            <Badge
              text="Available for hire"
              bgColor="bg-green-300/50 dark:bg-green-800/30"
              textColor="text-green-600"
              icon={
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-100 motion-safe:animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                </div>
              }
            />

            <Title text={profile.fullName} brow={profile.role} />

            <Paragraph text={profile.description} />

            <div className="flex flex-wrap items-center justify-center gap-2 min-[650px]:justify-start">
              <IconLinkSecondary
                icon={LuPhone}
                label={`Phone ${profile.socialLinks.phone}`}
                href={`tel:${profile.socialLinks.phone}`}
                className="p-3"
              />

              <IconLinkSecondary
                icon={LuMail}
                label={`Email ${profile.socialLinks.email}`}
                href={`mailto:${profile.socialLinks.email}`}
                className="p-3"
              />

              <IconLinkSecondary
                icon={MinimalistIcon}
                label="Minimalist studio"
                href={profile.socialLinks.minimalist}
                className="p-3"
              />

              <IconLinkSecondary
                icon={FaLinkedinIn}
                label="LinkedIn"
                href={profile.socialLinks.linkedin}
                className="p-3"
              />

              <IconLinkSecondary
                icon={FaGithub}
                label="GitHub"
                href={profile.socialLinks.github}
                className="p-3"
              />
            </div>
          </div>

          <div className="col-span-1 w-full min-[650px]:col-span-12">
            <Divider className="mb-6 min-[650px]:mt-6 min-[650px]:mb-8" />

            <div
              data-bg-mute
              className="grid grid-cols-1 divide-y divide-zinc-200 pb-8 min-[650px]:grid-cols-3 min-[650px]:divide-x min-[650px]:divide-y-0 min-[650px]:pb-0 dark:divide-zinc-800"
            >
              {profile.highlights.map((highlight) => (
                <div
                  key={highlight.description}
                  className="flex flex-col py-4 text-center first:pt-0 last:pb-0 min-[650px]:py-0 min-[650px]:first:pt-0 min-[650px]:last:pb-0"
                >
                  <ProfileHighlight
                    text={highlight.title}
                    description={highlight.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="hidden min-[650px]:block">
        <ProfileScrollButton />
      </div>
    </div>
  );
}

export default ProfileSection;
