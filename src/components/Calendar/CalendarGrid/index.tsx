import { CalendarCell } from "../CalendarCell";
import { Task, Holiday } from "../../../types";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  formatDate,
} from "../../../utils/dateUtils";
import JanuaryImage from "../../../assets/calendar/January.jpeg";
import FebruaryImage from "../../../assets/calendar/February.jpeg";
import MarchImage from "../../../assets/calendar/March.jpeg";
import AprilImage from "../../../assets/calendar/April.jpg";
import MayImage from "../../../assets/calendar/May.jpg";
import JuneImage from "../../../assets/calendar/June.jpg";
import JulyImage from "../../../assets/calendar/July.jpg";
import AugustImage from "../../../assets/calendar/August.jpg";
import SeptemberImage from "../../../assets/calendar/September.jpg";
import OctoberImage from "../../../assets/calendar/October.jpg";
import NovemberImage from "../../../assets/calendar/November.jpg";
import DecemberImage from "../../../assets/calendar/December.jpg";

import * as Styled from "./index.styled";

type CalendarGridProps = {
  currentDate: Date;
  tasks: Task[];
  holidays: Holiday[];
  view: "month" | "week";
  onAddTask: (date: string, text: string) => void;
  onUpdateTask: (taskId: string, newText: string) => void;
  onDeleteTask: (taskId: string) => void;
  onUpdateLabels: (taskId: string, labels: string[]) => void;
};

export function CalendarGrid({
  currentDate,
  tasks,
  holidays,
  view,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onUpdateLabels,
}: CalendarGridProps) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthImages = [
    JanuaryImage,
    FebruaryImage,
    MarchImage,
    AprilImage,
    MayImage,
    JuneImage,
    JulyImage,
    AugustImage,
    SeptemberImage,
    OctoberImage,
    NovemberImage,
    DecemberImage,
  ];

  const currentMonthImage = monthImages[currentDate.getMonth()];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);

  const getWeekDays = () => {
    const today = new Date(currentDate);
    const day = today.getDay();
    const diff = today.getDate() - day;
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(diff + i);
      return date;
    });
  };

  const renderCalendarCell = (
    date: Date,
    isCurrentMonth: boolean,
    dayTasks: Task[] = [],
    holiday?: Holiday,
  ) => (
    <CalendarCell
      key={formatDate(date)}
      date={formatDate(date)}
      dayNumber={date.getDate()}
      isCurrentMonth={isCurrentMonth}
      tasks={dayTasks}
      holiday={holiday}
      onAddTask={onAddTask}
      onUpdateTask={onUpdateTask}
      onDeleteTask={onDeleteTask}
      onUpdateLabels={onUpdateLabels}
    />
  );

  const days =
    view === "week"
      ? getWeekDays()
      : Array.from(
          { length: daysInMonth },
          (_, i) =>
            new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1),
        );

  const getHolidayForDate = (date: Date) => {
    const dateStr = formatDate(date);
    return holidays.find((h) => h.date === dateStr);
  };

  return (
    <Styled.CalendarGridContainer>
      <Styled.WeekdayHeader>
        {weekDays.map((day) => (
          <Styled.WeekdayColumn key={day}>{day}</Styled.WeekdayColumn>
        ))}
      </Styled.WeekdayHeader>

      <Styled.CalendarGridWrapper $backgroundImage={currentMonthImage}>
        {view === "month" &&
          Array(firstDayOfMonth)
            .fill(null)
            .map((_, index) => (
              <Styled.EmptyCell key={`empty-prev-${index}`} />
            ))}

        {days.map((date) => {
          const dateStr = formatDate(date);
          const dayTasks = tasks.filter((task) => task.date === dateStr);
          const holiday = getHolidayForDate(date);

          return renderCalendarCell(date, true, dayTasks, holiday);
        })}

        {view === "month" &&
          Array(42 - firstDayOfMonth - daysInMonth)
            .fill(null)
            .map((_, index) => (
              <Styled.EmptyCell key={`empty-next-${index}`} />
            ))}
      </Styled.CalendarGridWrapper>
    </Styled.CalendarGridContainer>
  );
}
