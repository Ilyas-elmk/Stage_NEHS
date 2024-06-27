
class Stack:

    def __init__(self):

        self.items = []
        


    def check_empty(self):
        return not bool(self.items)


    def push(self, item):
        self.items.append(item)
        print(f"pushed item: {item}" )


    def pop(self):
        if (Stack.check_empty(self)):
            return "stack is empty"

        return self.items.pop()


stack = Stack()
print(Stack.pop(stack))
Stack.push(stack,1)
Stack.push(stack,2)
Stack.push(stack,3)
Stack.push(stack,4)
print(stack.items)

