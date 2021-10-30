import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as DataService from '../../models/data/DataService'
import Project from '../../models/project/Project'
import propertyStyles from './property.module.css'

export default function Property() {
    const router = useRouter();
    const { id } = router.query;
    const [propertyName, setPropertyName] = useState('');
    const [isCommercial, setIsCommercial] = useState(false);
    const [projectArray, setProjectArray] = useState<Project[]>();

    useEffect(() => {
        if (id) {
            const parsedId = parseInt(id.toString());
            const name = DataService.GetPropertyById(parsedId);
            const projects = DataService.GetProjectsByPropertyId(id.toString());
            setPropertyName(name);
            setProjectArray(projects);

            if (name === 'Homestead') {
                setIsCommercial(false)
            }
            else {
                setIsCommercial(true)
            }
        }
    }, [id]);


    return (
        <div className={propertyStyles.property_container}>
            <h2>{propertyName} Analytics</h2>
            {
                isCommercial &&
                <>
                    <div>Total Units: </div>
                    <div>Total Occupancy: </div>
                    <div>Revenue per Year: </div>
                </>
            }
            {
                !isCommercial && 
                <>
                    <div>Property Purchase Date: </div>
                    <div>Mortgage Duration: </div>
                    <div>Monthly payments: </div>
                </>
            }

            <h2>{propertyName} Projects</h2>
            {
                projectArray?.map((project) =>
                    <div className={propertyStyles.project_container}>
                        <div>{project.projectName}</div>
                        <div>Estimated Cost: {project.price}</div>
                    </div>
                )
            }
        </div>
    );
}