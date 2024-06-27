import graphviz

class Node():
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def insert_child(self, valeur):
        if self.value is None:
            print("y'a rien")
        if valeur > self.value:
            self.right = valeur
        elif valeur <self.value:
            self.left = valeur
        else:
            print('Node a déjà deux fils')

    def __str__(self):
        res = ""
        if self.left :
            res += f"{self.value} -> {self.left.value}\n"
            res += str(self.left)
        if self.right:
            res += f"{self.value} -> {self.right.value}\n"
            res += str(self.right)
        return res

def print_tree(root):
    src = f"digraph {'{'}{str(root)}{'}'}"
    print(src)
    graphviz.Source(src).view()

root = Node(8,5,10)

print_tree(root)