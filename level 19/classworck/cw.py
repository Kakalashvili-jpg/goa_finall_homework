 
# 1) კომენტარის სახით ახსენით რა არის list და რაში ვიყენებთ მას.

# 2) შექმენით სია რომელსაც ექნება 10 ელემენტი და შემდეგ ტერმინალში გამოიტანეთ ამ სიის პირველი და ბოლო ელემენტები.

# 3) შექმენით სია 5 ელემენტით, შემდეგ მომხმარებელს შემოატანინეთ რაიმე მონაცემი რომელსაც ჩაამატებთ თქვენს მიერ შექმნილ სიაში.

# 4) შექმენით სია 5 ელემენტით და შემდეგ გამოიტანეთ მე-3 და მე-4 ინდექსზე მყოფი ელემენტები.

# 5) for loop-ის დახმარებით გამოიტანეთ ყველა კენტი რიცხვი 10 დან 100მდე.


# dv 1
# listshi shegvidzlia movatavsot bevri monacemta tipi mag str int float booleani da aseshemdeg da kidev shegvilia gamovidzaxot ertad an calcake

# dv 2
numbers = [10, 50, 100, 500, 1000, 5000, 7000, 100000, 99999, 1000000]
print(numbers[0])
print(numbers[-1])

# dv 3
age = int(input("enter your age: "))
ages = [age, 50, 10, 18, 20]

# dv 4
names = ["giorgi", "vano", "lazare", "daviti", "luka"]
print(names[2])
print(names[3])

# dv 5
for i in range(11, 100, 2):
    print(i)

# 6)შექმენით სია 5 სახელის ელემენტით, მომხმარებელს შემოატანინეთ რიცხვი 0 დან 4 ჩათვლით (თუ ამ დიაპაზონში შემოიტანს მომხმარებელი რიცხვს, მაშინ გამოუტანეთ სიაში იმ ინდექსზე მდგონი ელემენტი, სხვა შემთხვევაში დაუბეჭდეთ "Number out of Range!"


names = ["გიორგი", "ნინო", "მარიამი", "დავით", "ანა"]


user_input = int(input("გთხოვთ შეიტანოთ რიცხვი 0-დან 4-თან ჩათვლით: "))


if  user_input > 0 and user_input < 4:
    print(names[user_input])
else:
    print("Number out of Range!")
