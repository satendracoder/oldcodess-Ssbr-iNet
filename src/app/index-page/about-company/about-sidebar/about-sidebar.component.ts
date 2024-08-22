import { Component } from '@angular/core';

@Component({
  selector: 'app-about-sidebar',
  templateUrl: './about-sidebar.component.html',
  styleUrl: './about-sidebar.component.scss'
})
export class AboutSidebarComponent {

  menuSidebar = [
    // {
    //   link_name: "Dashboard",
    //   link: "/dashboard",
    //   icon: "bx bx-grid-alt",
    //   sub_menu: []
    // },
    {
      link_name: "About Company",
      link: null,
      icon: "person_add",
      sub_menu: [
        {
          link_name: "About Us",
          icons: "arrow_right_alt",
          link: "/company/about_us",
        }, {
          link_name: "Disclaimer",
          icons: "arrow_right_alt",
          link: "/company/disclaimer",
        }, {
          link_name: "Privacy Policy",
          icons: "arrow_right_alt",
          link: "/company/privacy_policy",
        },
        {
          link_name: "Refund Policy",
          icons: "arrow_right_alt",
          link: "/company/refund_policy",
        },
        {
          link_name: "Terms and Conditions",
          icons: "arrow_right_alt",
          link: "/company/terms_condition",
        },
        {
          link_name: "Cookies Policy",
          icons: "arrow_right_alt",
          link: "/company/cookies_policy",
        },
        {
          link_name: "Asking FAQ",
          icons: "arrow_right_alt",
          link: "/company/frequently_asked_questions",
        }
      ]
    },
  ]



  OnDestroy(): void {

  }


}
