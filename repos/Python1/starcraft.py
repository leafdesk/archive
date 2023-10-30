from random import randint

class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print("{0} 유닛이 생성되었습니다." .format(name))

    def move(self, location):
        print("[지상 유닛 이동]")
        print("{0} : {1} 방향으로 이동합니다. [속도 {2}]" \
            .format(self.name, location, self.speed))

    def damaged(self, damage):
        print("{0} : {1} 데미지를 입었습니다." .format(self.name, damage))
        self.hp -= damage
        print("{0} : 현재 체력은 {1} 입니다." .format(self.name, self.hp))
        if self.hp <= 0:
            print("{0} : 파괴되었습니다." .format(self.name))

class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
        self.damage = damage

    def attack(self, location):
        print("{0} : {1} 방향으로 적을 공격합니다. [공격력: {2}]" \
            .format(self.name, location, self.damage))

class Marine(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "마린", 40, 1, 5)

    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print("{0} : 스팀팩을 사용합니다. (HP 10 감소)" .format(self.name))
        else:
            print("{0} : 체력이 부족하여 스팀팩을 사용하지 않습니다." .format(self.name))

class Tank(AttackUnit):
    seizeDeveloped = False

    def __init__(self):
        AttackUnit.__init__(self, "탱크", 150, 1, 35)
        self.seizeMode = False

    def setSeizeMode(self):
        if Tank.seizeDeveloped == False:
            return

        if self.seizeMode == False:
            print("{0} : 시즈모드로 전환합니다." .format(self.name))
            self.damage *= 2
            self.seizeMode = True
        else:
            print("{0} :시즈모드를 해제합니다." .format(self.name))
            self.damage /= 2
            self.seizeMode = False

class Flyable:
    def __init__(self, flyingSpeed):
        self.flyingSpeed = flyingSpeed

    def fly(self, name, location):
        print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]" \
            .format(name, location, self.flyingSpeed))

class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flyingSpeed):
        AttackUnit.__init__(self, name, hp, 0, damage) # 지상 speed 는 0 이다.
        Flyable.__init__(self, flyingSpeed)

    def move(self, location):
        print("[공중 유닛 이동]")
        self.fly(self.name, location)

class Wraith(FlyableAttackUnit):
    def __init__(self):
        FlyableAttackUnit.__init__(self, "레이스", 80, 20, 5)
        self.clocked = False

    def clocking(self):
        if self.clocked == True:
            print("{0} : 클로킹 모드를 해제합니다." .format(self.name))
            self.clocked = False
        else:
            print("{0} : 클로킹 모드를 설정합니다." .format(self.name))
            self.clocked = True

def gameStart():
    print("[알림] 새로운 게임을 시작합니다.")

def gameOver():
    print("Player : gg")
    print("[Player] 님이 게임에서 퇴장하셨습니다.")

gameStart()

m1 = Marine()
m2 = Marine()
m3 = Marine()

t1 = Tank()
t2 = Tank()

w1 = Wraith()

attackUnits = []
attackUnits.append(m1)
attackUnits.append(m2)
attackUnits.append(m3)
attackUnits.append(t1)
attackUnits.append(t2)
attackUnits.append(w1)

for unit in attackUnits:
    unit.move("1시")

Tank.seizeDeveloped = True
print("[알림] 탱크 시즈 모드 개발이 완료되었습니다.")

for unit in attackUnits:
    if isinstance(unit, Marine):
        unit.stimpack()
    elif isinstance(unit, Tank):
        unit.setSeizeMode()
    elif isinstance(unit, Wraith):
        unit.clocking()

for unit in attackUnits:
    unit.attack("1시")

for unit in attackUnits:
    unit.damaged(randint(5, 21))

gameOver()