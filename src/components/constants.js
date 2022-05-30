import { css } from "styled-components";

export const COLORS = {
  mainColor: "hsl(227,56%,27%)",
  mainColorMedium: "hsl(227,28%,40%)",
  mainColorLight: "hsl(228,19%,55%)",

  fontColorDark: "hsl(0,0%,20%)",
  fontColorMedium: "hsl(0,0%,47%)",
  fontColorLight: "hsl(0,0%,90%)",

  borderLight: "hsl(0,0%,80%)",
  borderMedium: "hsl(0,0%,60%)",
  borderDark: "hsl(0,0%,40%)",

  bgMainColor: "hsl(0,0%,98%)",

  iconBgColor: "hsl(342,100%,90%)",
  iconColor: "hsl(341,90%,62%)",

  statusOngoing: "hsl(43,100%,56%)",
  statusCompleted: "hsl(112,35%,55%)",
  statusDelay: "hsl(0,71%,50%)",
  statusCancelled: "hsl(0,0%,70%)",

  spentBGcolor: "hsl(43,100%,70%)",
  remainBGColor: "hsl(228,50%,70%)",
  totalBudgetColor: "hsl(342,100%,90%)",
};

// react-select
export const STAKEHOLDERS = [
  { value: "Design", label: "Design" },
  { value: "R&D", label: "R&D" },
  { value: "Business", label: "Business" },
  { value: "Marketing", label: "Marketing" },
  { value: "Legal", label: "Legal" },
  { value: "Finance", label: "Finance" },
  { value: "Content", label: "Content" },
];

export const STATUS = [
  { value: "Ongoing", label: "Ongoing" },
  { value: "Completed", label: "Completed" },
  { value: "Delay", label: "Delay" },
  { value: "Cancelled", label: "Cancelled" },
];

export const EXPENSECATEGORY = [
  { value: "Influencer", label: "Influencer" },
  { value: "Social Media", label: "Social Media" },
  { value: "Giveaways", label: "Giveaways" },
  { value: "Community", label: "Community" },
  { value: "Freelancer", label: "Freelancer" },
  { value: "Agency", label: "Agency" },
  { value: "Esports", label: "Esports" },
  { value: "Online Campaign", label: "Online Campaign" },
  { value: "Offline Campaign", label: "Offline Campaign" },
];

export const VARS = {
  sidebarWidth: `300px`,
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `24px`,
  xlSpacing: `32px`,
  xxlSpacing: `48px`,
  borderRadius: `6px`,
};

export const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;
