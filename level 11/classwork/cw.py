# 1) შედარების ოპერაციებზე გააკეთეთ 10-10 მაგალითი თოთოეულ მაგალითს კომენტარის სახით მიუწერეთ რას დააბრუნებს ჩვენი კოდი 
# 2) კომენტარის სახით ახსენით რა არის boolean'ი 
# 3) რას ნიშნავს კომპიუტერის ენაზე 1 და 0 
# 4) კომენტარის სახით ახსენით and oპერატორი
# 5) კომენტარის სახით ახსენით or ოპერატორი 
# 6) and oპერატორის გამოყენებით დაწერეთ 10 მაგალითი თითოეულს გვერდით კომენტარის სახით დაუწერეთ თუ რას გამოიტანს იქამდე სანამ კონსოლში გაუშვებთ
# 7) or oპერატორის გამოყენებით დაწერეთ 10 მაგალითი თითოეულს გვერდით კომენტარის სახით მიუწერეთ თუ რას გამოიტანს ეს კოდი იქამდე სანამ კონსოლში გამოიძახებთ 
#  8) შედარების და ლოგიკური ოპერაციები გააერთიანეთ და მათზეც გააკეთეთ 5 მაგალითი
# davaleba 1
print(35 > 30)
#gamoitans trues
print(70 > 55 )
# gamoitans trues
print(69 > 68)
# gamoitans trues
print(49 > 40)
# gamoitans trues 
print(35 > 25)
# gamoitans trues
print(200 > 10)
# gamoitans trues
print(2000000 > 2000)
# gamoitans trues
print(999 > 888)
# gamoitans trues
print(1000 > 999)
# gamoitans trues
print(555 > 333)
# gamoitans trues
print(30 < 40 )
# gamoitans trues
print(500 < 2000)
# gamoitans trues
print(888 < 999)
# gamoitans trues
print(777 < 999)
# gamoitans trues
print(400 < 5000)
# gamoitans trues
print(99999 < 100000000)
# gamoitans trues
print(10 < 40)
# gamoitans trues
print(555 < 666)
# gamoitans trues
print(999 < 1100)
# gamoitans trues
print(5555 < 66666)
# gamoitans trues
  
# davaleba 2
# boolean ari monacemta tipi da mas aqvs ori mnishvneloba true da false

# davaleba 3
# kompiuteris enaze 0 da 1 nishnavs binary s 1 ani ari true da 0 ani aris false

# davaleba 4
#roca and shi gavq 2 true gamoitans trues da tu 2 false gamoitans false s mara tu erti false da erti true gamoitans falses

# davaleba 5
# roca or shi gvaq 2 true gamoitans trues da tu 2 false gamoitans false s mara tu erti false da erti true gamoitans trues

# davaleba 6
print(True and True)        # True 
print(True and False)       # False 
print(False and True)       # False 
print(False and False)      # False 
print(5 > 2 and 3 < 10)     # True 
print(4 == 4 and 2 != 3)    # True 
print(7 < 3 and 1 < 2)      # False 
print(True and False)       # False
print(False and False)      # False
print(True and True)        # True 

# dv 7
print(True or True)         # True – ორივე მართალია, აბრუნებს პირველს
print(True or False)        # True – პირველი უკვე True-ა, აბრუნებს მას
print(False or True)        # True – მეორე Trueა, აბრუნებს მას
print(False or False)       # False – არცერთი არ არის მართალი

print(5 > 10 or 8 < 20)     # True – მეორე პირობა მართალია
print(3 == 3 or 2 == 5)     # True – პირველი პირობა მართალია
print(10 < 2 or 7 < 3)      # False – ორივე პირობა მცდარია

print( True or False or False)
#true
print(True or True or True or False)
#true
print(True or True) 
#true

# dv 8
print( 20 > 5 or True)
print( 20 > 5 or True)
print( 200 > 445 or True)
print(300 > 444 and False)
print(40000 < 30 or False)
# 9) შექმენით ცვლადი რომელშიც შეინახავთ თქვენთვის სასურველ რიცხვს შემდეგ ამ ცვლადის მნიშვნელობა გაზარდეთ 10'ით პრინტით გამოიძახეთ ეს ცვლადი და მოახდინეთ მასზე შედარების ოპერაცია ისე რომ გამოიტანოს True

# 10) შექმენით ცვლადი temperature სადაც შეინახავთ 30 გრადუსს თუ 30 გრადუსზე მეტი იქნება რაიმე რიცხვი გამოიტანეთ  True 

# dv 9
number = 17
number = 27
print(27 > 20)
print(27 > 15)
print(27 > 25)
print(27 > 26)
print(27 > 10)

# dv 10
temperature = 30
print(temperature > 20)
print(temperature > 15)
print(temperature > 25)
print(temperature > 15)