#  1) კომენტარის სახით ჩამოთვალეთ mutable და immutable მონაცემთა ტიპები.

#  2) შექმენით სია 20 ელემენტით და შემდგომ მეათე და მეჩვიდმეტე ელემენტები ჩაანაცვლეთ რაიმე რიცხვებით. (გამოიყენეთ უარყოფითი ინდექსები).

#  3) ცვლადში შეინახეთ რაიმე სტრინგი და შემდგომ ინდექსინგით შეუცვალეთ მესამე და მეხუთე ადგილზე მყოფი ასოები.

#  4) ცვლადში შეინახეთ რაიმე password შემდეგ მომხმარებელს იქამდე შემოაყვანინეთ  პაროლი სანამ არ დაემთხვევა ნამდვილ პაროლს, და საბოლოოდ როცა სწორად შეიყვანს გამოუტანეთ: "თქვენ წარმატებით ჩაწერეთ პაროლი".

#  5) while loop-ის დახმარებით გამოიტანეთ ყველა ლუწი რიცხვი 40 დან 10მდე.

#  dv 1
#  immutable aris sheucvleli da mutable aris shecvladi xolo str ebi aris immutable da siebi mutable

# # dv 2
names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
names[-11] = 67
names[-4] = 99

# # dv 3
surname = "kakalashvili"
surname[2] = "x"
surname[4] = "y"

# # dv 4
my_password = "password777"

password = input("enter your password: ")

while password != my_password:
    password = input("renter your password: ")
if password != my_password:
    print("incorrect password")
print("თქვენ წარმატებით ჩაწერეთ პაროლი")


# # dv 5
number = 40
while number >= 10:
    print(number)
    number -= 2