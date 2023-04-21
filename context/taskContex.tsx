// TaskContext.tsx
import React, {createContext, useContext} from 'react';
import withObservables from '@nozbe/with-observables';
import {database} from '../database';
import Task from '../models/taskModel';

interface TaskContextData {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  deleteTask: (task: Task) => Promise<void>;
}

const TaskContext = createContext<TaskContextData>({
  tasks: [],
  addTask: async () => {},
  deleteTask: async () => {},
});

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

interface TaskProviderProps {
  tasks: Task[];
  children: React.ReactNode;
}

const TaskProviderComponent: React.FC<TaskProviderProps> = ({
  tasks,
  children,
}) => {
  const addTask = async (title: string) => {
    await database.write(async () => {
      await database.collections.get<Task>('tasks').create(task => {
        task.title = title;
        task.isCompleted = false;
      });
    });
  };

  const deleteTask = async (task: Task) => {
    await database.write(async () => {
      await task.destroyPermanently();
    });
  };

  return (
    <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export const TaskProvider = withObservables([], () => ({
  tasks: database.collections.get<Task>('tasks').query().observe(),
}))(TaskProviderComponent);
