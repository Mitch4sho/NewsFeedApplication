interface ActionTypes {
  type: string;
  payload: {
    page?: number;
    data?: [];
    query?: string;
  };
}

const ArticlesReducer = (state: any, action: ActionTypes) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        page: 1,
        articles: action.payload.data,
        article: {},
        currentQuery: action.payload.query,
      };
    case "GET_ARTICLE":
      return {
        ...state,
        article: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
        articles: action.payload.data,
      };
    default:
      return state;
  }
};

export default ArticlesReducer;
