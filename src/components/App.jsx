import { Profile } from '../components/Profile/Profile';
import user from '../components/data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/data/data.json';
import { FriendList } from '../components/FriendList/FriendList';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';

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

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};

export default App;
