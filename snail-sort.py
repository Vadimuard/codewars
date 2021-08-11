def move_right(matrix, currentRow, currentCol):
    sorted_arr = []


def snail(matrix):
    try:
        rows_n = len(matrix)
        cols_n = len(matrix[0])
    except:
        return []
    arr_size = rows_n * cols_n
    sorted_arr = []
    current_col = 0
    current_row = 0
    while True:
        if arr_size == len(sorted_arr):
            break
        sorted_arr.append(matrix[current_row, current_col])
        matrix[current_row, current_col] = None
