import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  category = [
    {
      categoryImg: "assets/icons/web.svg",
      categoryCount: "Web Development",
      categoryName: "15K Articles Tutors",
    },
    {
      categoryImg: "assets/icons/programsvg.svg",
      categoryCount: "Programming",
      categoryName: "20K Articles Tutors",
    },
    {
      categoryImg: "assets/icons/data_analytices.svg",
      categoryCount: "Data-Analytics",
      categoryName: "10K Articles Tutors",
    },
    {
      categoryImg: "assets/icons/android/android.svg",
      categoryCount: "App Development",
      categoryName: "8K Articles Tutors",
    },
    {
      categoryImg: "assets/icons/exercise.svg",
      categoryCount: "Exercises",
      categoryName: "55+ Exercises ",
    },
    {
      categoryImg: "assets/icons/ourservice/quiz.svg",
      categoryCount: "Quizzes",
      categoryName: "55+ Quizzes",
    },
    {
      categoryImg: "assets/icons/seo_marketing.svg",
      categoryCount: "Digital Marketing",
      categoryName: "10K Articles Tutors",
    },
    {
      categoryImg: "assets/icons/references.svg",
      categoryCount: "References",
      categoryName: "25K Articles Tutors",
    },
  ]
}
