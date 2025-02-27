# No dumb questions: What's the biggest number?

Today we'll address a burning question that has occupied the minds of children and adults since the dawn of mathematics: what is the biggest number?

The following dialogue illustrates a classic scenario in which such information becomes invaluable:

> **Child A**: When I grow up, I'm gonna have a million dollars.
>
> **Child B**: Well, when I grow up, I'm gonna have a _billion_ dollars.
>
> **Child A**: Oh yeah? Well, I'm gonna have a _billion_ billion dollars.
>
> **Child B**: Well, I'm gonna have a _zillion_ dollars.
>
> **Child A**: Ok, well, then I'm gonna have _infinity_ dollars.
>
> **Child B**: Fine, then I'll have _infinity_ infinity dollars.
>
> **Child A**: Well, I'm gonna have however many dollars you have, _plus one_!

This argument here is clearly child's play. I mean, what's a zillion? How are we defining infinity? The whole dialogue is just a series of blunders. If you really want to approach the biggest number, you're going to have to leave this amateur hour behind and start thinking like a [googologist](https://googology.fandom.com/wiki/Googology).

Luckily, you've come to the right place. I'll show you what monstrosities lie beyond the number of grains of sand on the earth, past the number of subatomic particles in the universe, and even beyond the number of _possible arrangements_ of subatomic particles in the universe. If you're not ready for it, you can turn back at any time.

Ready? Let's begin.

## Infinity

The first thing we need to do is deal with the question of infinity. You'll see plenty of amateurs at local "biggest number" competitions invoking infinity like it's some ace in the hole, but try the same thing at a serious meetup and you'll get nothing but cringes. Why?

On one hand, "infinity" by itself isn't a "thing" in the same way "five" is. It could refer to "the number of [rational numbers](https://en.wikipedia.org/wiki/Rational_number)". Or, it could refer to "the number of [real numbers](https://en.wikipedia.org/wiki/Real_number)", which is infinitely larger than the former infinity. You could also consider the number of possible subsets of the real numbers and get an even bigger, infinitely larger infinity. Or maybe you're referring to :hook[ordinals, and not cardinals]{id="ordinals"}?

More to the point, infinity is a joykill. It's like naming Finchley Station on your first turn of [Finchley Station (the game)](<https://en.wikipedia.org/wiki/Finchley_Central_(game)>). Naming big numbers is a beautiful sport, and declaring your number to be the biggest _by definition_ is blatantly anticompetitive.

At its core, we discard infinities because they differently than regular counting numbers like 1, 2, 3, etc. Namely, you _can't count to them_! And although nothing prevents us from defining bigger and bigger infinities (some certainly do), there's certain properties of regular old salt-of-the-earth counting numbers that you don't get with infinities. For example:

- The ability to write down (at least, in theory) every digit of the number
- The ability to quantify exactly _how much bigger_ one number is compared to another
- The ability to imagine (in theory) a collection containing that number of things

In other words, finite numbers are nice and simple, relatively speaking. Plus, there's still an infinite number of finite numbers to explore...

## The start of our journey

If you've ever seen a movie where an ambitious protagonist wants to become the greatest {karate master, jedi, boxer}, you know that you don't get a training montage until you go back to basics. So, let's revisit the fundamentals.

The number 1 seems like a good place to start. We can add 1 to that and get 1+1, which represents a bigger number (namely, 2). Add another one and we get 1+1+1, or 3. We could keep adding one forever, which clues us into the fact that we can _generalize_ this process. Instead of adding five ones, or ten ones, or a hundred ones, we can summarize the _act_ of summing _any number_ of ones together. Without any further ado, I'm pleased to present you with our first "fast"-growing function:

```
f(n) = n
```

That whole dance just to get to the identity function may have seemed like a farce, but it illustrates the simplest case of a general pattern that will get harder and harder to spot as we go along. It's a simple 2-step method:

- **Step 1**: Notice that there is a parameter that could be increased arbitrarily
- **Step 2**: Replace that parameter with a variable

In this case, it was a little silly because `n` represents a number and numbers are basically _already_ shorthand for a bunch of tally marks. This next example will be more instructive. Now that we have `f`, we notice that we only have one copy of `n`. Why not have two? That would lead us to `f'(n) = 2n`. Whereas `f(10)` gives us 10, `f'(10)` gives us 20. It's helpful to think about how functions map an input range to an output range; `f'`'s output space reaches "higher" than `f`'s for the same input range.

But why stop at `f'`? We could just as easily have `f''(n) = 3n`, or `f'''(n) = 4n`, which would grow even faster. Ah, but now we've stumbled across **Step 1** of the 2-step method. The number of copies of `n` can be increased arbitrarily, so why not wrap that up with a new parameter? We could use a new variable like `m`, but just to keep things simple, we'll use the same `n`, which gets us our next function:

```
g(n) = n*n = n^2
```

Now, with that same input of 10, the `g` function gives us a crisp 100. This is pretty good, but we notice that we chose to multiply `n` by itself only once. Why not multiply `n` by itself three times? Or four times? That would correspond to `g'(n) = n^3`, `g''(n) = n^4`, etc. Well, well, well, we've run straight into **Step 1** of the 2-step method again. So, let's wrap up this idea of "the number of times `n` is multiplied by itself" with a variable. In keeping with the pattern, we'll just reuse the same `n`.

