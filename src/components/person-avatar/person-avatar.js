import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchPerson } from "../../actions";
import { Link } from "react-router-dom";

function PersonAvatar({ id, person, fetchPerson }) {

  useEffect(() => {
    !person && fetchPerson(id)
  }, []);

  return (
    <div style={{ marginLeft: 20 }}>
      {
        !person || person.isLoading ?
          'Loading...' : <Link to={`/people/${id}`}>{person.name}</Link>
      }
    </div>
  )
    ;
}

const mapStateToProps = (state, { id }) => ({
  person: state.people.get(id)
});

export default connect(mapStateToProps, { fetchPerson })(PersonAvatar);