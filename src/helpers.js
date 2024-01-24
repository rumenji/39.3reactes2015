function choice(items){
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item){
    const index = items.indexOf(item);
    if(index === -1) return
    const leftItems = [...items.slice(0,index), ...items.slice(index+1)];
    return leftItems
    }

export {choice, remove};