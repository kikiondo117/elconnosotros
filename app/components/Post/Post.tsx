import type { ReactNode } from "react";

export function Post({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <article className="w-64 rounded-sm md:w-80">
      <h5 className="w-fit bg-blue-500 p-4 capitalize text-white">{title}</h5>
      <div className="bg-gray-600 p-4 text-white">{children}</div>
    </article>
  );
}
