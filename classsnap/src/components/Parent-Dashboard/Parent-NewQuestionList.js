import React from "react";

//component
import ParentNewQuestionCard from "./Parent-NewQuestionCard";

const ParentNewQuestionList = () => {
  return (
    <ParentNewQuestionCard
      header="Reading Question from Ms. Li'"
      date="10/1/2019"
      question="Today, we read about Georgina's plan to steal a dog. Why did Georgina plan to steal a dog? If you were Georgina, would you steal a dog? Why or why not?"
    />
  );
};

export default ParentNewQuestionList;
