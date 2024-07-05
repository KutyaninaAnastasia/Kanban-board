export enum LIST_TYPES {
    BACKLOG = 'backlog',
    READY = 'ready',
    IN_PROGRESS = 'inProgress',
    FINISHED = 'finished'
}

export const LIST_COPY = {
    [LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.READY]: 'Ready',
    [LIST_TYPES.IN_PROGRESS]: 'In progress',
    [LIST_TYPES.FINISHED]: 'Finished'
};

export interface Task {
    id: string;
    title: string;
    description? : string;
    status: LIST_TYPES;
}

export interface ListProps {
    title: string;
    type: LIST_TYPES;
    TaskList: Task[];
    allTasks: Task[];
    addNewTask: (title: string, description: string) => void;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface BoardProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface AddTaskProps {
    formSubmit: (title: string) => void;
    setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContentProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    tasks: Task[];
}

export interface TaskDetailProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface ButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
    buttonType?: "button" | "submit" | "reset";
    disabled?: boolean;
}


export interface DropDownProps {
    blockType: LIST_TYPES.READY | LIST_TYPES.IN_PROGRESS | LIST_TYPES.FINISHED;
    allTasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isFormVisible: boolean;
}

export interface FooterProps {
    activeTasks?: number;
    finishedTasks?: number;
}
