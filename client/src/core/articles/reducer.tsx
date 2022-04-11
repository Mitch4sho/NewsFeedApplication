interface ActionTypes {
  type: string;
  payload: {
    page?: number;
    articles: [];
    query?: string;
    loading?: boolean;
    hasNextPage?: boolean;
  };
}

const ArticlesReducer = (state: any, action: ActionTypes) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        page: 1,
        articles: action.payload.articles,
        article: {},
        currentQuery: action.payload.query,
        hasNextPage: true,
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
        articles: [...state.articles, ...action.payload.articles],
        loading: action.payload.loading,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        hasNextPage: action.payload,
      };
    case "SET_SCROLL_POS":
      return {
        ...state,
        scrollPos: action.payload,
      };
    default:
      return state;
  }
};

export default ArticlesReducer;
