import React from "react";
import { quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
import { CheckAnswer } from "../form-components/CheckAnswer";

export function selectQuiz({ selector }: { selector: quiz }): JSX.Element {
    return (
        <div>
            <div>
                <h2>{selector.Title}</h2>
            </div>
            <section>
                {selector.question.map((question: Question) =>
                    question.type == "multiple_choice_question" ? (
                        <div>
                            <div>
                                {question.name} is worth {question.points}{" "}
                                points
                            </div>
                            <MultipleChoiceQuestion
                                options={question.options}
                                expectedAnswer={question.expected}
                                title={question.body}
                            ></MultipleChoiceQuestion>
                        </div>
                    ) : (
                        <div>
                            <div>
                                {question.name} is worth {question.points}{" "}
                                points
                            </div>
                            <CheckAnswer
                                title={question.body}
                                expectedAnswer={question.expected}
                            ></CheckAnswer>
                        </div>
                    )
                )}
            </section>
        </div>
    );
}
