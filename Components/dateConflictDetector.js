export const dateConflictDetector = (state) => {
  const dateArr = [];
  const travelArr = [];
  if (state.second.answer) {
    Object.values(state.second.answer).forEach((item) => {
      dateArr.push({ from: new Date(item.from), to: new Date(item.to) });
    });
  }
  if (state.fourth.answer) {
    Object.values(state.fourth.answer).forEach((item) => {
      dateArr.push({ from: new Date(item.from), to: new Date(item.to) });
    });
  }

  if (state.seventh.answer) {
    Object.values(state.seventh.answer).forEach((item) => {
      dateArr.push({ from: new Date(item.from), to: new Date(item.to) });
    });
  }

  if (state.fifth.answer) {
    dateArr.push({
      from: new Date(state.fifth.answer.from),
      to: new Date(state.fifth.answer.from),
    });
  }

  const coincidenceArr = [];

  dateArr.forEach((comparedQuestion) => {
    dateArr.forEach((item) => {
      if (item.from && item !== comparedQuestion) {
        if (
          (item.from < comparedQuestion.from &&
            item.to > comparedQuestion.from) ||
          (item.from > comparedQuestion.from &&
            item.to < comparedQuestion.from) ||
          (item.from === comparedQuestion.from &&
            item.to > comparedQuestion.to) ||
          (item.from === comparedQuestion.from && item.to < comparedQuestion.to)
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
          (item.from > comparedDate.from && item.to < comparedDate.from) ||
          (item.from === comparedDate.from && item.to > comparedDate.to) ||
          (item.from === comparedDate.from && item.to < comparedDate.to)
        ) {
          coincidenceArr.push(item);
        }
      }
    });
  });

  return coincidenceArr;
};
