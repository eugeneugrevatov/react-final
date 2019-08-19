const defaultState = {
  entities: []
};

export default (peopleState = defaultState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return peopleState;
  }
}
