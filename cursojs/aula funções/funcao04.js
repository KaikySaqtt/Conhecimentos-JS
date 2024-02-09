function fator (n)
{
    let fat = 1
    for(c = n; c>1; c--)
    {
        fat *= c
    }
    return fat
}

console.log(fator(5))
// 5! = 5 x 4 x3 x2 x1