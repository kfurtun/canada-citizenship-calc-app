import React from "react";
import { AnswerContext } from "../AnswerContext";
import moment from "moment";

export const calculationResult = (state) => {
  let sumStudy = 0;
  let sumWork = 0;
  let sumStudyWork = 0;
  let PR = 0;
  let travelBeforePr = 0;
  let travelAfterPr = 0;
  let eligibility = Boolean;
  const dayToMsConst = 86400000;

  const calculateDifference = (question) => {
    let sum = 0;
    Object.values(question).map((answer) => {
      sum += (new Date(answer.to) - new Date(answer.from)) / dayToMsConst;
    });

    return sum;
  };
  console.log(state, "state result");
  if (state.seventh.answer) {
    Object.values(state.seventh.answer).map((travel) => {
      if (
        new Date(travel.from) < new Date(state.fifth.answer.from) &&
        new Date(travel.to) < new Date(state.fifth.answer.from)
      ) {
        travelBeforePr +=
          (new Date(travel.to) - new Date(travel.from)) / dayToMsConst;
      } else if (
        new Date(travel.from) < new Date(state.fifth.answer.from) &&
        new Date(travel.to) > new Date(state.fifth.answer.from)
      ) {
        travelBeforePr +=
          (new Date(state.fifth.answer.from) - new Date(travel.from)) /
          dayToMsConst;
        travelAfterPr +=
          (new Date(travel.to) - new Date(state.fifth.answer.from)) /
          dayToMsConst;
      } else {
        travelAfterPr +=
          (new Date(travel.to) - new Date(travel.from)) / dayToMsConst;
      }
    });
  }

  if (state.second.answer) {
    sumStudy = calculateDifference(state.second.answer);
  }

  if (state.fourth.answer) {
    sumWork = calculateDifference(state.fourth.answer);
  }

  if (sumStudy + sumWork - travelBeforePr > 730) {
    sumStudyWork = 365;
  } else {
    sumStudyWork = (sumStudy + sumWork - travelBeforePr) / 2;
  }

  PR = (new Date() - new Date(state.fifth.answer.from)) / dayToMsConst;

  const remainingDays = Math.round(1095 - PR - sumStudyWork + travelAfterPr);
  const eligibilityDate = moment(
    Date.now() +
      Math.round(1095 - PR - sumStudyWork + travelAfterPr) * 24 * 60 * 60 * 1000
  ).format("DD/MMM/YYYY");

  if (PR + sumStudyWork - travelAfterPr > 1095) {
    eligibility = true;
  } else {
    eligibility = false;
  }
  console.log(PR, "pr");
  console.log(state.second.answer, "sumstudywork");
  return {
    PR,
    sumStudyWork,
    travelAfterPr,
    eligibilityDate,
    eligibility,
    remainingDays,
  };
};
