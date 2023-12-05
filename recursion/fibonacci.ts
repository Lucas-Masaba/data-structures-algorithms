// I usually have trouble breaking down problems as well. The more problems that you practice, the better you will get at problem solving.



// For this problem, we have to get the nth number in the Fibonacci sequence. Start with writing down the information that the problem gives us. The problem tells us that the first and second numbers in the sequence are 1, fib(1) = 1 and fib(2) = 1. So far in the sequence we have:

// 1, 1

// The problem also tells us that any number in the sequence is the sum of the previous two numbers. Right now, we only have the first two numbers in the sequence. If we wanted any number in the sequence after that, we would have to build up to it. We can get the third number in the sequence by adding the previous two, so now we have:

// 1, 1, 2

// We can keep doing this as many times as we like:

// 1, 1, 2, 3, 5, ...

// The problem asks for the nth number. If n = 6, we have to build the sequence up to 6:

// fib(1) = 1, fib(2) = 1, fib(3) = 2, fib(4) = 3, fib(5) = 5, fib(6) = 8

// At this point we would return 8, since the 6th number in the Fibonacci sequence is 8. What if the user enters in a larger number though, like n = 50? We would have to build the sequence all the way up to fib(50) to find out what that is. We can start to see a pattern forming at this point. To get the nth number in the Fibonacci sequence, we have to keep adding up the previous two numbers until we get to n, and then return fib(n).



// Now that we know what the sequence will look like when we start expanding it, try to come up with a formula. Given any n greater than 1, fib(n) will equal the sum of the previous two numbers in the sequence:

// fib(number) = one number back in the sequence + two numbers back in the sequence

// fib(n) = fib(n - 1) + fib(n - 2)

// This formula works if we already have a constructed Fibonacci sequence like this:

// 1, 1, 2, 3, 5, 8

// We can get the 7th Fibonacci number easily, 13, as we already have the 5th and 6th Fibonacci numbers, which are 5 and 8 respectively. When we write the solution however, we won't have a constructed sequence at the start, so we will have to build that ourselves.



// As an example, we are given n = 5, so we must find the 5th Fibonacci number. Let's start at the top:

// fib(5) = fib(4) + fib(3).

// The computer doesn't know what fib(4) and fib(3) are, so we have to find that out:

// fib(4) = fib(3) + fib(2)

// We know what fib(2) is from the start of the problem, it's 1, but we still don't know fib(3):

// fib(3) = fib(2) + fib(1)

// Ah! We know what fib(2) and fib(1) are, as we were given that at the start of the problem. This would be our base case in a recursive function. Now we can work our way back up and start filling in the blanks.

// fib(3) = 1 + 1

// fib(4) = 2 + 1

// fib(5) = 3 + 2 = 5

const fib = (n: number): number => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(6))