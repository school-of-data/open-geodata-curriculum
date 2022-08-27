export const showcaseDataParse = (showcaseData) => {

  const filters = {
    'country': {},
    'language': {},
    'themes_keywords': {},
    'algorithms': {},
    'tools': {}
  }

  const filterCats = Object.keys(filters);

  const n = showcaseData.length;

  for (let i = 0; i < n; i++) {
    const row = showcaseData[i];

    filterCats.forEach((cat) => {
      const elements = row[cat].split(',').map(t => t.trim()).filter(t => t !== '')

      for (let j = 0; j < elements.length; j++) {

        if (elements[j] in filters[cat]) {
          filters[cat][elements[j]].push(i)
        } else {
          filters[cat][elements[j]] = [i]
        }
      }
    })
  }

  return filters;

}