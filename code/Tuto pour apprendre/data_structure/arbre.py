class Node:
    def __init__(self, val=0, gauche=None, droite=None):
        self.val = val
        self.gauche = gauche
        self.droite = droite

    def recherche(self, x):
        if self.val == x: return True
        return (self.gauche and self.gauche.recherche(x)) or (self.droite and self.droite.recherche(x))

arbre = Node(1, Node(2), Node(3))
print(arbre.recherche(1))  # Should print: True