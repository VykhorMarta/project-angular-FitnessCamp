export class Question {
    id: string;
    question: string;
    answer: string;
    image: string;

    constructor(question, answer, image){
        this.question = question;
        this.answer = answer;
        this.image = image;
    }
    
}