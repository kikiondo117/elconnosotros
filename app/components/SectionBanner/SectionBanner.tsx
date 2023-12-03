import { GiVhs } from "react-icons/gi/index.js";

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionBanner(props: Props) {
  return (
    <div>
      <div className="relative">
        <h3 className="text-2xl bg-white p-8 text-black w-fit  gap-2 xl:text-5xl rounded-md flex items-center">
          {props.title}
          <GiVhs />
        </h3>

        <p className="absolute left-0 bottom-0 transform -translate-x-4 translate-y-9 bg-blue-500 text-white p-2 capitalize">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
