import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import Navbar from "./components/NavBar"
import 'react-activity-feed/dist/index.css';

class App extends React.Component {
  render () {
    return (
      
      <StreamApp
        apiKey="du8he7epvp94"
        appId="45206"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjEzM2QyYTAtOTNiMi00YWU5LTgyZjktZDY0NjM5OTk1NWY1In0.ioNPhB2pW8XiNOybEBj_P-jUMdWZuD4SJk46O_fNWmc"
      >
      <Navbar></Navbar>
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="6133d2a0-93b2-4ae9-82f9-d646399955f5" />
        <FlatFeed
          options={ {reactions: { recent: true } } }
          notify
          Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>
                )}
              />
            }
          />
      </StreamApp>
    );
  }
}

export default App;
