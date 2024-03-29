# We define super digit of an integer  using the following rules:

# If  has only  digit, then its super digit is .
# Otherwise, the super digit of  is equal to the super digit of the digit-sum of . Here, digit-sum of a number is defined as the sum of its digits.
# For example, super digit of  will be calculated as:

# super_digit(9875) = super_digit(9+8+7+5) 
#                   = super_digit(29) 
#                   = super_digit(2+9)
#                   = super_digit(11)
#                   = super_digit(1+1)
#                   = super_digit(2)
#                   = 2.
# You are given two numbers  and . You have to calculate the super digit of .

#  is created when number  is concatenated  times. That is, if  and , then .

# Input Format

# The first line contains two space separated integers,  and .

# Constraints

# Output Format

# Output the super digit of , where  is created as described above.

# Sample Input 0

# 148 3
# Sample Output 0

# 3
# Explanation 0

# Here  and , so .

# super_digit(P) = super_digit(148148148) 
#                = super_digit(1+4+8+1+4+8+1+4+8)
#                = super_digit(39)
#                = super_digit(3+9)
#                = super_digit(12)
#                = super_digit(1+2)
#                = super_digit(3)
#                = 3.
def superDigit(n, k)
  if !n.is_a? String
    n_string = n.to_s
  else
    n_string = n
  end

  concat_string = n_string * k
  while concat_string.length > 1
    concat_string = concat_string.split('').map(&:to_i).sum.to_s
  end

  return concat_string.to_i

end

puts(superDigit(148, 3))