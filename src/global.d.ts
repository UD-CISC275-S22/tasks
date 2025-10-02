declare module "*.json" {
    import { Question } from "./interfaces/question";
    const value: Question[];
    export default value;
}
