function f(a,b)
{
    if(a>b)
    {
        return a;
    }else
    {
        return b;
    }
}
let a=prompt("enter first no")
let b=prompt("enter second no")
let c=f(a,b)
document.write(c)