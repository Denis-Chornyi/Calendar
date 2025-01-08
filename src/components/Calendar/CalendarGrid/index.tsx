import { CalendarCell } from "../CalendarCell";
import { Task, Holiday } from "../../../types";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  formatDate,
} from "../../../utils/dateUtils";

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
    holiday?: Holiday
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
            new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1)
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

      <Styled.CalendarGridWrapper>
        {view === "month" &&
          Array(firstDayOfMonth)
            .fill(null)
            .map((_, index) => {
              const prevMonth = new Date(currentDate);
              prevMonth.setMonth(prevMonth.getMonth() - 1);
              const daysInPrevMonth = getDaysInMonth(prevMonth);
              const day = daysInPrevMonth - firstDayOfMonth + index + 1;
              const date = new Date(
                prevMonth.getFullYear(),
                prevMonth.getMonth(),
                day
              );

              return renderCalendarCell(date, false);
            })}

        {days.map((date) => {
          const dateStr = formatDate(date);
          const dayTasks = tasks.filter((task) => task.date === dateStr);
          const holiday = getHolidayForDate(date);

          return renderCalendarCell(date, true, dayTasks, holiday);
        })}

        {view === "month" &&
          Array(42 - firstDayOfMonth - daysInMonth)
            .fill(null)
            .map((_, index) => {
              const nextMonth = new Date(currentDate);
              nextMonth.setMonth(nextMonth.getMonth() + 1);
              const day = index + 1;
              const date = new Date(
                nextMonth.getFullYear(),
                nextMonth.getMonth(),
                day
              );

              return renderCalendarCell(date, false);
            })}
      </Styled.CalendarGridWrapper>
    </Styled.CalendarGridContainer>
  );
}
