import { test, expect } from "@playwright/experimental-ct-react";
import { Search } from "../modules/Search";
// @ts-check

test("searchField", async ({ mount }) => {
  const searchComponent = await mount(<Search />);
  await searchComponent.getByRole("search").fill("react");
  await expect(searchComponent.getByRole("search")).toHaveValue("react");
});
