import { Profile } from '../components/Profile/Profile';
import user from '../components/data/user.json';
// import Statistics from '../components/Statistics/StatisticsSection';
// import Stats from '../components/Statistics/Stats';
// import data from '../data.json';

const App = () => {
  return (
    <div>
  <Profile
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
  />
      
    {/* <Statistics title="Upload stats">
        <Stats data={data}/>
    </Statistics>
       */}
      

    </div>
  )   
}

export default App;

