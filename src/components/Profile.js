import PropTypes from 'prop-types';
import React from 'react';
import {withRouter} from 'react-router-dom';
import ContainerArea from './ContentArea';
import Card from './Card';
import {DefaultButton} from './Buttons';
import Notification from './Notification/Notification';

const ProfileCard = Card.extend`
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  
  > div {
    line-height: 40px;
  }
  
  > div > img {
    border-radius: 50%;
    max-width: 40px;
    float: left;
    margin-right: 10px;
  }
`;

function Profile(props) {
  const profilePicture = (props.authenticated && props.profile.picture) ?
    props.profile.picture :
    'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

  return (
    <ContainerArea>
      <Notification />
      {props.authenticated &&
      <ProfileCard>
        <div>
          <img src={profilePicture} alt="Author Profile"/>
          {props.profile.name}
        </div>
        <DefaultButton onClick={() => props.signOut()}>Exit</DefaultButton>
      </ProfileCard>
      }
    </ContainerArea>
  );
}

Profile.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  auth0Client: PropTypes.object,
  profile: PropTypes.object,
};

export default withRouter(Profile);
