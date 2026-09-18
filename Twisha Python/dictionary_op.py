#dictionary is a collection of item in form keys and values 
#It does not allow duplicate values 
#It can allow to modify the data 
#IT can allow different data types 

# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# print(dic_1)

#length function => count the number of element 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# print(len(dic_1))


#Access the element 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# print(dic_1["name"],dic_1["age"])

#change value 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# dic_1["age"] = 19
# print(dic_1)

#update method 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# dic_1.update({"name":"rahul","age":19})
# print(dic_1)

#add single element 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# dic_1["year1"] = 2020
# print(dic_1)

#input using dictionary 
# key_1 = str(input("Enter the key "))
# value_1 = int(input("Enter the age "))
# dict_1 = {}
# dict_1.update({"name":key_1,"age":value_1})
# print(dict_1)

#keys == list of keys 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# print(dic_1.keys())

#values 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# print(dic_1.values())

#popitem = delete last item 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# dic_1.popitem()
# print(dic_1)

#del method 
# dic_1 = {
#   "name":"shreya",
#   "age":18,
#   "city":"Mumbai",
#   "year":2010
# }
# del dic_1["name"]
# print(dic_1)

#clear()
dic_1 = {
  "name":"shreya",
  "age":18,
  "city":"Mumbai",
  "year":2010
}
print(dic_1.clear())