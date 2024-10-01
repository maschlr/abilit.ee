import { slugifyStr } from "@utils/slugify";

export interface ProjectProps {
  highlights: string[];
  summary: string;
  website: string;
  pinned?: boolean;
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
}

export default function Project(projectProps: ProjectProps) {
  const headerProps = {
    style: { viewTransitionName: slugifyStr(projectProps.name) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <div className="my-6" key={projectProps.name}>
      <a
        href={projectProps.website}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <h2 {...headerProps}>{projectProps.name}</h2>
      </a>
      <div>
        <p>{projectProps.summary}</p>
        <ul className="pl-6 pt-2 text-sm list-disc">
          {projectProps.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
