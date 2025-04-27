export function formatCategories(categories) {
  const male = [];
  const female = [];

  categories.forEach((category) => {
    const genderPath = category.gender === "k" ? "kadin" : "erkek";
    const categoryName = category.code.split(":")[1];
    const link = `/shop/${genderPath}/${categoryName}/${category.id}`;

    const formattedCategory = {
      ...category,
      link,
    };

    if (category.gender === "k") {
      female.push(formattedCategory);
    } else if (category.gender === "e") {
      male.push(formattedCategory);
    }
  });

  return { male, female };
}

export function getTopRatedCategories(categories) {
  const sortedCategories = categories.sort((a, b) => b.rating - a.rating);

  const top5Categories = sortedCategories.slice(0, 5);

  const formattedCategories = top5Categories.map((category) => ({
    name: category.title.toUpperCase(),
    items: 5,
    bg: category.img,
    gender: category.gender === "e" ? "Erkek" : "Kadın",
  }));

  return formattedCategories;
}
