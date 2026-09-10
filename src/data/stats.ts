/** Placeholder statistics — update the values here when real numbers are available. */
export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { label: "Students Trained", value: "500", suffix: "+" },
  { label: "Programs", value: "3" },
  { label: "Courses", value: "5" },
  { label: "Projects Built", value: "40", suffix: "+" },
  { label: "Industry Opportunities", value: "25", suffix: "+" },
];
