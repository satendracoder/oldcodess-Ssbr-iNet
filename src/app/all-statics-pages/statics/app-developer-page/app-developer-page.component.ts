import { Component } from '@angular/core';

@Component({
  selector: 'app-app-developer-page',
  templateUrl: './app-developer-page.component.html',
  styleUrl: './app-developer-page.component.scss'
})
export class AppDeveloperPageComponent {

  app_developer = [
    {
      tutorialImage: "assets/icons/android/android.svg",
      tutorialName: "Learn Android",
      tutorialNameUrl: "",
      tutorialReference: "Android Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/android/swift.svg",
      tutorialName: "Learn Swift",
      tutorialNameUrl: "",
      tutorialReference: "Swift Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/android/ios.svg",
      tutorialName: "Learn iOS",
      tutorialNameUrl: "",
      tutorialReference: "iOS Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/android/flutter.svg",
      tutorialName: "Learn Flutter",
      tutorialNameUrl: "",
      tutorialReference: "Flutter Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/android/nativescript.svg",
      tutorialName: "Learn NativeScript",
      tutorialNameUrl: "",
      tutorialReference: "NS Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/android/ionic.svg",
      tutorialName: "Learn iOnic",
      tutorialNameUrl: "",
      tutorialReference: "iOnic Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/web/react.svg",
      tutorialName: "React Native",
      tutorialNameUrl: "",
      tutorialReference: "React Native Reference",
      tutorialReferenceUrl: "",
    },

  ]
}
