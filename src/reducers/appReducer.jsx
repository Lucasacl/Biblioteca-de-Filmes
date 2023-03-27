export const reducer = (state, action) => {
  switch (action.type) {
    case 'THEME_TOGGLE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};
