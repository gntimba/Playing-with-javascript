iCounter1 = 0;
iCounter2 = 0;
iMax=899;
for ( i = 1;i <= iMax;i++)
{
k = Math.round(i / 3, 0);
m = i / 3;
p = k - m;
iCounter2 = iCounter2 + 1;
if(p === 0){
iCounter1 = iCounter1 + 1;
iCounter2 = 0;
}
}
console.log(iCounter1)
console.log(iCounter2)