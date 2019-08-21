import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchHousesPage } from "../../actions";
import { Link } from "react-router-dom";
import House from "../house/house";

function HouseList({ match: { params: { page } }, houses, fetchHousesPage }) {

  useEffect(() => {
    !houses && fetchHousesPage(page)
  }, [page]);

  return (
    <div>
      <Link to={`/houses/${Math.max(1, +page - 1)}`}>&lt;</Link>
      <div style={{ display: 'inline-block', margin: 15 }}>{page}</div>
      <Link to={`/houses/${+page + 1}`}>&gt;</Link>

      {
        !houses || houses.isLoading ?
          <h3>Loading....</h3> :
          <div>
            {houses.entities.map(house => <House key={house.id} house={house}/>)}
          </div>
      }
    </div>
  );
}

const mapStateToProps = (state, { match: { params: { page } } }) => ({
  houses: state.houses.get(page)
});

export default connect(mapStateToProps, { fetchHousesPage })(HouseList);
