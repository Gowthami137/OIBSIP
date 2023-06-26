let result=document.getElementById("inputext");
let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err)
    {
        alert("Input is not valid");
    }
}

function clr()
{
    result.value="";
}

function dele()
{
    result.value=result.value.slice(0,-1);

}