export class Question {
    id: string;
    title: string;
    question: string;
    answer: string;
    image: string;

    constructor(question, title, answer, image){
        this.question = question;
        this.title = title;
        this.answer = answer;
        this.image = image;
    }
    
}