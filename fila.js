export default class Queue{
    constructor(){
        this.items=[];
    }
    
    front(){
        return this.items[0];
    }
    back(){
        return this.items[this.items.length-1]
    }

    push(item){
        this.items.push(item);
        return this.items;
    }

    pop(){
        this.items=reverse(this.items);
        this.items.pop();
        this.items=reverse(this.items);
        return this.items;
    }

    size(){
        return this.items.length;
    }
    
    empty(){
        return this.items.length == 0 ? true:false;
    }

}

function reverse(arr){
    let reversed=[]
    arr.forEach((e,i) => {
        reversed[(arr.length-1)-i]=e;
    });
    return reversed;
}