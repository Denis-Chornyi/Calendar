import React, { useState } from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Plus } from "lucide-react";
import { Task, Holiday } from "../../../types";
import { TaskCard } from "../TaskCard";
import * as Styled from "./index.styled";

type CalendarCellProps = {
  date: string;
  dayNumber: number;
  isCurrentMonth: boolean;
  tasks: Task[];
  holiday?: Holiday;
  onAddTask: (date: string, text: string) => void;
  onUpdateTask: (taskId: string, newText: string) => void;
  onDeleteTask: (taskId: string) => void;
  onUpdateLabels: (taskId: string, labels: string[]) => void;
};

export function CalendarCell({
  date,
  dayNumber,
  isCurrentMonth,
  tasks,
  holiday,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onUpdateLabels,
}: CalendarCellProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTaskText.trim()) {
      onAddTask(date, newTaskText.trim());
      setNewTaskText("");
      setIsAdding(false);
    }
  };

  return (
    <Styled.CalendarCell color={isCurrentMonth ? "#80808022" : "#f9fafb"}>
      <Styled.CalendarCellHeader>
        <Styled.CalendarDate color={isCurrentMonth ? "#111827" : "#9ca3af"}>
          {dayNumber}
          {tasks.length > 0 && (
            <Styled.NumberOfCards>
              {tasks.length} card{tasks.length !== 1 ? "s" : ""}
            </Styled.NumberOfCards>
          )}
        </Styled.CalendarDate>
        {isCurrentMonth && (
          <Styled.AddTaskButton onClick={() => setIsAdding(true)}>
            <Plus size={16} />
          </Styled.AddTaskButton>
        )}
      </Styled.CalendarCellHeader>

      {holiday && <Styled.HolidayTag>{holiday.name}</Styled.HolidayTag>}

      <Droppable droppableId={date}>
        {(provided) => (
          <Styled.TaskCardWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <TaskCard
                    task={task}
                    provided={provided}
                    onUpdate={onUpdateTask}
                    onDelete={onDeleteTask}
                    onUpdateLabels={onUpdateLabels}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Styled.TaskCardWrapper>
        )}
      </Droppable>

      {isAdding && (
        <Styled.TaskInput
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={handleAddTask}
          onBlur={() => {
            setIsAdding(false);
            setNewTaskText("");
          }}
          placeholder="New task..."
          autoFocus
        />
      )}
    </Styled.CalendarCell>
  );
}
