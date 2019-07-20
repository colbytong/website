import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: add media queries to adjust card size and font

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
`;

const Name = styled.h3`
  color: black;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Position = styled.h3`
  color: black;
  font-style: italic;
`;

export default function ProfileCard(props) {
  return (
    <Card>
      <ProfileImage />
      <Name> {props.name} </Name>
      <Position> {props.position} </Position>
    </Card>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
