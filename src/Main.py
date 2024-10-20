#FIRST PROGRAM

digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

def to_binary(number):
    binary = []
    for i in range(31, -1, -1):
        binary.append(str((number >> i) & 1))
    return ''.join(binary)

def to_hex(binary):
    hex_string = []

    for i in range(0, 32, 4):
        four_bits = binary[i:i + 4]
        decimal_value = int(four_bits, 2)
        hex_string.append(digits[decimal_value])
        
    return ''.join(hex_string)

def convert_to_binary_and_hex(number):
    if number < 0:
        number = (1 << 32) + number
    binary_representation = to_binary(number)
    hex_representation = to_hex(binary_representation)
    
    return binary_representation, hex_representation
    
    
    
#SECOND PROGRAM


def hex_to_decimal(hex_string):
    def hex_digit_to_decimal(digit):
        if '0' <= digit <= '9':
            return ord(digit) - ord('0')
        elif 'A' <= digit <= 'F':
            return ord(digit) - ord('A') + 10
        elif 'a' <= digit <= 'f':
            return ord(digit) - ord('a') + 10
        return 0

    decimal_value = 0
    for i, digit in enumerate(reversed(hex_string)):
        decimal_value += hex_digit_to_decimal(digit) * (16 ** i)
    
    return decimal_value

#TESTING 


if __name__ == "__main__":
    hex_string = "0000FACE"
    result = hex_to_decimal(hex_string)
    print(result)
    number = 123456 
    binary_result, hex_result = convert_to_binary_and_hex(number)
    print("Binary (32-bit, two's complement):", binary_result)
    print("Hexadecimal (32-bit, two's complement):", hex_result)