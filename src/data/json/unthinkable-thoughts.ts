import { Parent } from "mdast";

const post: Parent = {
  type: "root",
  children: [
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "unthinkable/unthinkable.png",
          alt: 'A thought bubble with an "X" through it',
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 1,
              column: 72,
              offset: 71,
            },
          },
        },
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 1,
          column: 72,
          offset: 71,
        },
      },
    },
    {
      type: "heading",
      depth: 1,
      children: [
        {
          type: "text",
          value: "No dumb questions: Are there unthinkable thoughts?",
          position: {
            start: {
              line: 3,
              column: 3,
              offset: 75,
            },
            end: {
              line: 3,
              column: 53,
              offset: 125,
            },
          },
        },
      ],
      position: {
        start: {
          line: 3,
          column: 1,
          offset: 73,
        },
        end: {
          line: 3,
          column: 53,
          offset: 125,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "I recently found myself on a Wikipedia page entitled ",
          position: {
            start: {
              line: 5,
              column: 1,
              offset: 127,
            },
            end: {
              line: 5,
              column: 54,
              offset: 180,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/List_of_animals_by_number_of_neurons",
          children: [
            {
              type: "text",
              value: "List of animals by number of neurons",
              position: {
                start: {
                  line: 5,
                  column: 55,
                  offset: 181,
                },
                end: {
                  line: 5,
                  column: 91,
                  offset: 217,
                },
              },
            },
          ],
          position: {
            start: {
              line: 5,
              column: 54,
              offset: 180,
            },
            end: {
              line: 5,
              column: 160,
              offset: 286,
            },
          },
        },
        {
          type: "text",
          value:
            ". I was surprised to learn that starfish have about 500 neurons, which is only double the neurons of the microscopic ",
          position: {
            start: {
              line: 5,
              column: 160,
              offset: 286,
            },
            end: {
              line: 5,
              column: 277,
              offset: 403,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Tardigrade",
          children: [
            {
              type: "text",
              value: "tardigrade",
              position: {
                start: {
                  line: 5,
                  column: 278,
                  offset: 404,
                },
                end: {
                  line: 5,
                  column: 288,
                  offset: 414,
                },
              },
            },
          ],
          position: {
            start: {
              line: 5,
              column: 277,
              offset: 403,
            },
            end: {
              line: 5,
              column: 331,
              offset: 457,
            },
          },
        },
        {
          type: "text",
          value:
            ". Is that even enough neurons to have a sensation of thought? What ",
          position: {
            start: {
              line: 5,
              column: 331,
              offset: 457,
            },
            end: {
              line: 5,
              column: 398,
              offset: 524,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "is",
              position: {
                start: {
                  line: 5,
                  column: 399,
                  offset: 525,
                },
                end: {
                  line: 5,
                  column: 401,
                  offset: 527,
                },
              },
            },
          ],
          position: {
            start: {
              line: 5,
              column: 398,
              offset: 524,
            },
            end: {
              line: 5,
              column: 402,
              offset: 528,
            },
          },
        },
        {
          type: "text",
          value:
            " the sensation of thought? In any case, I figured, those poor things will never experience even a fraction of the thoughts that a human can have in the span of a single day. That left me with a nagging question, though.",
          position: {
            start: {
              line: 5,
              column: 402,
              offset: 528,
            },
            end: {
              line: 5,
              column: 621,
              offset: 747,
            },
          },
        },
      ],
      position: {
        start: {
          line: 5,
          column: 1,
          offset: 127,
        },
        end: {
          line: 5,
          column: 621,
          offset: 747,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Are there thoughts that no human will ever be able to think?",
              position: {
                start: {
                  line: 7,
                  column: 3,
                  offset: 751,
                },
                end: {
                  line: 7,
                  column: 63,
                  offset: 811,
                },
              },
            },
          ],
          position: {
            start: {
              line: 7,
              column: 3,
              offset: 751,
            },
            end: {
              line: 7,
              column: 63,
              offset: 811,
            },
          },
        },
      ],
      position: {
        start: {
          line: 7,
          column: 1,
          offset: 749,
        },
        end: {
          line: 7,
          column: 63,
          offset: 811,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "On one hand, thoughts are usually characterized (somewhat anthropocentrically) by the fact that someone, you know, ",
          position: {
            start: {
              line: 9,
              column: 1,
              offset: 813,
            },
            end: {
              line: 9,
              column: 116,
              offset: 928,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "thought",
              position: {
                start: {
                  line: 9,
                  column: 117,
                  offset: 929,
                },
                end: {
                  line: 9,
                  column: 124,
                  offset: 936,
                },
              },
            },
          ],
          position: {
            start: {
              line: 9,
              column: 116,
              offset: 928,
            },
            end: {
              line: 9,
              column: 125,
              offset: 937,
            },
          },
        },
        {
          type: "text",
          value:
            " them. I mean, a starfish definitely has no idea of the thoughts that lay beyond its simple echinodermic existence, so how could we?",
          position: {
            start: {
              line: 9,
              column: 125,
              offset: 937,
            },
            end: {
              line: 9,
              column: 257,
              offset: 1069,
            },
          },
        },
      ],
      position: {
        start: {
          line: 9,
          column: 1,
          offset: 813,
        },
        end: {
          line: 9,
          column: 257,
          offset: 1069,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Call me overconfident, but I have more faith in humans. With our self-awareness and power for abstraction, I think we can chip away at some different angles of this question and gain a vague intuition for what lies beyond. It's like looking at a black hole; there's literally nothing there to see– no photons to reach your eyes– but by observing all the stuff ",
          position: {
            start: {
              line: 11,
              column: 1,
              offset: 1071,
            },
            end: {
              line: 11,
              column: 361,
              offset: 1431,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "around it",
              position: {
                start: {
                  line: 11,
                  column: 362,
                  offset: 1432,
                },
                end: {
                  line: 11,
                  column: 371,
                  offset: 1441,
                },
              },
            },
          ],
          position: {
            start: {
              line: 11,
              column: 361,
              offset: 1431,
            },
            end: {
              line: 11,
              column: 372,
              offset: 1442,
            },
          },
        },
        {
          type: "text",
          value: ", we know it's there, and that's pretty cool.",
          position: {
            start: {
              line: 11,
              column: 372,
              offset: 1442,
            },
            end: {
              line: 11,
              column: 417,
              offset: 1487,
            },
          },
        },
      ],
      position: {
        start: {
          line: 11,
          column: 1,
          offset: 1071,
        },
        end: {
          line: 11,
          column: 417,
          offset: 1487,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "So with that said, let's think the unthinkable!",
          position: {
            start: {
              line: 13,
              column: 1,
              offset: 1489,
            },
            end: {
              line: 13,
              column: 48,
              offset: 1536,
            },
          },
        },
      ],
      position: {
        start: {
          line: 13,
          column: 1,
          offset: 1489,
        },
        end: {
          line: 13,
          column: 48,
          offset: 1536,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "First thoughts",
          position: {
            start: {
              line: 15,
              column: 4,
              offset: 1541,
            },
            end: {
              line: 15,
              column: 18,
              offset: 1555,
            },
          },
        },
      ],
      position: {
        start: {
          line: 15,
          column: 1,
          offset: 1538,
        },
        end: {
          line: 15,
          column: 18,
          offset: 1555,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I asked a few people this question and the first thing that usually came up were thoughts that are so unspeakably terrible that our brain resists our attempts to think them. After all, that's the typical meaning of the word \"unthinkable\". But for something that's supposedly unthinkable, these kinds of thoughts seem rather... I don't know, thinkable?",
          position: {
            start: {
              line: 17,
              column: 1,
              offset: 1557,
            },
            end: {
              line: 17,
              column: 352,
              offset: 1908,
            },
          },
        },
      ],
      position: {
        start: {
          line: 17,
          column: 1,
          offset: 1557,
        },
        end: {
          line: 17,
          column: 352,
          offset: 1908,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Moving on, another popular topic was language, and for good reason. Language symbolizes our thoughts in a very deep way; there's a pretty well-researched effect that the language you use affects ",
          position: {
            start: {
              line: 19,
              column: 1,
              offset: 1910,
            },
            end: {
              line: 19,
              column: 196,
              offset: 2105,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.researchgate.net/publication/273286375_Two_Languages_Two_Minds",
          children: [
            {
              type: "text",
              value: "the way you perceive the world",
              position: {
                start: {
                  line: 19,
                  column: 197,
                  offset: 2106,
                },
                end: {
                  line: 19,
                  column: 227,
                  offset: 2136,
                },
              },
            },
          ],
          position: {
            start: {
              line: 19,
              column: 196,
              offset: 2105,
            },
            end: {
              line: 19,
              column: 304,
              offset: 2213,
            },
          },
        },
        {
          type: "text",
          value:
            ". In the study I linked, researchers found that participants would describe the same event differently depending on the grammatical constraints of the language they used (in this case, English or German).",
          position: {
            start: {
              line: 19,
              column: 304,
              offset: 2213,
            },
            end: {
              line: 19,
              column: 508,
              offset: 2417,
            },
          },
        },
      ],
      position: {
        start: {
          line: 19,
          column: 1,
          offset: 1910,
        },
        end: {
          line: 19,
          column: 508,
          offset: 2417,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'So are "German thoughts" unthinkable to a non-German speaker?',
          position: {
            start: {
              line: 21,
              column: 1,
              offset: 2419,
            },
            end: {
              line: 21,
              column: 62,
              offset: 2480,
            },
          },
        },
      ],
      position: {
        start: {
          line: 21,
          column: 1,
          offset: 2419,
        },
        end: {
          line: 21,
          column: 62,
          offset: 2480,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The more you think about this, the less tractable it gets. For one thing, I'm sure the variation ",
          position: {
            start: {
              line: 23,
              column: 1,
              offset: 2482,
            },
            end: {
              line: 23,
              column: 98,
              offset: 2579,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "within",
              position: {
                start: {
                  line: 23,
                  column: 99,
                  offset: 2580,
                },
                end: {
                  line: 23,
                  column: 105,
                  offset: 2586,
                },
              },
            },
          ],
          position: {
            start: {
              line: 23,
              column: 98,
              offset: 2579,
            },
            end: {
              line: 23,
              column: 106,
              offset: 2587,
            },
          },
        },
        {
          type: "text",
          value: " groups is smaller than the variation ",
          position: {
            start: {
              line: 23,
              column: 106,
              offset: 2587,
            },
            end: {
              line: 23,
              column: 144,
              offset: 2625,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "between",
              position: {
                start: {
                  line: 23,
                  column: 145,
                  offset: 2626,
                },
                end: {
                  line: 23,
                  column: 152,
                  offset: 2633,
                },
              },
            },
          ],
          position: {
            start: {
              line: 23,
              column: 144,
              offset: 2625,
            },
            end: {
              line: 23,
              column: 153,
              offset: 2634,
            },
          },
        },
        {
          type: "text",
          value:
            ' them; in other words, if you could somehow measure the average "similarity in thought" between an Anglophone and a Germanophone, you could find two English speakers whose thought patterns are much more dissimilar.',
          position: {
            start: {
              line: 23,
              column: 153,
              offset: 2634,
            },
            end: {
              line: 23,
              column: 367,
              offset: 2848,
            },
          },
        },
      ],
      position: {
        start: {
          line: 23,
          column: 1,
          offset: 2482,
        },
        end: {
          line: 23,
          column: 367,
          offset: 2848,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But to me, this line of reasoning leads to a pretty reductionist conclusion: that ",
          position: {
            start: {
              line: 25,
              column: 1,
              offset: 2850,
            },
            end: {
              line: 25,
              column: 83,
              offset: 2932,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "every one else's",
              position: {
                start: {
                  line: 25,
                  column: 84,
                  offset: 2933,
                },
                end: {
                  line: 25,
                  column: 100,
                  offset: 2949,
                },
              },
            },
          ],
          position: {
            start: {
              line: 25,
              column: 83,
              offset: 2932,
            },
            end: {
              line: 25,
              column: 101,
              offset: 2950,
            },
          },
        },
        {
          type: "text",
          value:
            ' thoughts are "unthinkable" because the only way to truly experience their exact sensation of thought would be to have their same brain and memories. This isn\'t very interesting because it\'s more "unknowable" than "unthinkable". Rather than fall down the rabbit hole / dead end that is the ',
          position: {
            start: {
              line: 25,
              column: 101,
              offset: 2950,
            },
            end: {
              line: 25,
              column: 391,
              offset: 3240,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Hard_problem_of_consciousness",
          children: [
            {
              type: "text",
              value: "hard problem of consciousness",
              position: {
                start: {
                  line: 25,
                  column: 392,
                  offset: 3241,
                },
                end: {
                  line: 25,
                  column: 421,
                  offset: 3270,
                },
              },
            },
          ],
          position: {
            start: {
              line: 25,
              column: 391,
              offset: 3240,
            },
            end: {
              line: 25,
              column: 483,
              offset: 3332,
            },
          },
        },
        {
          type: "text",
          value:
            ", let's take a step back and think more holistically for a second.",
          position: {
            start: {
              line: 25,
              column: 483,
              offset: 3332,
            },
            end: {
              line: 25,
              column: 549,
              offset: 3398,
            },
          },
        },
      ],
      position: {
        start: {
          line: 25,
          column: 1,
          offset: 2850,
        },
        end: {
          line: 25,
          column: 549,
          offset: 3398,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Thought and experience",
          position: {
            start: {
              line: 27,
              column: 4,
              offset: 3403,
            },
            end: {
              line: 27,
              column: 26,
              offset: 3425,
            },
          },
        },
      ],
      position: {
        start: {
          line: 27,
          column: 1,
          offset: 3400,
        },
        end: {
          line: 27,
          column: 26,
          offset: 3425,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We're obviously dealing with a very thorny and layered question, but just to start somewhere, let's start with something we've all experienced: experiences. While I don't claim to know the exact relationship between experiences and thoughts, allow me to fulfill my quota of \"one controversial opinion per essay\" by asserting that there ",
          position: {
            start: {
              line: 29,
              column: 1,
              offset: 3427,
            },
            end: {
              line: 29,
              column: 337,
              offset: 3763,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "is",
              position: {
                start: {
                  line: 29,
                  column: 338,
                  offset: 3764,
                },
                end: {
                  line: 29,
                  column: 340,
                  offset: 3766,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 337,
              offset: 3763,
            },
            end: {
              line: 29,
              column: 341,
              offset: 3767,
            },
          },
        },
        {
          type: "text",
          value:
            " a relationship. Jokes aside, one could argue that all thoughts are rooted, somehow, in prior experience. Immediately after writing that sentence, I fell down a very deep rabbit hole called \"Would a brain that never received any stimulus experience thought?\" which I'm just going to have to put aside for now. It's still safe to say that most of your thoughts ",
          position: {
            start: {
              line: 29,
              column: 341,
              offset: 3767,
            },
            end: {
              line: 29,
              column: 701,
              offset: 4127,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "draw from",
              position: {
                start: {
                  line: 29,
                  column: 702,
                  offset: 4128,
                },
                end: {
                  line: 29,
                  column: 711,
                  offset: 4137,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 701,
              offset: 4127,
            },
            end: {
              line: 29,
              column: 712,
              offset: 4138,
            },
          },
        },
        {
          type: "text",
          value: " your experiences, ",
          position: {
            start: {
              line: 29,
              column: 712,
              offset: 4138,
            },
            end: {
              line: 29,
              column: 731,
              offset: 4157,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "real",
          },
          children: [
            {
              type: "text",
              value: '"real"',
              position: {
                start: {
                  line: 29,
                  column: 737,
                  offset: 4163,
                },
                end: {
                  line: 29,
                  column: 743,
                  offset: 4169,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 731,
              offset: 4157,
            },
            end: {
              line: 29,
              column: 755,
              offset: 4181,
            },
          },
        },
        {
          type: "text",
          value: " or imagined.",
          position: {
            start: {
              line: 29,
              column: 755,
              offset: 4181,
            },
            end: {
              line: 29,
              column: 768,
              offset: 4194,
            },
          },
        },
      ],
      position: {
        start: {
          line: 29,
          column: 1,
          offset: 3427,
        },
        end: {
          line: 29,
          column: 768,
          offset: 4194,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Let's take an apple, the poster child of thinkable objects. Thinking about an apple is pretty easy. If you're a visual thinker, you can just picture an apple. Visual thinking isn't the only way to go, though. If it was, we'd have to argue that people with ",
          position: {
            start: {
              line: 31,
              column: 1,
              offset: 4196,
            },
            end: {
              line: 31,
              column: 257,
              offset: 4452,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Aphantasia",
          children: [
            {
              type: "text",
              value: "aphantasia",
              position: {
                start: {
                  line: 31,
                  column: 258,
                  offset: 4453,
                },
                end: {
                  line: 31,
                  column: 268,
                  offset: 4463,
                },
              },
            },
          ],
          position: {
            start: {
              line: 31,
              column: 257,
              offset: 4452,
            },
            end: {
              line: 31,
              column: 311,
              offset: 4506,
            },
          },
        },
        {
          type: "text",
          value:
            " can't think of things, which is a loser take. Personally, if you asked me to think of an apple, the experience is more like a vague ",
          position: {
            start: {
              line: 31,
              column: 311,
              offset: 4506,
            },
            end: {
              line: 31,
              column: 444,
              offset: 4639,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "concept",
              position: {
                start: {
                  line: 31,
                  column: 445,
                  offset: 4640,
                },
                end: {
                  line: 31,
                  column: 452,
                  offset: 4647,
                },
              },
            },
          ],
          position: {
            start: {
              line: 31,
              column: 444,
              offset: 4639,
            },
            end: {
              line: 31,
              column: 453,
              offset: 4648,
            },
          },
        },
        {
          type: "text",
          value:
            ' of an apple being brought to the forefront of my mind, primed to answer questions like "what does one taste like?" or "could you build a house out of them?". I\'ve also had plenty of experiences with apples, so it\'s equally easy to think about apples rolling down hills, people bobbing for apples, and so on.',
          position: {
            start: {
              line: 31,
              column: 453,
              offset: 4648,
            },
            end: {
              line: 31,
              column: 761,
              offset: 4956,
            },
          },
        },
      ],
      position: {
        start: {
          line: 31,
          column: 1,
          offset: 4196,
        },
        end: {
          line: 31,
          column: 761,
          offset: 4956,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "unthinkable/apple.png",
          alt: "An apple",
          position: {
            start: {
              line: 33,
              column: 1,
              offset: 4958,
            },
            end: {
              line: 33,
              column: 35,
              offset: 4992,
            },
          },
        },
      ],
      position: {
        start: {
          line: 33,
          column: 1,
          offset: 4958,
        },
        end: {
          line: 33,
          column: 35,
          offset: 4992,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "It goes a step further; I've never seen a blue apple, in person or otherwise, but it's just as easy to conceptualize a blue apple. Why? I've seen blue things, and I've seen apples, and I've seen things be different colors, so bada-bing, bada-boom, blue apple.",
          position: {
            start: {
              line: 35,
              column: 1,
              offset: 4994,
            },
            end: {
              line: 35,
              column: 260,
              offset: 5253,
            },
          },
        },
      ],
      position: {
        start: {
          line: 35,
          column: 1,
          offset: 4994,
        },
        end: {
          line: 35,
          column: 260,
          offset: 5253,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We can take this yet another step further, beyond the realm of things I haven't experienced to the realm of things no human ",
          position: {
            start: {
              line: 37,
              column: 1,
              offset: 5255,
            },
            end: {
              line: 37,
              column: 125,
              offset: 5379,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "possibly-experience",
          },
          children: [
            {
              type: "text",
              value: "could possibly experience",
              position: {
                start: {
                  line: 37,
                  column: 131,
                  offset: 5385,
                },
                end: {
                  line: 37,
                  column: 156,
                  offset: 5410,
                },
              },
            },
          ],
          position: {
            start: {
              line: 37,
              column: 125,
              offset: 5379,
            },
            end: {
              line: 37,
              column: 183,
              offset: 5437,
            },
          },
        },
        {
          type: "text",
          value:
            ", like a cow jumping over the moon or a person walking through a wall. Impossible to think? Not in the slightest; I just did, and you did as well. I can picture a cow jumping over the moon because I've seen cows, animals jumping, and the moon. Even if I hadn't seen characters clipping through walls in video games, I could draw from my experience of liquids to imagine someone walking through a wall as if it were a vertical pool of viscous wall-like liquid.",
          position: {
            start: {
              line: 37,
              column: 183,
              offset: 5437,
            },
            end: {
              line: 37,
              column: 642,
              offset: 5896,
            },
          },
        },
      ],
      position: {
        start: {
          line: 37,
          column: 1,
          offset: 5255,
        },
        end: {
          line: 37,
          column: 642,
          offset: 5896,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "This feels like ",
          position: {
            start: {
              line: 39,
              column: 1,
              offset: 5898,
            },
            end: {
              line: 39,
              column: 17,
              offset: 5914,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "second-nature",
          },
          children: [
            {
              type: "text",
              value: "second nature",
              position: {
                start: {
                  line: 39,
                  column: 23,
                  offset: 5920,
                },
                end: {
                  line: 39,
                  column: 36,
                  offset: 5933,
                },
              },
            },
          ],
          position: {
            start: {
              line: 39,
              column: 17,
              offset: 5914,
            },
            end: {
              line: 39,
              column: 57,
              offset: 5954,
            },
          },
        },
        {
          type: "text",
          value:
            " to us (because it is), but it's actually extremely deep. Our capability to imagine impossibilities by freely combining concepts is one of our greatest strengths. In fact, without it, we wouldn't have the rich language that sets us apart from other animals. As Professor Dr. Eric Reuland writes in his paper ",
          position: {
            start: {
              line: 39,
              column: 57,
              offset: 5954,
            },
            end: {
              line: 39,
              column: 365,
              offset: 6262,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://pubmed.ncbi.nlm.nih.gov/28041788/",
          children: [
            {
              type: "text",
              value: "Language and imagination: Evolutionary explorations",
              position: {
                start: {
                  line: 39,
                  column: 366,
                  offset: 6263,
                },
                end: {
                  line: 39,
                  column: 417,
                  offset: 6314,
                },
              },
            },
          ],
          position: {
            start: {
              line: 39,
              column: 365,
              offset: 6262,
            },
            end: {
              line: 39,
              column: 461,
              offset: 6358,
            },
          },
        },
        {
          type: "text",
          value: ":",
          position: {
            start: {
              line: 39,
              column: 461,
              offset: 6358,
            },
            end: {
              line: 39,
              column: 462,
              offset: 6359,
            },
          },
        },
      ],
      position: {
        start: {
          line: 39,
          column: 1,
          offset: 5898,
        },
        end: {
          line: 39,
          column: 462,
          offset: 6359,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Given [our linguistic tools], we have recursive combinability and principles enabling the interpretation of the structures produced. The interpretation rules are insensitive to plausibility or implausibility, sense or nonsense. They as easily combine ",
              position: {
                start: {
                  line: 41,
                  column: 3,
                  offset: 6363,
                },
                end: {
                  line: 41,
                  column: 254,
                  offset: 6614,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "brown",
                  position: {
                    start: {
                      line: 41,
                      column: 255,
                      offset: 6615,
                    },
                    end: {
                      line: 41,
                      column: 260,
                      offset: 6620,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 254,
                  offset: 6614,
                },
                end: {
                  line: 41,
                  column: 261,
                  offset: 6621,
                },
              },
            },
            {
              type: "text",
              value: " with ",
              position: {
                start: {
                  line: 41,
                  column: 261,
                  offset: 6621,
                },
                end: {
                  line: 41,
                  column: 267,
                  offset: 6627,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "bear",
                  position: {
                    start: {
                      line: 41,
                      column: 268,
                      offset: 6628,
                    },
                    end: {
                      line: 41,
                      column: 272,
                      offset: 6632,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 267,
                  offset: 6627,
                },
                end: {
                  line: 41,
                  column: 273,
                  offset: 6633,
                },
              },
            },
            {
              type: "text",
              value: " as ",
              position: {
                start: {
                  line: 41,
                  column: 273,
                  offset: 6633,
                },
                end: {
                  line: 41,
                  column: 277,
                  offset: 6637,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "square",
                  position: {
                    start: {
                      line: 41,
                      column: 278,
                      offset: 6638,
                    },
                    end: {
                      line: 41,
                      column: 284,
                      offset: 6644,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 277,
                  offset: 6637,
                },
                end: {
                  line: 41,
                  column: 285,
                  offset: 6645,
                },
              },
            },
            {
              type: "text",
              value: " with ",
              position: {
                start: {
                  line: 41,
                  column: 285,
                  offset: 6645,
                },
                end: {
                  line: 41,
                  column: 291,
                  offset: 6651,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "circle",
                  position: {
                    start: {
                      line: 41,
                      column: 292,
                      offset: 6652,
                    },
                    end: {
                      line: 41,
                      column: 298,
                      offset: 6658,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 291,
                  offset: 6651,
                },
                end: {
                  line: 41,
                  column: 299,
                  offset: 6659,
                },
              },
            },
            {
              type: "text",
              value: " or ",
              position: {
                start: {
                  line: 41,
                  column: 299,
                  offset: 6659,
                },
                end: {
                  line: 41,
                  column: 303,
                  offset: 6663,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "white",
                  position: {
                    start: {
                      line: 41,
                      column: 304,
                      offset: 6664,
                    },
                    end: {
                      line: 41,
                      column: 309,
                      offset: 6669,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 303,
                  offset: 6663,
                },
                end: {
                  line: 41,
                  column: 310,
                  offset: 6670,
                },
              },
            },
            {
              type: "text",
              value: " (or ",
              position: {
                start: {
                  line: 41,
                  column: 310,
                  offset: 6670,
                },
                end: {
                  line: 41,
                  column: 315,
                  offset: 6675,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "black",
                  position: {
                    start: {
                      line: 41,
                      column: 316,
                      offset: 6676,
                    },
                    end: {
                      line: 41,
                      column: 321,
                      offset: 6681,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 315,
                  offset: 6675,
                },
                end: {
                  line: 41,
                  column: 322,
                  offset: 6682,
                },
              },
            },
            {
              type: "text",
              value: ") with ",
              position: {
                start: {
                  line: 41,
                  column: 322,
                  offset: 6682,
                },
                end: {
                  line: 41,
                  column: 329,
                  offset: 6689,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "hole",
                  position: {
                    start: {
                      line: 41,
                      column: 330,
                      offset: 6690,
                    },
                    end: {
                      line: 41,
                      column: 334,
                      offset: 6694,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 329,
                  offset: 6689,
                },
                end: {
                  line: 41,
                  column: 335,
                  offset: 6695,
                },
              },
            },
            {
              type: "text",
              value:
                ". A stone may jump, a mountain may hear. In short what we have is ",
              position: {
                start: {
                  line: 41,
                  column: 335,
                  offset: 6695,
                },
                end: {
                  line: 41,
                  column: 401,
                  offset: 6761,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "imagination unleashed",
                  position: {
                    start: {
                      line: 41,
                      column: 402,
                      offset: 6762,
                    },
                    end: {
                      line: 41,
                      column: 423,
                      offset: 6783,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 41,
                  column: 401,
                  offset: 6761,
                },
                end: {
                  line: 41,
                  column: 424,
                  offset: 6784,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 41,
                  column: 424,
                  offset: 6784,
                },
                end: {
                  line: 41,
                  column: 425,
                  offset: 6785,
                },
              },
            },
          ],
          position: {
            start: {
              line: 41,
              column: 3,
              offset: 6363,
            },
            end: {
              line: 41,
              column: 425,
              offset: 6785,
            },
          },
        },
      ],
      position: {
        start: {
          line: 41,
          column: 1,
          offset: 6361,
        },
        end: {
          line: 41,
          column: 425,
          offset: 6785,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "So, if our brain is capable of combining concepts to create essentially infinitely many imagined realities, what could possibly stop us?",
          position: {
            start: {
              line: 43,
              column: 1,
              offset: 6787,
            },
            end: {
              line: 43,
              column: 137,
              offset: 6923,
            },
          },
        },
      ],
      position: {
        start: {
          line: 43,
          column: 1,
          offset: 6787,
        },
        end: {
          line: 43,
          column: 137,
          offset: 6923,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "The speed of thought",
          position: {
            start: {
              line: 45,
              column: 5,
              offset: 6929,
            },
            end: {
              line: 45,
              column: 25,
              offset: 6949,
            },
          },
        },
      ],
      position: {
        start: {
          line: 45,
          column: 1,
          offset: 6925,
        },
        end: {
          line: 45,
          column: 25,
          offset: 6949,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'Let\'s travel 10,000 years back in time to 8,000 BC and find a "bustling" agricultural civilization nestled in the ',
          position: {
            start: {
              line: 47,
              column: 1,
              offset: 6951,
            },
            end: {
              line: 47,
              column: 115,
              offset: 7065,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Fertile_Crescent",
          children: [
            {
              type: "text",
              value: "Fertile Crescent",
              position: {
                start: {
                  line: 47,
                  column: 116,
                  offset: 7066,
                },
                end: {
                  line: 47,
                  column: 132,
                  offset: 7082,
                },
              },
            },
          ],
          position: {
            start: {
              line: 47,
              column: 115,
              offset: 7065,
            },
            end: {
              line: 47,
              column: 181,
              offset: 7131,
            },
          },
        },
        {
          type: "text",
          value:
            ". You think, well, here are a bunch of humans who have brains essentially identical to ours (evolutionarily speaking) and are capable of full-fledged spoken language. Now, let's just wait for one of them to randomly synthesize enough thoughts to stumble upon the modern-day design of the internet. Just to make it a little more tractible, say we come up with a description of the internet that feels sufficiently accurate while being ",
          position: {
            start: {
              line: 47,
              column: 181,
              offset: 7131,
            },
            end: {
              line: 47,
              column: 615,
              offset: 7565,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "theoretically",
              position: {
                start: {
                  line: 47,
                  column: 616,
                  offset: 7566,
                },
                end: {
                  line: 47,
                  column: 629,
                  offset: 7579,
                },
              },
            },
          ],
          position: {
            start: {
              line: 47,
              column: 615,
              offset: 7565,
            },
            end: {
              line: 47,
              column: 630,
              offset: 7580,
            },
          },
        },
        {
          type: "text",
          value:
            " possible to grasp by a person with 8,000 BC technology. I made an attempt for the sake of illustration; read it if you want, but it's mostly a proof of concept.",
          position: {
            start: {
              line: 47,
              column: 630,
              offset: 7580,
            },
            end: {
              line: 47,
              column: 791,
              offset: 7741,
            },
          },
        },
      ],
      position: {
        start: {
          line: 47,
          column: 1,
          offset: 6951,
        },
        end: {
          line: 47,
          column: 791,
          offset: 7741,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "The internet for the Stone Age polymath",
                  position: {
                    start: {
                      line: 49,
                      column: 5,
                      offset: 7747,
                    },
                    end: {
                      line: 49,
                      column: 44,
                      offset: 7786,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 49,
                  column: 3,
                  offset: 7745,
                },
                end: {
                  line: 49,
                  column: 46,
                  offset: 7788,
                },
              },
            },
          ],
          position: {
            start: {
              line: 49,
              column: 3,
              offset: 7745,
            },
            end: {
              line: 49,
              column: 46,
              offset: 7788,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "First, we must understand the idea of code. A code is essentially a way of using ",
              position: {
                start: {
                  line: 51,
                  column: 3,
                  offset: 7793,
                },
                end: {
                  line: 51,
                  column: 84,
                  offset: 7874,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "symbols",
                  position: {
                    start: {
                      line: 51,
                      column: 85,
                      offset: 7875,
                    },
                    end: {
                      line: 51,
                      column: 92,
                      offset: 7882,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 51,
                  column: 84,
                  offset: 7874,
                },
                end: {
                  line: 51,
                  column: 93,
                  offset: 7883,
                },
              },
            },
            {
              type: "text",
              value: " to ",
              position: {
                start: {
                  line: 51,
                  column: 93,
                  offset: 7883,
                },
                end: {
                  line: 51,
                  column: 97,
                  offset: 7887,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "represent",
                  position: {
                    start: {
                      line: 51,
                      column: 98,
                      offset: 7888,
                    },
                    end: {
                      line: 51,
                      column: 107,
                      offset: 7897,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 51,
                  column: 97,
                  offset: 7887,
                },
                end: {
                  line: 51,
                  column: 108,
                  offset: 7898,
                },
              },
            },
            {
              type: "text",
              value: " something. Once you understand this, you can invent ",
              position: {
                start: {
                  line: 51,
                  column: 108,
                  offset: 7898,
                },
                end: {
                  line: 51,
                  column: 161,
                  offset: 7951,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "written language",
                  position: {
                    start: {
                      line: 51,
                      column: 162,
                      offset: 7952,
                    },
                    end: {
                      line: 51,
                      column: 178,
                      offset: 7968,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 51,
                  column: 161,
                  offset: 7951,
                },
                end: {
                  line: 51,
                  column: 179,
                  offset: 7969,
                },
              },
            },
            {
              type: "text",
              value: ", which uses an ",
              position: {
                start: {
                  line: 51,
                  column: 179,
                  offset: 7969,
                },
                end: {
                  line: 51,
                  column: 195,
                  offset: 7985,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "alphabet",
                  position: {
                    start: {
                      line: 51,
                      column: 196,
                      offset: 7986,
                    },
                    end: {
                      line: 51,
                      column: 204,
                      offset: 7994,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 51,
                  column: 195,
                  offset: 7985,
                },
                end: {
                  line: 51,
                  column: 205,
                  offset: 7995,
                },
              },
            },
            {
              type: "text",
              value:
                " (a set of symbols) to represent spoken language. Similarly with numbers to represent the quantity of things. Now, consider a message which says ",
              position: {
                start: {
                  line: 51,
                  column: 205,
                  offset: 7995,
                },
                end: {
                  line: 51,
                  column: 350,
                  offset: 8140,
                },
              },
            },
            {
              type: "inlineCode",
              value: 'erase all the letter "e"s in this message',
              position: {
                start: {
                  line: 51,
                  column: 350,
                  offset: 8140,
                },
                end: {
                  line: 51,
                  column: 393,
                  offset: 8183,
                },
              },
            },
            {
              type: "text",
              value:
                ". If you were to follow this instruction, you would modify the symbols in the message and wind up with ",
              position: {
                start: {
                  line: 51,
                  column: 393,
                  offset: 8183,
                },
                end: {
                  line: 51,
                  column: 496,
                  offset: 8286,
                },
              },
            },
            {
              type: "inlineCode",
              value: 'ras all th lttr ""s in this mssag',
              position: {
                start: {
                  line: 51,
                  column: 496,
                  offset: 8286,
                },
                end: {
                  line: 51,
                  column: 531,
                  offset: 8321,
                },
              },
            },
            {
              type: "text",
              value: ". This illustrates the point that symbols can be ",
              position: {
                start: {
                  line: 51,
                  column: 531,
                  offset: 8321,
                },
                end: {
                  line: 51,
                  column: 580,
                  offset: 8370,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "both",
                  position: {
                    start: {
                      line: 51,
                      column: 581,
                      offset: 8371,
                    },
                    end: {
                      line: 51,
                      column: 585,
                      offset: 8375,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 51,
                  column: 580,
                  offset: 8370,
                },
                end: {
                  line: 51,
                  column: 586,
                  offset: 8376,
                },
              },
            },
            {
              type: "text",
              value: ' "just" symbols ',
              position: {
                start: {
                  line: 51,
                  column: 586,
                  offset: 8376,
                },
                end: {
                  line: 51,
                  column: 602,
                  offset: 8392,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "and",
                  position: {
                    start: {
                      line: 51,
                      column: 603,
                      offset: 8393,
                    },
                    end: {
                      line: 51,
                      column: 606,
                      offset: 8396,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 51,
                  column: 602,
                  offset: 8392,
                },
                end: {
                  line: 51,
                  column: 607,
                  offset: 8397,
                },
              },
            },
            {
              type: "text",
              value: " (once interpreted) instructions for modifying symbols.",
              position: {
                start: {
                  line: 51,
                  column: 607,
                  offset: 8397,
                },
                end: {
                  line: 51,
                  column: 662,
                  offset: 8452,
                },
              },
            },
          ],
          position: {
            start: {
              line: 51,
              column: 3,
              offset: 7793,
            },
            end: {
              line: 51,
              column: 662,
              offset: 8452,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Once you grasp this concept, you can begin to conceptualize a Turing Machine (which is better described ",
              position: {
                start: {
                  line: 53,
                  column: 3,
                  offset: 8457,
                },
                end: {
                  line: 53,
                  column: 107,
                  offset: 8561,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://www.quantamagazine.org/alan-turings-most-important-machine-was-never-built-20230503/",
              children: [
                {
                  type: "text",
                  value: "elsewhere",
                  position: {
                    start: {
                      line: 53,
                      column: 108,
                      offset: 8562,
                    },
                    end: {
                      line: 53,
                      column: 117,
                      offset: 8571,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 53,
                  column: 107,
                  offset: 8561,
                },
                end: {
                  line: 53,
                  column: 212,
                  offset: 8666,
                },
              },
            },
            {
              type: "text",
              value:
                ', but which doesn\'t require any fancy mathematics or material science to imagine). Once you\'ve got the Turing Machine down, you can start to imagine that you have a physical material that allows you to represent symbols; for example, a magical material that can be precisely controlled to have two states: an "off" and "on" state. We\'ll call one chunk of this material a ',
              position: {
                start: {
                  line: 53,
                  column: 212,
                  offset: 8666,
                },
                end: {
                  line: 53,
                  column: 583,
                  offset: 9037,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "bit",
                  position: {
                    start: {
                      line: 53,
                      column: 584,
                      offset: 9038,
                    },
                    end: {
                      line: 53,
                      column: 587,
                      offset: 9041,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 53,
                  column: 583,
                  offset: 9037,
                },
                end: {
                  line: 53,
                  column: 588,
                  offset: 9042,
                },
              },
            },
            {
              type: "text",
              value:
                '. Just like the "e" example, these bits can be used both as data (for example, to represent a message in written language) and instructions (for example, a procedure for moving a message from the bits its currently stored on to another set of bits). Building on this contept, you can arrive at the idea of a ',
              position: {
                start: {
                  line: 53,
                  column: 588,
                  offset: 9042,
                },
                end: {
                  line: 53,
                  column: 896,
                  offset: 9350,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "programmable computer",
                  position: {
                    start: {
                      line: 53,
                      column: 897,
                      offset: 9351,
                    },
                    end: {
                      line: 53,
                      column: 918,
                      offset: 9372,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 53,
                  column: 896,
                  offset: 9350,
                },
                end: {
                  line: 53,
                  column: 919,
                  offset: 9373,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 53,
                  column: 919,
                  offset: 9373,
                },
                end: {
                  line: 53,
                  column: 920,
                  offset: 9374,
                },
              },
            },
          ],
          position: {
            start: {
              line: 53,
              column: 3,
              offset: 8457,
            },
            end: {
              line: 53,
              column: 920,
              offset: 9374,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                'Now, let\'s say you have a computer, and your friend has a computer in another distant village. You have a message stored on your computer that you want to send to your friend. You could connect your computers with a long wire, which is made of a material that can turn "off" or "on", just like bits. Since your computers are programmable, you can write instructions to take the message on your computer and flash the wire "on" and "off" to "read" out the message on your computer. Your friend\'s computer would have a similar program to "read" the wire and copy the pattern of "off"s and "on"s onto its own bits. Now, in essence, you have the internet!',
              position: {
                start: {
                  line: 55,
                  column: 3,
                  offset: 9379,
                },
                end: {
                  line: 55,
                  column: 654,
                  offset: 10030,
                },
              },
            },
          ],
          position: {
            start: {
              line: 55,
              column: 3,
              offset: 9379,
            },
            end: {
              line: 55,
              column: 654,
              offset: 10030,
            },
          },
        },
      ],
      position: {
        start: {
          line: 49,
          column: 1,
          offset: 7743,
        },
        end: {
          line: 55,
          column: 654,
          offset: 10030,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Obviously, there are tweaks that could be made. For example, I left out the idea of keyboards and monitors, and I didn't mention how wires can be replaced with wireless technology, but the core idea is there. This description also doesn't make any mention of electricity, which I think is acceptable because the exact mechanics of electricity is ",
          position: {
            start: {
              line: 57,
              column: 1,
              offset: 10032,
            },
            end: {
              line: 57,
              column: 347,
              offset: 10378,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "implementation-detail",
          },
          children: [
            {
              type: "text",
              value:
                "low-level enough to be an implementation detail of computers and the internet",
              position: {
                start: {
                  line: 57,
                  column: 353,
                  offset: 10384,
                },
                end: {
                  line: 57,
                  column: 430,
                  offset: 10461,
                },
              },
            },
          ],
          position: {
            start: {
              line: 57,
              column: 347,
              offset: 10378,
            },
            end: {
              line: 57,
              column: 459,
              offset: 10490,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 57,
              column: 459,
              offset: 10490,
            },
            end: {
              line: 57,
              column: 460,
              offset: 10491,
            },
          },
        },
      ],
      position: {
        start: {
          line: 57,
          column: 1,
          offset: 10032,
        },
        end: {
          line: 57,
          column: 460,
          offset: 10491,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I'm not sure if I even have to say this, but the odds that a Neolithic person living in Neolithic times could make these conceptual breakthroughs is ",
          position: {
            start: {
              line: 59,
              column: 1,
              offset: 10493,
            },
            end: {
              line: 59,
              column: 150,
              offset: 10642,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "astronomically",
              position: {
                start: {
                  line: 59,
                  column: 151,
                  offset: 10643,
                },
                end: {
                  line: 59,
                  column: 165,
                  offset: 10657,
                },
              },
            },
          ],
          position: {
            start: {
              line: 59,
              column: 150,
              offset: 10642,
            },
            end: {
              line: 59,
              column: 166,
              offset: 10658,
            },
          },
        },
        {
          type: "text",
          value:
            " unlikely, and I'm even tempted to claim that it's categorically ",
          position: {
            start: {
              line: 59,
              column: 166,
              offset: 10658,
            },
            end: {
              line: 59,
              column: 231,
              offset: 10723,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "impossible",
              position: {
                start: {
                  line: 59,
                  column: 232,
                  offset: 10724,
                },
                end: {
                  line: 59,
                  column: 242,
                  offset: 10734,
                },
              },
            },
          ],
          position: {
            start: {
              line: 59,
              column: 231,
              offset: 10723,
            },
            end: {
              line: 59,
              column: 243,
              offset: 10735,
            },
          },
        },
        {
          type: "text",
          value:
            ". That, even if you simulated infinitely many neolithic agricultural societies, there wouldn't be ",
          position: {
            start: {
              line: 59,
              column: 243,
              offset: 10735,
            },
            end: {
              line: 59,
              column: 341,
              offset: 10833,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "one",
              position: {
                start: {
                  line: 59,
                  column: 342,
                  offset: 10834,
                },
                end: {
                  line: 59,
                  column: 345,
                  offset: 10837,
                },
              },
            },
          ],
          position: {
            start: {
              line: 59,
              column: 341,
              offset: 10833,
            },
            end: {
              line: 59,
              column: 346,
              offset: 10838,
            },
          },
        },
        {
          type: "text",
          value:
            " human that could conceptualize the idea of the internet in this way. I don't have any hard facts to back up that stronger claim, but if you don't believe me, try it and get back to me.",
          position: {
            start: {
              line: 59,
              column: 346,
              offset: 10838,
            },
            end: {
              line: 59,
              column: 531,
              offset: 11023,
            },
          },
        },
      ],
      position: {
        start: {
          line: 59,
          column: 1,
          offset: 10493,
        },
        end: {
          line: 59,
          column: 531,
          offset: 11023,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "I mean, the ",
          position: {
            start: {
              line: 61,
              column: 1,
              offset: 11025,
            },
            end: {
              line: 61,
              column: 13,
              offset: 11037,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "second step",
              position: {
                start: {
                  line: 61,
                  column: 14,
                  offset: 11038,
                },
                end: {
                  line: 61,
                  column: 25,
                  offset: 11049,
                },
              },
            },
          ],
          position: {
            start: {
              line: 61,
              column: 13,
              offset: 11037,
            },
            end: {
              line: 61,
              column: 26,
              offset: 11050,
            },
          },
        },
        {
          type: "text",
          value:
            " in that sequence– recognizing that symbols can be used to represent spoken language– took about another six ",
          position: {
            start: {
              line: 61,
              column: 26,
              offset: 11050,
            },
            end: {
              line: 61,
              column: 135,
              offset: 11159,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "thousand",
              position: {
                start: {
                  line: 61,
                  column: 136,
                  offset: 11160,
                },
                end: {
                  line: 61,
                  column: 144,
                  offset: 11168,
                },
              },
            },
          ],
          position: {
            start: {
              line: 61,
              column: 135,
              offset: 11159,
            },
            end: {
              line: 61,
              column: 145,
              offset: 11169,
            },
          },
        },
        {
          type: "text",
          value:
            " years from the Stone Age to work out. While we can't say for sure that ",
          position: {
            start: {
              line: 61,
              column: 145,
              offset: 11169,
            },
            end: {
              line: 61,
              column: 217,
              offset: 11241,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "no one",
              position: {
                start: {
                  line: 61,
                  column: 218,
                  offset: 11242,
                },
                end: {
                  line: 61,
                  column: 224,
                  offset: 11248,
                },
              },
            },
          ],
          position: {
            start: {
              line: 61,
              column: 217,
              offset: 11241,
            },
            end: {
              line: 61,
              column: 225,
              offset: 11249,
            },
          },
        },
        {
          type: "text",
          value: " had the idea of written language, six ",
          position: {
            start: {
              line: 61,
              column: 225,
              offset: 11249,
            },
            end: {
              line: 61,
              column: 264,
              offset: 11288,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "thousand",
              position: {
                start: {
                  line: 61,
                  column: 265,
                  offset: 11289,
                },
                end: {
                  line: 61,
                  column: 273,
                  offset: 11297,
                },
              },
            },
          ],
          position: {
            start: {
              line: 61,
              column: 264,
              offset: 11288,
            },
            end: {
              line: 61,
              column: 274,
              offset: 11298,
            },
          },
        },
        {
          type: "text",
          value: " years without evidence of writing sure says something.",
          position: {
            start: {
              line: 61,
              column: 274,
              offset: 11298,
            },
            end: {
              line: 61,
              column: 329,
              offset: 11353,
            },
          },
        },
      ],
      position: {
        start: {
          line: 61,
          column: 1,
          offset: 11025,
        },
        end: {
          line: 61,
          column: 329,
          offset: 11353,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "memetics",
          },
          children: [
            {
              type: "text",
              value: "Ideas follow the laws of natural selection",
              position: {
                start: {
                  line: 63,
                  column: 7,
                  offset: 11361,
                },
                end: {
                  line: 63,
                  column: 49,
                  offset: 11403,
                },
              },
            },
          ],
          position: {
            start: {
              line: 63,
              column: 1,
              offset: 11355,
            },
            end: {
              line: 63,
              column: 65,
              offset: 11419,
            },
          },
        },
        {
          type: "text",
          value: ", and as such, complex concepts just take ",
          position: {
            start: {
              line: 63,
              column: 65,
              offset: 11419,
            },
            end: {
              line: 63,
              column: 107,
              offset: 11461,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "time",
              position: {
                start: {
                  line: 63,
                  column: 108,
                  offset: 11462,
                },
                end: {
                  line: 63,
                  column: 112,
                  offset: 11466,
                },
              },
            },
          ],
          position: {
            start: {
              line: 63,
              column: 107,
              offset: 11461,
            },
            end: {
              line: 63,
              column: 113,
              offset: 11467,
            },
          },
        },
        {
          type: "text",
          value: " and ",
          position: {
            start: {
              line: 63,
              column: 113,
              offset: 11467,
            },
            end: {
              line: 63,
              column: 118,
              offset: 11472,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "generations",
              position: {
                start: {
                  line: 63,
                  column: 119,
                  offset: 11473,
                },
                end: {
                  line: 63,
                  column: 130,
                  offset: 11484,
                },
              },
            },
          ],
          position: {
            start: {
              line: 63,
              column: 118,
              offset: 11472,
            },
            end: {
              line: 63,
              column: 131,
              offset: 11485,
            },
          },
        },
        {
          type: "text",
          value: " to pop into existence. Just as ",
          position: {
            start: {
              line: 63,
              column: 131,
              offset: 11485,
            },
            end: {
              line: 63,
              column: 163,
              offset: 11517,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "evolution",
          },
          children: [
            {
              type: "text",
              value: "humans didn't suddenly pop into existence",
              position: {
                start: {
                  line: 63,
                  column: 169,
                  offset: 11523,
                },
                end: {
                  line: 63,
                  column: 210,
                  offset: 11564,
                },
              },
            },
          ],
          position: {
            start: {
              line: 63,
              column: 163,
              offset: 11517,
            },
            end: {
              line: 63,
              column: 227,
              offset: 11581,
            },
          },
        },
        {
          type: "text",
          value:
            " in a vacuum, but evolved over millions of years of natural selection, the thought of an internet made of computers was developed gradually over thousands of years, each generation of great minds standing atop the shoulders of the society that came before.",
          position: {
            start: {
              line: 63,
              column: 227,
              offset: 11581,
            },
            end: {
              line: 63,
              column: 483,
              offset: 11837,
            },
          },
        },
      ],
      position: {
        start: {
          line: 63,
          column: 1,
          offset: 11355,
        },
        end: {
          line: 63,
          column: 483,
          offset: 11837,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I think about Isaac Newton a lot in the context of being ahead of one's time. Newton's genius was pretty hard to understate. Over the course of the eight decades of his life, he:",
          position: {
            start: {
              line: 65,
              column: 1,
              offset: 11839,
            },
            end: {
              line: 65,
              column: 179,
              offset: 12017,
            },
          },
        },
      ],
      position: {
        start: {
          line: 65,
          column: 1,
          offset: 11839,
        },
        end: {
          line: 65,
          column: 179,
          offset: 12017,
        },
      },
    },
    {
      type: "list",
      ordered: false,
      start: null,
      spread: false,
      children: [
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Generalized the binomial theorem from positive integers to all real numbers",
                  position: {
                    start: {
                      line: 67,
                      column: 3,
                      offset: 12021,
                    },
                    end: {
                      line: 67,
                      column: 78,
                      offset: 12096,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 67,
                  column: 3,
                  offset: 12021,
                },
                end: {
                  line: 67,
                  column: 78,
                  offset: 12096,
                },
              },
            },
          ],
          position: {
            start: {
              line: 67,
              column: 1,
              offset: 12019,
            },
            end: {
              line: 67,
              column: 78,
              offset: 12096,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "Invented the reflecting telescope",
                  position: {
                    start: {
                      line: 68,
                      column: 3,
                      offset: 12099,
                    },
                    end: {
                      line: 68,
                      column: 36,
                      offset: 12132,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 68,
                  column: 3,
                  offset: 12099,
                },
                end: {
                  line: 68,
                  column: 36,
                  offset: 12132,
                },
              },
            },
          ],
          position: {
            start: {
              line: 68,
              column: 1,
              offset: 12097,
            },
            end: {
              line: 68,
              column: 36,
              offset: 12132,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "Invented calculus",
                  position: {
                    start: {
                      line: 69,
                      column: 3,
                      offset: 12135,
                    },
                    end: {
                      line: 69,
                      column: 20,
                      offset: 12152,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 69,
                  column: 3,
                  offset: 12135,
                },
                end: {
                  line: 69,
                  column: 20,
                  offset: 12152,
                },
              },
            },
          ],
          position: {
            start: {
              line: 69,
              column: 1,
              offset: 12133,
            },
            end: {
              line: 69,
              column: 20,
              offset: 12152,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "Published ",
                  position: {
                    start: {
                      line: 70,
                      column: 3,
                      offset: 12155,
                    },
                    end: {
                      line: 70,
                      column: 13,
                      offset: 12165,
                    },
                  },
                },
                {
                  type: "emphasis",
                  children: [
                    {
                      type: "text",
                      value: "Principia Mathematica",
                      position: {
                        start: {
                          line: 70,
                          column: 14,
                          offset: 12166,
                        },
                        end: {
                          line: 70,
                          column: 35,
                          offset: 12187,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 70,
                      column: 13,
                      offset: 12165,
                    },
                    end: {
                      line: 70,
                      column: 36,
                      offset: 12188,
                    },
                  },
                },
                {
                  type: "text",
                  value: ", which laid out the laws of motion ",
                  position: {
                    start: {
                      line: 70,
                      column: 36,
                      offset: 12188,
                    },
                    end: {
                      line: 70,
                      column: 72,
                      offset: 12224,
                    },
                  },
                },
                {
                  type: "emphasis",
                  children: [
                    {
                      type: "text",
                      value: "and",
                      position: {
                        start: {
                          line: 70,
                          column: 73,
                          offset: 12225,
                        },
                        end: {
                          line: 70,
                          column: 76,
                          offset: 12228,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 70,
                      column: 72,
                      offset: 12224,
                    },
                    end: {
                      line: 70,
                      column: 77,
                      offset: 12229,
                    },
                  },
                },
                {
                  type: "text",
                  value: " the idea of universal gravitation",
                  position: {
                    start: {
                      line: 70,
                      column: 77,
                      offset: 12229,
                    },
                    end: {
                      line: 70,
                      column: 111,
                      offset: 12263,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 70,
                  column: 3,
                  offset: 12155,
                },
                end: {
                  line: 70,
                  column: 111,
                  offset: 12263,
                },
              },
            },
          ],
          position: {
            start: {
              line: 70,
              column: 1,
              offset: 12153,
            },
            end: {
              line: 70,
              column: 111,
              offset: 12263,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Advanced statistical analysis with his method of least squares",
                  position: {
                    start: {
                      line: 71,
                      column: 3,
                      offset: 12266,
                    },
                    end: {
                      line: 71,
                      column: 65,
                      offset: 12328,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 71,
                  column: 3,
                  offset: 12266,
                },
                end: {
                  line: 71,
                  column: 65,
                  offset: 12328,
                },
              },
            },
          ],
          position: {
            start: {
              line: 71,
              column: 1,
              offset: 12264,
            },
            end: {
              line: 71,
              column: 65,
              offset: 12328,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value:
                    "Made the first attempt to reconcile the wave- and particle-like properties of light",
                  position: {
                    start: {
                      line: 72,
                      column: 3,
                      offset: 12331,
                    },
                    end: {
                      line: 72,
                      column: 86,
                      offset: 12414,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 72,
                  column: 3,
                  offset: 12331,
                },
                end: {
                  line: 72,
                  column: 86,
                  offset: 12414,
                },
              },
            },
          ],
          position: {
            start: {
              line: 72,
              column: 1,
              offset: 12329,
            },
            end: {
              line: 72,
              column: 86,
              offset: 12414,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "Anticipated the idea of an electric field",
                  position: {
                    start: {
                      line: 73,
                      column: 3,
                      offset: 12417,
                    },
                    end: {
                      line: 73,
                      column: 44,
                      offset: 12458,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 73,
                  column: 3,
                  offset: 12417,
                },
                end: {
                  line: 73,
                  column: 44,
                  offset: 12458,
                },
              },
            },
          ],
          position: {
            start: {
              line: 73,
              column: 1,
              offset: 12415,
            },
            end: {
              line: 73,
              column: 44,
              offset: 12458,
            },
          },
        },
        {
          type: "listItem",
          spread: false,
          checked: null,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "Refined the scientific method",
                  position: {
                    start: {
                      line: 74,
                      column: 3,
                      offset: 12461,
                    },
                    end: {
                      line: 74,
                      column: 32,
                      offset: 12490,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 74,
                  column: 3,
                  offset: 12461,
                },
                end: {
                  line: 74,
                  column: 32,
                  offset: 12490,
                },
              },
            },
          ],
          position: {
            start: {
              line: 74,
              column: 1,
              offset: 12459,
            },
            end: {
              line: 74,
              column: 32,
              offset: 12490,
            },
          },
        },
      ],
      position: {
        start: {
          line: 67,
          column: 1,
          offset: 12019,
        },
        end: {
          line: 74,
          column: 32,
          offset: 12490,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "And a whole lot more that I probably forgot. But for all his genius, he probably couldn't have been able to formulate quantum field theory, or general relativity, or predict the existence of black holes, or prove Fermat's Last Theorem. The stage was set, so to speak, for Newton to help push humanity from the Scientific Revolution into the Enlightenment, but the time was not right for modern physics or ring theory. Genius only gets you so far. So, assuming humans continue to exist in 10,000 years (which I highly doubt), the concepts familiar to our descendants in the year 22025 would be truly unthinkable to us now, with our current understanding of the universe.",
          position: {
            start: {
              line: 76,
              column: 1,
              offset: 12492,
            },
            end: {
              line: 76,
              column: 670,
              offset: 13161,
            },
          },
        },
      ],
      position: {
        start: {
          line: 76,
          column: 1,
          offset: 12492,
        },
        end: {
          line: 76,
          column: 670,
          offset: 13161,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "That sums up ",
          position: {
            start: {
              line: 78,
              column: 1,
              offset: 13163,
            },
            end: {
              line: 78,
              column: 14,
              offset: 13176,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "one",
              position: {
                start: {
                  line: 78,
                  column: 15,
                  offset: 13177,
                },
                end: {
                  line: 78,
                  column: 18,
                  offset: 13180,
                },
              },
            },
          ],
          position: {
            start: {
              line: 78,
              column: 14,
              offset: 13176,
            },
            end: {
              line: 78,
              column: 19,
              offset: 13181,
            },
          },
        },
        {
          type: "text",
          value:
            ' potential answer to the question of, "Are there unthinkable thoughts?", which is, "Yes, if the concepts require too much evolution from current concepts". Or, more poetically, "Yes, if getting there would exceed the speed of thought". Now, let\'s take a look at a different angle: experiences that our brains just aren\'t wired to imagine.',
          position: {
            start: {
              line: 78,
              column: 19,
              offset: 13181,
            },
            end: {
              line: 78,
              column: 357,
              offset: 13519,
            },
          },
        },
      ],
      position: {
        start: {
          line: 78,
          column: 1,
          offset: 13163,
        },
        end: {
          line: 78,
          column: 357,
          offset: 13519,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Brain software and hardware",
          position: {
            start: {
              line: 80,
              column: 4,
              offset: 13524,
            },
            end: {
              line: 80,
              column: 31,
              offset: 13551,
            },
          },
        },
      ],
      position: {
        start: {
          line: 80,
          column: 1,
          offset: 13521,
        },
        end: {
          line: 80,
          column: 31,
          offset: 13551,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Most computers we're familiar with have both hardware and software. The hardware includes the physical components that literally make up the computer, like the CPU, RAM, disk, motherboard, and peripherals like the monitor and speakers. We can also write out sets of instructions, or programs, that tell the hardware what to do. These programs constitute the software of the computer. In this way, two computers with the same hardware can be programmed to do extremely different things.",
          position: {
            start: {
              line: 82,
              column: 1,
              offset: 13553,
            },
            end: {
              line: 82,
              column: 486,
              offset: 14038,
            },
          },
        },
      ],
      position: {
        start: {
          line: 82,
          column: 1,
          offset: 13553,
        },
        end: {
          line: 82,
          column: 486,
          offset: 14038,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "In addition to distinguishing between hardware and software, you could identify multiple ",
          position: {
            start: {
              line: 84,
              column: 1,
              offset: 14040,
            },
            end: {
              line: 84,
              column: 90,
              offset: 14129,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "layers",
              position: {
                start: {
                  line: 84,
                  column: 91,
                  offset: 14130,
                },
                end: {
                  line: 84,
                  column: 97,
                  offset: 14136,
                },
              },
            },
          ],
          position: {
            start: {
              line: 84,
              column: 90,
              offset: 14129,
            },
            end: {
              line: 84,
              column: 98,
              offset: 14137,
            },
          },
        },
        {
          type: "text",
          value:
            ' of software in a computer, ranging from "low-level" (close to the hardware) to "high-level" (abstracted from the hardware). The lowest layer would probably be the assembler, which turns ',
          position: {
            start: {
              line: 84,
              column: 98,
              offset: 14137,
            },
            end: {
              line: 84,
              column: 285,
              offset: 14324,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "assembly",
          },
          children: [
            {
              type: "text",
              value: "assembly language",
              position: {
                start: {
                  line: 84,
                  column: 291,
                  offset: 14330,
                },
                end: {
                  line: 84,
                  column: 308,
                  offset: 14347,
                },
              },
            },
          ],
          position: {
            start: {
              line: 84,
              column: 285,
              offset: 14324,
            },
            end: {
              line: 84,
              column: 324,
              offset: 14363,
            },
          },
        },
        {
          type: "text",
          value: " into ",
          position: {
            start: {
              line: 84,
              column: 324,
              offset: 14363,
            },
            end: {
              line: 84,
              column: 330,
              offset: 14369,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 84,
              column: 330,
              offset: 14369,
            },
            end: {
              line: 84,
              column: 333,
              offset: 14372,
            },
          },
        },
        {
          type: "text",
          value: "s and ",
          position: {
            start: {
              line: 84,
              column: 333,
              offset: 14372,
            },
            end: {
              line: 84,
              column: 339,
              offset: 14378,
            },
          },
        },
        {
          type: "inlineCode",
          value: "0",
          position: {
            start: {
              line: 84,
              column: 339,
              offset: 14378,
            },
            end: {
              line: 84,
              column: 342,
              offset: 14381,
            },
          },
        },
        {
          type: "text",
          value:
            "s that the CPU can execute. The next lowest level software above that would be the compiler, which turns human-readable code into assembly, and somewhere above that, we'd find the operating system, which is the most user-friendly way to interface with the computer.",
          position: {
            start: {
              line: 84,
              column: 342,
              offset: 14381,
            },
            end: {
              line: 84,
              column: 607,
              offset: 14646,
            },
          },
        },
      ],
      position: {
        start: {
          line: 84,
          column: 1,
          offset: 14040,
        },
        end: {
          line: 84,
          column: 607,
          offset: 14646,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "These higher levels of software make the hardware easier to work with at the expense of flexibility. For example, the operating system won't let you write so many files that you overwrite the memory containing the instructions for the operating system itself, even though the hardware technically permits it.",
          position: {
            start: {
              line: 86,
              column: 1,
              offset: 14648,
            },
            end: {
              line: 86,
              column: 309,
              offset: 14956,
            },
          },
        },
      ],
      position: {
        start: {
          line: 86,
          column: 1,
          offset: 14648,
        },
        end: {
          line: 86,
          column: 309,
          offset: 14956,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'The brain can be understood similarly. The "hardware" of our brain would be our neurons, as well as the laws of physics that govern the chemistry that governs those neurons. Dependent on that, we have various (fuzzy) layers of mental "software". Obviously, these different mental levels of cognition can\'t be teased apart as easily as the CPU from the motherboard, but some brain functions certainly seem lower-level than others.',
          position: {
            start: {
              line: 88,
              column: 1,
              offset: 14958,
            },
            end: {
              line: 88,
              column: 430,
              offset: 15387,
            },
          },
        },
      ],
      position: {
        start: {
          line: 88,
          column: 1,
          offset: 14958,
        },
        end: {
          line: 88,
          column: 430,
          offset: 15387,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "For example, there are parts of your brain (notably the brain stem) that are responsible for regulating your heart rate and breathing rate. These are very low-level functions. You can become conscious of your breathing and ",
          position: {
            start: {
              line: 90,
              column: 1,
              offset: 15389,
            },
            end: {
              line: 90,
              column: 224,
              offset: 15612,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "breath",
          },
          children: [
            {
              type: "text",
              value: "choose to hold your breath longer than average",
              position: {
                start: {
                  line: 90,
                  column: 230,
                  offset: 15618,
                },
                end: {
                  line: 90,
                  column: 276,
                  offset: 15664,
                },
              },
            },
          ],
          position: {
            start: {
              line: 90,
              column: 224,
              offset: 15612,
            },
            end: {
              line: 90,
              column: 290,
              offset: 15678,
            },
          },
        },
        {
          type: "text",
          value:
            ' ("you" referring to the part of your brain responsible for your high-level sense of self and agency), but ultimately, your brain stem has the final say and will take over to prevent you from dying of hypoxia.',
          position: {
            start: {
              line: 90,
              column: 290,
              offset: 15678,
            },
            end: {
              line: 90,
              column: 499,
              offset: 15887,
            },
          },
        },
      ],
      position: {
        start: {
          line: 90,
          column: 1,
          offset: 15389,
        },
        end: {
          line: 90,
          column: 499,
          offset: 15887,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "unthinkable/brainstem-os.png",
          alt: "A system message from your brain",
          position: {
            start: {
              line: 92,
              column: 1,
              offset: 15889,
            },
            end: {
              line: 92,
              column: 66,
              offset: 15954,
            },
          },
        },
      ],
      position: {
        start: {
          line: 92,
          column: 1,
          offset: 15889,
        },
        end: {
          line: 92,
          column: 66,
          offset: 15954,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Cutting to the chase: while you can change the software of your brain through conscious thought and experiences, there's also mental hardware, which is much less malleable. Just like you can't program a regular computer to be a quantum computer, you can't think your way into, say, conceptualizing the fourth dimension.",
          position: {
            start: {
              line: 94,
              column: 1,
              offset: 15956,
            },
            end: {
              line: 94,
              column: 320,
              offset: 16275,
            },
          },
        },
      ],
      position: {
        start: {
          line: 94,
          column: 1,
          offset: 15956,
        },
        end: {
          line: 94,
          column: 320,
          offset: 16275,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Let's elaborate on that.",
          position: {
            start: {
              line: 96,
              column: 1,
              offset: 16277,
            },
            end: {
              line: 96,
              column: 25,
              offset: 16301,
            },
          },
        },
      ],
      position: {
        start: {
          line: 96,
          column: 1,
          offset: 16277,
        },
        end: {
          line: 96,
          column: 25,
          offset: 16301,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "The fourth dimension?",
          position: {
            start: {
              line: 98,
              column: 5,
              offset: 16307,
            },
            end: {
              line: 98,
              column: 26,
              offset: 16328,
            },
          },
        },
      ],
      position: {
        start: {
          line: 98,
          column: 1,
          offset: 16303,
        },
        end: {
          line: 98,
          column: 26,
          offset: 16328,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Consider your eyes. The eye gets a (more or less) two-dimensional image of the world. I say that because all our brain has to work with are neural signals from a field of cones that get stimulated by different wavelengths of light. Unlike radar, where you send ",
          position: {
            start: {
              line: 100,
              column: 1,
              offset: 16330,
            },
            end: {
              line: 100,
              column: 262,
              offset: 16591,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "and",
              position: {
                start: {
                  line: 100,
                  column: 263,
                  offset: 16592,
                },
                end: {
                  line: 100,
                  column: 266,
                  offset: 16595,
                },
              },
            },
          ],
          position: {
            start: {
              line: 100,
              column: 262,
              offset: 16591,
            },
            end: {
              line: 100,
              column: 267,
              offset: 16596,
            },
          },
        },
        {
          type: "text",
          value:
            " receive a signal and measure how long the round-trip took, the cones in our eyes have no idea how long it took for light to reach it. In other words, there's no ",
          position: {
            start: {
              line: 100,
              column: 267,
              offset: 16596,
            },
            end: {
              line: 100,
              column: 429,
              offset: 16758,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "direct",
              position: {
                start: {
                  line: 100,
                  column: 430,
                  offset: 16759,
                },
                end: {
                  line: 100,
                  column: 436,
                  offset: 16765,
                },
              },
            },
          ],
          position: {
            start: {
              line: 100,
              column: 429,
              offset: 16758,
            },
            end: {
              line: 100,
              column: 437,
              offset: 16766,
            },
          },
        },
        {
          type: "text",
          value:
            " depth measurement. To make matters even more two-dimensional, our eyes rest only a few inches apart on the plane of our face, meaning we can usually only see at most ",
          position: {
            start: {
              line: 100,
              column: 437,
              offset: 16766,
            },
            end: {
              line: 100,
              column: 604,
              offset: 16933,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "half",
              position: {
                start: {
                  line: 100,
                  column: 605,
                  offset: 16934,
                },
                end: {
                  line: 100,
                  column: 609,
                  offset: 16938,
                },
              },
            },
          ],
          position: {
            start: {
              line: 100,
              column: 604,
              offset: 16933,
            },
            end: {
              line: 100,
              column: 610,
              offset: 16939,
            },
          },
        },
        {
          type: "text",
          value: " of an object at one given time.",
          position: {
            start: {
              line: 100,
              column: 610,
              offset: 16939,
            },
            end: {
              line: 100,
              column: 642,
              offset: 16971,
            },
          },
        },
      ],
      position: {
        start: {
          line: 100,
          column: 1,
          offset: 16330,
        },
        end: {
          line: 100,
          column: 642,
          offset: 16971,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "So, if we've never seen every side of an object at once, why do we experience the world as a three-dimensional place with three-dimensional things, instead of a two-dimensional screen of moving pictures? It goes beyond the fact that we have ",
          position: {
            start: {
              line: 102,
              column: 1,
              offset: 16973,
            },
            end: {
              line: 102,
              column: 242,
              offset: 17214,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "two-eyes",
          },
          children: [
            {
              type: "text",
              value: "two eyes",
              position: {
                start: {
                  line: 102,
                  column: 248,
                  offset: 17220,
                },
                end: {
                  line: 102,
                  column: 256,
                  offset: 17228,
                },
              },
            },
          ],
          position: {
            start: {
              line: 102,
              column: 242,
              offset: 17214,
            },
            end: {
              line: 102,
              column: 272,
              offset: 17244,
            },
          },
        },
        {
          type: "text",
          value:
            "; the visual processing part of our brain is hard-wired to use certain visual cues to construct a three-dimensional model of the world from these ",
          position: {
            start: {
              line: 102,
              column: 272,
              offset: 17244,
            },
            end: {
              line: 102,
              column: 418,
              offset: 17390,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "band",
          },
          children: [
            {
              type: "text",
              value: "excited cones",
              position: {
                start: {
                  line: 102,
                  column: 424,
                  offset: 17396,
                },
                end: {
                  line: 102,
                  column: 437,
                  offset: 17409,
                },
              },
            },
          ],
          position: {
            start: {
              line: 102,
              column: 418,
              offset: 17390,
            },
            end: {
              line: 102,
              column: 449,
              offset: 17421,
            },
          },
        },
        {
          type: "text",
          value:
            '. This automatic "lifting" of visual information to three dimensions allows us to look at a video, or an image, or even a drawing, and perceive depth with no effort necessary. Quite the opposite: it\'s basically impossible to ',
          position: {
            start: {
              line: 102,
              column: 449,
              offset: 17421,
            },
            end: {
              line: 102,
              column: 674,
              offset: 17646,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "not",
              position: {
                start: {
                  line: 102,
                  column: 675,
                  offset: 17647,
                },
                end: {
                  line: 102,
                  column: 678,
                  offset: 17650,
                },
              },
            },
          ],
          position: {
            start: {
              line: 102,
              column: 674,
              offset: 17646,
            },
            end: {
              line: 102,
              column: 679,
              offset: 17651,
            },
          },
        },
        {
          type: "text",
          value:
            " see things in three dimensions. That said, let's try to see things in four dimensions.",
          position: {
            start: {
              line: 102,
              column: 679,
              offset: 17651,
            },
            end: {
              line: 102,
              column: 766,
              offset: 17738,
            },
          },
        },
      ],
      position: {
        start: {
          line: 102,
          column: 1,
          offset: 16973,
        },
        end: {
          line: 102,
          column: 766,
          offset: 17738,
        },
      },
    },
    {
      type: "heading",
      depth: 4,
      children: [
        {
          type: "text",
          value: "Picturing the fourth dimension",
          position: {
            start: {
              line: 104,
              column: 6,
              offset: 17745,
            },
            end: {
              line: 104,
              column: 36,
              offset: 17775,
            },
          },
        },
      ],
      position: {
        start: {
          line: 104,
          column: 1,
          offset: 17740,
        },
        end: {
          line: 104,
          column: 36,
          offset: 17775,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We can actually learn a lot of things about the fourth dimension just by making connections between lower dimensions. I'll go through a few of them.",
          position: {
            start: {
              line: 106,
              column: 1,
              offset: 17777,
            },
            end: {
              line: 106,
              column: 149,
              offset: 17925,
            },
          },
        },
      ],
      position: {
        start: {
          line: 106,
          column: 1,
          offset: 17777,
        },
        end: {
          line: 106,
          column: 149,
          offset: 17925,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "As three dimensional beings, we can look at a 2D object and see ",
          position: {
            start: {
              line: 108,
              column: 1,
              offset: 17927,
            },
            end: {
              line: 108,
              column: 65,
              offset: 17991,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "all",
              position: {
                start: {
                  line: 108,
                  column: 66,
                  offset: 17992,
                },
                end: {
                  line: 108,
                  column: 69,
                  offset: 17995,
                },
              },
            },
          ],
          position: {
            start: {
              line: 108,
              column: 65,
              offset: 17991,
            },
            end: {
              line: 108,
              column: 70,
              offset: 17996,
            },
          },
        },
        {
          type: "text",
          value:
            ' its sides at once, including the inside of the object. It\'s all "laid out in front of us". In our three-dimensional world, a single viewpoint is restricted to seeing at most half of an object at a time, and the inside is hidden from view. In the fourth dimension, then, we could look at a 3D object and easily see ',
          position: {
            start: {
              line: 108,
              column: 70,
              offset: 17996,
            },
            end: {
              line: 108,
              column: 385,
              offset: 18311,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "all",
              position: {
                start: {
                  line: 108,
                  column: 386,
                  offset: 18312,
                },
                end: {
                  line: 108,
                  column: 389,
                  offset: 18315,
                },
              },
            },
          ],
          position: {
            start: {
              line: 108,
              column: 385,
              offset: 18311,
            },
            end: {
              line: 108,
              column: 390,
              offset: 18316,
            },
          },
        },
        {
          type: "text",
          value:
            " of its sides at once, as well as its contents. Picture a box in front of you, with things inside. If you were a fourth-dimensional being, you could see all six sides of the box, as well as the contents of the box. You could also see every side of each item in the box, and their insides. It would all be laid out in front of you.",
          position: {
            start: {
              line: 108,
              column: 390,
              offset: 18316,
            },
            end: {
              line: 108,
              column: 720,
              offset: 18646,
            },
          },
        },
      ],
      position: {
        start: {
          line: 108,
          column: 1,
          offset: 17927,
        },
        end: {
          line: 108,
          column: 720,
          offset: 18646,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We can discover some additional details by generalizing familiar geometry. For instance, the amount of space taken up by a line is just the length of the line. The amount of space taken up by a square is its area, which is the side length squared. Similarly, the volume of a cube is the edge length cubed. Generalizing further, the ",
          position: {
            start: {
              line: 110,
              column: 1,
              offset: 18648,
            },
            end: {
              line: 110,
              column: 333,
              offset: 18980,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "hypervolume",
              position: {
                start: {
                  line: 110,
                  column: 334,
                  offset: 18981,
                },
                end: {
                  line: 110,
                  column: 345,
                  offset: 18992,
                },
              },
            },
          ],
          position: {
            start: {
              line: 110,
              column: 333,
              offset: 18980,
            },
            end: {
              line: 110,
              column: 346,
              offset: 18993,
            },
          },
        },
        {
          type: "text",
          value:
            " of a tesseract (a four-dimensional cube) would be the edge length raised to the fourth power.",
          position: {
            start: {
              line: 110,
              column: 346,
              offset: 18993,
            },
            end: {
              line: 110,
              column: 440,
              offset: 19087,
            },
          },
        },
      ],
      position: {
        start: {
          line: 110,
          column: 1,
          offset: 18648,
        },
        end: {
          line: 110,
          column: 440,
          offset: 19087,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'Here\'s another fact: a line has 2 sides, a square has 4, and a cube has 6 faces, so a tesseract would have 8 "faces", or ',
          position: {
            start: {
              line: 112,
              column: 1,
              offset: 19089,
            },
            end: {
              line: 112,
              column: 122,
              offset: 19210,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "cells",
              position: {
                start: {
                  line: 112,
                  column: 123,
                  offset: 19211,
                },
                end: {
                  line: 112,
                  column: 128,
                  offset: 19216,
                },
              },
            },
          ],
          position: {
            start: {
              line: 112,
              column: 122,
              offset: 19210,
            },
            end: {
              line: 112,
              column: 129,
              offset: 19217,
            },
          },
        },
        {
          type: "text",
          value: " (as they're called).",
          position: {
            start: {
              line: 112,
              column: 129,
              offset: 19217,
            },
            end: {
              line: 112,
              column: 150,
              offset: 19238,
            },
          },
        },
      ],
      position: {
        start: {
          line: 112,
          column: 1,
          offset: 19089,
        },
        end: {
          line: 112,
          column: 150,
          offset: 19238,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "One more: if you picked two endpoints of a line (there's only one choice), they would be separated by one edge, namely, the line itself. On a square, the most edges you could find between any two vertices is two. On a cube, that number is three. Consequently, on a tesseract, the most number of edges separating two vertices would be four.",
          position: {
            start: {
              line: 114,
              column: 1,
              offset: 19240,
            },
            end: {
              line: 114,
              column: 340,
              offset: 19579,
            },
          },
        },
      ],
      position: {
        start: {
          line: 114,
          column: 1,
          offset: 19240,
        },
        end: {
          line: 114,
          column: 340,
          offset: 19579,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title:
            "Note that the tesseract shown here is a 3d projection of a 4d object",
          url: "unthinkable/4d.png",
          alt: "A side-by-side comparison of a line, square, cube, and hypercube",
          position: {
            start: {
              line: 116,
              column: 1,
              offset: 19581,
            },
            end: {
              line: 116,
              column: 159,
              offset: 19739,
            },
          },
        },
      ],
      position: {
        start: {
          line: 116,
          column: 1,
          offset: 19581,
        },
        end: {
          line: 116,
          column: 159,
          offset: 19739,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Surely, given all this information, you could picture a tesseract in all its four-dimensional glory?",
          position: {
            start: {
              line: 118,
              column: 1,
              offset: 19741,
            },
            end: {
              line: 118,
              column: 101,
              offset: 19841,
            },
          },
        },
      ],
      position: {
        start: {
          line: 118,
          column: 1,
          offset: 19741,
        },
        end: {
          line: 118,
          column: 101,
          offset: 19841,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Clearly, no amount of describing the properties of a fourth spatial dimension would enable us to ",
          position: {
            start: {
              line: 120,
              column: 1,
              offset: 19843,
            },
            end: {
              line: 120,
              column: 98,
              offset: 19940,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "actually",
              position: {
                start: {
                  line: 120,
                  column: 99,
                  offset: 19941,
                },
                end: {
                  line: 120,
                  column: 107,
                  offset: 19949,
                },
              },
            },
          ],
          position: {
            start: {
              line: 120,
              column: 98,
              offset: 19940,
            },
            end: {
              line: 120,
              column: 108,
              offset: 19950,
            },
          },
        },
        {
          type: "text",
          value:
            " conceptualize it with the same level of vividness that we can grasp the third dimension. Although some people have dedicated a lot of time to the pursuit of fourth-dimensional intuition, I would argue that these people are dancing ",
          position: {
            start: {
              line: 120,
              column: 108,
              offset: 19950,
            },
            end: {
              line: 120,
              column: 340,
              offset: 20182,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "around",
              position: {
                start: {
                  line: 120,
                  column: 341,
                  offset: 20183,
                },
                end: {
                  line: 120,
                  column: 347,
                  offset: 20189,
                },
              },
            },
          ],
          position: {
            start: {
              line: 120,
              column: 340,
              offset: 20182,
            },
            end: {
              line: 120,
              column: 348,
              offset: 20190,
            },
          },
        },
        {
          type: "text",
          value:
            " four-dimensional thoughts, as closely as possible without actually experiencing it. You could, like I just did, read through the ",
          position: {
            start: {
              line: 120,
              column: 348,
              offset: 20190,
            },
            end: {
              line: 120,
              column: 478,
              offset: 20320,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Tesseract",
          children: [
            {
              type: "text",
              value: "Wikipedia page for Tesseract",
              position: {
                start: {
                  line: 120,
                  column: 479,
                  offset: 20321,
                },
                end: {
                  line: 120,
                  column: 507,
                  offset: 20349,
                },
              },
            },
          ],
          position: {
            start: {
              line: 120,
              column: 478,
              offset: 20320,
            },
            end: {
              line: 120,
              column: 549,
              offset: 20391,
            },
          },
        },
        {
          type: "text",
          value:
            ' and go like "uh huh, yep, makes sense", but actual four-dimensional thoughts would still remain just out of reach.',
          position: {
            start: {
              line: 120,
              column: 549,
              offset: 20391,
            },
            end: {
              line: 120,
              column: 664,
              offset: 20506,
            },
          },
        },
      ],
      position: {
        start: {
          line: 120,
          column: 1,
          offset: 19843,
        },
        end: {
          line: 120,
          column: 664,
          offset: 20506,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "This is categorically different from things like cows jumping over the moon, which we also have no experience of. It's not just that we've never experienced the fourth dimension, it's that the ",
          position: {
            start: {
              line: 122,
              column: 1,
              offset: 20508,
            },
            end: {
              line: 122,
              column: 194,
              offset: 20701,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "hardware",
              position: {
                start: {
                  line: 122,
                  column: 195,
                  offset: 20702,
                },
                end: {
                  line: 122,
                  column: 203,
                  offset: 20710,
                },
              },
            },
          ],
          position: {
            start: {
              line: 122,
              column: 194,
              offset: 20701,
            },
            end: {
              line: 122,
              column: 204,
              offset: 20711,
            },
          },
        },
        {
          type: "text",
          value:
            " of our brain– which went all-in on the third dimension– is working directly against us. You could make a similar argument for other sensations that humans don't experience, like seeing infrared / ultraviolet light, or sensing magnetic fields. But I think higher dimensions are a much more satisfying candidate for \"unthinkable thoughts\" because they're ",
          position: {
            start: {
              line: 122,
              column: 204,
              offset: 20711,
            },
            end: {
              line: 122,
              column: 558,
              offset: 21065,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "so close",
              position: {
                start: {
                  line: 122,
                  column: 559,
                  offset: 21066,
                },
                end: {
                  line: 122,
                  column: 567,
                  offset: 21074,
                },
              },
            },
          ],
          position: {
            start: {
              line: 122,
              column: 558,
              offset: 21065,
            },
            end: {
              line: 122,
              column: 568,
              offset: 21075,
            },
          },
        },
        {
          type: "text",
          value:
            ' to our regular thoughts, and at the same time, so far away that the word "far" doesn\'t even apply.',
          position: {
            start: {
              line: 122,
              column: 568,
              offset: 21075,
            },
            end: {
              line: 122,
              column: 667,
              offset: 21174,
            },
          },
        },
      ],
      position: {
        start: {
          line: 122,
          column: 1,
          offset: 20508,
        },
        end: {
          line: 122,
          column: 667,
          offset: 21174,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Addendum",
                  position: {
                    start: {
                      line: 124,
                      column: 5,
                      offset: 21180,
                    },
                    end: {
                      line: 124,
                      column: 13,
                      offset: 21188,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 124,
                  column: 3,
                  offset: 21178,
                },
                end: {
                  line: 124,
                  column: 15,
                  offset: 21190,
                },
              },
            },
          ],
          position: {
            start: {
              line: 124,
              column: 3,
              offset: 21178,
            },
            end: {
              line: 124,
              column: 15,
              offset: 21190,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "After writing this essay and coming back to this section, I've softened my position a little on the subject of whether higher dimensions are possible to fully conceptualize. I think my main point mostly stands: that your brain has never perceived ",
              position: {
                start: {
                  line: 126,
                  column: 3,
                  offset: 21195,
                },
                end: {
                  line: 126,
                  column: 250,
                  offset: 21442,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "anything",
                  position: {
                    start: {
                      line: 126,
                      column: 251,
                      offset: 21443,
                    },
                    end: {
                      line: 126,
                      column: 259,
                      offset: 21451,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 126,
                  column: 250,
                  offset: 21442,
                },
                end: {
                  line: 126,
                  column: 260,
                  offset: 21452,
                },
              },
            },
            {
              type: "text",
              value:
                ' four-dimensional (spatially), which makes it fundamentally different from the other "impossible" scenarios we can construct in our heads. But we do have experience with time, which isn\'t a bad analogy for four spatial dimensions, and I think it\'s probably possible to amass so much intuition about the fourth dimension that it feels like second nature. So, pick your definition of "thought".',
              position: {
                start: {
                  line: 126,
                  column: 260,
                  offset: 21452,
                },
                end: {
                  line: 126,
                  column: 652,
                  offset: 21844,
                },
              },
            },
          ],
          position: {
            start: {
              line: 126,
              column: 3,
              offset: 21195,
            },
            end: {
              line: 126,
              column: 652,
              offset: 21844,
            },
          },
        },
      ],
      position: {
        start: {
          line: 124,
          column: 1,
          offset: 21176,
        },
        end: {
          line: 126,
          column: 652,
          offset: 21844,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Unreachable levels of abstraction",
          position: {
            start: {
              line: 128,
              column: 4,
              offset: 21849,
            },
            end: {
              line: 128,
              column: 37,
              offset: 21882,
            },
          },
        },
      ],
      position: {
        start: {
          line: 128,
          column: 1,
          offset: 21846,
        },
        end: {
          line: 128,
          column: 37,
          offset: 21882,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I'd like to call your attention to a wonderful little principle called the pigeonhole principle. If you're not aware of it, this is essentially what it says:",
          position: {
            start: {
              line: 130,
              column: 1,
              offset: 21884,
            },
            end: {
              line: 130,
              column: 158,
              offset: 22041,
            },
          },
        },
      ],
      position: {
        start: {
          line: 130,
          column: 1,
          offset: 21884,
        },
        end: {
          line: 130,
          column: 158,
          offset: 22041,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Pigeonhole principle",
                  position: {
                    start: {
                      line: 132,
                      column: 5,
                      offset: 22047,
                    },
                    end: {
                      line: 132,
                      column: 25,
                      offset: 22067,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 132,
                  column: 3,
                  offset: 22045,
                },
                end: {
                  line: 132,
                  column: 27,
                  offset: 22069,
                },
              },
            },
            {
              type: "text",
              value: ": Imagine you have ",
              position: {
                start: {
                  line: 132,
                  column: 27,
                  offset: 22069,
                },
                end: {
                  line: 132,
                  column: 46,
                  offset: 22088,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 132,
                  column: 46,
                  offset: 22088,
                },
                end: {
                  line: 132,
                  column: 49,
                  offset: 22091,
                },
              },
            },
            {
              type: "text",
              value: " things and ",
              position: {
                start: {
                  line: 132,
                  column: 49,
                  offset: 22091,
                },
                end: {
                  line: 132,
                  column: 61,
                  offset: 22103,
                },
              },
            },
            {
              type: "inlineCode",
              value: "M",
              position: {
                start: {
                  line: 132,
                  column: 61,
                  offset: 22103,
                },
                end: {
                  line: 132,
                  column: 64,
                  offset: 22106,
                },
              },
            },
            {
              type: "text",
              value: " containers. If ",
              position: {
                start: {
                  line: 132,
                  column: 64,
                  offset: 22106,
                },
                end: {
                  line: 132,
                  column: 80,
                  offset: 22122,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N > M",
              position: {
                start: {
                  line: 132,
                  column: 80,
                  offset: 22122,
                },
                end: {
                  line: 132,
                  column: 87,
                  offset: 22129,
                },
              },
            },
            {
              type: "text",
              value:
                ", then at least one container will have more than one thing in it. Similarly, if ",
              position: {
                start: {
                  line: 132,
                  column: 87,
                  offset: 22129,
                },
                end: {
                  line: 132,
                  column: 168,
                  offset: 22210,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N < M",
              position: {
                start: {
                  line: 132,
                  column: 168,
                  offset: 22210,
                },
                end: {
                  line: 132,
                  column: 175,
                  offset: 22217,
                },
              },
            },
            {
              type: "text",
              value: ", then at least one container will have no things in it.",
              position: {
                start: {
                  line: 132,
                  column: 175,
                  offset: 22217,
                },
                end: {
                  line: 132,
                  column: 231,
                  offset: 22273,
                },
              },
            },
          ],
          position: {
            start: {
              line: 132,
              column: 3,
              offset: 22045,
            },
            end: {
              line: 132,
              column: 231,
              offset: 22273,
            },
          },
        },
      ],
      position: {
        start: {
          line: 132,
          column: 1,
          offset: 22043,
        },
        end: {
          line: 132,
          column: 231,
          offset: 22273,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "unthinkable/pigeonhole.png",
          alt: "An illustration of the pigeonhole principle",
          position: {
            start: {
              line: 134,
              column: 1,
              offset: 22275,
            },
            end: {
              line: 134,
              column: 75,
              offset: 22349,
            },
          },
        },
      ],
      position: {
        start: {
          line: 134,
          column: 1,
          offset: 22275,
        },
        end: {
          line: 134,
          column: 75,
          offset: 22349,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "You could prove this fact from first principles, but there's really no need, since it's so obviously ",
          position: {
            start: {
              line: 136,
              column: 1,
              offset: 22351,
            },
            end: {
              line: 136,
              column: 102,
              offset: 22452,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "true",
              position: {
                start: {
                  line: 136,
                  column: 103,
                  offset: 22453,
                },
                end: {
                  line: 136,
                  column: 107,
                  offset: 22457,
                },
              },
            },
          ],
          position: {
            start: {
              line: 136,
              column: 102,
              offset: 22452,
            },
            end: {
              line: 136,
              column: 108,
              offset: 22458,
            },
          },
        },
        {
          type: "text",
          value:
            ". With this simple principle, you can prove that there must be two people in London who have the same number of hairs on their head, or that, in a situation where people are shaking hands, there will always be at least two people who have ",
          position: {
            start: {
              line: 136,
              column: 108,
              offset: 22458,
            },
            end: {
              line: 136,
              column: 347,
              offset: 22697,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "shake",
          },
          children: [
            {
              type: "text",
              value: "shaken the same number of hands",
              position: {
                start: {
                  line: 136,
                  column: 353,
                  offset: 22703,
                },
                end: {
                  line: 136,
                  column: 384,
                  offset: 22734,
                },
              },
            },
          ],
          position: {
            start: {
              line: 136,
              column: 347,
              offset: 22697,
            },
            end: {
              line: 136,
              column: 397,
              offset: 22747,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 136,
              column: 397,
              offset: 22747,
            },
            end: {
              line: 136,
              column: 398,
              offset: 22748,
            },
          },
        },
      ],
      position: {
        start: {
          line: 136,
          column: 1,
          offset: 22351,
        },
        end: {
          line: 136,
          column: 398,
          offset: 22748,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Let's go back to our echinodermic friend, the starfish, with its 500 neurons. Could a starfish ever conceptualize the pigeonhole principle? I strongly doubt it. Even if a particular starfish got lots of experience putting things in containers (already doubtful), the idea that it would generalize those experiences to a \"principle\", with all of its 500 neurons, is fantasy. I don't know where the line is, but it's definitely above 500.",
          position: {
            start: {
              line: 138,
              column: 1,
              offset: 22750,
            },
            end: {
              line: 138,
              column: 437,
              offset: 23186,
            },
          },
        },
      ],
      position: {
        start: {
          line: 138,
          column: 1,
          offset: 22750,
        },
        end: {
          line: 138,
          column: 437,
          offset: 23186,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Let's jump way up the neurological pecking order and consider non-human primates. Could a ",
          position: {
            start: {
              line: 140,
              column: 1,
              offset: 23188,
            },
            end: {
              line: 140,
              column: 91,
              offset: 23278,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "monkey",
              position: {
                start: {
                  line: 140,
                  column: 92,
                  offset: 23279,
                },
                end: {
                  line: 140,
                  column: 98,
                  offset: 23285,
                },
              },
            },
          ],
          position: {
            start: {
              line: 140,
              column: 91,
              offset: 23278,
            },
            end: {
              line: 140,
              column: 99,
              offset: 23286,
            },
          },
        },
        {
          type: "text",
          value:
            ' conceptualize the pigeonhole principle? It feels harder to say "no" right away. I\'m certain that a monkey understands the concept of "you can\'t fit too many things in a container", but the pigeonhole principle deals with an idea more discrete and precise than that. Research suggests that monkeys can reliably distinguish between ',
          position: {
            start: {
              line: 140,
              column: 99,
              offset: 23286,
            },
            end: {
              line: 140,
              column: 430,
              offset: 23617,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.cell.com/current-biology/fulltext/S0960-9822(05)00482-3?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0960982205004823%3Fshowall%3Dtrue",
          children: [
            {
              type: "text",
              value: "two and three",
              position: {
                start: {
                  line: 140,
                  column: 431,
                  offset: 23618,
                },
                end: {
                  line: 140,
                  column: 444,
                  offset: 23631,
                },
              },
            },
          ],
          position: {
            start: {
              line: 140,
              column: 430,
              offset: 23617,
            },
            end: {
              line: 140,
              column: 619,
              offset: 23806,
            },
          },
        },
        {
          type: "text",
          value:
            ", but their representation of numbers beyond four are probably approximate. Monkeys can still ",
          position: {
            start: {
              line: 140,
              column: 619,
              offset: 23806,
            },
            end: {
              line: 140,
              column: 713,
              offset: 23900,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "compare",
              position: {
                start: {
                  line: 140,
                  column: 714,
                  offset: 23901,
                },
                end: {
                  line: 140,
                  column: 721,
                  offset: 23908,
                },
              },
            },
          ],
          position: {
            start: {
              line: 140,
              column: 713,
              offset: 23900,
            },
            end: {
              line: 140,
              column: 722,
              offset: 23909,
            },
          },
        },
        {
          type: "text",
          value: " bigger numbers, but in accordance with ",
          position: {
            start: {
              line: 140,
              column: 722,
              offset: 23909,
            },
            end: {
              line: 140,
              column: 762,
              offset: 23949,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Number_sense_in_animals#Approximate_number_system",
          children: [
            {
              type: "text",
              value: "Weber's Law",
              position: {
                start: {
                  line: 140,
                  column: 763,
                  offset: 23950,
                },
                end: {
                  line: 140,
                  column: 774,
                  offset: 23961,
                },
              },
            },
          ],
          position: {
            start: {
              line: 140,
              column: 762,
              offset: 23949,
            },
            end: {
              line: 140,
              column: 856,
              offset: 24043,
            },
          },
        },
        {
          type: "text",
          value: "– they're mostly paying attention to the ",
          position: {
            start: {
              line: 140,
              column: 856,
              offset: 24043,
            },
            end: {
              line: 140,
              column: 897,
              offset: 24084,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "ratio",
              position: {
                start: {
                  line: 140,
                  column: 898,
                  offset: 24085,
                },
                end: {
                  line: 140,
                  column: 903,
                  offset: 24090,
                },
              },
            },
          ],
          position: {
            start: {
              line: 140,
              column: 897,
              offset: 24084,
            },
            end: {
              line: 140,
              column: 904,
              offset: 24091,
            },
          },
        },
        {
          type: "text",
          value:
            " between the two sets of objects, not the absolute difference. Putting the two together, monkeys probably don't have a concept of the difference between 50 and 51, which I would argue precludes them from truly grasping the pigeonhole principle.",
          position: {
            start: {
              line: 140,
              column: 904,
              offset: 24091,
            },
            end: {
              line: 140,
              column: 1148,
              offset: 24335,
            },
          },
        },
      ],
      position: {
        start: {
          line: 140,
          column: 1,
          offset: 23188,
        },
        end: {
          line: 140,
          column: 1148,
          offset: 24335,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'So, on the scale of "understands the pigeonhole principle", we definitely have a spectrum from starfish to primates to humans. This raises an obvious question: why? Although having a sufficient number of neurons is definitely a prerequisite, it\'s clearly not ',
          position: {
            start: {
              line: 142,
              column: 1,
              offset: 24337,
            },
            end: {
              line: 142,
              column: 260,
              offset: 24596,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "the",
              position: {
                start: {
                  line: 142,
                  column: 261,
                  offset: 24597,
                },
                end: {
                  line: 142,
                  column: 264,
                  offset: 24600,
                },
              },
            },
          ],
          position: {
            start: {
              line: 142,
              column: 260,
              offset: 24596,
            },
            end: {
              line: 142,
              column: 265,
              offset: 24601,
            },
          },
        },
        {
          type: "text",
          value:
            " deciding factor. It seems more related to humans' capacity for ",
          position: {
            start: {
              line: 142,
              column: 265,
              offset: 24601,
            },
            end: {
              line: 142,
              column: 329,
              offset: 24665,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "symbolic thought",
              position: {
                start: {
                  line: 142,
                  column: 330,
                  offset: 24666,
                },
                end: {
                  line: 142,
                  column: 346,
                  offset: 24682,
                },
              },
            },
          ],
          position: {
            start: {
              line: 142,
              column: 329,
              offset: 24665,
            },
            end: {
              line: 142,
              column: 347,
              offset: 24683,
            },
          },
        },
        {
          type: "text",
          value: ": the ability to ",
          position: {
            start: {
              line: 142,
              column: 347,
              offset: 24683,
            },
            end: {
              line: 142,
              column: 364,
              offset: 24700,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "refer",
              position: {
                start: {
                  line: 142,
                  column: 365,
                  offset: 24701,
                },
                end: {
                  line: 142,
                  column: 370,
                  offset: 24706,
                },
              },
            },
          ],
          position: {
            start: {
              line: 142,
              column: 364,
              offset: 24700,
            },
            end: {
              line: 142,
              column: 371,
              offset: 24707,
            },
          },
        },
        {
          type: "text",
          value:
            " to things as concepts, combine concepts freely, abstract patterns from reality, generalize those patterns, and apply them to new contexts. This ability ",
          position: {
            start: {
              line: 142,
              column: 371,
              offset: 24707,
            },
            end: {
              line: 142,
              column: 524,
              offset: 24860,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "seems",
              position: {
                start: {
                  line: 142,
                  column: 525,
                  offset: 24861,
                },
                end: {
                  line: 142,
                  column: 530,
                  offset: 24866,
                },
              },
            },
          ],
          position: {
            start: {
              line: 142,
              column: 524,
              offset: 24860,
            },
            end: {
              line: 142,
              column: 531,
              offset: 24867,
            },
          },
        },
        {
          type: "text",
          value: " pretty unique to humans.",
          position: {
            start: {
              line: 142,
              column: 531,
              offset: 24867,
            },
            end: {
              line: 142,
              column: 556,
              offset: 24892,
            },
          },
        },
      ],
      position: {
        start: {
          line: 142,
          column: 1,
          offset: 24337,
        },
        end: {
          line: 142,
          column: 556,
          offset: 24892,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "That's definitely a morale booster, and could be taken to mean that humans \"won the game\" in terms of intelligence, and that we really are capable of conceptualizing any abstract concept or pattern. But– while I can't prove otherwise– I have my suspicions.",
          position: {
            start: {
              line: 144,
              column: 1,
              offset: 24894,
            },
            end: {
              line: 144,
              column: 257,
              offset: 25150,
            },
          },
        },
      ],
      position: {
        start: {
          line: 144,
          column: 1,
          offset: 24894,
        },
        end: {
          line: 144,
          column: 257,
          offset: 25150,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Adding and multiplying",
          position: {
            start: {
              line: 146,
              column: 5,
              offset: 25156,
            },
            end: {
              line: 146,
              column: 27,
              offset: 25178,
            },
          },
        },
      ],
      position: {
        start: {
          line: 146,
          column: 1,
          offset: 25152,
        },
        end: {
          line: 146,
          column: 27,
          offset: 25178,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "In my ",
          position: {
            start: {
              line: 148,
              column: 1,
              offset: 25180,
            },
            end: {
              line: 148,
              column: 7,
              offset: 25186,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://worldsworstdetective.com/formal-systems",
          children: [
            {
              type: "text",
              value: "formal systems",
              position: {
                start: {
                  line: 148,
                  column: 8,
                  offset: 25187,
                },
                end: {
                  line: 148,
                  column: 22,
                  offset: 25201,
                },
              },
            },
          ],
          position: {
            start: {
              line: 148,
              column: 7,
              offset: 25186,
            },
            end: {
              line: 148,
              column: 72,
              offset: 25251,
            },
          },
        },
        {
          type: "text",
          value:
            ' essay, I made a passing comment about how, although we have a pretty much perfect understanding of addition and multiplication by themselves, we don\'t yet fully understand how they interact with each other. This gets at my meaning of the word "understand".',
          position: {
            start: {
              line: 148,
              column: 72,
              offset: 25251,
            },
            end: {
              line: 148,
              column: 329,
              offset: 25508,
            },
          },
        },
      ],
      position: {
        start: {
          line: 148,
          column: 1,
          offset: 25180,
        },
        end: {
          line: 148,
          column: 329,
          offset: 25508,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value:
                    "Levels of understanding of addition and multiplication",
                  position: {
                    start: {
                      line: 150,
                      column: 5,
                      offset: 25514,
                    },
                    end: {
                      line: 150,
                      column: 59,
                      offset: 25568,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 150,
                  column: 3,
                  offset: 25512,
                },
                end: {
                  line: 150,
                  column: 61,
                  offset: 25570,
                },
              },
            },
          ],
          position: {
            start: {
              line: 150,
              column: 3,
              offset: 25512,
            },
            end: {
              line: 150,
              column: 61,
              offset: 25570,
            },
          },
        },
        {
          type: "list",
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: "listItem",
              spread: false,
              checked: null,
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "strong",
                      children: [
                        {
                          type: "text",
                          value: "Basic understanding",
                          position: {
                            start: {
                              line: 152,
                              column: 7,
                              offset: 25579,
                            },
                            end: {
                              line: 152,
                              column: 26,
                              offset: 25598,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 152,
                          column: 5,
                          offset: 25577,
                        },
                        end: {
                          line: 152,
                          column: 28,
                          offset: 25600,
                        },
                      },
                    },
                    {
                      type: "text",
                      value:
                        ": Know how to compute the sum of products and the product of sums.",
                      position: {
                        start: {
                          line: 152,
                          column: 28,
                          offset: 25600,
                        },
                        end: {
                          line: 152,
                          column: 94,
                          offset: 25666,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 152,
                      column: 5,
                      offset: 25577,
                    },
                    end: {
                      line: 152,
                      column: 94,
                      offset: 25666,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 152,
                  column: 3,
                  offset: 25575,
                },
                end: {
                  line: 152,
                  column: 94,
                  offset: 25666,
                },
              },
            },
            {
              type: "listItem",
              spread: false,
              checked: null,
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "strong",
                      children: [
                        {
                          type: "text",
                          value: "Medium understanding",
                          position: {
                            start: {
                              line: 153,
                              column: 7,
                              offset: 25673,
                            },
                            end: {
                              line: 153,
                              column: 27,
                              offset: 25693,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 153,
                          column: 5,
                          offset: 25671,
                        },
                        end: {
                          line: 153,
                          column: 29,
                          offset: 25695,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": Know how to check whether a number is prime.",
                      position: {
                        start: {
                          line: 153,
                          column: 29,
                          offset: 25695,
                        },
                        end: {
                          line: 153,
                          column: 75,
                          offset: 25741,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 153,
                      column: 5,
                      offset: 25671,
                    },
                    end: {
                      line: 153,
                      column: 75,
                      offset: 25741,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 153,
                  column: 3,
                  offset: 25669,
                },
                end: {
                  line: 153,
                  column: 75,
                  offset: 25741,
                },
              },
            },
            {
              type: "listItem",
              spread: false,
              checked: null,
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "strong",
                      children: [
                        {
                          type: "text",
                          value: "Advanced understanding",
                          position: {
                            start: {
                              line: 154,
                              column: 7,
                              offset: 25748,
                            },
                            end: {
                              line: 154,
                              column: 29,
                              offset: 25770,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 154,
                          column: 5,
                          offset: 25746,
                        },
                        end: {
                          line: 154,
                          column: 31,
                          offset: 25772,
                        },
                      },
                    },
                    {
                      type: "text",
                      value:
                        ": Explain why every number greater than 1 has a unique prime factorization, and why there are an infinite number of primes.",
                      position: {
                        start: {
                          line: 154,
                          column: 31,
                          offset: 25772,
                        },
                        end: {
                          line: 154,
                          column: 154,
                          offset: 25895,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 154,
                      column: 5,
                      offset: 25746,
                    },
                    end: {
                      line: 154,
                      column: 154,
                      offset: 25895,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 154,
                  column: 3,
                  offset: 25744,
                },
                end: {
                  line: 154,
                  column: 154,
                  offset: 25895,
                },
              },
            },
            {
              type: "listItem",
              spread: false,
              checked: null,
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "strong",
                      children: [
                        {
                          type: "text",
                          value: "Very advanced understanding",
                          position: {
                            start: {
                              line: 155,
                              column: 7,
                              offset: 25902,
                            },
                            end: {
                              line: 155,
                              column: 34,
                              offset: 25929,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 155,
                          column: 5,
                          offset: 25900,
                        },
                        end: {
                          line: 155,
                          column: 36,
                          offset: 25931,
                        },
                      },
                    },
                    {
                      type: "text",
                      value:
                        ": Explain why there are no integer solutions to the equation ",
                      position: {
                        start: {
                          line: 155,
                          column: 36,
                          offset: 25931,
                        },
                        end: {
                          line: 155,
                          column: 97,
                          offset: 25992,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "a^n + b^n = c^n",
                      position: {
                        start: {
                          line: 155,
                          column: 97,
                          offset: 25992,
                        },
                        end: {
                          line: 155,
                          column: 114,
                          offset: 26009,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " when ",
                      position: {
                        start: {
                          line: 155,
                          column: 114,
                          offset: 26009,
                        },
                        end: {
                          line: 155,
                          column: 120,
                          offset: 26015,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "n >= 2",
                      position: {
                        start: {
                          line: 155,
                          column: 120,
                          offset: 26015,
                        },
                        end: {
                          line: 155,
                          column: 128,
                          offset: 26023,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " (",
                      position: {
                        start: {
                          line: 155,
                          column: 128,
                          offset: 26023,
                        },
                        end: {
                          line: 155,
                          column: 130,
                          offset: 26025,
                        },
                      },
                    },
                    {
                      type: "link",
                      title: null,
                      url: "https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem",
                      children: [
                        {
                          type: "text",
                          value: "Fermat's Last Theorem",
                          position: {
                            start: {
                              line: 155,
                              column: 131,
                              offset: 26026,
                            },
                            end: {
                              line: 155,
                              column: 152,
                              offset: 26047,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 155,
                          column: 130,
                          offset: 26025,
                        },
                        end: {
                          line: 155,
                          column: 208,
                          offset: 26103,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ").",
                      position: {
                        start: {
                          line: 155,
                          column: 208,
                          offset: 26103,
                        },
                        end: {
                          line: 155,
                          column: 210,
                          offset: 26105,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 155,
                      column: 5,
                      offset: 25900,
                    },
                    end: {
                      line: 155,
                      column: 210,
                      offset: 26105,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 155,
                  column: 3,
                  offset: 25898,
                },
                end: {
                  line: 155,
                  column: 210,
                  offset: 26105,
                },
              },
            },
            {
              type: "listItem",
              spread: false,
              checked: null,
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "strong",
                      children: [
                        {
                          type: "text",
                          value: "Not yet understood",
                          position: {
                            start: {
                              line: 156,
                              column: 7,
                              offset: 26112,
                            },
                            end: {
                              line: 156,
                              column: 25,
                              offset: 26130,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 156,
                          column: 5,
                          offset: 26110,
                        },
                        end: {
                          line: 156,
                          column: 27,
                          offset: 26132,
                        },
                      },
                    },
                    {
                      type: "text",
                      value:
                        ": Explain why there are (or aren't) infinitely many ",
                      position: {
                        start: {
                          line: 156,
                          column: 27,
                          offset: 26132,
                        },
                        end: {
                          line: 156,
                          column: 79,
                          offset: 26184,
                        },
                      },
                    },
                    {
                      type: "link",
                      title: null,
                      url: "https://en.wikipedia.org/wiki/Twin_prime#Twin_prime_conjecture",
                      children: [
                        {
                          type: "text",
                          value: "twin primes",
                          position: {
                            start: {
                              line: 156,
                              column: 80,
                              offset: 26185,
                            },
                            end: {
                              line: 156,
                              column: 91,
                              offset: 26196,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 156,
                          column: 79,
                          offset: 26184,
                        },
                        end: {
                          line: 156,
                          column: 156,
                          offset: 26261,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", or why every even number can('t) be ",
                      position: {
                        start: {
                          line: 156,
                          column: 156,
                          offset: 26261,
                        },
                        end: {
                          line: 156,
                          column: 194,
                          offset: 26299,
                        },
                      },
                    },
                    {
                      type: "link",
                      title: null,
                      url: "https://en.wikipedia.org/wiki/Goldbach%27s_conjecture",
                      children: [
                        {
                          type: "text",
                          value: "expressed as the sum of two primes",
                          position: {
                            start: {
                              line: 156,
                              column: 195,
                              offset: 26300,
                            },
                            end: {
                              line: 156,
                              column: 229,
                              offset: 26334,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 156,
                          column: 194,
                          offset: 26299,
                        },
                        end: {
                          line: 156,
                          column: 285,
                          offset: 26390,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", or why there are(n't) ",
                      position: {
                        start: {
                          line: 156,
                          column: 285,
                          offset: 26390,
                        },
                        end: {
                          line: 156,
                          column: 309,
                          offset: 26414,
                        },
                      },
                    },
                    {
                      type: "link",
                      title: null,
                      url: "https://en.wikipedia.org/wiki/Perfect_number#Odd_perfect_numbers",
                      children: [
                        {
                          type: "text",
                          value: "odd perfect numbers",
                          position: {
                            start: {
                              line: 156,
                              column: 310,
                              offset: 26415,
                            },
                            end: {
                              line: 156,
                              column: 329,
                              offset: 26434,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 156,
                          column: 309,
                          offset: 26414,
                        },
                        end: {
                          line: 156,
                          column: 396,
                          offset: 26501,
                        },
                      },
                    },
                    {
                      type: "text",
                      value:
                        ", or why (not) every positive integer yields 1 after sufficient applications of the ",
                      position: {
                        start: {
                          line: 156,
                          column: 396,
                          offset: 26501,
                        },
                        end: {
                          line: 156,
                          column: 480,
                          offset: 26585,
                        },
                      },
                    },
                    {
                      type: "link",
                      title: null,
                      url: "https://en.wikipedia.org/wiki/Collatz_conjecture",
                      children: [
                        {
                          type: "text",
                          value: "Collatz rule",
                          position: {
                            start: {
                              line: 156,
                              column: 481,
                              offset: 26586,
                            },
                            end: {
                              line: 156,
                              column: 493,
                              offset: 26598,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 156,
                          column: 480,
                          offset: 26585,
                        },
                        end: {
                          line: 156,
                          column: 544,
                          offset: 26649,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ".",
                      position: {
                        start: {
                          line: 156,
                          column: 544,
                          offset: 26649,
                        },
                        end: {
                          line: 156,
                          column: 545,
                          offset: 26650,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 156,
                      column: 5,
                      offset: 26110,
                    },
                    end: {
                      line: 156,
                      column: 545,
                      offset: 26650,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 156,
                  column: 3,
                  offset: 26108,
                },
                end: {
                  line: 156,
                  column: 545,
                  offset: 26650,
                },
              },
            },
          ],
          position: {
            start: {
              line: 152,
              column: 3,
              offset: 25575,
            },
            end: {
              line: 156,
              column: 545,
              offset: 26650,
            },
          },
        },
      ],
      position: {
        start: {
          line: 150,
          column: 1,
          offset: 25510,
        },
        end: {
          line: 156,
          column: 545,
          offset: 26650,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Who would've guessed there could be so much mystery surrounding the interaction of addition and multiplication? Just to illustrate the point, consider the fact that Fermat's Last Theorem was asserted in 1637, but wasn't proven until ",
          position: {
            start: {
              line: 158,
              column: 1,
              offset: 26652,
            },
            end: {
              line: 158,
              column: 234,
              offset: 26885,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "358 years later",
              position: {
                start: {
                  line: 158,
                  column: 235,
                  offset: 26886,
                },
                end: {
                  line: 158,
                  column: 250,
                  offset: 26901,
                },
              },
            },
          ],
          position: {
            start: {
              line: 158,
              column: 234,
              offset: 26885,
            },
            end: {
              line: 158,
              column: 251,
              offset: 26902,
            },
          },
        },
        {
          type: "text",
          value:
            ' by Andrew Wiles in 1994. Some of the mathematical results Wiles used to construct his proof weren\'t even discovered until the 1980s (speaking of the "speed of thought").',
          position: {
            start: {
              line: 158,
              column: 251,
              offset: 26902,
            },
            end: {
              line: 158,
              column: 421,
              offset: 27072,
            },
          },
        },
      ],
      position: {
        start: {
          line: 158,
          column: 1,
          offset: 26652,
        },
        end: {
          line: 158,
          column: 421,
          offset: 27072,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "With that in mind, it feels very possible that we've already proposed conjectures that won't be proven for a ",
          position: {
            start: {
              line: 160,
              column: 1,
              offset: 27074,
            },
            end: {
              line: 160,
              column: 110,
              offset: 27183,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "thousand",
              position: {
                start: {
                  line: 160,
                  column: 111,
                  offset: 27184,
                },
                end: {
                  line: 160,
                  column: 119,
                  offset: 27192,
                },
              },
            },
          ],
          position: {
            start: {
              line: 160,
              column: 110,
              offset: 27183,
            },
            end: {
              line: 160,
              column: 120,
              offset: 27193,
            },
          },
        },
        {
          type: "text",
          value:
            ' years. But what about the extreme? Are there "simple seeming" facts about numbers that we\'ll never be able to determine?',
          position: {
            start: {
              line: 160,
              column: 120,
              offset: 27193,
            },
            end: {
              line: 160,
              column: 241,
              offset: 27314,
            },
          },
        },
      ],
      position: {
        start: {
          line: 160,
          column: 1,
          offset: 27074,
        },
        end: {
          line: 160,
          column: 241,
          offset: 27314,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "If you've heard of ",
          position: {
            start: {
              line: 162,
              column: 1,
              offset: 27316,
            },
            end: {
              line: 162,
              column: 20,
              offset: 27335,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems",
          children: [
            {
              type: "text",
              value: "Gödel's Incompleteness Theorem",
              position: {
                start: {
                  line: 162,
                  column: 21,
                  offset: 27336,
                },
                end: {
                  line: 162,
                  column: 51,
                  offset: 27366,
                },
              },
            },
          ],
          position: {
            start: {
              line: 162,
              column: 20,
              offset: 27335,
            },
            end: {
              line: 162,
              column: 122,
              offset: 27437,
            },
          },
        },
        {
          type: "text",
          value:
            " (GIT), you're probably thinking this is when I'll introduce it. That was my original plan, but applying GIT to the human brain is always a sketchy affair, and I got about 6,000 words deep when I realized that it wasn't worth it. So, I'll just describe my intuition and leave ol' ",
          position: {
            start: {
              line: 162,
              column: 122,
              offset: 27437,
            },
            end: {
              line: 162,
              column: 402,
              offset: 27717,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Kurt_G%C3%B6del",
          children: [
            {
              type: "text",
              value: "Kurt",
              position: {
                start: {
                  line: 162,
                  column: 403,
                  offset: 27718,
                },
                end: {
                  line: 162,
                  column: 407,
                  offset: 27722,
                },
              },
            },
          ],
          position: {
            start: {
              line: 162,
              column: 402,
              offset: 27717,
            },
            end: {
              line: 162,
              column: 455,
              offset: 27770,
            },
          },
        },
        {
          type: "text",
          value: " alone for now.",
          position: {
            start: {
              line: 162,
              column: 455,
              offset: 27770,
            },
            end: {
              line: 162,
              column: 470,
              offset: 27785,
            },
          },
        },
      ],
      position: {
        start: {
          line: 162,
          column: 1,
          offset: 27316,
        },
        end: {
          line: 162,
          column: 470,
          offset: 27785,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Chaos in the patterns in the chaos in the patterns...",
          position: {
            start: {
              line: 164,
              column: 5,
              offset: 27791,
            },
            end: {
              line: 164,
              column: 58,
              offset: 27844,
            },
          },
        },
      ],
      position: {
        start: {
          line: 164,
          column: 1,
          offset: 27787,
        },
        end: {
          line: 164,
          column: 58,
          offset: 27844,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We've discussed starfish and monkeys, but it's time to bring in the beavers– specifically, busy ones. In computer science, the Busy Beaver problem is a challenge involving finding ",
          position: {
            start: {
              line: 166,
              column: 1,
              offset: 27846,
            },
            end: {
              line: 166,
              column: 181,
              offset: 28026,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "turing",
          },
          children: [
            {
              type: "text",
              value: "Turing machines",
              position: {
                start: {
                  line: 166,
                  column: 187,
                  offset: 28032,
                },
                end: {
                  line: 166,
                  column: 202,
                  offset: 28047,
                },
              },
            },
          ],
          position: {
            start: {
              line: 166,
              column: 181,
              offset: 28026,
            },
            end: {
              line: 166,
              column: 216,
              offset: 28061,
            },
          },
        },
        {
          type: "text",
          value:
            ' that can keep themselves "occupied" for the longest time (the most steps) ',
          position: {
            start: {
              line: 166,
              column: 216,
              offset: 28061,
            },
            end: {
              line: 166,
              column: 291,
              offset: 28136,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "without",
              position: {
                start: {
                  line: 166,
                  column: 292,
                  offset: 28137,
                },
                end: {
                  line: 166,
                  column: 299,
                  offset: 28144,
                },
              },
            },
          ],
          position: {
            start: {
              line: 166,
              column: 291,
              offset: 28136,
            },
            end: {
              line: 166,
              column: 300,
              offset: 28145,
            },
          },
        },
        {
          type: "text",
          value:
            " running forever. Turing machines vying for the title of Busy Beaver will start out on a blank tape of all ",
          position: {
            start: {
              line: 166,
              column: 300,
              offset: 28145,
            },
            end: {
              line: 166,
              column: 407,
              offset: 28252,
            },
          },
        },
        {
          type: "inlineCode",
          value: "0",
          position: {
            start: {
              line: 166,
              column: 407,
              offset: 28252,
            },
            end: {
              line: 166,
              column: 410,
              offset: 28255,
            },
          },
        },
        {
          type: "text",
          value: "s, and can only write ",
          position: {
            start: {
              line: 166,
              column: 410,
              offset: 28255,
            },
            end: {
              line: 166,
              column: 432,
              offset: 28277,
            },
          },
        },
        {
          type: "inlineCode",
          value: "0",
          position: {
            start: {
              line: 166,
              column: 432,
              offset: 28277,
            },
            end: {
              line: 166,
              column: 435,
              offset: 28280,
            },
          },
        },
        {
          type: "text",
          value: "s or ",
          position: {
            start: {
              line: 166,
              column: 435,
              offset: 28280,
            },
            end: {
              line: 166,
              column: 440,
              offset: 28285,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 166,
              column: 440,
              offset: 28285,
            },
            end: {
              line: 166,
              column: 443,
              offset: 28288,
            },
          },
        },
        {
          type: "text",
          value:
            's. Additionally, Turing machines are broken up into different "weight classes" by their number of internal states. The Busy Beaver with ',
          position: {
            start: {
              line: 166,
              column: 443,
              offset: 28288,
            },
            end: {
              line: 166,
              column: 579,
              offset: 28424,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "n",
              position: {
                start: {
                  line: 166,
                  column: 580,
                  offset: 28425,
                },
                end: {
                  line: 166,
                  column: 581,
                  offset: 28426,
                },
              },
            },
          ],
          position: {
            start: {
              line: 166,
              column: 579,
              offset: 28424,
            },
            end: {
              line: 166,
              column: 582,
              offset: 28427,
            },
          },
        },
        {
          type: "text",
          value:
            " states is called BB(n). Let's take a look at BB(2), the Turing machine with two internal states which runs for the most number of steps before terminating.",
          position: {
            start: {
              line: 166,
              column: 582,
              offset: 28427,
            },
            end: {
              line: 166,
              column: 738,
              offset: 28583,
            },
          },
        },
      ],
      position: {
        start: {
          line: 166,
          column: 1,
          offset: 27846,
        },
        end: {
          line: 166,
          column: 738,
          offset: 28583,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value:
        "BB(2)\n\nif in state A:\n  if reading 0: write a 1, move right, and switch to state B\n  if reading 1: write a 1, move left, and switch to state B\nif in state B:\n  if reading 0: write a 1, move left, and switch to state A\n  if reading 1: write a 1, move right, and halt",
      position: {
        start: {
          line: 168,
          column: 1,
          offset: 28585,
        },
        end: {
          line: 177,
          column: 4,
          offset: 28858,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "This critter runs for a total of 6 steps, leaving in its wake a tidy little group of four ",
          position: {
            start: {
              line: 179,
              column: 1,
              offset: 28860,
            },
            end: {
              line: 179,
              column: 91,
              offset: 28950,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 179,
              column: 91,
              offset: 28950,
            },
            end: {
              line: 179,
              column: 94,
              offset: 28953,
            },
          },
        },
        {
          type: "text",
          value:
            "s. The busiest Turing machine with 3 internal states, BB(3), keeps itself occupied for 14 steps. BB(4) rages against the dying of the light but expires after 107 steps. Mathematician Allen Brady discovered this Turing machine in 1966, but couldn't prove that it was ",
          position: {
            start: {
              line: 179,
              column: 94,
              offset: 28953,
            },
            end: {
              line: 179,
              column: 360,
              offset: 29219,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "the",
              position: {
                start: {
                  line: 179,
                  column: 361,
                  offset: 29220,
                },
                end: {
                  line: 179,
                  column: 364,
                  offset: 29223,
                },
              },
            },
          ],
          position: {
            start: {
              line: 179,
              column: 360,
              offset: 29219,
            },
            end: {
              line: 179,
              column: 365,
              offset: 29224,
            },
          },
        },
        {
          type: "text",
          value:
            " fourth Busy Beaver until 1974. The fifth Busy Beaver, though, was a completely different story.",
          position: {
            start: {
              line: 179,
              column: 365,
              offset: 29224,
            },
            end: {
              line: 179,
              column: 461,
              offset: 29320,
            },
          },
        },
      ],
      position: {
        start: {
          line: 179,
          column: 1,
          offset: 28860,
        },
        end: {
          line: 179,
          column: 461,
          offset: 29320,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Allen Brady himself was skeptical that BB(5) could even be proved. He wrote:",
          position: {
            start: {
              line: 181,
              column: 1,
              offset: 29322,
            },
            end: {
              line: 181,
              column: 77,
              offset: 29398,
            },
          },
        },
      ],
      position: {
        start: {
          line: 181,
          column: 1,
          offset: 29322,
        },
        end: {
          line: 181,
          column: 77,
          offset: 29398,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Nature has probably embedded among the five-state holdout machines one or more problems as illusive as the Goldbach Conjecture. Or, in other terms, there will likely be nonstopping recursive patterns which are beyond our powers of recognition.",
              position: {
                start: {
                  line: 183,
                  column: 3,
                  offset: 29402,
                },
                end: {
                  line: 183,
                  column: 246,
                  offset: 29645,
                },
              },
            },
          ],
          position: {
            start: {
              line: 183,
              column: 3,
              offset: 29402,
            },
            end: {
              line: 183,
              column: 246,
              offset: 29645,
            },
          },
        },
      ],
      position: {
        start: {
          line: 183,
          column: 1,
          offset: 29400,
        },
        end: {
          line: 183,
          column: 246,
          offset: 29645,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But he was wrong. In mid-2024, through the spectular efforts of an organized online community of amateur mathematicians, the fifth busy beaver was proven to run for a mind-boggling 47,176,870 steps. If you'd like to learn more, Quanta Magazine has a ",
          position: {
            start: {
              line: 185,
              column: 1,
              offset: 29647,
            },
            end: {
              line: 185,
              column: 251,
              offset: 29897,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.quantamagazine.org/amateur-mathematicians-find-fifth-busy-beaver-turing-machine-20240702/",
          children: [
            {
              type: "text",
              value: "fantastic article",
              position: {
                start: {
                  line: 185,
                  column: 252,
                  offset: 29898,
                },
                end: {
                  line: 185,
                  column: 269,
                  offset: 29915,
                },
              },
            },
          ],
          position: {
            start: {
              line: 185,
              column: 251,
              offset: 29897,
            },
            end: {
              line: 185,
              column: 373,
              offset: 30019,
            },
          },
        },
        {
          type: "text",
          value:
            " about the whole story with all its twists and turns. It's actually one of my favorite pieces of scientific journalism.",
          position: {
            start: {
              line: 185,
              column: 373,
              offset: 30019,
            },
            end: {
              line: 185,
              column: 492,
              offset: 30138,
            },
          },
        },
      ],
      position: {
        start: {
          line: 185,
          column: 1,
          offset: 29647,
        },
        end: {
          line: 185,
          column: 492,
          offset: 30138,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We can visualize the outputs of Turing machines by representing the tape in each step of its computation as a sequence of rows, where colored pixels are ",
          position: {
            start: {
              line: 187,
              column: 1,
              offset: 30140,
            },
            end: {
              line: 187,
              column: 154,
              offset: 30293,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 187,
              column: 154,
              offset: 30293,
            },
            end: {
              line: 187,
              column: 157,
              offset: 30296,
            },
          },
        },
        {
          type: "text",
          value: "s and black pixels are ",
          position: {
            start: {
              line: 187,
              column: 157,
              offset: 30296,
            },
            end: {
              line: 187,
              column: 180,
              offset: 30319,
            },
          },
        },
        {
          type: "inlineCode",
          value: "0",
          position: {
            start: {
              line: 187,
              column: 180,
              offset: 30319,
            },
            end: {
              line: 187,
              column: 183,
              offset: 30322,
            },
          },
        },
        {
          type: "text",
          value:
            "s. Take a look at a small portion of a five-state Turing machine that was shown to run forever (rotated 90 degrees for visibility):",
          position: {
            start: {
              line: 187,
              column: 183,
              offset: 30322,
            },
            end: {
              line: 187,
              column: 314,
              offset: 30453,
            },
          },
        },
      ],
      position: {
        start: {
          line: 187,
          column: 1,
          offset: 30140,
        },
        end: {
          line: 187,
          column: 314,
          offset: 30453,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title:
            "The patterned chaos of a nonterminating Turing machine. From Quanta Magazine.",
          url: "unthinkable/infinite-tm.png",
          alt: "A chaotic but oddly beautiful pattern of black and white pixels",
          position: {
            start: {
              line: 189,
              column: 1,
              offset: 30455,
            },
            end: {
              line: 189,
              column: 176,
              offset: 30630,
            },
          },
        },
      ],
      position: {
        start: {
          line: 189,
          column: 1,
          offset: 30455,
        },
        end: {
          line: 189,
          column: 176,
          offset: 30630,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I don't know about you, but looking at stuff like this really makes me awe-struck by the beauty of the universe. It looks like an alien world.",
          position: {
            start: {
              line: 191,
              column: 1,
              offset: 30632,
            },
            end: {
              line: 191,
              column: 143,
              offset: 30774,
            },
          },
        },
      ],
      position: {
        start: {
          line: 191,
          column: 1,
          offset: 30632,
        },
        end: {
          line: 191,
          column: 143,
          offset: 30774,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "So, shall we get on with finding BB(6)? Well, I'm not sure we even have a ",
          position: {
            start: {
              line: 193,
              column: 1,
              offset: 30776,
            },
            end: {
              line: 193,
              column: 75,
              offset: 30850,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "word",
              position: {
                start: {
                  line: 193,
                  column: 76,
                  offset: 30851,
                },
                end: {
                  line: 193,
                  column: 80,
                  offset: 30855,
                },
              },
            },
          ],
          position: {
            start: {
              line: 193,
              column: 75,
              offset: 30850,
            },
            end: {
              line: 193,
              column: 81,
              offset: 30856,
            },
          },
        },
        {
          type: "text",
          value:
            " that describes how much harder BB(6) is compared to BB(5). To quote from the Quanta article:",
          position: {
            start: {
              line: 193,
              column: 81,
              offset: 30856,
            },
            end: {
              line: 193,
              column: 174,
              offset: 30949,
            },
          },
        },
      ],
      position: {
        start: {
          line: 193,
          column: 1,
          offset: 30776,
        },
        end: {
          line: 193,
          column: 174,
          offset: 30949,
        },
      },
    },
    {
      type: "blockquote",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                'Meanwhile, part of the team has moved on to the next beaver. But just four days ago, [two contributors] discovered a barrier for BB(6) that seems insurmountable: a six-rule machine whose halting problem resembles a famously intractable math problem called the Collatz conjecture. [...] "It\'s conceivable that this is the last busy beaver number that we will ever know."',
              position: {
                start: {
                  line: 195,
                  column: 3,
                  offset: 30953,
                },
                end: {
                  line: 195,
                  column: 372,
                  offset: 31322,
                },
              },
            },
          ],
          position: {
            start: {
              line: 195,
              column: 3,
              offset: 30953,
            },
            end: {
              line: 195,
              column: 372,
              offset: 31322,
            },
          },
        },
      ],
      position: {
        start: {
          line: 195,
          column: 1,
          offset: 30951,
        },
        end: {
          line: 195,
          column: 372,
          offset: 31322,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "For that matter, it's been proved that solving BB(27) is as hard as another famously unsolved problem called the ",
          position: {
            start: {
              line: 197,
              column: 1,
              offset: 31324,
            },
            end: {
              line: 197,
              column: 114,
              offset: 31437,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Goldbach%27s_conjecture",
          children: [
            {
              type: "text",
              value: "Goldbach conjecture",
              position: {
                start: {
                  line: 197,
                  column: 115,
                  offset: 31438,
                },
                end: {
                  line: 197,
                  column: 134,
                  offset: 31457,
                },
              },
            },
          ],
          position: {
            start: {
              line: 197,
              column: 114,
              offset: 31437,
            },
            end: {
              line: 197,
              column: 190,
              offset: 31513,
            },
          },
        },
        {
          type: "text",
          value: " (which was mentioned in passing earlier), and that finding ",
          position: {
            start: {
              line: 197,
              column: 190,
              offset: 31513,
            },
            end: {
              line: 197,
              column: 250,
              offset: 31573,
            },
          },
        },
        {
          type: "inlineCode",
          value: "B(744)",
          position: {
            start: {
              line: 197,
              column: 250,
              offset: 31573,
            },
            end: {
              line: 197,
              column: 258,
              offset: 31581,
            },
          },
        },
        {
          type: "text",
          value: " would be as hard as proving the ",
          position: {
            start: {
              line: 197,
              column: 258,
              offset: 31581,
            },
            end: {
              line: 197,
              column: 291,
              offset: 31614,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Riemann_hypothesis",
          children: [
            {
              type: "text",
              value: "Riemann Hypothesis",
              position: {
                start: {
                  line: 197,
                  column: 292,
                  offset: 31615,
                },
                end: {
                  line: 197,
                  column: 310,
                  offset: 31633,
                },
              },
            },
          ],
          position: {
            start: {
              line: 197,
              column: 291,
              offset: 31614,
            },
            end: {
              line: 197,
              column: 361,
              offset: 31684,
            },
          },
        },
        {
          type: "text",
          value: ', widely considered to be the "Holy Grail of Mathematics".',
          position: {
            start: {
              line: 197,
              column: 361,
              offset: 31684,
            },
            end: {
              line: 197,
              column: 419,
              offset: 31742,
            },
          },
        },
      ],
      position: {
        start: {
          line: 197,
          column: 1,
          offset: 31324,
        },
        end: {
          line: 197,
          column: 419,
          offset: 31742,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The important point is that finding each successive busy beaver is ",
          position: {
            start: {
              line: 199,
              column: 1,
              offset: 31744,
            },
            end: {
              line: 199,
              column: 68,
              offset: 31811,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "qualitatively",
              position: {
                start: {
                  line: 199,
                  column: 69,
                  offset: 31812,
                },
                end: {
                  line: 199,
                  column: 82,
                  offset: 31825,
                },
              },
            },
          ],
          position: {
            start: {
              line: 199,
              column: 68,
              offset: 31811,
            },
            end: {
              line: 199,
              column: 83,
              offset: 31826,
            },
          },
        },
        {
          type: "text",
          value:
            " different from (and harder than) any that came before. Each one will require new levels of abstraction to recognize the patterns in the chaos.",
          position: {
            start: {
              line: 199,
              column: 83,
              offset: 31826,
            },
            end: {
              line: 199,
              column: 226,
              offset: 31969,
            },
          },
        },
      ],
      position: {
        start: {
          line: 199,
          column: 1,
          offset: 31744,
        },
        end: {
          line: 199,
          column: 226,
          offset: 31969,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'This idea of "patterns of chaos" is, I think, a very beautiful one. One could argue that the course of human scientific progress has been the history of finding patterns in chaos, and then noticing the chaos ',
          position: {
            start: {
              line: 201,
              column: 1,
              offset: 31971,
            },
            end: {
              line: 201,
              column: 209,
              offset: 32179,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "in",
              position: {
                start: {
                  line: 201,
                  column: 210,
                  offset: 32180,
                },
                end: {
                  line: 201,
                  column: 212,
                  offset: 32182,
                },
              },
            },
          ],
          position: {
            start: {
              line: 201,
              column: 209,
              offset: 32179,
            },
            end: {
              line: 201,
              column: 213,
              offset: 32183,
            },
          },
        },
        {
          type: "text",
          value:
            " those patterns, until we once again find a pattern which explains those chaotic patterns of chaos, until we notice the chaos in ",
          position: {
            start: {
              line: 201,
              column: 213,
              offset: 32183,
            },
            end: {
              line: 201,
              column: 342,
              offset: 32312,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "those",
              position: {
                start: {
                  line: 201,
                  column: 343,
                  offset: 32313,
                },
                end: {
                  line: 201,
                  column: 348,
                  offset: 32318,
                },
              },
            },
          ],
          position: {
            start: {
              line: 201,
              column: 342,
              offset: 32312,
            },
            end: {
              line: 201,
              column: 349,
              offset: 32319,
            },
          },
        },
        {
          type: "text",
          value:
            " patterns, and so on. Can we keep on finding the patterns... forever? If we do, will there be a point where we no longer see chaos, only patterns?",
          position: {
            start: {
              line: 201,
              column: 349,
              offset: 32319,
            },
            end: {
              line: 201,
              column: 495,
              offset: 32465,
            },
          },
        },
      ],
      position: {
        start: {
          line: 201,
          column: 1,
          offset: 31971,
        },
        end: {
          line: 201,
          column: 495,
          offset: 32465,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I don't think so. I have no proof, just faith. I think there are patterns in our universe which exist on levels of abstraction that our brain (which, as a reminder, evolved primarily to stay alive and tell other monkeys where the bananas are) will never be able to reach.",
          position: {
            start: {
              line: 203,
              column: 1,
              offset: 32467,
            },
            end: {
              line: 203,
              column: 272,
              offset: 32738,
            },
          },
        },
      ],
      position: {
        start: {
          line: 203,
          column: 1,
          offset: 32467,
        },
        end: {
          line: 203,
          column: 272,
          offset: 32738,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "To be a little less hand-wavy, take the Riemann Hypothesis (RH). Without getting into the weeds of what it states, a proof that RH is correct would mean that the ",
          position: {
            start: {
              line: 205,
              column: 1,
              offset: 32740,
            },
            end: {
              line: 205,
              column: 163,
              offset: 32902,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "dist",
          },
          children: [
            {
              type: "text",
              value: "distribution of primes",
              position: {
                start: {
                  line: 205,
                  column: 169,
                  offset: 32908,
                },
                end: {
                  line: 205,
                  column: 191,
                  offset: 32930,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 163,
              offset: 32902,
            },
            end: {
              line: 205,
              column: 203,
              offset: 32942,
            },
          },
        },
        {
          type: "text",
          value:
            '– which seems irregular up close– is actually very orderly. This is another great example of "chaotic patterns" becoming "patterned chaotic patterns". Sure, we can ',
          position: {
            start: {
              line: 205,
              column: 203,
              offset: 32942,
            },
            end: {
              line: 205,
              column: 367,
              offset: 33106,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "assume",
              position: {
                start: {
                  line: 205,
                  column: 368,
                  offset: 33107,
                },
                end: {
                  line: 205,
                  column: 374,
                  offset: 33113,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 367,
              offset: 33106,
            },
            end: {
              line: 205,
              column: 375,
              offset: 33114,
            },
          },
        },
        {
          type: "text",
          value:
            " RH is true. But without a proof, no human on this planet understands ",
          position: {
            start: {
              line: 205,
              column: 375,
              offset: 33114,
            },
            end: {
              line: 205,
              column: 445,
              offset: 33184,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "why",
              position: {
                start: {
                  line: 205,
                  column: 446,
                  offset: 33185,
                },
                end: {
                  line: 205,
                  column: 449,
                  offset: 33188,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 445,
              offset: 33184,
            },
            end: {
              line: 205,
              column: 450,
              offset: 33189,
            },
          },
        },
        {
          type: "text",
          value:
            " prime numbers have to be distributed in the way RH suggests.",
          position: {
            start: {
              line: 205,
              column: 450,
              offset: 33189,
            },
            end: {
              line: 205,
              column: 511,
              offset: 33250,
            },
          },
        },
      ],
      position: {
        start: {
          line: 205,
          column: 1,
          offset: 32740,
        },
        end: {
          line: 205,
          column: 511,
          offset: 33250,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I think higher levels of understanding unlock previously impossible, more abstract thoughts. Going back to the monkeys, their inability to precisely understand numbers above four ",
          position: {
            start: {
              line: 207,
              column: 1,
              offset: 33252,
            },
            end: {
              line: 207,
              column: 180,
              offset: 33431,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "locks",
              position: {
                start: {
                  line: 207,
                  column: 181,
                  offset: 33432,
                },
                end: {
                  line: 207,
                  column: 186,
                  offset: 33437,
                },
              },
            },
          ],
          position: {
            start: {
              line: 207,
              column: 180,
              offset: 33431,
            },
            end: {
              line: 207,
              column: 187,
              offset: 33438,
            },
          },
        },
        {
          type: "text",
          value:
            ' them out of truly grasping mathematics. Likewise, not being able to answer some "simple" questions about prime numbers, I think, locks us out of certain high-level thoughts about numbers. And even if we ',
          position: {
            start: {
              line: 207,
              column: 187,
              offset: 33438,
            },
            end: {
              line: 207,
              column: 391,
              offset: 33642,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "do",
              position: {
                start: {
                  line: 207,
                  column: 392,
                  offset: 33643,
                },
                end: {
                  line: 207,
                  column: 394,
                  offset: 33645,
                },
              },
            },
          ],
          position: {
            start: {
              line: 207,
              column: 391,
              offset: 33642,
            },
            end: {
              line: 207,
              column: 395,
              offset: 33646,
            },
          },
        },
        {
          type: "text",
          value:
            " crack the Riemann Hypothesis, and the Collatz Conjecture, and the Goldbach Conjecture, and the rest– I believe there will always be another level of understanding beyond reach. At some point, we'll run into the limit of the \"speed of thought\" combined with humanity's finite existence combined with the maximum information density of the brain.",
          position: {
            start: {
              line: 207,
              column: 395,
              offset: 33646,
            },
            end: {
              line: 207,
              column: 740,
              offset: 33991,
            },
          },
        },
      ],
      position: {
        start: {
          line: 207,
          column: 1,
          offset: 33252,
        },
        end: {
          line: 207,
          column: 740,
          offset: 33991,
        },
      },
    },
    {
      type: "heading",
      depth: 1,
      children: [
        {
          type: "text",
          value: "This thought cannot be thunk",
          position: {
            start: {
              line: 209,
              column: 3,
              offset: 33995,
            },
            end: {
              line: 209,
              column: 31,
              offset: 34023,
            },
          },
        },
      ],
      position: {
        start: {
          line: 209,
          column: 1,
          offset: 33993,
        },
        end: {
          line: 209,
          column: 31,
          offset: 34023,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'Thus concludes my answer to the question of "Are there thoughts that can\'t be thunk?". Because of the way ',
          position: {
            start: {
              line: 211,
              column: 1,
              offset: 34025,
            },
            end: {
              line: 211,
              column: 107,
              offset: 34131,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "my",
              position: {
                start: {
                  line: 211,
                  column: 108,
                  offset: 34132,
                },
                end: {
                  line: 211,
                  column: 110,
                  offset: 34134,
                },
              },
            },
          ],
          position: {
            start: {
              line: 211,
              column: 107,
              offset: 34131,
            },
            end: {
              line: 211,
              column: 111,
              offset: 34135,
            },
          },
        },
        {
          type: "text",
          value:
            " brain is wired, this essay turned out more technical than I was initially going for, mostly because I had a hard time convincing myself that other non-technical thoughts had any real limitations that could be described with any level of precision.",
          position: {
            start: {
              line: 211,
              column: 111,
              offset: 34135,
            },
            end: {
              line: 211,
              column: 359,
              offset: 34383,
            },
          },
        },
      ],
      position: {
        start: {
          line: 211,
          column: 1,
          offset: 34025,
        },
        end: {
          line: 211,
          column: 359,
          offset: 34383,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "To be optimistic, though, the fact that it was so damn difficult to write a compelling argument for any (interesting) limitation of the brain is uplifting in its own way. Don't overthink it. ■",
          position: {
            start: {
              line: 213,
              column: 1,
              offset: 34385,
            },
            end: {
              line: 213,
              column: 193,
              offset: 34577,
            },
          },
        },
      ],
      position: {
        start: {
          line: 213,
          column: 1,
          offset: 34385,
        },
        end: {
          line: 213,
          column: 193,
          offset: 34577,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "real",
          },
          children: [
            {
              type: "text",
              value:
                'I\'m putting "real" in quotes because, in the context of our perception, everything is subjective. There\'s no separate compartments in your brain for the stuff that "really" happened and the stuff you read in books or saw in movies. Sometimes it\'s hard to tell them apart.',
              position: {
                start: {
                  line: 215,
                  column: 11,
                  offset: 34589,
                },
                end: {
                  line: 215,
                  column: 282,
                  offset: 34860,
                },
              },
            },
          ],
          position: {
            start: {
              line: 215,
              column: 1,
              offset: 34579,
            },
            end: {
              line: 215,
              column: 294,
              offset: 34872,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 215,
              column: 294,
              offset: 34872,
            },
            end: {
              line: 216,
              column: 1,
              offset: 34873,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "possibly-experience",
          },
          children: [
            {
              type: "text",
              value:
                "Just like my previous footnote, there's no real distinction between possible and impossible experiences because of fiction (or hallucinogens), but that's the point, really.",
              position: {
                start: {
                  line: 216,
                  column: 11,
                  offset: 34883,
                },
                end: {
                  line: 216,
                  column: 183,
                  offset: 35055,
                },
              },
            },
          ],
          position: {
            start: {
              line: 216,
              column: 1,
              offset: 34873,
            },
            end: {
              line: 216,
              column: 210,
              offset: 35082,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 216,
              column: 210,
              offset: 35082,
            },
            end: {
              line: 217,
              column: 1,
              offset: 35083,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "second-nature",
          },
          children: [
            {
              type: "text",
              value: "All of a sudden, I got curious about what ",
              position: {
                start: {
                  line: 217,
                  column: 11,
                  offset: 35093,
                },
                end: {
                  line: 217,
                  column: 53,
                  offset: 35135,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "first",
                  position: {
                    start: {
                      line: 217,
                      column: 54,
                      offset: 35136,
                    },
                    end: {
                      line: 217,
                      column: 59,
                      offset: 35141,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 217,
                  column: 53,
                  offset: 35135,
                },
                end: {
                  line: 217,
                  column: 60,
                  offset: 35142,
                },
              },
            },
            {
              type: "text",
              value:
                ' nature is supposed to be. Interestingly, it turns out that "second" here actually refers to "following" nature, kind of like how you might "second" an opinion. It comes from the latin ',
              position: {
                start: {
                  line: 217,
                  column: 60,
                  offset: 35142,
                },
                end: {
                  line: 217,
                  column: 245,
                  offset: 35327,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "secundum naturum",
                  position: {
                    start: {
                      line: 217,
                      column: 246,
                      offset: 35328,
                    },
                    end: {
                      line: 217,
                      column: 262,
                      offset: 35344,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 217,
                  column: 245,
                  offset: 35327,
                },
                end: {
                  line: 217,
                  column: 263,
                  offset: 35345,
                },
              },
            },
            {
              type: "text",
              value: ", and is contrasted with ",
              position: {
                start: {
                  line: 217,
                  column: 263,
                  offset: 35345,
                },
                end: {
                  line: 217,
                  column: 288,
                  offset: 35370,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "super naturum",
                  position: {
                    start: {
                      line: 217,
                      column: 289,
                      offset: 35371,
                    },
                    end: {
                      line: 217,
                      column: 302,
                      offset: 35384,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 217,
                  column: 288,
                  offset: 35370,
                },
                end: {
                  line: 217,
                  column: 303,
                  offset: 35385,
                },
              },
            },
            {
              type: "text",
              value: ' ("above nature") and ',
              position: {
                start: {
                  line: 217,
                  column: 303,
                  offset: 35385,
                },
                end: {
                  line: 217,
                  column: 325,
                  offset: 35407,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "contra naturum",
                  position: {
                    start: {
                      line: 217,
                      column: 326,
                      offset: 35408,
                    },
                    end: {
                      line: 217,
                      column: 340,
                      offset: 35422,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 217,
                  column: 325,
                  offset: 35407,
                },
                end: {
                  line: 217,
                  column: 341,
                  offset: 35423,
                },
              },
            },
            {
              type: "text",
              value: ' ("against nature").',
              position: {
                start: {
                  line: 217,
                  column: 341,
                  offset: 35423,
                },
                end: {
                  line: 217,
                  column: 361,
                  offset: 35443,
                },
              },
            },
          ],
          position: {
            start: {
              line: 217,
              column: 1,
              offset: 35083,
            },
            end: {
              line: 217,
              column: 382,
              offset: 35464,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 217,
              column: 382,
              offset: 35464,
            },
            end: {
              line: 218,
              column: 1,
              offset: 35465,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "loosely",
          },
          children: [
            {
              type: "text",
              value:
                'Sometimes the connection between the symbol and thing is very clear, like "rock", but other times it\'s much more tenuous, like "beautification".',
              position: {
                start: {
                  line: 218,
                  column: 11,
                  offset: 35475,
                },
                end: {
                  line: 218,
                  column: 155,
                  offset: 35619,
                },
              },
            },
          ],
          position: {
            start: {
              line: 218,
              column: 1,
              offset: 35465,
            },
            end: {
              line: 218,
              column: 170,
              offset: 35634,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 218,
              column: 170,
              offset: 35634,
            },
            end: {
              line: 219,
              column: 1,
              offset: 35635,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "implementation-detail",
          },
          children: [
            {
              type: "text",
              value: "This sentence might get me into a lot of trouble.",
              position: {
                start: {
                  line: 219,
                  column: 11,
                  offset: 35645,
                },
                end: {
                  line: 219,
                  column: 60,
                  offset: 35694,
                },
              },
            },
          ],
          position: {
            start: {
              line: 219,
              column: 1,
              offset: 35635,
            },
            end: {
              line: 219,
              column: 89,
              offset: 35723,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 219,
              column: 89,
              offset: 35723,
            },
            end: {
              line: 220,
              column: 1,
              offset: 35724,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "memetics",
          },
          children: [
            {
              type: "text",
              value: "See: ",
              position: {
                start: {
                  line: 220,
                  column: 11,
                  offset: 35734,
                },
                end: {
                  line: 220,
                  column: 16,
                  offset: 35739,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/Memetics",
              children: [
                {
                  type: "text",
                  value: "memetics",
                  position: {
                    start: {
                      line: 220,
                      column: 17,
                      offset: 35740,
                    },
                    end: {
                      line: 220,
                      column: 25,
                      offset: 35748,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 220,
                  column: 16,
                  offset: 35739,
                },
                end: {
                  line: 220,
                  column: 66,
                  offset: 35789,
                },
              },
            },
            {
              type: "text",
              value: ", or this classic ",
              position: {
                start: {
                  line: 220,
                  column: 66,
                  offset: 35789,
                },
                end: {
                  line: 220,
                  column: 84,
                  offset: 35807,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://www.youtube.com/watch?v=rE3j_RHkqJc",
              children: [
                {
                  type: "text",
                  value: "CGP Grey video",
                  position: {
                    start: {
                      line: 220,
                      column: 85,
                      offset: 35808,
                    },
                    end: {
                      line: 220,
                      column: 99,
                      offset: 35822,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 220,
                  column: 84,
                  offset: 35807,
                },
                end: {
                  line: 220,
                  column: 145,
                  offset: 35868,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 220,
                  column: 145,
                  offset: 35868,
                },
                end: {
                  line: 220,
                  column: 146,
                  offset: 35869,
                },
              },
            },
          ],
          position: {
            start: {
              line: 220,
              column: 1,
              offset: 35724,
            },
            end: {
              line: 220,
              column: 162,
              offset: 35885,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 220,
              column: 162,
              offset: 35885,
            },
            end: {
              line: 221,
              column: 1,
              offset: 35886,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "evolution",
          },
          children: [
            {
              type: "text",
              value: "Controversial opinion #2.",
              position: {
                start: {
                  line: 221,
                  column: 11,
                  offset: 35896,
                },
                end: {
                  line: 221,
                  column: 36,
                  offset: 35921,
                },
              },
            },
          ],
          position: {
            start: {
              line: 221,
              column: 1,
              offset: 35886,
            },
            end: {
              line: 221,
              column: 53,
              offset: 35938,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 221,
              column: 53,
              offset: 35938,
            },
            end: {
              line: 222,
              column: 1,
              offset: 35939,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "breath",
          },
          children: [
            {
              type: "text",
              value: "This statement led me to the Wikipedia page for ",
              position: {
                start: {
                  line: 222,
                  column: 11,
                  offset: 35949,
                },
                end: {
                  line: 222,
                  column: 59,
                  offset: 35997,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/Diving_reflex",
              children: [
                {
                  type: "text",
                  value: "Diving reflex",
                  position: {
                    start: {
                      line: 222,
                      column: 60,
                      offset: 35998,
                    },
                    end: {
                      line: 222,
                      column: 73,
                      offset: 36011,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 222,
                  column: 59,
                  offset: 35997,
                },
                end: {
                  line: 222,
                  column: 119,
                  offset: 36057,
                },
              },
            },
            {
              type: "text",
              value:
                ", which was a fascinating read. Turns out that our brain's hardware also includes instructions for subconsciously directing more blood to vital organs when our face is submerged and our nostrils fill with water. Crazy.",
              position: {
                start: {
                  line: 222,
                  column: 119,
                  offset: 36057,
                },
                end: {
                  line: 222,
                  column: 337,
                  offset: 36275,
                },
              },
            },
          ],
          position: {
            start: {
              line: 222,
              column: 1,
              offset: 35939,
            },
            end: {
              line: 222,
              column: 351,
              offset: 36289,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 222,
              column: 351,
              offset: 36289,
            },
            end: {
              line: 223,
              column: 1,
              offset: 36290,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "two-eyes",
          },
          children: [
            {
              type: "text",
              value:
                "Contrary to popular opinion, depth perception is not dependent on having two eyes; although there are many important visual cues that ",
              position: {
                start: {
                  line: 223,
                  column: 11,
                  offset: 36300,
                },
                end: {
                  line: 223,
                  column: 145,
                  offset: 36434,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/Stereopsis",
              children: [
                {
                  type: "text",
                  value: "do require them",
                  position: {
                    start: {
                      line: 223,
                      column: 146,
                      offset: 36435,
                    },
                    end: {
                      line: 223,
                      column: 161,
                      offset: 36450,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 223,
                  column: 145,
                  offset: 36434,
                },
                end: {
                  line: 223,
                  column: 204,
                  offset: 36493,
                },
              },
            },
            {
              type: "text",
              value: ", there are ",
              position: {
                start: {
                  line: 223,
                  column: 204,
                  offset: 36493,
                },
                end: {
                  line: 223,
                  column: 216,
                  offset: 36505,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://www.wtamu.edu/~cbaird/sq/2023/07/28/why-does-a-person-with-only-one-working-eye-have-zero-depth-perception/",
              children: [
                {
                  type: "text",
                  value: "plenty of others",
                  position: {
                    start: {
                      line: 223,
                      column: 217,
                      offset: 36506,
                    },
                    end: {
                      line: 223,
                      column: 233,
                      offset: 36522,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 223,
                  column: 216,
                  offset: 36505,
                },
                end: {
                  line: 223,
                  column: 351,
                  offset: 36640,
                },
              },
            },
            {
              type: "text",
              value: " that don't.",
              position: {
                start: {
                  line: 223,
                  column: 351,
                  offset: 36640,
                },
                end: {
                  line: 223,
                  column: 363,
                  offset: 36652,
                },
              },
            },
          ],
          position: {
            start: {
              line: 223,
              column: 1,
              offset: 36290,
            },
            end: {
              line: 223,
              column: 379,
              offset: 36668,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 223,
              column: 379,
              offset: 36668,
            },
            end: {
              line: 224,
              column: 1,
              offset: 36669,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "band",
          },
          children: [
            {
              type: "text",
              value: "Band name.",
              position: {
                start: {
                  line: 224,
                  column: 11,
                  offset: 36679,
                },
                end: {
                  line: 224,
                  column: 21,
                  offset: 36689,
                },
              },
            },
          ],
          position: {
            start: {
              line: 224,
              column: 1,
              offset: 36669,
            },
            end: {
              line: 224,
              column: 33,
              offset: 36701,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 224,
              column: 33,
              offset: 36701,
            },
            end: {
              line: 225,
              column: 1,
              offset: 36702,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "assembly",
          },
          children: [
            {
              type: "text",
              value:
                "These are (barely) human-readable instructions for the CPU to execute, like ",
              position: {
                start: {
                  line: 225,
                  column: 11,
                  offset: 36712,
                },
                end: {
                  line: 225,
                  column: 87,
                  offset: 36788,
                },
              },
            },
            {
              type: "inlineCode",
              value: "MOV EAX, 5",
              position: {
                start: {
                  line: 225,
                  column: 87,
                  offset: 36788,
                },
                end: {
                  line: 225,
                  column: 99,
                  offset: 36800,
                },
              },
            },
            {
              type: "text",
              value:
                ", which means to move the value of 5 into the register called ",
              position: {
                start: {
                  line: 225,
                  column: 99,
                  offset: 36800,
                },
                end: {
                  line: 225,
                  column: 161,
                  offset: 36862,
                },
              },
            },
            {
              type: "inlineCode",
              value: "EAX",
              position: {
                start: {
                  line: 225,
                  column: 161,
                  offset: 36862,
                },
                end: {
                  line: 225,
                  column: 166,
                  offset: 36867,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 225,
                  column: 166,
                  offset: 36867,
                },
                end: {
                  line: 225,
                  column: 167,
                  offset: 36868,
                },
              },
            },
          ],
          position: {
            start: {
              line: 225,
              column: 1,
              offset: 36702,
            },
            end: {
              line: 225,
              column: 183,
              offset: 36884,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 225,
              column: 183,
              offset: 36884,
            },
            end: {
              line: 226,
              column: 1,
              offset: 36885,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "shake",
          },
          children: [
            {
              type: "text",
              value: "Proof: Suppose there's ",
              position: {
                start: {
                  line: 226,
                  column: 11,
                  offset: 36895,
                },
                end: {
                  line: 226,
                  column: 34,
                  offset: 36918,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 226,
                  column: 34,
                  offset: 36918,
                },
                end: {
                  line: 226,
                  column: 37,
                  offset: 36921,
                },
              },
            },
            {
              type: "text",
              value:
                ' people, or "pigeons". The "holes" in this analogy are the number of hands shaken. On first inspection, there seems to be ',
              position: {
                start: {
                  line: 226,
                  column: 37,
                  offset: 36921,
                },
                end: {
                  line: 226,
                  column: 159,
                  offset: 37043,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 226,
                  column: 159,
                  offset: 37043,
                },
                end: {
                  line: 226,
                  column: 162,
                  offset: 37046,
                },
              },
            },
            {
              type: "text",
              value: " holes, since one can shake hands with between ",
              position: {
                start: {
                  line: 226,
                  column: 162,
                  offset: 37046,
                },
                end: {
                  line: 226,
                  column: 209,
                  offset: 37093,
                },
              },
            },
            {
              type: "inlineCode",
              value: "0",
              position: {
                start: {
                  line: 226,
                  column: 209,
                  offset: 37093,
                },
                end: {
                  line: 226,
                  column: 212,
                  offset: 37096,
                },
              },
            },
            {
              type: "text",
              value: " and ",
              position: {
                start: {
                  line: 226,
                  column: 212,
                  offset: 37096,
                },
                end: {
                  line: 226,
                  column: 217,
                  offset: 37101,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N-1",
              position: {
                start: {
                  line: 226,
                  column: 217,
                  offset: 37101,
                },
                end: {
                  line: 226,
                  column: 222,
                  offset: 37106,
                },
              },
            },
            {
              type: "text",
              value:
                " people. But once you realize that it's impossible for one person to shake hands with everyone while somebody has shaken hands with no one, it's impossible for ",
              position: {
                start: {
                  line: 226,
                  column: 222,
                  offset: 37106,
                },
                end: {
                  line: 226,
                  column: 382,
                  offset: 37266,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "both",
                  position: {
                    start: {
                      line: 226,
                      column: 383,
                      offset: 37267,
                    },
                    end: {
                      line: 226,
                      column: 387,
                      offset: 37271,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 226,
                  column: 382,
                  offset: 37266,
                },
                end: {
                  line: 226,
                  column: 388,
                  offset: 37272,
                },
              },
            },
            {
              type: "text",
              value: " the ",
              position: {
                start: {
                  line: 226,
                  column: 388,
                  offset: 37272,
                },
                end: {
                  line: 226,
                  column: 393,
                  offset: 37277,
                },
              },
            },
            {
              type: "inlineCode",
              value: "0",
              position: {
                start: {
                  line: 226,
                  column: 393,
                  offset: 37277,
                },
                end: {
                  line: 226,
                  column: 396,
                  offset: 37280,
                },
              },
            },
            {
              type: "text",
              value: " and ",
              position: {
                start: {
                  line: 226,
                  column: 396,
                  offset: 37280,
                },
                end: {
                  line: 226,
                  column: 401,
                  offset: 37285,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N-1",
              position: {
                start: {
                  line: 226,
                  column: 401,
                  offset: 37285,
                },
                end: {
                  line: 226,
                  column: 406,
                  offset: 37290,
                },
              },
            },
            {
              type: "text",
              value:
                " buckets to be occupied at the same time. Then, since there are ",
              position: {
                start: {
                  line: 226,
                  column: 406,
                  offset: 37290,
                },
                end: {
                  line: 226,
                  column: 470,
                  offset: 37354,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 226,
                  column: 470,
                  offset: 37354,
                },
                end: {
                  line: 226,
                  column: 473,
                  offset: 37357,
                },
              },
            },
            {
              type: "text",
              value: " people and at most ",
              position: {
                start: {
                  line: 226,
                  column: 473,
                  offset: 37357,
                },
                end: {
                  line: 226,
                  column: 493,
                  offset: 37377,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N-1",
              position: {
                start: {
                  line: 226,
                  column: 493,
                  offset: 37377,
                },
                end: {
                  line: 226,
                  column: 498,
                  offset: 37382,
                },
              },
            },
            {
              type: "text",
              value:
                " available holes, by the pigeonhole principle, at least two people will have shaken the same number of hands.",
              position: {
                start: {
                  line: 226,
                  column: 498,
                  offset: 37382,
                },
                end: {
                  line: 226,
                  column: 607,
                  offset: 37491,
                },
              },
            },
          ],
          position: {
            start: {
              line: 226,
              column: 1,
              offset: 36885,
            },
            end: {
              line: 226,
              column: 620,
              offset: 37504,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 226,
              column: 620,
              offset: 37504,
            },
            end: {
              line: 227,
              column: 1,
              offset: 37505,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "turing",
          },
          children: [
            {
              type: "text",
              value:
                "If you're unfamiliar with Turing machines, they're actually pretty easy to define. You could check out ",
              position: {
                start: {
                  line: 227,
                  column: 11,
                  offset: 37515,
                },
                end: {
                  line: 227,
                  column: 114,
                  offset: 37618,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://www.youtube.com/watch?v=dNRDvLACg5Q",
              children: [
                {
                  type: "text",
                  value: "this quick 5-minute video",
                  position: {
                    start: {
                      line: 227,
                      column: 115,
                      offset: 37619,
                    },
                    end: {
                      line: 227,
                      column: 140,
                      offset: 37644,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 227,
                  column: 114,
                  offset: 37618,
                },
                end: {
                  line: 227,
                  column: 186,
                  offset: 37690,
                },
              },
            },
            {
              type: "text",
              value: " to get the idea.",
              position: {
                start: {
                  line: 227,
                  column: 186,
                  offset: 37690,
                },
                end: {
                  line: 227,
                  column: 203,
                  offset: 37707,
                },
              },
            },
          ],
          position: {
            start: {
              line: 227,
              column: 1,
              offset: 37505,
            },
            end: {
              line: 227,
              column: 217,
              offset: 37721,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 227,
              column: 217,
              offset: 37721,
            },
            end: {
              line: 228,
              column: 1,
              offset: 37722,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "dist",
          },
          children: [
            {
              type: "text",
              value:
                'If this is a new term for you, it basically refers to the question, "How many primes are there below ',
              position: {
                start: {
                  line: 228,
                  column: 11,
                  offset: 37732,
                },
                end: {
                  line: 228,
                  column: 112,
                  offset: 37833,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 228,
                  column: 112,
                  offset: 37833,
                },
                end: {
                  line: 228,
                  column: 115,
                  offset: 37836,
                },
              },
            },
            {
              type: "text",
              value: '?" We know that primes get more "rare" as ',
              position: {
                start: {
                  line: 228,
                  column: 115,
                  offset: 37836,
                },
                end: {
                  line: 228,
                  column: 157,
                  offset: 37878,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 228,
                  column: 157,
                  offset: 37878,
                },
                end: {
                  line: 228,
                  column: 160,
                  offset: 37881,
                },
              },
            },
            {
              type: "text",
              value:
                " gets bigger, but we (currently) can't perfectly characterize the ",
              position: {
                start: {
                  line: 228,
                  column: 160,
                  offset: 37881,
                },
                end: {
                  line: 228,
                  column: 226,
                  offset: 37947,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "rate",
                  position: {
                    start: {
                      line: 228,
                      column: 227,
                      offset: 37948,
                    },
                    end: {
                      line: 228,
                      column: 231,
                      offset: 37952,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 228,
                  column: 226,
                  offset: 37947,
                },
                end: {
                  line: 228,
                  column: 232,
                  offset: 37953,
                },
              },
            },
            {
              type: "text",
              value: " at which they get less frequent.",
              position: {
                start: {
                  line: 228,
                  column: 232,
                  offset: 37953,
                },
                end: {
                  line: 228,
                  column: 265,
                  offset: 37986,
                },
              },
            },
          ],
          position: {
            start: {
              line: 228,
              column: 1,
              offset: 37722,
            },
            end: {
              line: 228,
              column: 277,
              offset: 37998,
            },
          },
        },
      ],
      position: {
        start: {
          line: 215,
          column: 1,
          offset: 34579,
        },
        end: {
          line: 228,
          column: 277,
          offset: 37998,
        },
      },
    },
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0,
    },
    end: {
      line: 229,
      column: 1,
      offset: 37999,
    },
  },
};

export default post;
