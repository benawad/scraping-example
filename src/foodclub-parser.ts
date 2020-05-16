export const foodClubParser = ($: CheerioStatic, url: string) => {
  const recipe = {
    description: "",
    instructions: [] as string[],
    name: "",
    pictureUrl: "",
    servings: "",
    source: "",
    sourceUrl: url,
    // example values for time type: "Cook" | "Prep" | "Marinate"
    // default it to "Cook" if none provided by website
    times: [] as Array<{ type: string; minutes: number }>,
    ingredients: [] as string[],
  };

  recipe.source = $('span[itemprop="author"]')?.text();
  recipe.name = $('span[itemprop="name"]')?.text();
  // etc

  return recipe;
};
