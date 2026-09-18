#lambda function is called as a anonymous function 

# x = lambda a,b:a+b
# print(x(10,20))


#map function 

# list_1 = [1,2,3,4,5]
# a = list(map(lambda x:x*2,list_1))
# print(a)

#filter function 
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# a = list(filter(lambda x:x%2==0,list_1))
# print(a)

#reduce function 

# from functools import reduce

# list_1 = [1,2,3,4,5,6,7,8,9,10]
# a = reduce(lambda a,b:a+b,list_1)
# print(a)

# data = [(1, 3), (4, 1), (2, 2), (9,0)]
# result = sorted(data, key=lambda x: x[1])
# print(result)

employees=[
  (3, 65000),
  (2, 67000),
  (1, 69000)
]
highest=max(employees, key= lambda x:x[1])
print(highest)
#1 for value, 0 for key

lowest=min(employees, key=lambda x:x[0])
print(lowest)