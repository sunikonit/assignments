function isPalindrome(str)
{
    let rev=''
    for(let i=str.length;i>=0;i--)
    {
        rev=rev.concat(str.charAt(i))
    }
    console.log(rev);
    if(rev===str)
    {
        console.log('palindrome');
    }
    else
    {
        console.log('not palindrome');
    }
}
isPalindrome('malayalam')