import React, { useContext } from "react";

//context
import { QuestionContext } from "../../contexts/QuestionContext";
import { StudentDataContext } from "../../contexts/StudentDataContext";

const QuestionResult = () => {
  const { sampleQuestions } = useContext(QuestionContext);
  const { sampleStudentData } = useContext(StudentDataContext);
  const questionOne = sampleQuestions[0];
  const studentData = sampleStudentData[0];

  return (
    <div className="teacher-question-result">
      <h4>{studentData.date}</h4>
      <h4>{studentData.subject}</h4>
      <div className="question-from-teacher">
        <h4>{studentData.question}</h4>
      </div>
      <div className="student-results">
        <table>
          <tbody>
            <tr>
              <th>Rating</th>
              <th>Student Name</th>
              <th>Student Count</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{studentData.rateOne}</td>
              <td>{studentData.rateOne.length}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{studentData.rateTwo}</td>
              <td>{studentData.rateTwo.length}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{studentData.rateThree}</td>
              <td>{studentData.rateThree.length}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{studentData.rateFour}</td>
              <td>{studentData.rateFour.length}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{studentData.rateFive}</td>
              <td>{studentData.rateFive.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionResult;

//add graph
