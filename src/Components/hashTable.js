

class HashTable{

    constructor(size  = 81){
        this.size = size;
        this.table = new Map()

    }

}

const ht = new HashTable();

ht.table.set(0, 2)
ht.table.set([0,1], 2)
ht.table.set([0,2], 2)

console.log(ht.table.get(0))