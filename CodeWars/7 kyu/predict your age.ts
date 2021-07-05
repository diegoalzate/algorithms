export function predictAge(age1:number, age2:number, age3:number,age4:number,age5:number,age6:number,age7:number,age8:number): number{
    return Math.floor(Math.sqrt([age1,age2,age3,age4,age5,age6,age7,age8].map(a => a**2).reduce((a,b) => a + b, 0))/2);
};