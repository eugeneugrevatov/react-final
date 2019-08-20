import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchHousesPage } from "../../actions";
import { Link } from "react-router-dom";

function HouseList({ match: { params: { page } }, houses, fetchHousesPage }) {

  useEffect(() => {
    !houses && fetchHousesPage(page)
  }, [page]);




  return (
    <div>
      {
        !houses || houses.isLoading ?
          <h3>Loading....</h3> :
          <>
            <ul>
              {houses.entities.map(house => <li key={house.id}>{house.name}</li>)}
            </ul>
            {+page !== 1 &&  <Link to={`/houses/${+page - 1}`}>Back</Link>}
            {page}
            {houses.entities.length === 10 && <Link to={`/houses/${+page + 1}`}>Next</Link>}
          </>
      }
    </div>
  );
}

const stateToProps = (state, { match: { params: { page } } }) => ({
  houses: state.houses.get(page)
});

export default connect(stateToProps, { fetchHousesPage })(HouseList);
