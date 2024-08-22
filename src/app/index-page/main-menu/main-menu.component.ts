import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPageComponent } from '../../authentication/auth/register-page/register-page.component';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {

  CloseOpen: boolean = false;
  isChecked?: boolean;
  isLoggedIn: boolean = false;
  isDarkMode: boolean = false;

  constructor(
    public dialog: MatDialog,
    private themeService: ThemeService
  ) { }

  // ForgetPasswordopenDialog() {
  //   this.dialog.open(RegisterPageComponent, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }


  toggleTheme() {
    const isDarkTheme = this.themeService.isDarkTheme();
    this.themeService.setDarkTheme(!isDarkTheme);
  }

  url = "https://www.ssbrinet.com/assets/images/homepage/fivv.png";

  mainMenu = [
    {
      mainLink: "Learn Tutorials",
      showMega: "showMegaone",
      subMenu: [
        {
          heading: "❇️ Web-Development",
          megaLink: [
            {
              mega_icons: "assets/icons/web/html.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn HTML"
            },
            {
              mega_icons: "assets/icons/web/css.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn CSS"
            },
            // {
            //   mega_icons: "assets/icons/jquery.svg",
            //   mega_link: "/quiztest/html_quiz",
            //   mega_name: "Learn Bootstrap"
            // },
            {
              mega_icons: "assets/icons/web/js.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn JavaScript"
            },
            {
              mega_icons: "assets/icons/web/jquery.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn jQuery"
            },
            {
              mega_icons: "assets/icons/web/angular.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Angular"
            },
            {
              mega_icons: "assets/icons/web/react.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn React"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/web_development_tutorials",
              mega_name: "Learn More"
            },

          ]
        },

        {
          heading: "❇️ Programming",
          megaLink: [
            {
              mega_icons: "assets/icons/program/python.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Python"
            },
            {
              mega_icons: "assets/icons/program/java.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Java"
            },
            {
              mega_icons: "assets/icons/program/c.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn C"
            },
            {
              mega_icons: "assets/icons/program/cplusplus.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn C++"
            },
            {
              mega_icons: "assets/icons/program/c-sharp.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn C#"
            },
            {
              mega_icons: "assets/icons/program/kotlin.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Kotlin"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/computer_programming_tutorials",
              mega_name: "Learn More"
            },

          ]
        },

        {
          heading: "❇️ Databases",
          megaLink: [
            {
              mega_icons: "assets/icons/databases/mysql.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn MySQL"
            },
            {
              mega_icons: "assets/icons/databases/sql.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn SQL"
            },
            {
              mega_icons: "assets/icons/databases/mongodb.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn MongoDB"
            },
            {
              mega_icons: "assets/icons/databases/php.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn PHP"
            },
            {
              mega_icons: "assets/icons/databases/dotnet.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Google ASP"
            },
            {
              mega_icons: "assets/icons/databases/nodejs.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Node js"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/database_tutorials",
              mega_name: "Learn More"
            }
          ]
        },

        {
          heading: "❇️ Data-Analytics",
          megaLink: [
            {
              mega_icons: "assets/icons/analytics/ai.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn AI"
            },
            {
              mega_icons: "assets/icons/analytics/ml.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn ML"
            },
            {
              mega_icons: "assets/icons/analytics/data.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn DS"
            },
            {
              mega_icons: "assets/icons/analytics/numpy.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Numpy"
            },
            {
              mega_icons: "assets/icons/analytics/panda.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Pandas"
            },
            {
              mega_icons: "assets/icons/analytics/scipy.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn SciPy"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/mobile_app_tutorials",
              mega_name: "Learn More"
            }
          ]
        },

        {
          heading: "❇️ Mobile App",
          megaLink: [
            {
              mega_icons: "assets/icons/android/android.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Android"
            },
            {
              mega_icons: "assets/icons/android/swift.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Swift"
            },
            {
              mega_icons: "assets/icons/android/ios.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn iOS"
            },
            {
              mega_icons: "assets/icons/android/flutter.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Flutter"
            },
            {
              mega_icons: "assets/icons/android/nativescript.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn NativeScript"
            },
            {
              mega_icons: "assets/icons/android/ionic.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn ionic"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/mobile_app_tutorials",
              mega_name: "Learn More"
            }
          ]
        },
        // {
        //   heading: "❇️  MS And Other Tools",
        //   megaLink: [
        //     {
        //       mega_icons: "assets/icons/tools/excel.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Excel"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/word.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Word"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/ppt.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn PPT"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/ms-outlook.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Outlook"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/excel.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Google Excel"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/power-bi.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Power BI"
        //     },
        //     {
        //       mega_icons: "assets/icons/right.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn More"
        //     }
        //   ]
        // },
      ]
    },

    // Exercises & Quizzes managing code
    {
      mainLink: "Exercises & Quizzes",
      showMega: "showMega",
      subMenu: [
        {
          heading: "♻️ Web Development Quiz",
          megaLink: [
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "HTML Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/css_quiz",
              mega_name: "CSS Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/js_quiz",
              mega_name: "JavaScript Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/jquery_quiz",
              mega_name: "jQuery Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/react_js_quiz",
              mega_name: "React js Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/angular_quiz",
              mega_name: "Angular Quiz"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/quiztest/json_quiz",
              mega_name: "List of More"
            },

          ]
        },

        {
          heading: "♻️ Programming Quiz",
          megaLink: [
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/python_quiz",
              mega_name: "Python Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/java_quiz",
              mega_name: "Java Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/c_quiz",
              mega_name: "C Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/cplus_quiz",
              mega_name: "C++ Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/c_shrap_quiz",
              mega_name: "C# Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/kotlin_quiz",
              mega_name: "Kotlin Quiz"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/quiztest/go_quiz",
              mega_name: "List of More"
            }
          ]
        },

        {
          heading: "♻️ Databases Quiz",
          megaLink: [
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "MySQL Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "SQL Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "MongoDB Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "PHP Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "ASP Quiz"
            }, {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Node js Quiz"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "List of More"
            }
          ]
        },

        {
          heading: "♻️ Data-Analytics Quiz",
          megaLink: [
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/artificial_intelligence_quiz",
              mega_name: "AI Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/machine_learning_quiz",
              mega_name: "ML Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/data_science_quiz",
              mega_name: "Data-Science Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/numpy_quiz",
              mega_name: "NumPy Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/pandas_quiz",
              mega_name: "Pandas Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/scipy_quiz",
              mega_name: "SciPy Quiz"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/quiztest/scipy_quiz",
              mega_name: "List of More"
            }
          ]
        },


        {
          heading: "♻️ Mobile App Quiz",
          megaLink: [
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/android_quiz",
              mega_name: "Android Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/swift_quiz",
              mega_name: "Swift Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/ios_quiz",
              mega_name: "iOS Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/flutter_quiz",
              mega_name: "Flutter Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/nativescript_quiz",
              mega_name: "NativeScript Quiz"
            },
            {
              mega_icons: "assets/icons/rightquiz.svg",
              mega_link: "/quiztest/ionic_quiz",
              mega_name: "iOnic Quiz"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "List of More"
            }
          ]
        },
      ]
    },

  ]

  mainService = [
    // Our & Services managing code
    {
      mainLink: "Our Services",
      showMega: "showMegaa",
      subMenu: [
        {
          heading: "",
          megaLink: [
            {
              mega_icons: "assets/icons/ourservice/free.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Free Tutorials"
            },
            {
              mega_icons: "assets/icons/ourservice/codeide.svg",
              mega_link: "/quiztest/js_quiz",
              mega_name: "Code editor"
            },
            {
              mega_icons: "assets/icons/ourservice/tools.svg",
              mega_link: "/quiztest/c_quiz",
              mega_name: "All Free Tools"
            }
          ]
        },

        {
          heading: "",
          megaLink: [
            {
              mega_icons: "assets/icons/ourservice/exercise.svg",
              mega_link: "/quiztest/python_quiz",
              mega_name: "Exercises"
            },
            {
              mega_icons: "assets/icons/ourservice/quiz.svg",
              mega_link: "/quiztest/java_quiz",
              mega_name: "Quizzes"
            },
            {
              mega_icons: "assets/icons/ourservice/reference.svg",
              mega_link: "/quiztest/c_quiz",
              mega_name: "Reference"
            },
            {
              mega_icons: "assets/icons/ourservice/digital.svg",
              mega_link: "/quiztest/c_quiz",
              mega_name: "Digital Marketing"
            },

          ]
        },

        {
          heading: "",
          megaLink: [
            {
              mega_icons: "assets/icons/ourservice/login.svg",
              mega_link: "/quiztest/artificial_intelligence_quiz",
              mega_name: "Sign up/Log in"
            },
            {
              mega_icons: "assets/icons/ourservice/courses.svg",
              mega_link: "/quiztest/machine_learning_quiz",
              mega_name: "Upskill Library"
            },
            {
              mega_icons: "assets/icons/ourservice/book.svg",
              mega_link: "/quiztest/data_science_quiz",
              mega_name: "eBooks Library"
            },
            {
              mega_icons: "assets/icons/ourservice/certificate.svg",
              mega_link: "/quiztest/data_science_quiz",
              mega_name: "Get Certified"
            }
          ]
        },


        {
          heading: "",
          megaLink: [
            {
              mega_icons: "assets/icons/ourservice/website.svg",
              mega_link: "/quiztest/android_quiz",
              mega_name: "Web Templates"
            },
            {
              mega_icons: "assets/icons/ourservice/whereto.svg",
              mega_link: "/quiztest/swift_quiz",
              mega_name: "Where To Start"
            },
            {
              mega_icons: "assets/icons/ourservice/learning.svg",
              mega_link: "/quiztest/ios_quiz",
              mega_name: "Learn How To"
            },
            {
              mega_icons: "assets/icons/ourservice/youtube.svg",
              mega_link: "/quiztest/data_science_quiz",
              mega_name: "Learners Youtube"
            }
          ]
        },

        {
          heading: "",
          megaLink: [
            {
              mega_icons: "assets/icons/ourservice/path.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "All Career Paths"
            },
            {
              mega_icons: "assets/icons/ourservice/microsoft.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Microsoft-Technologies"
            },
            {
              mega_icons: "assets/icons/ourservice/blog.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Mock ♻️ Test"
            },
            {
              mega_icons: "assets/icons/ourservice/help.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Support"
            }
          ]
        },
      ]
    },
  ]

  closeMenu() {
    this.CloseOpen = true;
  }
}
