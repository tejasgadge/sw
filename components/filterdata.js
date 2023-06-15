const filterdata=(input,restaurant)=>
{
  const data=restaurant.filter((restaurant)=>{
  return restaurant.data.data.name.includes(input);
  })
  return data;
}
export default filterdata;