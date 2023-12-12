---
title: Advent of Code 2023 In Go Day One
description: In this blog we will take a look at my method for solving the 2023 Day One challenge for advent of code.
date: 2023-12-01
isDraft: false
---
Prior to today I had not written any go on my own. I took one course on [Frontend Masters](https://frontendmasters.com/courses/go-basics/) to get me up to speed on how Go works and the mindset I need to adopt.

Something I had seen all over the internet is how strong Go's standard library is. It seems to be best practice in go to minimize how many dependencies you rely on and instead try to use the standard library as much as possible. 

This is a much different mentality from what I was used to in the JavaScript world, where it seemed that you would always end up downloading a package from NPM to accomplish your task of the day. 

Enough chit chat eh? Let's solve the first AOC.

## Part One
Our solution needs to read line after line of jumbled letters and numbers and determine the first and last number (in symbol form: 1, 2, 3...) in each line. The first and last number need to then be joined together, not added but joined. So if number one was 7 and number two was 8 our result for the line is 78. We then add each line's result to the total.

If there is only one number in the line then that sole number will act as the first and second number for the line. For example, if number one is 7 and number two is empty then the result for the line is 77.

### My Solution
The solution to this problem is fairly straightforward. We are going to read line by line and check to see if the character is a number. If it is a number then we will set number one to it if it is free, otherwise we will update number two.

Once we reach the end of the line we are going to do a check to see if both number one and two are set. If they are we concatenate them as strings to get our two digit number. We will then convert it back to a number and add it to our total. If only number one is set then we do the same thing except number one takes both spots.

Here is what my code looks like:
```go
	f, err := os.ReadFile("./data/day-one.txt")

	if err != nil {
		fmt.Println(error.Error(err))
	}

	var total, num1, num2 int
	for _, s := range f {

		if s == 10 {
			if num1 != 0 && num2 != 0 {
				lnAsStr := strconv.Itoa(num1) + strconv.Itoa(num2)
				joinedNum, _ := strconv.Atoi(lnAsStr)
				println("joined: ", joinedNum)
				total += joinedNum
			}

			if num1 != 0 && num2 == 0 {
				lnAsStr := strconv.Itoa(num1) + strconv.Itoa(num1)
				joinedNum, _ := strconv.Atoi(lnAsStr)
				total += joinedNum
			}
			num1, num2 = 0, 0
		}

		if num, err := strconv.Atoi(string(s)); err == nil {

			if num1 == 0 {
				num1 = num
			}

			if num1 != 0 {
				num2 = num
			}
		} else {
			println(string(s))
		}

	}

	return total
```
### I Learned A Lot About Bytes And Encoding
When you read a file in Go, Go will display that file as a slice of bytes. I had never had to deal with anything like this before. 

This was exactly what I was hoping to have to deal with when picking a new language to work with. 

In my time with JavaScript I primarily worked with JSON or HTML and never really had to think about how files are read and interpreted. This challenge taught me that every character we type with our keyboard can be represented as a byte value.

Take a new line for example. Initially I had no idea how I was going to check for a new line, but after reading the famous [encoding article](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)and finding an encoding table from [Wikipedia](https://en.wikipedia.org/wiki/List_of_Unicode_characters)I soon learnt that a "newline character" can actually be represented as the value 10. 

With this information, checking the byte value to see if it's a 10 let's me check for newline and run the code needed to add back to the total.

## Part Two
This section of the challenge was a bit more difficult for me. In part one we only cared about the individual byte value. But now, if a number is spelled out it now counts as a number.

To help with simple matching I created a map:
```go
numMap := map[string]int{
	"one":   1,
	"two":   2,
	"three": 3,
	"four":  4,
	"five":  5,
	"six":   6,
	"seven": 7,
	"eight": 8,
	"nine":  9,
}
```

My method was to check to still loop through each character, if the character could not be converted to a number then we new that it was a letter. We will do a simple check to determine if the current letter we are on is a starting letter for word version of the number. If so we will set a flag, validS:

```go
validS := false
for _, digit := range digits {
	if string(s) == string(digit[0]) {
		validS = true
	}
}

```

Later we will check to see if validS was set. If it is then we will loop through our map and compare to see if the next x letters match. 

Let's walk through an example. If the code comes across a "t" the flag validS will be set to true because "two" and "three" both start with a "t". We will then loop through each number in the map and compare it. 

If the first key in the map is "one" then we would compare the next three letters in our file to see if it spells out "one". Since we are starting with "t" it will move onto the next number in the map.

If the next key is "three" then we would compare the next five letters in our file to see if it spells out "three". For example sake let's say the that five letters from "t" spell out "twoth". Since "twoth" is not equal to "three" we repeat.

Eventually the key will be "two" and we will compare the next three letters of the file to see that "two" is equal to "two". We can now set the appropriate number (first number or last number). 

Here is the code:
```go
if validS {
	for _, digit := range digits {
		lenToSlice := len(digit)
		iEnd := i + lenToSlice
		strToComp := string(f[i:iEnd])

		if iEnd <= lenFile && strToComp == digit {
			if num1 == 0 {
				num1 = numMap[strToComp]
			}
			if num1 != 0 {
				num2 = numMap[strToComp]
			}
		}
	}
}

```

### This Wasn't My First Solution
Part two of day one took me two tries. At first I would add the current string read from the file into a string if its position matched the needed position to match one of the keys in the number map. 

If the letter ruined the string I was building then I would just reset and move onto the next letter in the file. 

This solution didn't work because you could run into the scenario where the letter we were on would ruin the string we were building **BUT** be the first letter to a different word.

For example, if the next letter read from the file were read to be "t" and it was added to the string we were building you might get "thret". The code would realize that this doesn't look like any of the keys in the map and so it would move onto the next letter. But let's say that the next five letters were "three", since I skipped that "t", the letter "e" would get checked for position one. Then "h" for position two and at that point it would reset itself.

## Conclusion
This article may be too in depth about what doesn't work. But I think it is sometime important to document why things don't work as expected that way the next time a similar problem comes along you can be ready for the common pitfalls.