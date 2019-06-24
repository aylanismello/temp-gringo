import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const AylanStatsStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 40%;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 1rem 2rem;

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    grid-template-columns: 22% 22% 22% 22%;
  }
`;

// const AylanStatImg = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 20px;
// `;
const AylanStatImg = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${props => props.src});
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

const AylanStatStyle = styled.div`
  position: relative;
`;

const AylanStatTxt = styled.div`
  /* background: black; */
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  font-family: ${props => props.theme.fontHeader};
  font-weight: 600;
  filter: blur(0.2px);

  &:hover {
    cursor: default;
  }
`;

const AylanStat = ({ src, thing, num }) => (
  <AylanStatStyle className="AylanStatStyle">
    <AylanStatImg src={src} className="AylanStatImg" />
    <AylanStatTxt className="AylanStatTxt">
      {num} {thing}
    </AylanStatTxt>
  </AylanStatStyle>
);

const formattedMoment = dateString => moment(dateString, 'YYYY-MM-DD');
// https://stackoverflow.com/questions/25150570/get-hours-difference-between-two-dates-in-moment-js
function getNumDaysAbroad() {
  const europe = moment.duration(formattedMoment('2018-3-18').diff(formattedMoment('2018-2-6'))).asDays();
  const latAm = moment.duration(formattedMoment('2018-9-6').diff(formattedMoment('2018-5-12'))).asDays();
  const asiaBeyond = moment.duration(formattedMoment(new Date()).diff(formattedMoment('2018-11-27'))).asDays();

  return Math.ceil(europe + latAm + asiaBeyond);
}


export default ({ numCities, numCountries }) => (
  <AylanStatsStyle className="AylanStatsStyle">
    <AylanStat
      src="https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_300/v1561374621/stats-cities.jpg"
      thing="cities"
      num={numCities}
    />
    <AylanStat
      src="https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_300/v1561374621/stats-countries.jpg"
      thing="countries"
      num={numCountries}
    />
    <AylanStat
      src="https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_300/v1561374621/stats-daysAbroad.jpg"
      thing="days traveling"
      num={getNumDaysAbroad()}
    />
    <AylanStat
      src="https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_300/v1560928220/bc_weekly_95_cover.jpg"
      thing="kg luggage"
      num={14}
    />
  </AylanStatsStyle>
);
