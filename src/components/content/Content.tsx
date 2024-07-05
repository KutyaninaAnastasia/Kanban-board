import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "../board/Board";
import TaskDetail from "../task-detail/TaskDetail";
import { ContentProps } from "../../types/types"; 
import styles from './Content.module.scss'


const Content = ({ setTasks, tasks }: ContentProps) => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path="/" element={<Board setTasks={setTasks} tasks={tasks} />} />
                <Route
                    path="/tasks/:taskId"
                    element={<TaskDetail setTasks={setTasks} tasks={tasks} />}
                />
            </Routes>
        </main>
    );
};

export default Content;
