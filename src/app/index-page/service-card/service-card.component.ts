import { Component } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {

  CategoriesList: any = [
    // {
    //   CategoriesImg: "/assets/images/homepage/basic.webp",
    //   CategoriesTitle:"Basic Computer",
    //   CategoriesParagraph:"70 + Articles",
    // },

    {
      CategoriesImg: "/assets/icons/Tutorials.png",
      CategoriesTitle: "Learn Tutorials",
      CategoriesParagraph: "840 + Articles",
      CategoriesTitlelink: "/categories/web_development_tutorials",
      Categorieslink_a: "Web Development",
      Categorieslink_b: "Programming",
      Categorieslink_c: "Database Tutorials",
      Categorieslink_d: "Data-Analytics",
      Categorieslink_e: "App Development",
      Categorieslink_f: "AI & ML",
    },

    {
      CategoriesImg: "/assets/icons/quiz.png",
      CategoriesTitle: "Quizzes",
      CategoriesParagraph: "600 + Articles",
      CategoriesTitlelink: "/quiztest",
      Categorieslink_a: "Quiz Web Development",
      Categorieslink_b: "Quiz Programming",
      Categorieslink_c: "Quiz Database Tutorials",
      Categorieslink_d: "Quiz Data-Analytics",
      Categorieslink_e: "Quiz App Development",
      Categorieslink_f: "Quiz AI & ML",
    },

    {
      CategoriesImg: "/assets/icons/exercises.svg",
      CategoriesTitle: "Exercises",
      CategoriesParagraph: "600 + Articles",
      CategoriesTitlelink: "/quiztest",
      Categorieslink_a: "Exercises Web Development",
      Categorieslink_b: "Exercises Programming",
      Categorieslink_c: "Exercises Database Tutorials",
      Categorieslink_d: "Exercises Data-Analytics",
      Categorieslink_e: "Exercises App Development",
      Categorieslink_f: "Exercises AI & ML",
    },

    {
      CategoriesImg: "/assets/icons/primapacks.png",
      CategoriesTitle: "Prime Packs ",
      CategoriesParagraph: "700 + Articles",
      CategoriesTitlelink: "https://tech-learning.ssbrinet.com/",
      Categorieslink_a: "Certificates",
      Categorieslink_b: "Courses Library",
      Categorieslink_c: "eBooks Library",
      Categorieslink_d: "Paid tools",
      Categorieslink_e: "Upgrade",
      Categorieslink_f: "Join Youtube",
    },

    {
      CategoriesImg: "/assets/icons/digital.png",
      CategoriesTitle: "Digital Marketing",
      CategoriesParagraph: "980 + Articles",
      CategoriesTitlelink: "/categories/skills_courses_list",
      Categorieslink_a: "Search Engine SEO",
      Categorieslink_b: "Search Engine SEM",
      Categorieslink_c: "Content & Social Marketing",
      Categorieslink_d: "Email Marketing",
      Categorieslink_e: "Affiliate & Influencer Marketing",
      Categorieslink_f: "Online PR (Public Relations)",
    },

    // {
    //   CategoriesImg: "/assets/icons/exercises.svg",
    //   CategoriesTitle: "Supports",
    //   CategoriesParagraph: "900 + Articles",
    //   CategoriesTitlelink: "https://support.ssbrinet.com/",
    //   Categorieslink_a: "Learn Tutorials",
    //   Categorieslink_b: "Quizzes-Exercises",
    //   Categorieslink_c: "Prime Packs",
    //   Categorieslink_d: "Digital Marketing",
    //   Categorieslink_e: "How to Become a member",
    // },
  ]
}
