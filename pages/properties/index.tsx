import Link from 'next/link'
import Property from '../../models/property/Property'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propertyStyles from './property.module.css'
import utilsStyles from '../../styles/utils.module.css'

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 2;
var y = today.getFullYear();
var someFormattedDate = mm + '/' + dd + '/' + y;
const completeDate = someFormattedDate;

const propertyArray: Property[] = [
    { id: 1, propertyName: 'Homestead', propertyType: 'Personal', nextProject: "Hvac Repair", price: "$10,000", completeBy: completeDate },
    { id: 2, propertyName: 'Rental', propertyType: 'Commercial', nextProject: "Paint", price: "$20,000", completeBy: completeDate },
    { id: 3, propertyName: 'Corporate', propertyType: 'Commercial', nextProject: "Plumbing", price: "$5,000", completeBy: completeDate }
]

export default function Properties() {
    return (
        <div className={propertyStyles.container}>
            <div className={utilsStyles.header_icon_flex_container}>
                <h2>Properties</h2>
                <FontAwesomeIcon icon={'plus-circle'} />
            </div>
            <div className={propertyStyles.property_list_container}>
                {propertyArray.map((property) =>
                    <Link key={property.id} href={'/properties/' + property.id} passHref>
                        <div className={propertyStyles.property_card}>
                            <div className={propertyStyles.property_card_header}>{property.propertyName}</div>
                            <div className={propertyStyles.property_card_image}>Property Image</div>
                            <div className={propertyStyles.property_card_details}>
                                <div>Property Type: {property.propertyType}</div>
                                <div>Next Project: {property.nextProject}</div>
                                <div>Project Amount: {property.price}</div>
                                <div>Complete By: {property.completeBy}</div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}