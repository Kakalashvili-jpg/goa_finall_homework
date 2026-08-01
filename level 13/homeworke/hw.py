# 1) for loop ის მეშვეობით დაბეჭდეთ ყველა ლუწი რიცხვი 0 დან 100 მდე 

# 2) for loop ის მეშვეობით დაბეჭდეთ ყველა კენტი რიცხვი 1 დან 100 მდე

# 3) შექმენით ცვლადი სადაც შეინახავთ თქვენს სახელს და დაბეჭდეთ ეს ცვლადი 100 ჯერ

# 4) შექმენით ცვლადი საადაც შეინახავთ თქვენთვის სასურველ რიცხვს სტრინგის სახით შემდეგ გადაუარეთ ამ სტრინგს და შეადარეთ თითოეული ციფრი მეტი არის თუ არა 2 ზე

# 5) for loop ის მეშვეობით 0 დან 200 მდე გამოიტანეთ ყოველი მე-10 რიცხვი 

# 6) ბევრი ივარჯიშეთ for loop ზე და გააკეთეთ მინიმუმ 5 თქვენთვის სასურველი მაგალითი 



# dv 1
for i in range(0, 100, 2):
    print(i)

# dv 2
for i in range(1, 100, 2):
    print(i)

# dv 3
name = "daviti"
for i in range(100):
    print(name)

# dv 4
number = "1459094657"
for i in number:
    print(int(i) > 2)

# dv 5
for i in range(0, 200, 10):
    print(i)

# dv 6
number = "486948038576586"
for i in number:
    print(int(i) > 5)

name = "daviti"
for i in range(500):
    print(name)

for i in range(5, 500, 5):
    print(i)

for i in range(3, 300, 2):
    print(i)

surname="kakalashvili"
for i in surname:
    print(i)