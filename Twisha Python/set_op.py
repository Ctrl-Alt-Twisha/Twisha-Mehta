#set is a collection which is use to store multiple datatypes 
#set store element in sequence in {}
#set is a unordered 
#set does not allow duplicates values 

# set_1 = {1,2,3,4,5,85,34,"apple"}
# print(set_1)

# #remove 
# set_1 = {1,2,3,4,5,85,34,"apple"}
# set_1.remove("apple")
# print(set_1)

#add element 
# set_1 = {1,2,3,4,5,85,34,"apple"}
# set_1.add(100)
# print(set_1)

#union 
# set_1 = {100,200,300}
# set_2 = {400,500,600}
# set_3 = set_1.union(set_2)
# print(set_3)

#difference 
set_1 = {100,200,300}
set_2 = {400,500,600,100}
set_3 = set_1.difference(set_2)
print(set_3)

