
class Queue:

    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if len(self.queue) < 1:
            return None
        return self.queue.pop(0)

    def display(self):
        print(self.queue)

    def size(self):
        return len(self.queue)
    
    def __len__(self):
        return len(self.queue)

if __name__ == "__main__":
    q = Queue()

    q.enqueue(5)
    q.enqueue(3)
    q.enqueue(4)
    q.enqueue(8)
    q.display()

    q.dequeue()

    q.display()
