import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import closeForm from "../../img/cross.svg";
import Button from "../ui/Button";
import { TaskDetailProps } from "../../types/types";
import styles from './TaskDetail.module.scss';


const TaskDetail = ({ tasks, setTasks }: TaskDetailProps) => {
    const { taskId } = useParams<{ taskId: string }>();
    const task = tasks.find((task) => task.id === taskId);

    const [isEditing, setEditing] = useState(false);
    const [description, setDescription] = useState(task?.description || "");

    const handleDescriptionClick = () => {
        setEditing(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedTasks = tasks.map((t) =>
            t.id === taskId ? { ...t, description } : t
        );
        setTasks(updatedTasks);
        setEditing(false);
    };

    return (
        <>
            <div className={styles.task_container}>
                {task ? (
                    <>
                        <h1 className={styles.task_container__title}>{task.title}</h1>

                        {isEditing ? (
                            <form onSubmit={handleSubmit} className={styles.task_container__form} data-status={task.status} data-id={task.id}>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter task description"
                                    name="description"
                                    className={styles.task_container__form__textarea}
                                />
                                <Button name="Submit" className={styles.task_container__form__button} buttonType="submit" />
                            </form>
                        ) : (
                            <div id="taskDescription" onClick={handleDescriptionClick} className={styles.task_container__description}>
                                {task.description || "This task has no description"}
                                <span className={styles.task_container__help}>*Click on the description to change it</span>
                            </div>
                        )}
                    </>
                ) : (
                    <p className={styles.task_container__description}>Task with ID {taskId} not found</p>
                )}

                <Link className={styles.task_container__close_button} to="/">
                    <img src={closeForm} alt="close" />
                </Link>
            </div>
        </>
    );
};

export default TaskDetail;
