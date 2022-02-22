export const dateConflictDetector = (state) => {
  const dateArr = [];
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
      dateArr.push(item);
    });
  }

  if (state.fifth.answer) {
    dateArr.push({ from: state.fifth.answer, to: state.fifth.answer });
  }

  const coincidenceArr = [];

  dateArr.forEach((comparedQuestion) => {
    dateArr.forEach((item) => {
      if (item.from && item !== comparedQuestion) {
        if (
          (item.from <= comparedQuestion.from &&
            item.to >= comparedQuestion.from) ||
          (item.from >= comparedQuestion.from &&
            item.to <= comparedQuestion.from)
        ) {
          coincidenceArr.push(item);
        }
      }
    });
  });

  return coincidenceArr;
};
