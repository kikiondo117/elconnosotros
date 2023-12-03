import { GiVhs } from "react-icons/gi/index.js";

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionBanner(props: Props) {
  return (
    <div>
      <div className="relative">
        <h3 className="flex w-fit items-end gap-2 rounded-md  bg-white p-8 text-2xl text-black desktop:text-4xl">
          {props.title}
        </h3>

        <p className="absolute bottom-0 left-0 -translate-x-4 translate-y-9 transform bg-blue-500 p-2 capitalize text-white">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
