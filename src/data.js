export const filterData = (data, statusParameter, genderParameter) => {
  const bothFiltersAreChosen = statusParameter !== "" && genderParameter !== "";
  const genderParameterIsNotEmpty = genderParameter !== "";
  const statusParameterIsNotEmpty = statusParameter !== "" ;

  let filterResults = "";

  if (bothFiltersAreChosen) {
    filterResults = data.filter(results => results.status === statusParameter && results.gender === genderParameter);
    return filterResults;
  }

  if (genderParameterIsNotEmpty) {
    filterResults = data.filter(results => results.gender === genderParameter);
    return filterResults;
  }

  if (statusParameterIsNotEmpty) {
    filterResults = data.filter(results => results.status === statusParameter);
    return filterResults;
  }
};

export const sortData = (data) => data.sort((a, b) => b.episode.length - a.episode.length);

export const computeStats = {

  characters: (data) => (data).length,

  gender: (data, genderParameter) => {

    let total = [];
    let average = [];
    for (let gender of data) {
      if (gender.gender == genderParameter) {
        total.push(gender.gender);
        average = Number(((total.length / data.length) * 100).toFixed(2))
      }
    }
    return average;
  }
};

export const searchName = (data, condition) => {
  const searchResults = data.filter(n => n.name.toLowerCase().includes(condition.toLowerCase()));
  return searchResults;
} 