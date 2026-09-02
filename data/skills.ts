export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Pernah Digunakan",
    items: [
      "C++",
      "Java",
      "HTML",
      "Python",
      "React",
      "Spark",
      "Arduino",
      "Tinkercad",
      "Wokwi",
      "Cisco Packet Tracer",
      "Canva",
    ],
  },
  {
    label: "Sedang Dipelajari",
    items: ["React", "Arduino", "English"],
  },
  {
    label: "Area Ketertarikan",
    items: ["Web Development", "AI/ML", "Cybersecurity", "Data"],
  },
];

/** Interest areas used in the Hero section badges. */
export const interests: string[] = [
  "Web Development",
  "AI/ML",
  "Cybersecurity",
  "Data",
];
