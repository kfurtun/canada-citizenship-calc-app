export const dateConflictDetector = (state) => {
  const dateArr = [];
  const travelArr = [];
  if (state.second.answer) {
    Object.values(state.second.answer).forEach((item) => {
      dateArr.push(item);
    });
  }
  if (state.fourth.answer) {
    Object.values(state.fourth.answer).forEach((item) => {
      dateArr.push(item);
    });
  }

  if (state.seventh.answer) {
    Object.values(state.seventh.answer).forEach((item) => {
      travelArr.push(item);
    });
  }

  if (state.fifth.answer) {
    dateArr.push({ ...state.fifth.answer, to: state.fifth.answer.from });
  }

  const coincidenceArr = [];

  dateArr.forEach((comparedQuestion) => {
    dateArr.forEach((item) => {
      if (item.from && item !== comparedQuestion) {
        console.log(item, "item");
        console.log(comparedQuestion, "compared");

        if (
          (item.from < comparedQuestion.from && item.to) >
            comparedQuestion.from ||
          (item.from > comparedQuestion.from && item.to < comparedQuestion.from)
        ) {
          coincidenceArr.push(item);
        }
      }
    });
  });

  travelArr.forEach((comparedDate) => {
    travelArr.forEach((item) => {
      if (item.from && item !== comparedDate) {
        if (
          (item.from < comparedDate.from && item.to > comparedDate.from) ||
          (item.from >= comparedDate.from && item.to < comparedDate.from)
        ) {
          coincidenceArr.push(item);
        }
      }
    });
  });

  return coincidenceArr;
};
