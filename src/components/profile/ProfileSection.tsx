import ProfileImage from "./ProfileImage.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Badge from "../display/Badge.tsx";
import Title from "../typography/Title.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import Divider from "../display/Divider.tsx";
import ProfileHighlight from "./ProfileHighlight.tsx";
import ProfileScrollButton from "./ProfileScrollButton.tsx";
import { DataService } from "../../services/dataService.tsx";
import { LuPhone } from "react-icons/lu";
import ScrollReveal from "../animation/ScrollReveal.tsx";

function ProfileSection() {
  const profile = DataService.getProfile();

  return (
    <div className="mx-auto w-full max-w-[1300px]">
      <ScrollReveal>
        <div className="grid grid-cols-1 items-center gap-8 min-[650px]:grid-cols-12 min-[650px]:gap-5">
          <div className="col-span-1 flex justify-center min-[650px]:col-span-4 lg:col-span-3">
            <ProfileImage />
          </div>

          <div className="col-span-1 flex flex-col items-center gap-4 text-center min-[650px]:col-span-8 min-[650px]:items-start min-[650px]:text-left lg:col-span-9">
            <Badge
              text="Available for hire"
              bgColor="bg-green-300/50 dark:bg-green-800/30"
              textColor="text-green-600"
              icon={
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-100"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                </div>
              }
            />

            <Title text={profile.fullName} brow={profile.role} />

            <Paragraph text={profile.description} />

            <div className="flex w-full flex-col items-center gap-3 min-[650px]:grid min-[650px]:w-auto min-[650px]:grid-cols-2 min-[650px]:justify-items-start min-[650px]:gap-x-4 min-[650px]:gap-y-3 min-[1026px]:flex min-[1026px]:flex-row min-[1026px]:justify-start min-[1026px]:gap-2">
              <ButtonLinkSecondary
                text={profile.socialLinks.phone}
                icon={LuPhone}
                href={`tel:${profile.socialLinks.phone}`}
              />

              <ButtonLinkSecondary
                text={profile.socialLinks.email}
                icon={SiGmail}
                href={`mailto:${profile.socialLinks.email}`}
              />

              <ButtonLinkSecondary
                text="LinkedIn"
                icon={FaLinkedinIn}
                href={profile.socialLinks.linkedin}
              />

              <ButtonLinkSecondary
                text="GitHub"
                icon={FaGithub}
                href={profile.socialLinks.github}
              />
            </div>
          </div>

          <div className="col-span-1 w-full min-[650px]:col-span-12">
            <Divider className="mb-6 min-[650px]:mt-6 min-[650px]:mb-8" />

            <div className="grid grid-cols-1 divide-y divide-zinc-200 pb-8 min-[650px]:grid-cols-3 min-[650px]:divide-x min-[650px]:divide-y-0 min-[650px]:pb-0 dark:divide-zinc-800">
              {profile.highlights.map((highlight, index) => (
                <div
                  key={index}
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
