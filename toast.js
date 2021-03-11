import { sourceMdx } from "@toastdotdev/mdx";

export const sourceData = async ({ setDataForSlug }) => {
  await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/",
  });
  await sourceMdx({
    setDataForSlug,
    directory: "./copy",
    slugPrefix: "/copy",
  });
  return;
};
