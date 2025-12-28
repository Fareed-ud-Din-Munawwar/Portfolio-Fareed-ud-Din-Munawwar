import type { Project, Skill, Experience } from "@shared/schema";

// Extend Project type to include image field
type ProjectWithImage = Project & {
  image?: string;
};

export const staticProjects: ProjectWithImage[] = [
  {
    id: 1,
    title: "Islam360 & Hindi Hadith 360",
    role: "Lead Android Developer",
    description: "Led development using Kotlin and MVVM architecture, implemented location-based prayer timings and an interactive UI redesign using Jetpack Compose. Contributed to applications with 4.8+ ratings on Google Play through enhanced stability and user satisfaction.",
    techStack: ["Kotlin", "MVVM", "Jetpack Compose", "Coroutines", "Flow", "Room", "Mockito"],
    achievements: [
      "Achieved ~90% code coverage in major modules by introducing Unit Testing with Mockito",
      "Managed multi-lingual support (Arabic, Hindi) and in-app purchases",
      "Implemented location-based prayer timings",
      "Interactive UI redesign using Jetpack Compose of major modules",
      "Maintained 4.8+ ratings on Google Play"
    ],
    link: undefined,
    image: "/assets/projects/islam360.gif"
  },
  {
    id: 2,
    title: "Schoolgram (Moodle-Based E-Learning)",
    role: "Lead Developer for Mobile",
    description: "Upgraded core codebase from Moodle Mobile 3.5.5 to 5.0.0, ensuring functionality of all custom components. Migrated and refactored custom plugins/libraries for improved scalability and maintainability.",
    techStack: ["Ionic", "Angular", "Moodle Mobile", "TypeScript", "Cordova"],
    achievements: [
      "Upgraded core codebase from Moodle Mobile 3.5.5 to 5.0.0",
      "Migrated and refactored custom plugins/libraries for improved scalability",
      "Implemented customized app themes, layouts, and multi-lingual support",
      "Defined and executed release processes for both Google Play Store and Apple App Store",
      "Ensured functionality of all custom components during major version upgrade"
    ],
    link: undefined,
    image: "/assets/projects/schoolgram.gif"
  },
  {
    id: 3,
    title: "ALW (Advanced Learning World)",
    role: "Key Android Developer",
    description: "Built critical modules from scratch, including the Assignment Module, Calendar, and Quiz. Integrated HyperPay for card payments and Google In-App Purchases. Maintained a 99.98% crash-free experience while revamping signup and subscription flows.",
    techStack: ["Kotlin", "Hilt", "Firebase", "OneSignal", "Retrofit", "Room", "MVVM"],
    achievements: [
      "Built critical modules from scratch (Assignment Module, Calendar, Quiz)",
      "Implemented multiple themes for elementary grades with more interactive UI while separate theme for middle school and high school",
      "Maintained 99.98% crash-free experience",
      "Integrated HyperPay for card payments and Google In-App Purchases",
      "Revamped signup and subscription flows",
      "Implemented push notifications using OneSignal"
    ],
    link: undefined,
    image: "/assets/projects/alw.gif"
  },
  {
    id: 4,
    title: "Reel / Stories Application",
    role: "Open Source Contributor",
    description: "An Instagram-like stories implementation designed for seamless video playback and high reusability in external projects. Built with native Android using Kotlin and ExoPlayer for optimal performance.",
    techStack: ["Kotlin", "ExoPlayer", "Android Native", "MVVM", "Coroutines"],
    achievements: [
      "Instagram-like stories implementation",
      "Seamless video playback",
      "High reusability in external projects",
      "Optimized performance with ExoPlayer",
      "Open source contribution"
    ],
    link: undefined,
    image: "/assets/projects/reel-stories.gif"
  }
];

export const staticSkills: Skill[] = [
  {
    id: 1,
    category: "Languages",
    items: ["Kotlin (Primary)", "Java", "TypeScript", "PHP", "JavaScript"]
  },
  {
    id: 2,
    category: "Mobile Platforms",
    items: ["Android (Native)", "Moodle Mobile"]
  },
  {
    id: 3,
    category: "Hybrid Frameworks",
    items: ["React Native", "Ionic", "Angular"]
  },
  {
    id: 4,
    category: "Mobile Frameworks",
    items: ["Jetpack Compose", "Coroutines", "Flow", "Retrofit", "ExoPlayer", "Room", "SQL Delight"]
  },
  {
    id: 5,
    category: "Architecture",
    items: ["MVVM", "Clean Architecture", "Multi-Module", "SOLID Principles"]
  },
  {
    id: 6,
    category: "Tools",
    items: ["Firebase (Crashlytics, Firestore)", "Hilt", "Dagger", "Git", "Mockito", "Xcode", "MySQL"]
  }
];

export const staticExperience: Experience[] = [
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Arbisoft",
    period: "August 2024 – Present",
    description: "Leading cross-functional teams in Agile environments. Actively involved in hiring processes for senior roles and mentoring interns in native development. Focus on scalable application design and performance optimization, consistently maintaining a 99.98% crash-free rate and 4.8+ ratings on Google Play."
  },
  {
    id: 1,
    role: "Software Engineer",
    company: "Arbisoft",
    period: "August 2021 – August 2024",
    description: "Leading cross-functional teams in Agile environments. Actively involved in hiring processes for senior roles and mentoring interns in native development. Focus on scalable application design and performance optimization, consistently maintaining a 99.98% crash-free rate and 4.8+ ratings on Google Play."
  }
];

