import React from "react";

const QuestionResult = () => {
  return (
    <div className="teacher-question-result">
      <h2>Date of Question</h2>
      <h2>Subject</h2>
      <div className="question-from-teacher">
        <h4>How do you solve (3+4) x 15 ?</h4>
      </div>
      <div className="student-results">
        <table>
          <tr>
            <th>Rating</th>
            <th>Student Name</th>
            <th>Student Count</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Hope Young</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Donald Trump</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Joe Biden</td>
            <td>7</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Kamala Harris</td>
            <td>6</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Sarah Gonzalez</td>
            <td>3</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default QuestionResult;

//add graph
