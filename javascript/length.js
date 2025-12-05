function findLength(str)
{
    let s=str.split(' ')
    // console.log(s);
    let n=s.length
    // console.log(n);
    let l=s[n-1].length
    console.log(l);
}
findLength('hello world')