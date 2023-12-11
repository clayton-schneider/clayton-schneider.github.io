---
title: Advent of Code 2023 In Go Day 8
description: Today we are going to take a look at how I solved Advent of Code 2023 Day 8 using Go.
date: 2023-12-08
isDraft: false
---
Today I am going to be breaking down how I tackled the Day 8 Advent of Code 2023 challenge. If you would like to see the challenge you can visit its page [here](https://adventofcode.com/2023/day/8).

I am using this Advent of Code as an opportunity for me to learn and practice my Go skills.
## Solving Part 1
Solving part one was one of the easier challenges for me so far. I knew that we would start with "AAA" and end with "ZZZ". Each path had a left and right branch. We would read from our instructions to determine which path to take.

To help make things easier I made the following struct:
```go
type Options struct {
	Left  string
	Right string
}

func newOption(l, r string) Options {
	return Options{
		Left:  l,
		Right: r,
	}
}
```

My idea was to store each of these "nodes" or options in a map. Essentially we would loop through the different nodes and store the head as the key in the map, and then the left and right as that heads options.

The parsing and building of the map looked like this:
```go
	f, _ := os.ReadFile("./data/day-eight.txt")

	splitI := strings.Index(string(f), "\n\n")
	directions := strings.Split(string(f[:splitI]), "")
	content := strings.Split(string(f[splitI+2:]), "\n")
	// trim empty entry
	content = content[:len(content)-1]

	theMap := make(map[string]Options)

	for _, line := range content {
		line = line[:len(line)-1]
		head := strings.Split(line, " = (")[0]
		line = strings.Split(line, " = (")[1]
		opts := strings.Split(line, ", ")
		theMap[head] = newOption(opts[0], opts[1])
	}

	start := "AAA"
	end := "ZZZ"
```

Setting up the problem this way allows us to loop over the directions, decide which path we need to take, and then check to make sure we are not on "ZZZ". There is the chance that we will reach the end of the directions array before we find "ZZZ", in this case we will just loop back through the directions.

```go
	var steps int
	for i := 0; i < len(directions); i++ {

		steps++
		dir := directions[i]
		options := theMap[start]
		var next string

		if dir == "L" {
			next = options.Left
		}

		if dir == "R" {
			next = options.Right
		}

		if next == end {
			break
		}

		start = next

		// reset if we need to
		if i == len(directions)-1 {
			i = -1
		}
	}

```

All in all part one was not too difficult


## Solving Part 2
I didn't expect this part to give me as hard a time as it did. Reading through the changes were intuitive enough. From this point forward we only cared about paths that ended with "A" or "Z". 

To help with this I made two functions (in hindsight I could have just made this one function) endsInA and endsInZ:
```go
func endInA(str string) bool {
	if strings.LastIndex(str, "A") == len(str)-1 {
		return true
	}
	return false
}

func endInZ(str string) bool {
	if strings.LastIndex(str, "Z") == len(str)-1 {
		return true
	}
	return false
}
```

We care about all of the paths that end in "A" because now instead of starting at "AAA" we are starting at EVERY path that ends in "A". With this in mind the setup/parsing for the solution ended up looking like this. We still build a map of our left and right options, but we also check to see if the head ends in "A". If it does then we add it to our slice of starting points.  

```go
	f, _ := os.ReadFile("./data/day-eight.txt")

	splitI := strings.Index(string(f), "\n\n")
	directions := strings.Split(string(f[:splitI]), "")
	content := strings.Split(string(f[splitI+2:]), "\n")
	// trim empty entry
	content = content[:len(content)-1]

	theMap := make(map[string]Options)

	var stPts []string

	for _, line := range content {
		line = line[:len(line)-1]
		head := strings.Split(line, " = (")[0]
		if endInA(head) {
			stPts = append(stPts, head)
		}

		line = strings.Split(line, " = (")[1]
		opts := strings.Split(line, ", ")
		theMap[head] = newOption(opts[0], opts[1])
	}
```

With parsing out of the way all I had to do was cycle through the starting points and follow the directions, updating each starting point, just like I did in part one. With each iteration I would check to see if all the points were on an ends with z step. 

**Don't do this**

Your program would need to run for a very long time in order for this method to completed. And if you messed up at an earlier step you would need to completely rerun. Obviously this was not a good solution. 

It was at this point I had to go looking for a hint. I saw some people on [The Primeagen's Discord Server](https://discord.gg/theprimeagen) talking about how you had to use LCM.

This is what I love about programming. I have a tendency to think that solutions need to be complex, when in actuality some fifth grade math can make your life so much easier.

Now, instead of continuously checking every single possible step, we just need to find the **cycle** for each starting point. 

If starting point 1 takes three steps to end on a "Z" and starting point 2 takes four, then we know we would need to wait until the 12th step for them to be aligned.

The only problem is we are dealing with with five digit numbers now. I just needed find the smallest number that each of these steps could be multiplied into.

I spend a lot of time trying to come up with a solution that would loop over these cycles and find the LCM, but in the end I just plugged it into a calculator online.

This is the first challenge I would say that I was stumped and wasn't able to come up with a complete working solution on my own. 

But hey, at least I was reminded that oftentimes the solution is more simple then we expect. 
