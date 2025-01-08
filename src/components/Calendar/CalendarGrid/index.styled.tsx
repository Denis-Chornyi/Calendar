import styled from "styled-components";

export const CalendarGridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #e5e7eb;
`;

export const WeekdayColumn = styled.div`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
`;

export const CalendarGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
