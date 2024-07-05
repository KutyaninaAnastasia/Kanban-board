import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LIST_TYPES, LIST_COPY, Task, BoardProps } from '../../types/types';
import TaskListBoard from './TaskListBoard';
import styles from './Board.module.scss';

const Board = ({ tasks, setTasks }: BoardProps) => {
    const addNewTask = useCallback((title: string, description: string) => {
        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: LIST_TYPES.BACKLOG,
        };
        setTasks([...tasks, task]);
    }, [setTasks, tasks]);

    return (
        <div className={styles.container}>
            {Object.values(LIST_TYPES).map((type) => {
                const TaskList = tasks.filter(task => task.status === type);
                return (
                    <TaskListBoard
                        key={type}
                        type={type}
                        title={LIST_COPY[type]}
                        allTasks={tasks}
                        TaskList={TaskList}
                        addNewTask={addNewTask}
                        setTasks={setTasks}
                    />
                );
            })}
        </div>
    );
};

export default Board;
