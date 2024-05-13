import RecipeDetailsItem from "@/components/recipe-details";



async function fetchRecipeDetailList(currentRecipeId){
  try{
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await apiResponse.json();
    return data
  }catch(e){
    throw new Error(e)
  }
}

const DetailPage = async({params}) => {
  const getRecipeDetails = await fetchRecipeDetailList(params?.details)
  return (
    <div>
      <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
    </div>
  )
}

export default DetailPage
