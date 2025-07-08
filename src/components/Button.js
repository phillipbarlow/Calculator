export default function Button ({className, children,handleClick,symbol}){
    return(
        <>
            <button className={className} onClick={()=>handleClick(symbol)}>{children}</button>
        </>
    )
}