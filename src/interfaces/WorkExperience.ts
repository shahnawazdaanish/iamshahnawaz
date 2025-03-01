export interface WorkExperience {
  id: string;
  companyName: string;
  positions: Position[];
}

export interface Position {
  position: string;
  skills: any[];
  startDate: string;
  endDate: string;
  jd: string;
}
