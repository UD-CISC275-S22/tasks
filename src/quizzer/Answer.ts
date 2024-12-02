export interface Answer {
    questionId: number | null;
    text: string | null;
    submitted: boolean;
    correct: boolean;
}
