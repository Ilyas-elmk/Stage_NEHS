import graphviz
from Queue import Queue

class Node():
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def add_child(self, node):
        if self.left == None:
            self.left = node
        elif self.right == None:
            self.right = node
        else:
            print('Node a déjà deux fils')

    def insert_child(self,value, is_left=True):
        new_node = Node(value)
        
        if is_left:
            old_node = self.left
            self.left = new_node
            new_node.add_child(old_node)
        else:
            old_node = self.right
            self.right = new_node
            new_node.add_child(old_node)

        # if value < self.value:
        #     if self.left:
        #         self.left.insert_child(value)
        #     else:
        #         self.left = Node(value)
        #         return
        # else:
        #     if self.right:
        #         self.right.insert_child(value)
        #     else:
        #         self.right = Node(value)
        #         return

    def remove_child(self, node):
        if self.left and self.left.value == node:
            if self.left.left:
                self.left = self.left.left
            elif self.left.right:
                self.left = self.left.right
            else:
                self.left = None
        elif self.right and self.right.value == node:
            if self.right.left:
                self.right = self.right.left
            elif self.right.right:
                self.right = self.right.right
            else:
                self.right = None

    def __str__(self):
        res = ""
        if self.left :
            res += f"{self.value} -> {self.left.value}\n"
            res += str(self.left)
        if self.right:
            res += f"{self.value} -> {self.right.value}\n"
            res += str(self.right)
        return res



def pre_order(node):
    if not node.value:
        return

    print(node.value)
    if node.left:
        pre_order(node.left)
    if node.right:
        pre_order(node.right)


def in_order(node):
    if not node.value:
        return
    
    if node.left:
        in_order(node.left)
    print(node.value)
    if node.right:
        in_order(node.right)
    

def post_order(node):
    if not node.value:
        return
    if node.left:
        post_order(node.left)
    if node.right:
        post_order(node.right)
    print(node.value)
    

def breadth_first_order(root):
    q = []
    q.append(root)
    while q != []:
        node = q.pop(0)
        print(node.value)
        if node.left is not None:
            q.append(node.left)
        if node.right is not None:
            q.append(node.right)

    # 
   
def print_tree(root):
    src = f"digraph {'{'}{str(root)}{'}'}"
    print(src)
    graphviz.Source(src).view()



root = Node(10, Node(70, Node(30), Node(40)), Node(90, Node(50), Node(60)))
# root.add_child(20)
# print_tree(root)
# input()

# root.insert_child(20)
# print_tree(root)
# input()

# root.remove_child(20)
# print_tree(root)
# input()

# root.insert_child(60, is_left=False)
# print_tree(root)
# input()

# root.left.insert_child(50, is_left=False)
print_tree(root)
# input()

print("PRE ORDER")
pre_order(root)
print("IN ORDER")
in_order(root)
print("POST ORDER")
post_order(root)
print("BREADTH FIRST ORDER")
breadth_first_order(root)
