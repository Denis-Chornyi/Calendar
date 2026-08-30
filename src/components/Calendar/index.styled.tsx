import styled from "styled-components";

import { Search } from "lucide-react";

export const CalendarContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;

  & > div {
    max-width: 1400px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    & > div {
      border-left: none;
      border-right: none;
    }
  }

  @media (max-width: 480px) {
    min-width: 320px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  max-width: 320px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  outline: none;
  font-size: 0.875rem;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.45rem 0.75rem 0.45rem 2.25rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.65rem 0.4rem 2rem;
    font-size: 0.75rem;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;

  @media (max-width: 480px) {
    left: 9px;
    width: 16px;
    height: 16px;
  }
`;
