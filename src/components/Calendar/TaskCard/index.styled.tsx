import styled from "styled-components";
import { X, Edit2, Tag } from "lucide-react";

export const TaskCard = styled.div<{ color?: string }>`
  position: relative;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.35rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const TaskLabelWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const TaskLabel = styled.div<{ color: string }>`
  width: 3rem;
  height: 0.375rem;
  border-radius: 9999px;
  margin-right: 0.25rem;
  background-color: ${({ color }) => {
    switch (color) {
      case "green":
        return "#10B981";
      case "blue":
        return "#3B82F6";
      case "yellow":
        return "#F59E0B";
      case "purple":
        return "#8B5CF6";
      case "orange":
        return "#F97316";
      default:
        return "#D1D5DB";
    }
  }};
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 0.25rem;
  transition: opacity 0.2s;
  opacity: 0;

  .group:hover & {
    opacity: 1;
  }
`;

export const TaskInput = styled.input`
  width: 100%;
  padding: 0.125rem 0.25rem;
  font-size: 0.875rem;
  border: 1px solid;
  border-radius: 0.25rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &:hover .child-class {
    color: #374151;
  }
`;

export const InputText = styled.p`
  font-size: 0.875rem;
  color: #374151;
`;

export const TagIcon = styled(Tag)`
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

export const EditIcon = styled(Edit2)`
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

export const XIcon = styled(X)`
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #ef4444;
  }
`;

export const LabelName = styled.span``;

export const ActionsButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const LabelPicker = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  min-width: 200px;
`;

export const LabelButton = styled.button<{ color: string; selected: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  background-color: ${({ selected }) => (selected ? "#F3F4F6" : "transparent")};

  &:hover {
    background-color: #f3f4f6;
  }

  span {
    flex: 1;
    text-align: left;
    font-size: 0.875rem;
    color: #374151;
  }
`;
