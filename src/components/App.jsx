import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import profile from './Profile/profile.json';
import data from './Statistics/data.json';
import friends from './FriendListItem/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
