import { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";
import { Task, Holiday } from "../../types";
import { getHolidays } from "../../services/holidayService";
import { addWeeks, subWeeks } from "../../utils/dateUtils";
import * as Styled from "./index.styled";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week">("month");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchHolidays = async () => {
      const year = currentDate.getFullYear();
      const holidayData = await getHolidays(year);
      setHolidays(holidayData);
    };

    fetchHolidays();
  }, [currentDate]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceDate = source.droppableId;
    const destDate = destination.droppableId;

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const taskIndex = newTasks.findIndex(
        (t) => t.date === sourceDate && t.order === source.index
      );

      if (taskIndex === -1) return prevTasks;

      const [movedTask] = newTasks.splice(taskIndex, 1);
      movedTask.date = destDate;

      const destTasks = newTasks.filter((t) => t.date === destDate);
      destTasks.splice(destination.index, 0, movedTask);

      destTasks.forEach((task, index) => {
        task.order = index;
      });

      const otherTasks = newTasks.filter((t) => t.date !== destDate);
      return [...otherTasks, ...destTasks];
    });
  };

  const handleNavigate = (direction: "prev" | "next") => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      if (view === "month") {
        newDate.setMonth(prevDate.getMonth() + (direction === "next" ? 1 : -1));
      } else {
        if (direction === "next") {
          return addWeeks(prevDate, 1);
        } else {
          return subWeeks(prevDate, 1);
        }
      }
      return newDate;
    });
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const filteredTasks = searchQuery
    ? tasks.filter((task) =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tasks;

  const handleAddTask = (date: string, text: string) => {
    const tasksForDate = tasks.filter((t) => t.date === date);
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      date,
      order: tasksForDate.length,
      labels: [],
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleUpdateTask = (taskId: string, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const handleUpdateLabels = (taskId: string, labels: string[]) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, labels } : task))
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <Styled.CalendarContainer>
      <Styled.HeaderContainer>
        <CalendarHeader
          currentDate={currentDate}
          onPrevMonth={() => handleNavigate("prev")}
          onNextMonth={() => handleNavigate("next")}
          onToday={handleToday}
          view={view}
          onViewChange={setView}
        />
        <Styled.SearchContainer>
          <Styled.SearchIcon size={20} />
          <Styled.SearchInput
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Styled.SearchContainer>
      </Styled.HeaderContainer>

      <DragDropContext onDragEnd={handleDragEnd}>
        <CalendarGrid
          currentDate={currentDate}
          tasks={filteredTasks}
          holidays={holidays}
          view={view}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onUpdateLabels={handleUpdateLabels}
          onDeleteTask={handleDeleteTask}
        />
      </DragDropContext>
    </Styled.CalendarContainer>
  );
}
