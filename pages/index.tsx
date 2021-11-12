import type { NextPage } from 'next'
import homeStyles from '../styles/Home.module.css'

const upComingProjects = ['Painting', 'Plumbing', 'Window Repair', 'Landscaping']
const currentProjects = ['Termite Spraying', 'Tree Removal', 'HVAC']

const Home: NextPage = () => {
  return (
    <div className={homeStyles.dashboard_container}>
      <h2>Dashboard</h2>
      <div className={homeStyles.metric_container}>
        <div className={homeStyles.metric_flex_item}>
          <h3>Total Yearly Revenue</h3>
          <span>$120,000</span>
        </div>
        <div className={homeStyles.metric_flex_item}>
          <h3>Total Utilization</h3>
          <span>345/500 units</span>
        </div>
        <div className={homeStyles.metric_flex_item}>
          <h3>Top Property</h3>
          <div>Property Name</div>
          <div>Revenue: $12,000</div>
          <div>Utilization: 150/167 units</div>
        </div>
      </div>
      <div className={homeStyles.project_container}>
        <div>
          <h3>Current Projects ({currentProjects.length})</h3>
          <div className={homeStyles.project_list_container}>
            {
              currentProjects.map((cp, index) => 
                <span key={index} className={homeStyles.project_flex_item}>{cp}</span>
              )
            }
          </div>
        </div>
        <div>
          <h3>Upcoming Projects ({upComingProjects.length})</h3>
          <div className={homeStyles.project_list_container}>
          {
              upComingProjects.map((up, index) => 
                <span key={index} className={homeStyles.project_flex_item}>{up}</span>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
