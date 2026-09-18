#list 

#remove -- delete only single element through names 
# list_1 = [1,2,3,4,5,6,7,8,9,10,10]
# list_1.remove(10)
# print(list_1)

#pop -- delete only single element through indexing number 
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# list_1.pop(-1)
# print(list_1)

#del - remove multiple element through indexing number 
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# del list_1[0:5]
# print(list_1)

#clear method 
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# list_1.clear()
# print(list_1)
# print(list_1.clear())

#count -- count the individual element 
# list_1 = [1,2,2,3,4,5,6,7,8,9,10]
# list_2 = list_1.count(2)
# print(list_2)

# #reverse 
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# list_1.reverse()
# print(list_1)

# #sort 
# list_1 = [100,400,9,200]
# list_1.sort(reverse=False)
# print(list_1)

#shallow copy 
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# list_2 = [100]
# list_1.extend(list_2)

# list_2 = list_1.copy()
# print(list_2)

#max and min
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# print(max(list_1))
# print(min(list_1))

#check all list methods 
# print(dir(list))