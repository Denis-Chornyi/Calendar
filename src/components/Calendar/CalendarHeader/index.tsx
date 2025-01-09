import { ChevronUp, ChevronDown, Calendar as CalendarIcon } from "lucide-react";
import * as Styled from "./index.styled";

type CalendarHeaderProps = {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  view: "month" | "week";
  onViewChange: (view: "month" | "week") => void;
};

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
  view,
  onViewChange,
}: CalendarHeaderProps) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Styled.HeaderWrapper className="header">
      <Styled.NavigationWrapper>
        <Styled.ButtonsWrapper>
          <Styled.ChevronButton onClick={onPrevMonth}>
            <ChevronUp size={20} />
          </Styled.ChevronButton>
          <Styled.ChevronButton onClick={onNextMonth}>
            <ChevronDown size={20} />
          </Styled.ChevronButton>
        </Styled.ButtonsWrapper>
        <Styled.TodayButton onClick={onToday}>
          <CalendarIcon size={16} />
          Today
        </Styled.TodayButton>
        <Styled.DateText>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </Styled.DateText>
      </Styled.NavigationWrapper>
      <Styled.ButtonsWrapper>
        <Styled.WeekOrMonthButton
          onClick={() => onViewChange("week")}
          $isActive={view === "week"}
        >
          Week
        </Styled.WeekOrMonthButton>
        <Styled.WeekOrMonthButton
          onClick={() => onViewChange("month")}
          $isActive={view === "month"}
        >
          Month
        </Styled.WeekOrMonthButton>
      </Styled.ButtonsWrapper>
    </Styled.HeaderWrapper>
  );
}
