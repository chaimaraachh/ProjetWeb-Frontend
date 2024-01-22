import { Milestone } from './milestone';

export const DEVOPS_MILESTONES: Milestone[] = [
  {
    id: 'Introduction to Linux',
    title: 'Introduction to Linux',
    description: 'Understand the basics of the Linux operating system and how to manage it.',
    courseLink: 'https://example.com/linux-course',
    certificationSuggestion: 'CompTIA Linux+',
    quizQuizID: 10
  },
  {
    id: 'Docker for Beginners',
    title: 'Docker for Beginners',
    description: 'Learn how to containerize applications using Docker and manage containers.',
    courseLink: 'https://example.com/docker-course',
    certificationSuggestion: 'Docker Certified Associate',
    quizQuizID: 10
  },
  {
    id: 'Mastering Terraform',
    title: 'Mastering Terraform',
    description: 'Gain expertise in Infrastructure as Code (IaC) with Terraform.',
    courseLink: 'https://example.com/terraform-course',
    certificationSuggestion: 'HashiCorp Certified: Terraform Associate',
    quizQuizID: 10
  },
  {
    id: 'Continuous Integration/Continuous Deployment',
    title: 'Continuous Integration/Continuous Deployment',
    description: 'Understand the principles of CI/CD and implement pipelines.',
    courseLink: 'https://example.com/cicd-course',
    certificationSuggestion: 'Jenkins Certification',
    quizQuizID: 10
  },
  {
    id:'Kubernetes Fundamentals',
    title: 'Kubernetes Fundamentals',
    description: 'Explore orchestration with Kubernetes and how to deploy clusters.',
    courseLink: 'https://example.com/kubernetes-course',
    certificationSuggestion: 'Certified Kubernetes Administrator',
    quizQuizID: 10
  },
  // ... you can add more milestones as needed
];


  
  export const AI_MILESTONES = [
    { id:'Introduction to AI', title: 'Introduction to AI', description: 'Begin your journey in artificial intelligence.', courseLink: '', certificationSuggestion: '', quizQuizID: 10 },
    // ... more ai milestones ...
  ];
  
  export const DATA_SCIENCE_MILESTONES = [
    { id: 'Data Science Fundamentals', title: 'Data Science Fundamentals', description: 'Explore the basics of data science.', courseLink: '', certificationSuggestion: '', quizQuizID: 10 },
    // ... more data science milestones ...
  ];
  