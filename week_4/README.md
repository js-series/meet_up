# Week 4
## Intro To Functions

Introducing the motivation for functions in our code.

| Objective |
| :--- |
| Define and use small examples of functions |
| Discuss the utility of functions. |
| Review project materials from control flow lesson. |


## Reviewing Control Flow

### Variables

Recall problem four from the variables project

> 4.) Declare two variables with number values.
    Add, subtract, multiply and divide them.
    Display the values of each within the HTML page.
    Then label these values the best you can.



To begin this exercise we just created two variables and performed the above operations.

```JavaScript
var numOne = 12;
var numTwo = 3;
```

a.) Adding we have:

```JavaScript
numOne + numTwo
// => 15
```
b.) Subtracting we have:

```JavaScript
numOne - numTwo
// => 9
```
c.) Multiplying we have:

```JavaScript
numOne * numTwo
// => 36
```

d.) Dividing we have:

```JavaScript
numOne / numTwo
// => 4
```

We can display each of these results by selecting the corresponding `span` with the id associated to problem.

```JavaScript
document.getElementById('q4a').innerHTML = numOne + ' plus ' + numTwo + ' is ' + (numOne + numTwo);
```

Which will display as:

> 12 plus 3 is 15

We can do the following for the remaining.

```JavaScript
document.getElementById('q4b').innerHTML = numOne + ' subtract ' + numTwo + ' is ' + (numOne - numTwo);
document.getElementById('q4c').innerHTML = numOne + ' times ' + numTwo + ' is ' + (numOne * numTwo);
document.getElementById('q4d').innerHTML = numOne + ' divided by ' + numTwo + ' is ' + (numOne / numTwo);
```

## Arrays

For arrays we covered a few different concepts.


### Insert/Remove Items

* How do we add to end of an Array?
* How do we remove the last item of an Array?
* How do we add to the front of an Array?
* How do we remove from the front of an Array?

Let's take a look at project question that tested these skills.
> 1.) Declare a variable whose value is an empty array.
   Use any method you choose to add at least 4 items to it.

We can start by creating an array of friends, `myFriends`.

```JavaScript
var myFriends = [];
```

Then we can add two friends to the end of the Array.

```JavaScript
myFriends.push('Ruby');
myFriends.push('Sam');
```

Here we used to `Array#push` to add to the end of an array. We could have also consolidated this to just the following.

```JavaScript
myFriends.push('Ruby', 'Sam');
```

Now let's try to add to the front of an Array.

```JavaScript
myFriends.unshift('Taylor');
myFriends.unshift('Alex');
```

Recall that `Array#unshift` adds to the beginning of an array. It is easily confused with `shift`  so be sure to double check your Array actions in a console.

To display this result we can grab the id of the first question and set `myFriends` to it's `innerHTML`, i.e.

```JavaScript
document.getElementById('q1').innerHTML = myFriends;
```

So it looks like we've covered half our questions.

* [x] How do we add to end of an Array?
* [] How do we remove the last item of an Array?
* [x] How do we add to the front of an Array?
* [] How do we remove from the front of an Array?

Recall the following question from the array project.

> 3.) Remove the second and third items in your array.

We can tackle this in a few ways.

If we recall that `Array#pop` removes from the end of an Array we can use that to change our array.

```JavaScript
myFriends
// => ['Alex', 'Taylor', 'Ruby', 'Sam']

var lastFriend = myFriends.pop();
// => 'Sam'
```

We save the last value because we need to add it back. Now we can remove the third and second item.

```JavaScript
myFriends.pop()
// => 'Ruby'
myFriends.pop()
// => 'Taylor'
```

Now we can `push` back the `lastFriend`,

```JavaScript
myFriends.push(lastFriend);
```

>  Note: if you remember `shift` you could also use it to do the above.


However, this kind of procedure feels like we are working too hard. What would happen if we had a really large array of friends? How would we remove the values quickly without popping off each friend? This is where we can utilize `splice`.

The `splice` method allows us to specify a starting index and number of items to remove at that index.

```
myFriends = ['Alex', 'Taylor', 'Ruby', 'Sam'];

myFriends.splice(1, 2);
// => ['Taylor', 'Ruby']

myFriends
// => ['Alex', 'Sam']
```

Now we've covered all of insert/remove questions plus some extra `splice` fanciness.

* [x] How do we add to end of an Array? `push`
* [x] How do we remove the last item of an Array? `pop`
* [x] How do we add to the front of an Array? `unshift`
* [x] How do we remove from the front of an Array? `shift`

## For Loops

The objective of our loops reading was to practice iterating over collections with `for` loops.

Let's recall the structure of a `for` loop.

```JavaScript
for (some starting index; until stopping point; increment to next index) {
  // do some procedure
}
```

As an example we have the following:


```JavaScript
//     Stage 1: start
//     ______      
//       |        Stage 2: Check  
//       |        _____            Stage 4: increment
//       |          |              _____
//       |          |               |
//      \|/        \|/             \|/
for (var i = 0; i < array.length; i = i + 1) {
  // Stage 3: Do thing
  console.log('Hello')
}
```

Here we only ever do `Stage 1` once, at the very beginning to setup the iterating. Then we do steps `2` through `4` until the check at stage `2` is no longer true.


Let's review a problem that applies these skills.

> 1.) Output each item in the following Array to your console within their own paragraphs:

```
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
```

First we think about how to log only the first value to the console. Recall that the first index is `0` for an array.

```JavaScript
console.log(livingRoom[0]);
```

We can actually do this for every index from `0` to `4` given some index.

```JavaScript
console.log(livingRoom[index]);
```


To do this we recall that the array starts at index `0` and ends at `array.length - 1`. If we make our stopping condition `index < array.length` then we should be able to safely iterate from `0` up to `3` without going to `4`.

```JavaScript
for (var index = 0; index < livingRoom.length; index += 1) {
  console.log(livingRoom[index] );
}
```

Let's try one more problem to see if we got this.


>  7.) Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73].

```JavaScript
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];
```

* First we are being asked to create a variable `numThrees` with only the values of `[13, 23, 33, 43, 53, 63, 73]`.
* Looking at this problem we ask how are the `numThrees` distinguishable from other values in `numArray`?

It seems like the values are just those that end with a `3`. How do we check if a number ends in `3`?

* Dividing by three won't work because `13` ends in `3` and nothing divides that.

However, recall the modulo `%` operator. If we modulo by a number we get the remainder.

Eureka! If we modulo by `10` we should get the number in the ones place, i.e.

```JavaScript
16 % 10
// => 6

92 % 10
// => 2

331 % 10
// => 1

321607 % 10
// => 7
```

So as engineers this a proof that this works. :P Let's turn this into a condition that is true when a number ends in 3.

```JavaScript

var num = 13;

if (num % 10 === 3) {
  console.log('I end in three')
}
```

Now we can do this for every item in the `numArray`.


```JavaScript
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] % 10 === 3) {
    console.log('I end in three', numArray[i]);
  }
}
```

Hmm, but we don't want to just log this we want to put them all into a new array. We can do this using `push`.

```JavaScript
var numThrees = [];

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] % 10) {
    numThrees.push(numArray[i]);
  }
}

console.log(numThrees);
```

And there we have it.

## Functions Work

Solutions to intro JS functions project.

[Intro to JS Functions: Solutions `main.js`](functions/main.js)

Feel free to use the following HTML as a guide. When used with the JS it should complete the function exercises for week 3.

[Intro to JS Functions: `index.html`](functions/index.html)
