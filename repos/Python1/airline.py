class UI:
    @staticmethod
    def getMainMenu():
        menu = int(input("예약:1, 취소:2, 보기:3, 끝내기:4 >> "))
        return menu

    @staticmethod
    def getSubMenu():
        menu = int(input("07시:1, 12시:2, 17시:3 >> "))
        return menu

    @staticmethod
    def getSeatNum():
        num = int(input("좌석 번호 >> "))
        return num

    @staticmethod
    def getUserName():
        name = input("이름 입력 >> ")
        return name

class Seat:
    def __init__(self):
        self.name = ""

    def book(self, name):
        self.name = name

    def cancel(self):
        self.name = ""

    def view(self):
        if (self.name == ""):
            print("---", end="")
        else:
            print(self.name, end="")

    # def getName(self):
    #     return self.name

    def isBooked(self):
        if (self.name == ""):
            return False
        else:
            return True

    def isEmpty(self):
        if (self.name == ""):
            return True
        else:
            return False

class Schedule:
    def __init__(self):
        self.time = ""
        self.seat = []
        for _ in range(8):
            self.seat.append(Seat())

    def book(self):
        self.view()
        num = UI.getSeatNum()
        if num < 1 or num > 8:
            print("없는 좌석 번호입니다.")

        if self.seat[num - 1].isBooked():
            print("해당 좌석은 이미 예약됐습니다.")
        else:
            name = UI.getUserName()
            self.seat[num - 1].book(name)

    def cancel(self):
        self.view()
        num = UI.getSeatNum()
        if num < 1 or num > 8:
            print("없는 좌석 번호입니다.")

        if self.seat[num - 1].isEmpty():
            print("해당 좌석은 비어있습니다.")
        else:
            name = UI.getUserName()
            if (self.seat[num - 1].name == name):
                self.seat[num - 1].cancel()
            else:
                print("이름이 맞지 않습니다.")

    def view(self):
        print(self.time, ":\t", end="")
        for i in range(8):
            self.seat[i].view()
            print('\t', end="")
        print()

    def setTime(self, time):
        self.time = time

class AirlineBook:
    def __init__(self, name):
        self.name = name
        self.schedule = []
        for _ in range(3):
            self.schedule.append(Schedule())
        self.schedule[0].setTime("07시")
        self.schedule[1].setTime("12시")
        self.schedule[2].setTime("17시")

    def run(self):
        self.ask = False
        print("*****", self.name + "에 오신 것을 환영합니다. *****")
        print()

        while True:
            menu = UI.getMainMenu()
            if 1 <= menu and menu <= 4:
                if menu == 1:
                    self.ask = True
                    while self.ask:
                        sub = UI.getSubMenu()
                        if sub < 1 or sub > 3:
                            self.ask = True
                        else:
                            self.ask = False
                            self.schedule[sub - 1].book()
                elif menu == 2:
                    self.ask = True
                    while self.ask:
                        sub = UI.getSubMenu()
                        if sub < 1 or sub > 3:
                            self.ask = True
                        else:
                            self.ask = False
                            self.schedule[sub - 1].cancel()
                elif menu == 3:
                    self.schedule[0].view()
                    self.schedule[1].view()
                    self.schedule[2].view()
                elif menu == 4:
                    print("예약 시스템을 종료합니다.")
                    return

airline = AirlineBook("한성항공")
airline.run()