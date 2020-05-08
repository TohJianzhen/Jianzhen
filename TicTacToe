"""Tic Tac Toe 
   Written by Jianzhen Toh
   24 April 2020
"""
from random import randint

# Define two constants, the values used to select a diagonal
TOP_LEFT_BOTTOM_RIGHT = 0
TOP_RIGHT_BOTTOM_LEFT = 1


# **********************************************************************
#
# Define all the functions that manipulate the board.
# Only these functions should 'know' the board representation.
# These functions don't "know" anything about noughts and crosses;
# only that it's played on a 3 x 3 board of 'O's and 'X's (and blanks).
#
# **********************************************************************
def new_board():
    """Generate and return a new empty board"""
    board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
    return board


def display(board):
    """Display the given board"""
    separator = '+---+---+---+'
    print(separator)
    for row in board:
        print('|', end='')
        for col in row:
            print(' {} |'.format(col), end='')
        print('\n' + separator)
    print()


def square(board, row, column):
    """Return the contents of square (row, column) of board.
       The value is either 'O', 'X' or ' '
    """
    return board[row][column]

def row(board, row_num):
    """Return the given numbered row (0 - 2) of board"""
    return board[row_num]


def column(board, col_num):
    """Return the given numbered column (0 - 2) of board"""
    return [element[col_num] for element in board]


def diagonal(board, diagonal_selector):
    """Return the 3 element diagonal of the board selected by
       diagonal_selector, one of TOP_LEFT_BOTTOM_RIGHT or
       TOP_RIGHT_BOTTOM_LEFT
    """
    top_left = [board[0][0], board[1][1], board[2][2]]
    top_right = [board[0][2], board[1][1], board[2][0]]
    if diagonal_selector == TOP_LEFT_BOTTOM_RIGHT:
        return top_left
    return top_right


def empty_squares(board):
    """Return a list of the empty squares in the board, each as
       a (row, column) tuple"""
    search = ' '
    empty = []
    for rownum in range(len(board)):
        for colnum in range(len(board)):
            if board[rownum][colnum] == search:
                empty.append((rownum, colnum))

    return empty


# **********************************************************************
#
# Now we have some functions that test the board state in various
# ways. These are related to the rules of noughts and crosses.
# They do not "know" about the represention used for a board.
#
# **********************************************************************
def line_winner(line):
    """Return 'O' or 'X' if all elements in the 3-element list line
       are the same and non-blank. Otherwise return None"""
    for elements in range(len(line)):
        if(line[elements] == line[elements+1])and(line[elements+1] == line[elements+2]):
            return line[0]
        return 'None'


def winner(board):
    """Return 'O' or 'X' if either of those has won the game.
       Otherwise return None. It is assumed there can be only a
       single winning line."""
    winner1 = ['X', 'X', 'X']
    winner2 = ['O', 'O', 'O']
    index = 0
    for index in range(0, 3):
        row_win = line_winner(row(board, index))
        col_win = line_winner(column(board, index))
        dia_0 = line_winner(diagonal(board, 0))
        dia_1 = line_winner(diagonal(board, 1))
        if row_win == "X" or col_win == "X" or dia_0 == "X" or dia_1 == "X":
            return line_winner(winner1)
        elif row_win == "O" or col_win == "O" or dia_0 == "O" or dia_1 == "O":
            return line_winner(winner2)
    return None


def game_over(board):
    """Given a board state return true iff there's a winner or
       if the game is drawn."""
    if winner(board) == 'X' or winner(board) == 'O' or empty_squares(board) == []:
        return True
    return False


# **********************************************************************
#
# Now the top-level functions that implement the logic of
# noughts and crosses.
#
# **********************************************************************
def game_result(board):
    """Return 'Won by O', 'Won by X' or 'Draw' according to the
       state of board. It is assume the game is over."""
    if winner(board) is None:
        return ('Draw')
    elif winner(board) == 'X':
        return ('Won by X')
    return ('Won by O')


def make_human_move(current_player, board):
    """Given a board state and the human piece ('O' or 'X')
       ask the player for a location to play in. Repeat until a
       valid response is given. Then make the move, i.e., update
       the board by setting the chosen square to the player's piece.
    """
    print(current_player + "'s move")
    while True:
        coordinates = input("Enter row and column [0 - 2]: ")
        coordinate_tup = tuple(int(i) for i in (coordinates.split()))
        coordinate = [tuple(int(i) for i in (coordinates.split()))]
        if (coordinate[0][0] in range(0,3)) and (coordinate[0][1] in range(0,3)):
            if (coordinate_tup in empty_squares(board)):
                board[coordinate[0][0]][coordinate[0][1]] = current_player
                return board

        print("Illegal move. Try again.")


def make_computer_move(current_player, board):
    """Given a board state and the computer piece ('O' or 'X')
       choose a square for the computer to play in and
       make the move (i.e., update the board accordingly).
    """
    candidates = empty_squares(board)
    choice = randint(0, len(candidates) - 1)
    row, column = candidates[choice]
    print("Computer plays at ({},{})".format(row, column))
    board[row][column] = current_player


def play_game(human_player, board):
    """Play until a win or a draw"""
    computer = other_player(human_player)
    display(board)
    while game_over(board) is False:
        make_human_move(human_player, board)
        if winner(board) is None:
            display(board)
            make_computer_move(computer, board)
            display(board)
    return game_result(board)

def play_one_turn(board, current_player, human_player):
    """Given a board state and the current
       player ('O' or 'X'), play one move"""
    if current_player == human_player:
        make_human_move(human_player, board)
    else:
        make_computer_move(current_player, board)



def other_player(player):
    """Return X if player is O else return O"""
    return "O" if player == "X" else "X"


def get_O_or_X():
    """Ask the human if they want to play O or X and return their
       choice"""
    while(True):
        pick = input("Would you like to play O or X? ")
        if pick == "X":
            return "X"
        elif pick == "O":
            return "O"


def main():
    """Play a game of noughts and crosses"""
    board = new_board()
    human_player = get_O_or_X()
    try:
        play_game(human_player, board)
        display(board)
        print(game_result(board))
    except ValueError:
        print("The program has encountered an error and needs to die. Bye.")


main()
