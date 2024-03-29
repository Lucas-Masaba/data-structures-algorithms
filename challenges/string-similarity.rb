# Steps:
# 1. Create a function that takes a string as an argument
# 

def  stringSimilarity(a)
  count_array = []
  count_array << a.length
  original_string = a

  while a.length >= 1
    count = 0
    a = a[1..-1]
    for i in 0..a.length
      if a[i] == original_string[i]
        count += 1
      else
        count_array << count
        count = 0
        break
      end
    end  
  end

  return count_array.sum
end

puts(stringSimilarity('ababaa'))