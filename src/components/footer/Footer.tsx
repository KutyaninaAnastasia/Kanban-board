import styles from './Footer.module.scss'
import { FooterProps } from '../../types/types';

const Footer = (props: FooterProps) => {
    const { activeTasks, finishedTasks} = props;

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__left}>
                <div>Active tasks: {activeTasks}</div>
                <div>Finished tasks: {finishedTasks}</div>
            </div>
            <div className={styles.footer__right}>Kanban board by Anastasia, 2024</div>
        </footer>
    );
}

export default Footer;
