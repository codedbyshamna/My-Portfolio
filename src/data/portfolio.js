import {
  BarChart3,
  BriefcaseBusiness,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  WandSparkles,
} from 'lucide-react'

export const contactDetails = {
  email: 'shamnap.s003@gmail.com',
  phone: '+971 56 638 8713',
}

export const education = [
  {
    degree: 'MSc Applied Data Science',
    institution: 'SRM Institute of Science and Technology',
    detail: 'Postgraduate degree',
    icon: BrainCircuit,
    status: 'COMPLETED',
  },
  {
    degree: 'BSc Statistics',
    institution: 'University of Calicut',
    detail: "Bachelor's degree in Statistics",
    icon: GraduationCap,
    status: 'COMPLETED',
  },
]


export const skillGroups = [
  { title: 'Programming', icon: Code2, skills: ['Python', 'C++', 'SQL'] },
  { title: 'Data Analysis', icon: Database, skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { title: 'Machine Learning', icon: BrainCircuit, skills: ['Scikit-learn', 'XGBoost', 'Machine Learning', 'Model Evaluation'] },
  { title: 'Artificial Intelligence', icon: WandSparkles, skills: ['Generative AI', 'LLMs', 'LangGraph', 'RAG'] },
  { title: 'Tools', icon: Code2, skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'] },
  { title: 'Data Visualization', icon: BarChart3, skills: ['Power BI'] },
]

export const projects = [
  {
    title: 'HCPilot AI',
    subtitle: 'AI-Powered HCP Interaction CRM',
    description: 'An AI-powered CRM application for managing healthcare professional interactions through forms and a conversational AI assistant.',
    tags: ['Generative AI', 'Conversational AI', 'Healthcare CRM'],
    href: 'https://github.com/codedbyshamna/HCPilot',
    visual: 'hcpilot',
    icon: MessageSquareText,
  },
  {
    title: 'Patient No-Show Prediction',
    subtitle: 'Prediction · Fairness · Explainability',
    description: 'A machine learning project featuring model comparison, fairness analysis and explainable AI.',
    tags: ['Machine Learning', 'Model Evaluation', 'Explainable AI'],
    href: 'https://github.com/codedbyshamna/-Patient-No-Show-Prediction',
    visual: 'patient',
    icon: BrainCircuit,
  },
  {
    title: 'Customer Churn Prediction',
    subtitle: 'Machine Learning',
    description: 'A machine learning project focused on predicting customer churn.',
    tags: ['Machine Learning', 'Prediction', 'Data Analysis'],
    href: 'https://github.com/codedbyshamna/Customer-Churn-Prediction-using-Machine-Learning',
    visual: 'churn',
    icon: BarChart3,
  },
  {
    title: 'E-Commerce Purchasing Tendency',
    subtitle: 'Application · Community Classification',
    description: 'An application exploring purchasing tendency through multi-feature search and community classification.',
    tags: ['Classification', 'E-Commerce', 'Data Science'],
    href: 'https://github.com/codedbyshamna/Multi-Feature-Search-Based-Purchasing-Tendency-Community-Classification-in-E-Commerce',
    visual: 'ecommerce',
    icon: LayoutDashboard,
  },
  {
    title: 'Dry Fruits Sales Dashboard',
    subtitle: 'Sales · Data Visualization',
    description: 'A sales dashboard project for exploring dry fruits sales data.',
    tags: ['Power BI', 'Data Visualization', 'Sales Analytics'],
    href: 'https://github.com/codedbyshamna/dry-fruits-sales-dashboard',
    visual: 'dryfruits',
    icon: BarChart3,
  },
  {
    title: 'Cookware Sales Dashboard',
    subtitle: 'Sales · Data Visualization',
    description: 'A dashboard project presenting cookware sales data in a visual format.',
    tags: ['Power BI', 'Data Visualization', 'Sales Analytics'],
    href: 'https://github.com/codedbyshamna/cookware-dashboard',
    visual: 'cookware',
    icon: LayoutDashboard,
  },
]

export const experience = [
  {
    role: 'Data Science Intern / Final Semester Project',
    organization: 'The Mind IT',
    dates: 'Dec 2025 – Mar 2026',
    description: 'Worked on a purchasing tendency community classification project focused on e-commerce clients. Analyzed customer and product-related data using multi-feature search-based approaches and explored graph-based and sequential approaches for purchasing pattern analysis. Completed the project under external guidance as part of the Applied Data Science programme.',
    icon: BriefcaseBusiness,
  },
  {
    role: 'Data Science Intern',
    organization: 'Cognifyz Technologies',
    dates: 'May 2025 – June 2025',
    description: 'Performed exploratory data analysis on restaurant-related datasets, conducted data preparation and feature engineering for customer behavior analysis, and created visualizations using Matplotlib, Seaborn, and Folium.',
    icon: BriefcaseBusiness,
  },
]

export const certifications = [
  { title: 'GUVI–HCL Employability Program', provider: 'HCL GUVI in collaboration with SRM University · Aug 2025 – Feb 2026', icon: BrainCircuit },
  { title: 'Python for Data Science', provider: 'NPTEL', icon: Database },
  { title: 'Virtual Internship in AI and Machine Learning', provider: 'Google for Developers', icon: WandSparkles },
  { title: 'AI for All', provider: 'Intel / Digital India Initiative', icon: BrainCircuit },
  { title: 'Fundamentals of Cybersecurity', provider: 'Zscaler', icon: Code2 },
  { title: 'Data Analysis using Advanced Excel', provider: 'JDT Islam College', icon: BarChart3 },
]

