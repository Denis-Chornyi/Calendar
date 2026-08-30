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

export const CalendarGridWrapper = styled.div<{ $backgroundImage: string }>`
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.125rem;
  padding-top: 0.125rem;
`;

export const EmptyCell = styled.div`
  border-right: 1px solid #e5e7eb;
`;