```
h(n) = n*n*...*n*n (n times) = n^n
```

Now we're cooking with gas. While `f(10)` gave us 10 and `g(10)` gave us 100, `h(10)` gives us 10,000,000,000, or ten billion. That's more than the number of people on earth! Not bad.

Our new function `h` grows very fast. To illustrate, consider `h(100)`.

```
h(100) = 100^100 = (10^2)^100 = 10^200
```

That's a one followed by 200 zeroes. There's a popular number out there called a googol (the namesake of Google) which is a 1 followed by 100 zeroes. To put that in perspective, there's between 10^78 and 10^82 atoms in the observable universe, so a googol is around 10^20 (over a billion billion) observable universes' worth of atoms. Our `h(100)`, on the other hand, is worth a _googol_ googols. That's pretty big.

But will we stop there? Absolutely not. In the grand scheme of things, what's two hundred zeroes? It's nothing. We notice that we only raised `n` to the power of itself once. Why not raise `n` to the power of `n`, and then raise `n` to _that_ power? Or how about a stack of 4 `n`s? Or 5? Once again, **Step 1** rears its head.

Computer pioneer and TeX inventor [Donald E. Knuth](https://en.wikipedia.org/wiki/Donald_Knuth) saw what was going on here, and in the '70s he came up with a new notation to generalize all of this generalization. It's called "[up-arrow notation](https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation)", and it's pretty powerful. Here's how it works:

One arrow (`↑`) means repeated multiplication, i.e. exponentiaion. So `2↑3` means "multiply 3 copies of 2" which becomes `2*2*2 = 2^3 = 8`.

Two arrows (`↑↑`) means repeated _exponentiation_. So, `2↑↑3` would represent `(2^(2^2))`, which is 16. Likewise, _three_ arrows means repeated double-arrowing, so `2↑↑↑3` means:

```
2↑↑(2↑↑2) = 2↑↑(2^2) = 2↑↑4 = 2^(2^(2^2)) = 2^16 = 65,536
```

I intentionally picked small numbers so that the results are manageable, but these examples don't give a sense of how _insanely powerful_ the up-arrow notation is for expressing big numbers. Let's define `j(n) = n↑↑n` and consider `j(10)`. This would correspond to an exponent stack, ten `10`s tall. It's hard to even find a way to _describe_ how big that number is. For one thing, It's 1 followed by `10↑↑9` zeroes, but what good does that do us? We could alternatively take a stab at the top part of the stack: `10↑↑3` is a one followed by ten billion zeroes. But as for describing the whole number, it's so much bigger that than we could ever fathom. And that's just with _two arrows_. What if we had used 3? Or 4? Or 5? Wait a second...

Just when we thought we had generalized the whole thing, from repeated multiplication to repeated exponentiation to repeated _repeated_ exponentiation, and so on, **Step 1** pops up again!

To see how, we can use a shorthand to express how many arrows there are, like `↑[4]` to represent four up-arrows. Instead of "hard-coding" a specific number of up-arrows, we can "pull it out" as a parameter, just like all the previous times. This would give us our next fast-growing function:

```
k(n) = n↑[n]n.
```

At this point, it goes without saying, but if you thought `j(10)` was big, consider `k(10)`: `10↑↑↑↑↑↑↑↑↑↑10`. I mean, come on.

You may have lost your appetite, but there's still more to come.

:footnote[The simplest explanation of the difference between ordinals and cardinals is: cardinals tell you _how many_ things are in a set, whereas ordinals tell you _what position_ an element has within an order. In a lot of cases these are almost interchangeable (e.g. if you have 10 things that can be ordered, then there will be a 10th element), but once you get [past the finite](https://en.wikipedia.org/wiki/Transfinite_number), they can mean pretty different things.]{id="ordinals"}
:footnote[One such extension was called the _apostrophus_ that made use of a backwards `C`, or `Ↄ`. With the _apostrophus_ method, `IↃ` means 500 and `CIↃ` means 1,000. Additional sets of `C` multiplied by 10, so `CCCIↃↃↃ` means 100,000 and `IↃↃↃ` means 50,000. Interestingly, this system predated `D` and `M`, and it's speculated that the letter `D` was chosen because of its semblance to `IↃ`.]{id="workaround"}
