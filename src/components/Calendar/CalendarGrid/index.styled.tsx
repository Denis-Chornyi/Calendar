import styled from "styled-components";

export const CalendarGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`;

export const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
`;

export const WeekdayColumn = styled.div`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 1024px) {
    padding: 0.4rem 0.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.3rem;
    font-size: 0.7rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.15rem;
    font-size: 0.65rem;
  }
`;

export const CalendarGridWrapper = styled.div<{ $backgroundImage: string }>`
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url(${({ $backgroundImage }) => $backgroundImage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.125rem;
  padding-top: 0.125rem;

  width: 100%;
  min-width: 0;
  box-sizing: border-box;
`;

export const EmptyCell = styled.div`
  border-right: 1px solid #e5e7eb;
  min-width: 0;
`;
