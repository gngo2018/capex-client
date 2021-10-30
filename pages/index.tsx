import type { NextPage } from 'next'
import Link from 'next/link';
import Property from '../models/property/Property'
import homeStyles from '../styles/Home.module.css'

var today = new Date();

var dd = today.getDate();
var mm = today.getMonth() + 2;
var y = today.getFullYear();

var someFormattedDate = mm + '/'+ dd + '/'+ y;
console.log(someFormattedDate)

const completeDate = someFormattedDate;

const propertyArray: Property[] = [
  { id: 1, propertyName: 'Homestead', propertyType: 'Personal', nextProject: "Hvac Repair", price: "$10,000", completeBy: completeDate },
  { id: 2, propertyName: 'Rental', propertyType: 'Commercial', nextProject: "Paint", price: "$20,000", completeBy: completeDate },
  { id: 3, propertyName: 'Corporate', propertyType: 'Commercial', nextProject: "Plumbing", price: "$5,000", completeBy: completeDate }
]

const Home: NextPage = () => {
  return (
    <div className={homeStyles.container}>
        <h2>Current Properties</h2>
        <div className={homeStyles.property_list_container}>
          {propertyArray.map((property) => 
            <Link key={property.id} href={'properties/' + property.id}>
            <div className={homeStyles.property_card}>
              <div className={homeStyles.property_card_header}>{property.propertyName}</div>
              <div className={homeStyles.property_card_image}>Property Image</div>
              <div className={homeStyles.property_card_details}>
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
  )
}

export default Home
