export const showToast=(operation,id)=>
{
    const toast=document.createElement("div");
    toast.classList.add("toast");

    //set text of the toast based on the operation.
    if(operation=="add")
    {
        toast.innerText=`Product with ID ${id} has been added.`
    }
    else
    {
        toast.innerText=`Product with ID ${id} has been deleted.`
    }

    document.body.appendChild(toast);

    //automatically remove the toast after few second
    setTimeout(()=>{
        toast.remove();
    },3000)



}