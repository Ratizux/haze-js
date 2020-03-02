"use strict"

let n,m,ans=0,x=[],rlock=[],slock=[],slockr=[];

function init()
{
    let timeBegin=new Date();
    
    n=13;
    m=n-1;

    for(let i=0;i<n;i++)
    {
        dfs(0,i);
    }
    
    let timeEnd=new Date();
    let timeTotal=timeEnd.getTime()-timeBegin.getTime();
    document.write(timeTotal+"ms. Lower is better.");
    
}

function dfs(line,row)
{
    if(rlock[row]===true || slock[line+row]===true || slockr[line-row+m]===true)
    return;

    x[line]=row;
    
    rlock[row]=true;
    slock[line+row]=true;
    slockr[line-row+m]=true;

    for(let i=0;i<n;i++)
    {
        dfs(line+1,i);
    }
    
    rlock[row]=false;
    slock[line+row]=false;
    slockr[line-row+m]=false;
}

setTimeout(init,1000);
