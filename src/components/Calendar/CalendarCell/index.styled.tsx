import styled from "styled-components";

export const CalendarCell = styled.div`
  min-height: 140px;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 0.75rem;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 0.15rem;
  background-color: ${({ color }) => color};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    min-height: 120px;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    min-height: 100px;
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    min-height: 90px;
    padding: 0.3rem;
  }
`;

export const CalendarCellHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarDate = styled.span`
  font-size: 0.875rem;
  color: ${({ color }) => color};

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const NumberOfCards = styled.span`
  margin-left: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #6b7280;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    line-height: 0.8rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const AddTaskButton = styled.button`
  padding: 0.25rem;
  border-radius: 9999px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 768px) {
    padding: 0.15rem;
  }

  @media (max-width: 480px) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const HolidayTag = styled.div`
  background-color: #ff5252;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.2rem 0.3rem;
    font-size: 0.65rem;
    margin-top: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const TaskCardWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  min-width: 0;
  max-width: 100%;

  & > * + * {
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.3rem;

    & > * + * {
      margin-top: 0.3rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 0.2rem;

    & > * + * {
      margin-top: 0.2rem;
    }
  }
`;

export const TaskInput = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 0.3rem;
    padding: 0.2rem 0.3rem;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;
