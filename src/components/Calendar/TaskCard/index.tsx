import React, { useState, useRef, useEffect } from "react";
import { DraggableProvided } from "@hello-pangea/dnd";
import { X } from "lucide-react";
import { Task } from "../../../types";

import * as Styled from "./index.styled";

type TaskCardProps = {
  task: Task;
  provided: DraggableProvided;
  onUpdate: (taskId: string, newText: string) => void;
  onDelete: (taskId: string) => void;
  onUpdateLabels: (taskId: string, labels: string[]) => void;
};

const AVAILABLE_LABELS = [
  { id: "green", name: "Green" },
  { id: "blue", name: "Blue" },
  { id: "yellow", name: "Yellow" },
  { id: "purple", name: "Purple" },
  { id: "orange", name: "Orange" },
];

export function TaskCard({
  task,
  provided,
  onUpdate,
  onDelete,
  onUpdateLabels,
}: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showLabelPicker, setShowLabelPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        labelPickerRef.current &&
        !labelPickerRef.current.contains(event.target as Node)
      ) {
        setShowLabelPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && editText.trim()) {
      onUpdate(task.id, editText.trim());
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  const toggleLabel = (labelId: string) => {
    const newLabels = task.labels.includes(labelId)
      ? task.labels.filter((l) => l !== labelId)
      : [...task.labels, labelId];
    onUpdateLabels(task.id, newLabels);
  };

  return (
    <Styled.TaskCard
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Styled.TaskLabelWrapper>
        {task.labels.map((label, index) => (
          <Styled.TaskLabel key={index} color={label} />
        ))}
      </Styled.TaskLabelWrapper>

      {isEditing ? (
        <Styled.TaskInput
          ref={inputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            setIsEditing(false);
            setEditText(task.text);
          }}
        />
      ) : (
        <Styled.InputWrapper className="group">
          <Styled.InputText>{task.text}</Styled.InputText>
          <Styled.TaskActions>
            <Styled.ActionsButton onClick={() => setShowLabelPicker(true)}>
              <Styled.TagIcon size={12} />
            </Styled.ActionsButton>
            <Styled.ActionsButton onClick={() => setIsEditing(true)}>
              <Styled.EditIcon size={12} />
            </Styled.ActionsButton>
            <Styled.ActionsButton onClick={() => onDelete(task.id)}>
              <Styled.XIcon size={12} />
            </Styled.ActionsButton>
          </Styled.TaskActions>

          {showLabelPicker && (
            <Styled.LabelPicker ref={labelPickerRef}>
              {AVAILABLE_LABELS.map((label) => (
                <Styled.LabelButton
                  key={label.id}
                  color={label.id}
                  selected={task.labels.includes(label.id)}
                  onClick={() => toggleLabel(label.id)}
                >
                  <Styled.TaskLabel color={label.id} />
                  <Styled.LabelName>{label.name}</Styled.LabelName>
                  {task.labels.includes(label.id) && <X size={12} />}
                </Styled.LabelButton>
              ))}
            </Styled.LabelPicker>
          )}
        </Styled.InputWrapper>
      )}
    </Styled.TaskCard>
  );
}
