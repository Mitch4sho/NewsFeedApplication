import { createContext, useReducer } from "react";
import ArticlesReducer from "./reducer";

const ArticleContext = createContext<any>({}); // TODO: need to fix types

// TODO: need to fix types
export const Provider: React.FunctionComponent<{}> = ({
  children,
}): JSX.Element => {
  const initialState = {
    articles: [],
    article: {},
  };

  const [state, dispatch] = useReducer(ArticlesReducer, initialState);

  return (
    <ArticleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
