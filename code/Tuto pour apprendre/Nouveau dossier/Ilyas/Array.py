def bubble_sort(array):
    longeur = len(array)
    for i in range(longeur):
        for j in range(longeur-i-1):
            if array[j]> array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
    return array     

def selection_sort(array):
    n = len(array)
    for i in range(n-2):
        min = i
        for j in range(i+1, n-1):
            if array[j] < array[min]:
                min = j
        if min != i:
            array[i], array[min] = array[min], array[i]
    return array

def insertion_sort(array):
    for i in range(len(array)-1):
        x = array[i]
        j = i
        while j >0 and array[j-1] > x:
            array[j] = array[j-1]
            j = j-1
        array[j] = x
    return array        

def partition(array, lo, hi):
    pivot = array[hi]
    i = lo        
    for j in range(lo, hi):
        if array[j] <= pivot:
            array[i], array[j] = array[j], array[i]
            i += 1
    array[i], array[hi] = array[hi], array[i]        
    return i

def quicksort(array, lo, hi):
    if lo >= hi or lo < 0:
        return
    pivot = partition(array, lo, hi)
    quicksort(array, lo, pivot - 1)
    quicksort(array, pivot + 1, hi)        
    return array    

def merge(A, B):

    if A == []:
        return B
    if B == []:
        return A
    if A[0] < B[0]:
        return [A[0]] + merge(A[1:], B)
    else:
        return [B[0]] + merge(A, B[1:])
    
def merge_sort(array):
    n = len(array)
    if n <= 1:
        return array
    return merge(merge_sort(array[:n//2]), merge_sort(array[n//2:]))   


c = [1,5,6,3,4,8,9,6,4,2,-4]