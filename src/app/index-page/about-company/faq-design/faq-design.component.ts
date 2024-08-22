import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-design',
  templateUrl: './faq-design.component.html',
  styleUrl: './faq-design.component.scss'
})
export class FaqDesignComponent {

  FaqAsking = [
    {
      faq_Name: "What is Ssbr iNet ?",
      faq_Answer: "Ssbr iNet is an educational platform and website that offers online coding courses and resources for learning web development and programming languages."
    },
    {
      faq_Name: "What courses are available on Ssbr iNet ?",
      faq_Answer: "Ssbr iNet offers courses and tutorials on various topics, including HTML, CSS, JavaScript, JSON, PHP, Python, Angular, React.js, MySQL, Bootstrap, Node.js, jQuery, AJAX, TypeScript, Data Analytics, R, C++, C#, and Java."
    },
    {
      faq_Name: " Is Ssbr iNet a free platform ?",
      faq_Answer: "Ssbr iNet operates on a freemium model, meaning that some resources and courses are available for free, while there may be premium content or features that require payment."
    },
    {
      faq_Name: "When was Ssbr iNet founded ?",
      faq_Answer: "Ssbr iNet was founded in 2018, and it has been actively providing learning resources since then."
    },
    {
      faq_Name: "What is the 'Try it Yourself' feature ?",
      faq_Answer: "'Try it Yourself' is a built-in online text editor on Ssbr iNet that allows users to edit code examples and run them to see the results in real-time, providing an interactive learning experience."
    },
    {
      faq_Name: " Can I access Ssbr iNet without registration ?",
      faq_Answer: "Yes, you can access the main educational content on Ssbr iNet without registration. However, registration may be required for certain features, such as participating in the forum section."
    },
    {
      faq_Name: "What is the specialization of Ssbr iNet ?",
      faq_Answer: "Ssbr iNet specializes in providing education and resources for web development, coding, programming, and related technologies."
    },
    {
      faq_Name: "Does Ssbr iNet provide templates ?",
      faq_Answer: "Yes, Ssbr iNet publishes free HTML templates and web templates that users can utilize for their web development projects."
    },
    {
      faq_Name: "What languages are supported on Ssbr iNet ?",
      faq_Answer: "Ssbr iNet supports multiple languages on its platform, allowing users to access the content in their preferred language."
    },
    {
      faq_Name: "Is Ssbr iNet actively updating its content ?",
      faq_Answer: "Yes, Ssbr iNet is committed to continually developing new courses and keeping its content up-to-date by conducting research and staying informed about the latest trends in the industry."
    }
  ]
}

