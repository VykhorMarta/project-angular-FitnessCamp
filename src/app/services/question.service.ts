import { Injectable } from "@angular/core";
import { Question } from "../models/questions.model";

@Injectable()
export class QuestionService {

    questions: Question[] = [
        new Question("Title", "Question", "Answer", "http://xochu-vse-znat.ru/wp-content/uploads/2016/09/1-37.jpg"),
        new Question("Title", "Question", "Answer",  "http://xochu-vse-znat.ru/wp-content/uploads/2016/09/1-37.jpg"),
    ]

    getAllQuestions(){
        return this.questions;
    }
}