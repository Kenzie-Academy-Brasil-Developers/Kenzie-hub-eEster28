import LoadingI from "../../assets/loadingSpinner.svg"
import styles from "./style.module.scss"

export const Loading = () => {
    return (
        <div className={styles.loadingBox}>
            <img src={LoadingI} alt="Loading Icon" />
        </div>
    )
}