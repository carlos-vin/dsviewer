import Queue from './fila.js';
import List from './lista.js';



    let blockBox = document.getElementById("blockDisplay");
    let cmdBtn=document.getElementById("cmdBtn");
    let cmdTxt=document.getElementById("cmd");
    let argTxt=document.getElementById("arg");
    let opt='';
    let listBtn=document.getElementById("lOptBtn");
    let queueBtn=document.getElementById("qOptBtn");
    let mConsole=document.getElementById("consoleInfo");


    let genQueue = new Queue;
    let genList = new List;
    


  

    function optBtn(op){
        let tmp=opt;
        opt=op;

        if(opt=='queue'){
            queueBtn.style.backgroundColor="#a93900";
            listBtn.style.backgroundColor="#fe6900";
        }if(opt=='list'){
            queueBtn.style.backgroundColor="#fe6900";
            listBtn.style.backgroundColor="#a93900";
        }

        if(opt!=tmp){
            genList.items=[];
            genQueue.items=[];
            blockBox.innerHTML='';

        }
        
    }

    listBtn.onclick=()=>optBtn("list");
    queueBtn.onclick=()=>optBtn("queue");
    

    cmdBtn.onclick=()=>interpreter();
    argTxt.addEventListener('keypress',(e)=>{
        if(e.key=='Enter') interpreter();
    });
    cmdTxt.addEventListener('keypress',(e)=>{
        if(e.key=='Enter') interpreter();
    });
    

    

    function drawBlock(arg,pos){
        if(pos=="back"){
            blockBox.innerHTML+=`<div id=block01>${arg}</div>`;
        }else if(pos=="front"){
            let temp=blockBox.innerHTML;
            blockBox.innerHTML=`<div id=block01>${arg}</div>`;
            blockBox.innerHTML+=temp;
        }
        
    }

    function popBlock(pos){
        let blockBox = document.getElementById("blockDisplay");

        if(pos=="front"){
            blockBox.children[0].remove();
        }else if(pos=="back"){
            blockBox.children[blockBox.children.length-1].remove();
        }
    }

    function interpreter(){
        let cmd=cmdTxt.value;
        let arg=argTxt.value;
        
        cmd=cmd.split("\(.+\)")

        let validQueueCmd=["push","pop","front","back","empty"];
        let validListCmd=["push_front","push_back","pop_front","pop_back","front","back","empty"];
        let validCmd='';

       if(opt=="queue"){

            validQueueCmd.some((e,i) => {
                if(cmd==e){
                    validCmd=e;
                    console.log("Comando encontrado: "+validCmd);
                    executeCmd(validCmd,arg);
                    return true;
                    
                }else{
                    if(i==validQueueCmd.length-1){
                        console.log("Comando: '"+ cmd +"' Inválido");
                        showInConsole("Comando: '"+ cmd +"' Inválido");
                    }
                }
                
            });

       }else if(opt=="list"){

        validListCmd.some((e,i) => {
            if(cmd==e){
                validCmd=e;
                console.log("Comando encontrado: "+validCmd);
                executeCmd(validCmd,arg);
                return true;
                
            }else{
                if(i==validListCmd.length-1){
                    console.log("Comando: '"+ cmd +"' Inválido");
                    showInConsole("Comando: '"+ cmd +"' Inválido");
                }
            }
            
        });

       }

        
       
    }

    function executeCmd(cmd,arg){
        if(arg!=""){
            switch(cmd){
                case "push":{
                    genQueue.push(arg);
                    drawBlock(arg,"front");
                }break;
                case "push_front":{
                    genList.push_front(arg);
                    console.log(genList.items)
                    drawBlock(arg,"front");
                }break;
                case "push_back":{
                    genList.push_back(arg);
                    console.log(genList.items)
                    drawBlock(arg,"back");
                }break;
                default:{
                    console.log("Desculpe, algo deu errado :-(");
                    showInConsole("Desculpe, algo deu errado :-(")
                }break
            }
            
        }else{

            switch(cmd){
                case "pop":{
                    genQueue.pop(arg);
                    popBlock("back");
    
                }break;
                case "pop_front":{
                    genList.pop_front(arg);
                    popBlock("front");
    
                }break;
                case "pop_back":{
                    genList.pop_back(arg);
                    console.log(genList.items)
                    popBlock("back");
    
                }break;
                case "front":{
                    if(opt=='queue')showInConsole(genQueue.front());
                    else showInConsole(genList.front());
                }break;
                case "back":{
                    if(opt=='queue')showInConsole(genQueue.back());
                    else showInConsole(genList.back());
                }break;
                case "empty":{
                    if(opt=='queue'){
                       showInConsole(genQueue.empty());
                    }
                    else showInConsole(genList.empty());
                }break;
        

        }
        
        }}

    function showInConsole(info){
        mConsole.innerHTML=`${info}`;
        
    }