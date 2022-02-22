import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../HomeScreen";
import { StudyQuestionFirst } from "../StudyQuestionFirst";
import { StudyQuestionSecond } from "../StudyQuestionSecond";
import { WorkQuestionFirst } from "../WorkQuestionFirst";
import { WorkQuestionSecond } from "../WorkQuestionSecond";
import { PrQuestion } from "../PrQuestion";
import { TravelLogFirstQuestion } from "../TraveLogFirstQuestion";
import { TravelLogSecondQuestion } from "../TravelLogSecondQuestion";
import { ResultPage } from "../ResultPage";
import { SummaryPage } from "../SummaryPage";

import { AnswerProvider } from "../AnswerContext";

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <AnswerProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="StudyQuestionFirst"
            component={StudyQuestionFirst}
            options={{ title: "Study Question 1" }}
          />
          <Stack.Screen
            name="StudyQuestionSecond"
            component={StudyQuestionSecond}
            options={{ title: "Study Question 2" }}
          />
          <Stack.Screen
            name="WorkQuestionFirst"
            component={WorkQuestionFirst}
            options={{ title: "Work Question 1" }}
          />
          <Stack.Screen
            name="WorkQuestionSecond"
            component={WorkQuestionSecond}
            options={{ title: "Work Question 2" }}
          />
          <Stack.Screen
            name="PrQuestion"
            component={PrQuestion}
            options={{ title: "PR Question" }}
          />
          <Stack.Screen
            name="TravelLogFirstQuestion"
            component={TravelLogFirstQuestion}
            options={{ title: "Travel Log Question 1" }}
          />
          <Stack.Screen
            name="TravelLogSecondQuestion"
            component={TravelLogSecondQuestion}
            options={{ title: "Travel Log Question 2" }}
          />
          <Stack.Screen
            name="SummaryPage"
            component={SummaryPage}
            options={{ title: "Summary" }}
          />
          <Stack.Screen
            name="ResultPage"
            component={ResultPage}
            options={{ title: "Result" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AnswerProvider>
  );
}
