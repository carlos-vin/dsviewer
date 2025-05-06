export default class List{
    constructor(){
        this.items=[];
    }
    
    front(){
        return this.items[0];
    }
    back(){
        return this.items[this.items.length-1]
    }

    push_back(item){
        this.items.push(item);
        return this.items;
    }

    push_front(item){
        this.items=reverse(this.items);
        this.items.push(item);
        this.items=reverse(this.items);
        return this.items;
    }

    pop_back(){
        this.items.pop();
        return this.items;
    }

    pop_front(){
        this.items=reverse(this.items);
        this.items.pop();
        this.items=reverse(this.items);
        return this.items;
    }

    size(){
        return this.items.length;
    }
    
    empty(){
        return this.size() == 0 ? true:false;
    }

}

function reverse(arr){
    let reversed=[]
    arr.forEach((e,i) => {
        reversed[(arr.length-1)-i]=e;
    });
    return reversed;
}