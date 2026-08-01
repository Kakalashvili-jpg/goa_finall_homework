# # 1) შექმენით ცვლადები სხვადასხვა ტიპით: str,int,float,bool შემდეგ  დაბეჭდეთ მათ მნიშნელობა და გვერდით მიუწერეთ მონაცემთა ტიპი

# # 2) ჰკითხე მომხარებელს სახელი,ასაკი და საყვარელი რიცხვი, დაბეჭდე თითოეული მნიშვნელობა და მისი ტიპი (type() ფუნქციით) შედეგ ასაკი და საყვარელი რიცხვი გადააქციე რიცხვებად (int() ან float()) და დაბეეჭდეთ მათი ჯამი.

# # 3) შექმენი რიცხვების დიაპაზონი 5 დან 100მდე შემდეგ გამოიტანეთ ეს რიცხვები ასეთი თანმიმდევრობით:
# # რიცხვი, გვერდით მიუწერე კენტია თუ ლუწი და მიუწერე მისი მონაცემთა ტიპი

# # 4) კომენტარის სახით ახსენით რაში გამოიყენება ფუნქციები, ასევე ჩამოთვალეთ ნასწავლი ფუნქციები და გვერდით მიუწერეთ მათი დანიშნულება

# # 5) კომენტარის სახით ახსენით რა არის ფუნქციის არგუმენტი


# # dv 1
# name = "დავით"      
# age = 15             
# height = 1.72         
# num = True 

# print(name,  type(name))
# print(age,  type(age))
# print(height,  type(height))
# print(num,  type(num))


# # dv 2
# name = input("ente your name; ")
# age = input("enter your age; ")
# number = input("enter your favorite number; ")

# print(name, type(name))
# print(age, type(age))
# print(number, type(number))

# age = int(age)
# number = float(number)
# print(age + number)

# # dv 3
# for i in range(5, 101):
#     if i % 2 == 0:
#         print("ლუწი")
#     else:
#         print("კენტი")

# # dv 4
# #funqcia aris ragac gamoyenebadi kodis bloki
# # print() – ეკრანზე ინფორმაციის გამოსატანად
# # input() – მომხმარებლისგან ინფორმაციის მისაღებად
# # int() – ტექსტის (string) გადაყვანა მთელ რიცხვად
# # str() – რიცხვის გადაყვანა ტექსტად
# # float() – ტექსტის გადაყვანა ათწილადად
# # type() – ცვლადის ტიპის გასაგებად (მაგალითად integer, string და ა.შ.)
# # range() – რიცხვების დიაპაზონის შესაქმნელად (ხშირად for ციკლში)

# # dv 5
# #arguments aris monacemi romalsac funqcias frchxilebshi gadavcemt misi gamodzaxebis dros

fruits = {"apple", True, 0, "banana", "cherry"}
names = {"nika", "vano", 1, "apple", False, "giorgi"}

print(fruits.intersection(names))