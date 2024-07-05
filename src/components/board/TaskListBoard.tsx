import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ListProps, LIST_TYPES } from "../../types/types";
import Button from "../ui/Button";
import DropDown from "../ui/DropDown";
import AddTask from "../add-task/AddTask";
import styles from './Board.module.scss';

const TaskListBoard = ({
    title,
    type,
    TaskList,
    allTasks,
    addNewTask,
    setTasks,
}: ListProps) => {
    const [isFormVisible, setFormVisible] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setFormVisible(!isFormVisible);
    };

    const formSubmit = (title: string) => {
        addNewTask(title, "");
        setFormVisible(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(event.target as Node)) {
            setFormVisible(false);
        }
    };

    useEffect(() => {
        if (isFormVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFormVisible]);

    const activeTasks = allTasks.filter((task) => task.status === LIST_TYPES.BACKLOG).length;
    const readyTasks = allTasks.filter((task) => task.status === LIST_TYPES.READY).length;
    const inProgressTasks = allTasks.filter((task) => task.status === LIST_TYPES.IN_PROGRESS).length;

    const isDisabled = () => {
        if (type === LIST_TYPES.READY && activeTasks === 0) return true;
        if (type === LIST_TYPES.IN_PROGRESS && readyTasks === 0) return true;
        if (type === LIST_TYPES.FINISHED && inProgressTasks === 0) return true;
        return false;
    };

    return (
        <div className={styles.container__card} ref={formRef}>
            <div className={styles.container__card__title}>{title}</div>
            <div className={styles.container__card__list}>
                {TaskList.map((task) => (
                    <div key={task.id} className={styles.container__card__task}>
                        <Link className={styles.container__card__task_title} to={`/tasks/${task.id}`}>
                            {task.title}
                        </Link>
                    </div>
                ))}
            </div>

            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <AddTask formSubmit={formSubmit} setFormVisible={setFormVisible} />
            )}

            {!isFormVisible && (
                <Button
                    name="+Add card"
                    onClick={handleClick}
                    className={styles.container__card__button}
                    buttonType="button"
                    disabled={isDisabled()}
                />
            )}

            {type !== LIST_TYPES.BACKLOG && isFormVisible && (
                <DropDown
                    blockType={type}
                    allTasks={allTasks}
                    setFormVisible={setFormVisible}
                    isFormVisible={isFormVisible}
                    setTasks={setTasks}
                />
            )}
        </div>
    );
};

export default TaskListBoard;
