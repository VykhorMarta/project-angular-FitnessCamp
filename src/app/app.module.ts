import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { QuestionComponent } from './list-questions/question/question.component';
import { QuestionService } from './services/question.service';
import { HeaderComponent } from './header/header.component';
import { MainImageComponent } from './header/main-image/main-image.component';
import { FooterComponent } from './footer/footer.component';
import { AnswerComponent } from './list-questions/answer/answer.component';


import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListQuestionsComponent,
    QuestionComponent,
    HeaderComponent,
    MainImageComponent,
    FooterComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
