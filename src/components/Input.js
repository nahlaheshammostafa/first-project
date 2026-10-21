function Input()
{
    return(
        <>
        <label>Name</label>
        <input type="text" onChange = {(event) =>{  
           console.log(event.target.value)
        }} />
        </>
    );
}

export default Input;