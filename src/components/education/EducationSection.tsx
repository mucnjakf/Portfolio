import Subtitle from "../typography/Subtitle.tsx";
import Divider from "../display/Divider.tsx";
import { DataService } from "../../services/dataService.tsx";
import {
  LuBadgeCheck,
  LuExternalLink,
} from "react-icons/lu";
import ScrollReveal from "../animation/ScrollReveal.tsx";

import AlgebraLogo from "../../assets/education/algebra.jpg"
import FbMesLogo from "../../assets/education/fbmes.jpg"

const SchoolMap = {
  "Algebra": AlgebraLogo,
  "Fran": FbMesLogo,
};


function EducationSection() {
  const education = DataService.getEducation();
  const certificates = DataService.getCertificates();

  return (
    <div className="w-full border-b border-b-zinc-200 dark:border-b-zinc-800">
      <div className="mx-auto max-w-[1300px] px-4 py-10 min-[650px]:p-10">
        <div className="flex flex-col gap-2">
          <Subtitle
            text="Education"
            id="education"
            description="Academic background and professional certifications."
          />

          <Divider className="mb-10" />
        </div>

        <div className="relative ml-6 flex flex-col gap-y-6 border-l border-zinc-400 dark:border-zinc-600">
          <div className="absolute top-0 -left-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          {education.map((edu, index) => {
            const schoolKey = (
              Object.keys(SchoolMap) as Array<keyof typeof SchoolMap>
            ).find((key) => edu.institution.startsWith(key));

            const schoolLogo = schoolKey ? SchoolMap[schoolKey] : null;

            return (
              <ScrollReveal key={index}>
                <div className="relative pl-10">
                  <div className="absolute top-0 -left-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-blue-700/30 bg-zinc-100">
                    {schoolLogo ? (
                      <img
                        src={schoolLogo}
                        alt={`${edu.institution} logo`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      "X"
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-zinc-950 dark:text-zinc-100">
                      {edu.degree}
                    </h3>
                    <h6 className="mt-1 text-xs tracking-wide text-zinc-600 uppercase">
                      {edu.dateRange}
                    </h6>
                    <h5 className="mt-3 text-sm text-zinc-700 dark:text-zinc-400">
                      {edu.institution}
                    </h5>
                    <h6 className="mt-3 text-sm text-zinc-700 dark:text-zinc-400">
                      {edu.description}
                    </h6>
                  </div>

                  <div className="col-span-3 mt-6">
                    {index < education.length - 1 && <Divider />}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          <div className="absolute bottom-0 -left-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        </div>

        <Divider className="my-7" />

        <h4 className="mb-3 text-lg font-bold text-zinc-950 dark:text-zinc-200">
          Certificates
        </h4>

        {certificates.map((certificate, index) => (
          <ScrollReveal key={index}>
            <a
              href={certificate.link}
              target="_blank"
              className="mb-3 flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-zinc-300 bg-zinc-100 p-3 transition-colors hover:bg-zinc-200 min-[650px]:p-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <div className="flex items-center gap-3 min-[650px]:gap-2">
                <LuBadgeCheck
                  size={20}
                  className="shrink-0 text-blue-700 dark:text-blue-600"
                />

                <div className="flex flex-col min-[650px]:flex-row min-[650px]:items-center">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-600">
                    {certificate.name}
                  </span>

                  <span className="hidden px-1 text-xs font-medium text-zinc-700 min-[650px]:inline dark:text-zinc-400">
                    ·
                  </span>

                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-400">
                    {certificate.issuer}
                  </span>
                </div>
              </div>

              <LuExternalLink className="mr-1 shrink-0 text-zinc-700 min-[650px]:mr-3 dark:text-zinc-400" />
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
