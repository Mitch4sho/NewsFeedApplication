import { createContext, useReducer } from "react";
import ArticlesReducer from "./reducer";

const ArticleContext = createContext<any>({});

export const Provider: React.FunctionComponent<{}> = ({
  children,
}): JSX.Element => {
  const initialState = {
    page: 1,
    articles: [],
    article: {},
    currentQuery: "top-headlines",
    loading: false,
    hasNextPage: true,
    quickMenuList: ["Top News", "Business", "Health", "Entertainment", "Kanye"],
    scrollPos: { x: 0, y: 0 },
  };

  const [state, dispatch] = useReducer(ArticlesReducer, initialState);

  return (
    <ArticleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
