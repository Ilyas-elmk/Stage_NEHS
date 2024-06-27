
// OBJECT


// let user = {
//     name: "ilyas",
//     age: 30,
//     profession:"stagiaire",
//     aime: true,
// }

// console.log(user["name"])

// user.name = "tom"

// console.log(user["name"])

// delete user.name

// console.log(user["name"])

// function personne(prenom,age,sexe){

  
//     this.prenom=prenom
//     this.age=age
//     this.sexe=sexe
// }

// const humain1 = new personne('ilyas',18,'homme')

// console.log(humain1)

// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
//   myObject.greet(); // Greetings from Madrid

//   console.log(typeof(myObject))

//-------------------------------------------------------------------
class Node{

    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first= null
        this.last=null
        this.size = 0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size

    }
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first===this.last){
            this.last=null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}



class Queue{
    constructor(){
        this.first= null
        this.last=null
        this.size= 0
    }
    
    enqueue(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first=newNode
            this.last=newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
        
    }
    
    dequeue(){
        if(!this.first) return null
        
        var temp = this.first
        if(this.first===this.last){
            this.last = null
        }
        this.first= this.first.next
        this.size--
        return temp.value
    }
}


class singleLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        } else{
            this.tail.next = newNode
            this.tail=newNode
        }
        this.length++
        return this
        
        
    }
    pop(){
        if(!this.head) return undefined
        const current = this.head
        const newTail = current
        while ( current.next){
            newTail= current
            current=current.next
        }
        this.tail = newTail
        this.tail.next= null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        var currenthead = this.head
        this.head = currenthead.next
        this.length--
        
        if(this.length===0){
            this.tail=null
        }
        return currenthead
        
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head=newNode
            this.taim=this.head
        }
        newNode.next = this.head
        this.head= newNode
        this.length++
        return this
        
    }
    get(index) {
        if(index < 0 || index >= this.length) return null
        const counter = 0
        const current = this.head
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current 
    }
    insert(index,val){
        if(index<0 || index >this.length) return false
        if(index===this.length) return !!this.push(val)
            if (index===0) return!!this.unshift(val)
                
                const newNode = new Node(val)
                const prev =this.get(index-1)
                const temp = prev.next
                prev.next = newNode
                this.length++
                return true
                
            }
            remove(index){
                if(index < 0 || index >= this.length) return undefined
                if(index === 0) return this.shift()
                    if(index === this.length - 1) return this.pop()
                        
                        const previousNode = this.get(index-1)
                        const removed = previousNode.next
                        previousNode.next = removed.next
                        this.length--
                        return removed
                        
                    }
                    reverse(){
                        const node = this.head
                        this.head = this.tail
                        this.tail = node
                        let next
                        const prev = null
                        for (let i =0; i<this.length;i++){
                            next=node.next
                            node.next=prev
                            prev=node
                            node=next
                        }
                        return this
                    }
                }
                
const testQueue = new singleLinkedList

testQueue.push("1")
testQueue.push("5")
testQueue.push("ca")
testQueue.push(7)
console.log(testQueue)

const pile = new Stack

pile.push("a")
pile.push("ab")
pile.push("abc")

console.log(pile);

const quickQueue = new Queue

quickQueue.enqueue("1")
quickQueue.enqueue("2")
quickQueue.enqueue("3")

console.log(quickQueue)