import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const RecipeList = () => {
    // Use Recipes Context
    const { recipes } = useContext(RecipesContext);

    return <div className="row mt-5"></div>;
};

export default RecipeList;