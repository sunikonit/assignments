var gender="male"
function printgender()
{
    let color="brown"
    if(gender.startsWith("female"))
    {
        var age=30
        let color="pink"
        console.log(color); //printing inside if block
    }
    else
    {
        var age=35
        console.log(color); //printing inside else block
    }
    console.log(age); //printing outside block inside function
}
printgender()
console.log(gender); //printing globally