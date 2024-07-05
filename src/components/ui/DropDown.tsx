import React, { useState } from "react";
import { LIST_TYPES, Task, DropDownProps } from "../../types/types";
import styles from './DropDown.module.scss';
import ArrowDown from '../../img/arrow-down-select.svg';

const DropDown = ({
    blockType,
    allTasks,
    setTasks,
    setFormVisible,
    isFormVisible,
}: DropDownProps) => {
    const [selectedTask, setSelectedTask] = useState("");

    const handleChange = (taskId: string) => {
        const newStatus = blockType;

        const updatedTasks = allTasks.map((task: Task) => {
            if (task.id === taskId) {
                return { ...task, status: newStatus };
            }
            return task;
        });

        setTasks(updatedTasks);
        setSelectedTask(taskId);
        setFormVisible(false);
    };

    const filteredTasks = allTasks.filter((task) => {
        if (blockType === LIST_TYPES.READY) return task.status === LIST_TYPES.BACKLOG;
        if (blockType === LIST_TYPES.IN_PROGRESS) return task.status === LIST_TYPES.READY;
        if (blockType === LIST_TYPES.FINISHED) return task.status === LIST_TYPES.IN_PROGRESS;
        return false;
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header} onClick={() => setFormVisible(!isFormVisible)}>
                <img src={ArrowDown} alt="Arrow Down" className={styles.wrapper__arrow} />
            </div>
            {isFormVisible && filteredTasks.length > 0 && (
                <div className={styles.task_list}>
                    {filteredTasks.map((task) => (
                        <div
                            key={`task-${task.id}`}
                            className={styles.task_list__item}
                            onClick={() => handleChange(task.id)}
                        >
                            {task.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
