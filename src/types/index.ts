export interface Task {
  id: string;
  text: string;
  date: string;
  order: number;
  labels: string[];
}

export interface Holiday {
  date: string;
  name: string;
  localName: string;
  countryCode: string;
}

export interface DayCell {
  date: string;
  tasks: Task[];
  holiday?: Holiday;
  isCurrentMonth: boolean;
  dayNumber: number;
  fullDate?: string;
}