class UI:
    @staticmethod
    def getBalance():
        int(input("Balance: "))

    @staticmethod
    def getSafebox():
        int(input("Safebox: "))

    @staticmethod
    def getPeriod():
        int(input("Period: "))

class Calc:
    def __init__(self, balance, period, safebox):
        self.balance = balance
        self.period = period
        self.safebox = safebox
        
    def calc(self):
        self.portion = (self.balance - self.safebox) / self.period

    def show(self):
        money = balance
        
        for _ in range(period):
            money -= self.portion
            print(money)

balance = UI.getBalance()
safebox = UI.getSafebox()
period = UI.getPeriod()

myCalc = Calc(balance, safebox, period)
myCalc.calc()
myCalc.show()