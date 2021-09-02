const tabs=document.querySelectorAll(".box div");
    const result=document.querySelector(".result");
   tabs.forEach((ele)=>{
       ele.addEventListener('click',()=>{
            if(ele.id==='num1')
            {
                var div=`<div class="box2">
                    <div class="row mt-5">
                        <div class="col-8 col-md-8 mx-auto">
                    <h1 class="text-center text-white">Binary To Decimal</h1>
                    <label for="" class="form-label text-info mt-5"><strong>Binary:</strong></label>
                    <input type="text" class="form-control enter" placeholder="Enter Binary Number :">
                    <button class="btn-primary mt-3 check"><strong>Check</strong></button>
                    <h4 id="ans" class="mt-2 text-center alert alert-success"></h4>
                        </div>
                    </div>
                </div>`;
                result.innerHTML=div;
                const check=document.querySelector(".check");
                check.addEventListener('click',()=>{
                    var input=document.querySelector(".enter").value;
                    var n=parseInt(input);
                    var flag=1;
                  
                var ans=0,x=1;
                while(n>0)
                {
                    var y=parseInt(n%10);
                    
                    if(y==2 || y==3 || y==4 || y==5 || y==6 || y==7 || y==8 || y==9 )
                    {
                        
                        alert("Enter A Valid Input");
                        flag=0;
                        
                    }
                  
                    ans=parseInt(ans+ y*x);
                    x*=2;
                    n=parseInt(n/10);
                   
                }
                if(flag)
                {
                    document.querySelector("#ans").innerHTML=`Ans: ${ans}`;
                }
                else{
                    document.querySelector("#ans").innerHTML=`Invalid`;
                }
              
                });
            } 
            else  if(ele.id==='num2')
            {
                var div=`<div class="box2">
                    <div class="row mt-5">
                        <div class="col-8 col-md-8 mx-auto">
                    <h1 class="text-center text-white">Octal To Decimal</h1>
                    <label for="" class="form-label text-info mt-5"><strong>Octal:</strong></label>
                    <input type="text" class="form-control enter" placeholder="Enter Octal Number :">
                    <button class="btn-primary mt-3 check"><strong>Check</strong></button>
                    <h4 id="ans" class="mt-2 text-center alert alert-success"></h4>
                        </div>
                    </div>
                </div>`;
                result.innerHTML=div;
                const check=document.querySelector(".check");
                check.addEventListener('click',()=>{
                    var input=document.querySelector(".enter").value;
                    var n=parseInt(input);
                    

                    var ans=0,x=1;
                while(n>0)
                {
                    var y=parseInt(n%10);
                    ans=parseInt(ans+ y*x);
                    x*=8;
                    n=parseInt(n/10);
                }
                    document.querySelector("#ans").innerHTML=`Ans: ${ans}`;
                
                });
            }
            else  if(ele.id==='num3')
            {
                var div=`<div class="box2">
                    <div class="row mt-5">
                        <div class="col-8 col-md-8 mx-auto">
                    <h1 class="text-center text-white">Hexa To Decimal</h1>
                    <label for="" class="form-label text-info mt-5"><strong>Hexa:</strong></label>
                    <input type="text" class="form-control enter" placeholder="Enter Hexa Number :">
                    <button class="btn-primary mt-3 check"><strong>Check</strong></button>
                    <h4 id="ans" class="mt-2 text-center alert alert-success"></h4>
                        </div>
                    </div>
                </div>`;
                result.innerHTML=div;
                const check=document.querySelector(".check");
                check.addEventListener('click',()=>{
                    var input=document.querySelector(".enter").value;
                    var n=input;
                    var b= '0x' + n;
                    var ans=parseInt(b);
                
                    document.querySelector("#ans").innerHTML=`Ans: ${ans}`;
                
                });
            }
            else  if(ele.id==='num4')
            {
                var div=`<div class="box2">
                    <div class="row mt-5">
                        <div class="col-8 col-md-8 mx-auto">
                    <h1 class="text-center text-white">Decimal To Binary</h1>
                    <label for="" class="form-label text-info mt-5"><strong>Decimal:</strong></label>
                    <input type="text" class="form-control enter" placeholder="Enter Decimal Number :">
                    <button class="btn-primary mt-3 check"><strong>Check</strong></button>
                    <h4 id="ans" class="mt-2 text-center alert alert-success"></h4>
                        </div>
                    </div>
                </div>`;
                result.innerHTML=div;
                const check=document.querySelector(".check");
                check.addEventListener('click',()=>{
                    var input=document.querySelector(".enter").value;
                    var n=parseInt(input);
                    var ans=0,x=1;
                while(x<=n)
                x*=2;
                x/=2;
                while(x>0)
                {
                    var y=parseInt(n/x);
                    n=n - y*x;
                    x =parseInt(x/2);
                    ans=ans*10 + y;
                }
                
                    document.querySelector("#ans").innerHTML=`Ans: ${ans}`;
                
                });
            }
            else  if(ele.id==='num5')
            {
                var div=`<div class="box2">
                    <div class="row mt-5">
                        <div class="col-8 col-md-8 mx-auto">
                    <h1 class="text-center text-white">Decimal To Hexa</h1>
                    <label for="" class="form-label text-info mt-5"><strong>Decimal:</strong></label>
                    <input type="text" class="form-control enter" placeholder="Enter Decimal Number :">
                    <button class="btn-primary mt-3 check"><strong>Check</strong></button>
                    <h4 id="ans" class="mt-2 text-center alert alert-success"></h4>
                        </div>
                    </div>
                </div>`;
                result.innerHTML=div;
                const check=document.querySelector(".check");
                check.addEventListener('click',()=>{
                    var input=document.querySelector(".enter").value;
                    var n=parseInt(input);
                    var ans=n.toString(16).toUpperCase();
                    document.querySelector("#ans").innerHTML=`Ans: ${ans}`;
                
                });
            }
            else  if(ele.id==='num6')
            {
                var div=`<div class="box2">
                    <div class="row mt-5">
                        <div class="col-8 col-md-8 mx-auto">
                    <h1 class="text-center text-white">Decimal To Octal</h1>
                    <label for="" class="form-label text-info mt-5"><strong>Decimal:</strong></label>
                    <input type="text" class="form-control enter" placeholder="Enter Decimal Number :">
                    <button class="btn-primary mt-3 check"><strong>Check</strong></button>
                    <h4 id="ans" class="mt-2 text-center alert alert-success"></h4>
                        </div>
                    </div>
                </div>`;
                result.innerHTML=div;
                const check=document.querySelector(".check");
                check.addEventListener('click',()=>{
                    var input=document.querySelector(".enter").value;
                    var n=parseInt(input);
                    var ans=0,x=1;
                    while(x<=n)
                    x*=8;
                    x/=8;
                    while(x>0)
                    {
                        var y= parseInt(n/x);
                        n=n-y*x;
                        x=parseInt(x/8);
                        ans= ans*10 + y;
                    }
                    document.querySelector("#ans").innerHTML=`Ans: ${ans}`;
                
                });
                
            }
       });
   });
