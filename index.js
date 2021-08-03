//create a stack
// 3 methods : push pop peak, property:  count

const _items = new WeakMap();

class stack{
    constructor(){
        _items.set(this , []);//giving the private property an empty array
    }

    push(item) {
        _items.get(this).push(item);
    }
    pop() {
        if(_items.get(this).length===0) throw new Error("Stack is emprty");
        return _items.get(this).pop();
    }
    peak() {
        if(_items.get(this).length===0) throw new Error("Stack is emprty");
        return _items.get(this)[_items.get(this).length-1];
    }
    get count(){
        return _items.get(this).length;
    }

}
// const s = new stack;
// s.peak();
// s.pop();
// s.push(1);
// s.push(2);
// s.peak();
// s.count;
// s.pop();
// s.count;