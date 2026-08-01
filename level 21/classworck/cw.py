
# 1) კომენტარეის სახით ახსენით რას ნიშნავს immutable და mutable.

# 2) შექმენით სია 10 ელემენტით და შემდგომ ჩაანაცვლეთ მეხუთე ელემენტი "goa"-თი.

# 3) შექმენით ცვლადი სადაც მომხმარებელი შეინახავს რიცხვს, შემდეგ მომხმაერებელს შემოატანინეთ რიცხვი, სანამ მომხმარებელი არ გამოიცნობს თქვენს შენახულ რიცხვს გამოიტანეთ: "არასწორია თავიდან ცადე" და თავიდან შემოატანინეთ input, თუ გამოიცნობს გამოიტანეთ: "შენ გამოიცანი რიცხვი".

# 4) გაამარტივეთ და კომენტარის სახით დაწერეთ რას გამოიტანს ქვემოთ მოეცემული კოდი:
# print(True and False or False or True and (False and False) or (True and True) or (False or True) or False or True and False) ეს კოდი არ გაუშვათ.

# dv 1
# immutable aris sheucvleli da mutable aris shecvladi xolo str ebi aris immutable da siebi mutable

# dv 2
# სიის შექმნა
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
my_list[4] = "goa"

# dv 3

number = 777

number2 = int(input("გამოიცანი რიცხვი: "))


while number2 != number:
    print("არასწორია, თავიდან ცადე")
    number2 = int(input("გამოიცანი რიცხვი: "))

print("შენ გამოიცანი რიცხვი :) ")

# dv 4
# gamoitans trues