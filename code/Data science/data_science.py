arr = [1,2,3,8,7,4,5,6,9,8,5]

# def bubble_sort(array):
#     longueur = len(array)
#     for i in range(longueur):
#         for j in range(0,longueur-i-1):
#             if array[j] > array[j+1]:
#                 array[j], array[j+1] = array[j+1], array[j]
               
#     return array

# def bubblesort(array):
#     length = len(array)
#     for i in range(length):
#         for x in range(0, length - i - 1):
#             if array[x] > array[x + 1]:
#                 array[x], array[x + 1] = array[x + 1], array[x]
#     return array

# print(bubblesort(arr))

def triangle(taille):
    for i in range(taille):
        print('*'*i)
        
triangle(8)