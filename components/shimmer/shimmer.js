const Shimmer=()=>{
    return (
    <>
    <div className="p-2 shimmer flex flex-wrap justify-center items-start  gap-10 rounded-lg">
    {Array(15).fill("").map((e)=>(<div className="gap-10 bg-slate-200 h-[200px] w-[300px] rounded-lg">    
    </div>))}
    </div>
    
    </>
    )
}
export default Shimmer;