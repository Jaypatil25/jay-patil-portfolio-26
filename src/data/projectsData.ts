export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  githubLink?: string;
  hostedLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NiveshNidhi",
    category: "Chit Fund Platform | National Level Hackathon Winner",
    description: "Modernised chit funds with AI risk intelligence, blockchain transparency, KYC algorithm, chatbot integration, location-based priority engine, and secure escrow payments. Validated through real field data and offline chit operations.",
    tools: "Aadhaar KYC, AI Risk Engine, Blockchain (Polygon), Razorpay, TensorFlow, XGBoost",
    image: "/my-work/01.png",
    githubLink: "https://github.com/shibadityadeb/Nivesh-Nidhi",
    hostedLink: "https://nivesh-nidhi-eta.vercel.app/",
  },
  {
    id: 2,
    title: "MindNest",
    category: "Startup Incubation Web App",
    description: "Responsive UI for student idea submission, dashboards, and collaboration features with role-based navigation",
    tools: "React, Tailwind CSS, Radix UI, Express, Prisma",
    image: "/my-work/02.png",
    githubLink: "https://github.com/KhanjarSingh/MindNest-Team_Async",
    hostedLink: "https://mind-nest-team-async.vercel.app/",
  },
  {
    id: 3,
    title: "BookBuddy",
    category: "Ticket Booking App",
    description: "Cross-platform movie ticket booking app with seat selection and digital QR tickets",
    tools: "React Native, Expo",
    image: "/my-work/03.png",
    githubLink: "https://github.com/Jaypatil25/MAD_Project",
    hostedLink: "https://drive.google.com/file/d/1ztKClXdJvNdbvs4ttH5HkRj-fHC3V_G0/view",
  },
  {
    id: 4,
    title: "BookMyJet",
    category: "Flight Booking Web App",
    description: "Modern flight booking platform with clean UI, responsive design, and scalable frontend architecture",
    tools: "React, Tailwind CSS, Vercel",
    image: "/my-work/04.png",
    githubLink: "https://github.com/Jaypatil25/BookMyJet---website",
    hostedLink: "https://book-my-jet-website--phi.vercel.app/",
  },
];
