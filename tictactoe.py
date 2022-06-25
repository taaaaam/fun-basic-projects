board = ["-", "-", "-",
         "-", "-", "-", 
         "-", "-", "-",]

currentPlayer = "X"
winner = None
gameRunning = True

def printBoard(board):
    print(board[0] + " | " + board[1] + " | " + board[2])
    print("-----------")
    print(board[3] + " | " + board[4] + " | " + board[5])
    print("-----------")
    print(board[6] + " | " + board[7] + " | " + board[8])



def playerInput(board):
    inp = int(input("Enter a number 1-9: "))
    if inp >= 1 and inp <= 9 and board[inp-1] == "-":
        board[inp-1] = currentPlayer
    else:
        print("Oops, player is already in that spot!")



def checkHorizontal(board):
    global winner
    if board[0] == board[1] == board[2] and board[0] != "-":
        winner = board[0]
        return True
    elif board[3] == board[4] == board[5] and board[3] != "-":
        winner = board[3]
        return True
    elif board[6] == board[7] == board[8] and board[6] != "-":
        winner = board[6]
        return True

def checkRow(board):
    global winner
    if board[0] == board[3] == board[6] and board[0] != "-":
        winner = board[0]
        return True
    elif board[1] == board[4] == board[7] and board[1] != "-":
        winner = board[3]
        return True
    elif board[2] == board[5] == board[8] and board[2] != "-":
        winner = board[6]
        return True

def checkDiagnoal(board):
    global winner
    if board[0] == board[4] == board[8] and board[0] != "-":
        winner = board[0]
        return True
    elif board[2] == board[4] == board[6] and board[2] != "-":
        winner = board[0]
        return True

def checkTie(board):
    global gameRunning
    if "-" not in board:
        printBoard(board)
        print("It is a tie!")
        gameRunning = False
def checkWin():
    global gameRunning
    if checkDiagnoal(board) or checkHorizontal(board) or checkRow(board):
        print(f"The winner is {winner}")
        gameRunning = False
def switchPlayer():
    global currentPlayer
    if currentPlayer == "X":
        currentPlayer = "O"
    elif currentPlayer == "O":
        currentPlayer = "X"

while gameRunning:
    printBoard(board)
    playerInput(board)
    checkWin()
    checkTie(board)
    switchPlayer()