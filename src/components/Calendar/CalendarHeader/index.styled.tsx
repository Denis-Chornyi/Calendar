import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ChevronButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const DateText = styled.h2`
  color: gray;
  font-weight: 500;
`;

export const TodayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background-color: transparent;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const WeekOrMonthButton = styled.button<{ $isActive: boolean }>`
  padding: 0.375rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#374151")};
  background-color: ${({ $isActive }) => ($isActive ? "#111827" : "transparent")};

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#111827" : "#f3f4f6")};
  }
`;
