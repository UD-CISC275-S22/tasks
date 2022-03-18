export interface Question {
    id: number;
    name: string;
    body: string;
    type: string;
    expected: string;
    points: number;
    shown: boolean;
}
