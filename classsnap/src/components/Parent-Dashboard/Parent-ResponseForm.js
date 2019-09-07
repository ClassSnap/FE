import React, { useState } from "react";
import { Rating } from "semantic-ui-react";
const ParentResponseForm = () => {
  return (
    <div className="parent-response-form">
      <h2>Question of the Day</h2>
      <div className="question-from-teacher">
        <h4>Question here</h4>
      </div>
      <h4>Rate your child's response!</h4>
      <Rating maxRating={5} clearable />
    </div>
  );
};

export default ParentResponseForm;
