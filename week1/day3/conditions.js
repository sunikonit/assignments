function isOddOrEven(num)
{
    if(isNaN(num))
    {
        console.log('invalid input')
    }
    else
    {
        if(num%2===0)
        {
            console.log('even number');
        }
        else
        {
            console.log('odd number');
        }
    }
}
isOddOrEven(5)

function isPositiveOrNegative(int)
{
    if(int>0)
    {
        console.log('positive number');
    }
    else if(int<0)
    {
        console.log('negative number');    
    }
    else if(int===0)
    {
        console.log('number is 0');
    }
    else
    {
        console.log('invalid input');
    }
}
isPositiveOrNegative(-5)

function launchBrowser(browserName)
{
    if (browserName==='chrome')
    {
        console.log('chrome is launched');
    }
    else if (browserName==='edge')
    {
        console.log('edge is launched');
    }
    else if (browserName==='firefox')
    {
        console.log('firefox is launched');
    }
    else
    {
        console.log('unsupported browser');
    }
}
launchBrowser('chrome')

function runTests(testType)
{
    switch(testType)
    {
        case 'smoke':
            console.log('smoke testing done');
            break
        case 'sanity':
            console.log('sanity testing done');
            break
        case 'regression':
            console.log('regression testing done');
            break
        default:
            console.log('smoke testing only');
    }
}
runTests('adhoc')