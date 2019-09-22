import React, { useContext } from "react";
import { Rating } from "semantic-ui-react";
//context
import { QuestionContext } from "../../contexts/QuestionContext";

const ParentResponseForm = () => {
  const { sampleQuestions } = useContext(QuestionContext);

  const questionOne = sampleQuestions[0];

  return (
    <div className="parent-response-form">
      <h4>{`${questionOne.subject} Question of the ${questionOne.date}`}</h4>
      <div className="question-from-teacher">
        <p>{questionOne.question}</p>
      </div>
      <h4>Rate your child's response!</h4>
      <Rating maxRating={5} clearable />
      <button>Submit</button>
    </div>
  );
};

export default ParentResponseForm;
