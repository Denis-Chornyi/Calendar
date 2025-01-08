import styled from "styled-components";

export const CalendarCell = styled.div`
  min-height: 140px;
  padding: 0.75rem;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background-color: ${({ color }) => color};
`;

export const CalendarCellHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarDate = styled.span`
  font-size: 0.875rem;
  color: ${({ color }) => color};
`;

export const NumberOfCards = styled.span`
  margin-left: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #6b7280;
`;

export const AddTaskButton = styled.button`
  padding: 0.25rem;
  border-radius: 9999px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const HolidayTag = styled.div`
  background-color: #fee2e2;
  color: #991b1b;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const TaskCardWrapper = styled.div`
  margin-top: 0.5rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const TaskInput = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
`;
