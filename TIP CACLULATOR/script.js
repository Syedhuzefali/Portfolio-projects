function datasubmit(rec)
{
    const Amount=document.getElementById("amount").value;
    console.log("amount-",Amount);
    const service=document.getElementById("service").value;
    console.log("service-",service);
    const persons=document.getElementById("persons").value;
    console.log("persons-",persons);
    // var result= (Amount/persons)*service;
    // console.log(result);
    var result = '';
    if(rec==='=')
    {
        result= (Amount/persons)*service;
        // console.log(result);
        document.getElementById("answer").innerHTML="Tip Amount "+result+" Rupees for "+persons+" Person each";
        result='';
    }
 
}





