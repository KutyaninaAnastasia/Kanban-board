import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Task } from './types/types';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

const App = () => {

  const initialState: Task[] = JSON.parse(window.localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState<Task[]>(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const { activeTasks, finishedTasks } = tasks.reduce(
    (counts, task) => {
      if (['backlog', 'ready', 'inProgress'].includes(task.status)) {
        counts.activeTasks++;
      } else if (task.status === 'finished') {
        counts.finishedTasks++;
      }
      return counts;
    },
    { activeTasks: 0, finishedTasks: 0 }
  );

  return (
    <div className="App-wrapper">
      <BrowserRouter>
        <Header />
        <Content 
          tasks={tasks}
          setTasks={setTasks}
        />
        <Footer
          activeTasks={activeTasks}
          finishedTasks={finishedTasks}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;

