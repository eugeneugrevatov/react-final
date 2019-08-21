import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchPerson } from "../../actions";

function Person({ match: { params: { id } }, person, fetchPerson, history }) {

  useEffect(() => {
    !person && fetchPerson(id)
  }, []);

  return (
    <div>
      <button style={{ marginBottom: 15 }} onClick={() => history.goBack()}>back</button>
      {
        !person || person.isLoading ?
          <h3>Loading...</h3> :
          <div>
            <table>
              <tbody>
              <tr>
                <td>Name:</td>
                <td>{person.name}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{person.gender}</td>
              </tr>
              <tr>
                <td>Culture:</td>
                <td>{person.culture}</td>
              </tr>
              <tr>
                <td>Born:</td>
                <td>{person.born}</td>
              </tr>
              <tr>
                <td>Died:</td>
                <td> {person.died ? 'Yes' : 'No'}</td>
              </tr>
              </tbody>
            </table>
          </div>
      }
    </div>
  )
    ;
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  person: state.people.get(id)
});

export default connect(mapStateToProps, { fetchPerson })(Person);