import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const ChevronButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 480px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const DateText = styled.h2`
  color: #000;
  font-weight: 700;
  white-space: nowrap;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const TodayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background-color: #80808022;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.4rem;
    font-size: 0.7rem;
  }
`;

export const WeekOrMonthButton = styled.button<{ $isActive: boolean }>`
  padding: 0.375rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#374151")};
  background-color: ${({ $isActive }) =>
    $isActive ? "#111827" : "transparent"};
  white-space: nowrap;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#111827" : "#f3f4f6")};
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.4rem;
    font-size: 0.65rem;
  }
`;
