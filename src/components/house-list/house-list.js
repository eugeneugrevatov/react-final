import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchHouses } from "../../actions";

function HouseList({ match: {params: {page}}, houses, fetchHouses }) {

  useEffect(() => {
    fetchHouses()
  }, []);


  return (
    <div>
      {
        houses.isLoading ?
          <h3>Loading....</h3> :
          <ul>
            {houses.entities.map(h => <li key={h}>{h}</li>)}
          </ul>

      }
    </div>
  );
}

const stateToProps = state => ({
  houses: state.houses
});

export default connect(stateToProps, { fetchHouses })(HouseList);
