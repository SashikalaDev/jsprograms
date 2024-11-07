
     var ip="JavaSCRipt"
     var op1="";
     for (j in ip){
        if(ip[j]==ip[j].toLowerCase())
            op1=op1+ip[j];
     }
     console.log(op1)
     var str="helloWORld"
     var op="";

     for(i in str){
        if(i%2!=0)
            op=op+str[i]
     }
     console.log(op)

     var str1=["hi","Hello","Welcome","students","Bye"]
     var op2=[];
     for(a in str1){
        if(str1[a][0]==str1[a][0].toUpperCase())
            op2.push(str1[a]);
     }
    console.log(op2)

    