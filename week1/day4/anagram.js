function isAnagram(str1,str2)
{
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    if(str1.length!==str2.length)
    {
        console.log('these strings cannot be compared');
    }
    else
    {
        let s1=str1.split('').sort().join('')
        // console.log(s1);
        let s2=str2.split('').sort().join('')
        // console.log(s2);
        if(s1===s2)
        {
            console.log('anagram');
        }
        else
        {
            console.log('not anagram');
            
        }
    }
}
isAnagram('listen','silent')