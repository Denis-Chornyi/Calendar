import styled from "styled-components";

import { X, Edit2, Tag } from "lucide-react";

export const TaskCard = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.35rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
    margin-bottom: 0.3rem;
    border-radius: 0.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0.25rem;
  }
`;

export const TaskLabelWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 8px;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.25rem;
  width: 159px;
  height: 18px;
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 2;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    top: 3px;
    left: 5px;
    width: calc(100% - 10px);
    height: 14px;
    gap: 0.15rem;
  }

  @media (max-width: 480px) {
    top: 2px;
    left: 4px;
    width: calc(100% - 8px);
    height: 10px;
  }
`;

export const TaskLabel = styled.div<{ color: string }>`
  flex: 1;
  min-width: 0;
  width: auto;
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

  @media (max-width: 768px) {
    width: 2rem;
    height: 0.3rem;
    margin-right: 0.15rem;
  }

  @media (max-width: 480px) {
    width: 1.5rem;
    height: 0.2rem;
    margin-right: 0.1rem;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.25rem;
  transition: opacity 0.2s;
  opacity: 0;

  .group:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    gap: 0.15rem;
  }

  @media (max-width: 480px) {
    gap: 0.1rem;

    opacity: 1;
  }
`;

export const TaskInput = styled.textarea`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0.125rem 0.25rem;
  font-size: 0.875rem;
  line-height: 1.4;
  border: 1px solid;
  border-radius: 0.25rem;
  resize: vertical;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    padding: 0.1rem 0.2rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.1rem;
    font-size: 0.65rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding-top: 18px;

  @media (max-width: 768px) {
    padding-top: 14px;
  }

  @media (max-width: 480px) {
    padding-top: 11px;
  }
`;

export const TextTooltip = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  max-width: 100%;
`;

export const InputText = styled.p`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  height: calc(0.875rem * 1.4 * 2);
  max-height: calc(0.875rem * 1.4 * 2);
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;
  scrollbar-width: thin;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.3;
    height: calc(0.7rem * 1.3 * 2);
    max-height: calc(0.7rem * 1.3 * 2);
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    line-height: 1.25;
    height: calc(0.6rem * 1.25 * 2);
    max-height: calc(0.6rem * 1.25 * 2);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  width: 300px;
  max-width: 70vw;
  padding: 0.75rem;
  background-color: #1f2937;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
  z-index: 100;
  pointer-events: none;

  ${TextTooltip}:hover & {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    width: 220px;
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 180px;
    max-width: 80vw;
    padding: 0.4rem;
    font-size: 0.7rem;
  }
`;

export const TagIcon = styled(Tag)`
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

export const EditIcon = styled(Edit2)`
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

export const XIcon = styled(X)`
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #ef4444;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
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

  @media (max-width: 768px) {
    padding: 0.15rem;
  }

  @media (max-width: 480px) {
    padding: 0.1rem;
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

  @media (max-width: 480px) {
    min-width: 160px;
    padding: 0.35rem;
  }
`;

export const LabelButton = styled.button<{
  color: string;
  selected: boolean;
}>`
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

  @media (max-width: 480px) {
    padding: 0.35rem;
    gap: 0.35rem;

    span {
      font-size: 0.75rem;
    }
  }
`;
