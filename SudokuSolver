board = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
]
def solve(bo):
    """Recursively finds if the board is full, and if it is then if not find: return true will be triggered"""
    find = find_empty(bo)
    if not find:
        return True
    else:
        row, col = find

    for i in range (1,10):
        if valid(bo, i, (row, col)): # Checks if the num added to the board is valid
            bo[row][col] = i # If it is valid then add it back into the board

            if solve(bo): # Recursively tries to see if the solution is correct
                return True

            bo[row][col] = 0 # Resets the value if the solution isn't finished, which then repeats the for loop

    return False

def print_board(bo):
    """This function formats and prints the board"""
    for i in range(len(bo)):
        """Everytime on the third row you'll print a line"""
        if i % 3 == 0 and i != 0:
            print("-----------------------")
        """This prints a vertical line that leaves a space every 4th row"""
        for j in range(len(bo[0])):
            if j % 3 == 0 and j != 0:
                print(" | ", end="")

            if j == 8:
                print(bo[i][j])
            else:
                print(str(bo[i][j]) + " ", end="")


def find_empty(bo):
    """This function finds empty spaces which are denoted by 0"""
    for i in range(len(bo)):
        """Length of each row is len(bo[0])"""
        for j in range(len(bo[0])):
            if bo[i][j] == 0:
                return i, j  # row, col
    return None

def valid(bo, num, pos):
    """Checks if the input board is valid, along with its position and number"""
    for i in range(len(bo[0])):
        # Checks each element of the row is equal to the num input
        if bo[pos[0]][i] == num and pos[1] != i:
            return False

    for i in range(len(bo)):
        # Checks if the column value is equals to the num input
        if bo[i][pos[1]] == num and pos[0] != i:
            return False
    # Checks if the 3x3 cube has the same numbers in it
    box_x = pos[1] // 3
    box_y = pos[0] // 3

    for i in range(box_y * 3, box_y*3 + 3):
        for j in range(box_x * 3, box_x * 3 + 3):
            if bo[i][j] == num and (i,j) != pos:
                return False

    return True

print_board(board)
solve(board)
print("-------------------------------------- ")
print_board(board)
