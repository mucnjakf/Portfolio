import Subtitle from "../typography/Subtitle.tsx";
import Divider from "../display/Divider.tsx";
import Badge from "../display/Badge.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import ButtonLinkPrimary from "../button/ButtonLinkPrimary.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";
import StudioWordmark from "./StudioWordmark.tsx";
import { DataService } from "../../services/dataService.tsx";
import {
  LuArrowUpRight,
  LuBlocks,
  LuBuilding2,
  LuCompass,
  LuRefreshCcw,
  LuRocket,
  LuSend,
} from "react-icons/lu";
import type { ElementType } from "react";

const IconMap: Record<string, ElementType> = {
  LuRocket: LuRocket,
  LuBlocks: LuBlocks,
  LuRefreshCcw: LuRefreshCcw,
  LuCompass: LuCompass,
};

function StudioSection() {
  const studio = DataService.getStudio();

  return (
    <div className="w-full border-y border-y-zinc-200 bg-zinc-100/60 dark:border-y-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-[1300px] px-4 py-10 min-[650px]:p-10">
        <div className="flex flex-col gap-2">
          <Subtitle
            text="Studio"
            id="studio"
            description="Where my client work lives, and where your project would be built."
          />

          <Divider className="mb-10" />
        </div>

        <ScrollReveal>
          <div className="flex flex-col items-start gap-4">
            <Badge
              text={studio.role}
              bgColor="bg-blue-300/30 dark:bg-blue-800/30"
              textColor="text-blue-700 dark:text-blue-600"
              icon={<LuBuilding2 />}
            />

            <StudioWordmark
              text={studio.name}
              className="text-2xl text-zinc-950 min-[650px]:text-3xl dark:text-zinc-50"
            />

            <h3 className="text-2xl font-bold text-zinc-950 min-[650px]:text-3xl dark:text-zinc-50">
              {studio.tagline}
            </h3>

            <Paragraph text={studio.description} />

            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {studio.note}
            </div>

            <div className="mt-2 flex w-full flex-col items-stretch gap-3 min-[650px]:w-auto min-[650px]:flex-row min-[650px]:items-center min-[650px]:gap-2">
              <ButtonLinkPrimary
                text="Visit the studio"
                icon={LuArrowUpRight}
                href={studio.url}
              />

              <ButtonLinkSecondary
                text="Start a project"
                icon={LuSend}
                href={studio.contactUrl}
              />
            </div>
          </div>
        </ScrollReveal>

        <Divider className="my-10" />

        <ScrollReveal>
          <h4 className="mb-4 text-lg font-bold text-zinc-950 dark:text-zinc-200">
            Services
          </h4>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 min-[650px]:grid-cols-2">
          {studio.services.map((service, index) => {
            const Icon = IconMap[service.icon] || LuBlocks;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="h-full rounded-xl border border-zinc-300 p-5 dark:border-zinc-600">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-fit rounded-xl border border-blue-700/30 bg-blue-300/10 p-2 dark:border-blue-700/30 dark:bg-blue-800/10">
                      <Icon size={18} className="text-blue-700" />
                    </div>

                    <div className="font-semibold text-zinc-800 dark:text-zinc-300">
                      {service.title}
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <Divider className="my-10" />

        <ScrollReveal>
          <h4 className="mb-4 text-lg font-bold text-zinc-950 dark:text-zinc-200">
            How we work
          </h4>
        </ScrollReveal>

        <div className="mb-6 grid grid-cols-1 gap-x-4 gap-y-7 min-[650px]:grid-cols-3 min-[1026px]:grid-cols-6">
          {studio.process.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-400 text-sm font-bold text-blue-700 tabular-nums dark:border-zinc-600 dark:text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
                </div>

                <div>
                  <h3 className="mb-1 font-bold text-zinc-950 dark:text-zinc-100">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudioSection;
