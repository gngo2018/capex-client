import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import projectStyles from './project.module.css'
import utilsStyles from '../../styles/utils.module.css'

export default function Projects() {
    return (
        <div>
            <div className={utilsStyles.header_icon_flex_container}>
                <h2>Projects</h2>
                <FontAwesomeIcon icon={'plus-circle'} />
            </div>
        </div>
    )
}