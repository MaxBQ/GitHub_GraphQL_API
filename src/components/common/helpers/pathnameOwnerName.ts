export const ownerName = (pathname: string) => {
  const pathnameArray = pathname.split("/");
  const filterPathname = pathnameArray.filter((e) => e.length);
  return {
    owner: filterPathname[0],
    name: filterPathname[1],
  };
};
