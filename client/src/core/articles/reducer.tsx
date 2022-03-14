interface ActionTypes {
  type: string;
  payload: Object;
}

const ArticlesReducer = (state: any, action: ActionTypes) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default ArticlesReducer;
