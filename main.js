name=[];


function change()
{
    var Name1=document.getElementById("name1").value;
    var Name2=document.getElementById("name2").value;
    var Name3=document.getElementById("name3").value;
    var Name4=document.getElementById("name4").value;

    name.push(Name1);
    name.push(Name2);
    name.push(Name3);
    name.push(Name4);

    console.log(name);

    document.getElementById("namedisplay").innerHTML=name;

    document.getElementById("jltname").style.display="none";
    document.getElementById("sortname").style.display="inline-block";
}

function sortall()
{
    name.sort();

    console.log(name);
    
    document.getElementById("namedisplay").innerHTML=name;
}