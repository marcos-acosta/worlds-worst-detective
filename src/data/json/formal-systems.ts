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
          url: "formal-systems/math-box.png",
          alt: "A box that generates true statements",
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 1,
              column: 69,
              offset: 68,
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
          column: 69,
          offset: 68,
        },
      },
    },
    {
      type: "heading",
      depth: 1,
      children: [
        {
          type: "text",
          value: "No dumb questions: Why is math always right?",
          position: {
            start: {
              line: 3,
              column: 3,
              offset: 72,
            },
            end: {
              line: 3,
              column: 47,
              offset: 116,
            },
          },
        },
      ],
      position: {
        start: {
          line: 3,
          column: 1,
          offset: 70,
        },
        end: {
          line: 3,
          column: 47,
          offset: 116,
        },
      },
    },
    {
      type: "containerDirective",
      name: "tldr",
      attributes: {},
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "If you gave me a tape measure, a pencil, and paper, and asked me how long it would take for a brick to fall from my third-story apartment window to the sidewalk, I could give you a very accurate answer. We're so used to math being right that this doesn't feel like wizardry, but it kind of is. How do symbols like ",
              position: {
                start: {
                  line: 6,
                  column: 1,
                  offset: 126,
                },
                end: {
                  line: 6,
                  column: 315,
                  offset: 440,
                },
              },
            },
            {
              type: "inlineCode",
              value: "2",
              position: {
                start: {
                  line: 6,
                  column: 315,
                  offset: 440,
                },
                end: {
                  line: 6,
                  column: 318,
                  offset: 443,
                },
              },
            },
            {
              type: "text",
              value: " and ",
              position: {
                start: {
                  line: 6,
                  column: 318,
                  offset: 443,
                },
                end: {
                  line: 6,
                  column: 323,
                  offset: 448,
                },
              },
            },
            {
              type: "inlineCode",
              value: "+",
              position: {
                start: {
                  line: 6,
                  column: 323,
                  offset: 448,
                },
                end: {
                  line: 6,
                  column: 326,
                  offset: 451,
                },
              },
            },
            {
              type: "text",
              value:
                " actually relate to the real world? Why do we use math as a source of truth? That's what this piece is about.",
              position: {
                start: {
                  line: 6,
                  column: 326,
                  offset: 451,
                },
                end: {
                  line: 6,
                  column: 435,
                  offset: 560,
                },
              },
            },
          ],
          position: {
            start: {
              line: 6,
              column: 1,
              offset: 126,
            },
            end: {
              line: 6,
              column: 435,
              offset: 560,
            },
          },
        },
      ],
      position: {
        start: {
          line: 5,
          column: 1,
          offset: 118,
        },
        end: {
          line: 7,
          column: 4,
          offset: 564,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'The title for this essay was originally "Mechanized reasoning: What are formal systems?", but the term "formal system" sparks about as much excitement as "tapioca flour", or "utility closet", so I opted for a more evocative headline. As we begin, it may not be immediately apparent what formal systems have to do with the titular question, but I promise that it\'ll soon become very clear.',
          position: {
            start: {
              line: 9,
              column: 1,
              offset: 566,
            },
            end: {
              line: 9,
              column: 389,
              offset: 954,
            },
          },
        },
      ],
      position: {
        start: {
          line: 9,
          column: 1,
          offset: 566,
        },
        end: {
          line: 9,
          column: 389,
          offset: 954,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'My main goal for this article is that, after reading it, you will have a complete understanding of what a formal system is and how one can be used to model the "real world". There’ll be a lot of technical details to start, but then we’ll take a step back to touch on a few really intriguing mathematical and philosophical topics. My stretch goal is to leave you with a sense of wonder for what math even ',
          position: {
            start: {
              line: 11,
              column: 1,
              offset: 956,
            },
            end: {
              line: 11,
              column: 405,
              offset: 1360,
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
                  line: 11,
                  column: 406,
                  offset: 1361,
                },
                end: {
                  line: 11,
                  column: 408,
                  offset: 1363,
                },
              },
            },
          ],
          position: {
            start: {
              line: 11,
              column: 405,
              offset: 1360,
            },
            end: {
              line: 11,
              column: 409,
              offset: 1364,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 11,
              column: 409,
              offset: 1364,
            },
            end: {
              line: 11,
              column: 410,
              offset: 1365,
            },
          },
        },
      ],
      position: {
        start: {
          line: 11,
          column: 1,
          offset: 956,
        },
        end: {
          line: 11,
          column: 410,
          offset: 1365,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "With that said, grab your fanciest Sunday clothes, because we’re getting formal.",
          position: {
            start: {
              line: 13,
              column: 1,
              offset: 1367,
            },
            end: {
              line: 13,
              column: 81,
              offset: 1447,
            },
          },
        },
      ],
      position: {
        start: {
          line: 13,
          column: 1,
          offset: 1367,
        },
        end: {
          line: 13,
          column: 81,
          offset: 1447,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "What is a formal system?",
          position: {
            start: {
              line: 15,
              column: 4,
              offset: 1452,
            },
            end: {
              line: 15,
              column: 28,
              offset: 1476,
            },
          },
        },
      ],
      position: {
        start: {
          line: 15,
          column: 1,
          offset: 1449,
        },
        end: {
          line: 15,
          column: 28,
          offset: 1476,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Let’s lay some groundwork. In formal systems, everything we manipulate is a ",
          position: {
            start: {
              line: 17,
              column: 1,
              offset: 1478,
            },
            end: {
              line: 17,
              column: 77,
              offset: 1554,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "string",
              position: {
                start: {
                  line: 17,
                  column: 79,
                  offset: 1556,
                },
                end: {
                  line: 17,
                  column: 85,
                  offset: 1562,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 77,
              offset: 1554,
            },
            end: {
              line: 17,
              column: 87,
              offset: 1564,
            },
          },
        },
        {
          type: "text",
          value: ", which I’ll show in a monospace font, like ",
          position: {
            start: {
              line: 17,
              column: 87,
              offset: 1564,
            },
            end: {
              line: 17,
              column: 131,
              offset: 1608,
            },
          },
        },
        {
          type: "inlineCode",
          value: "abc",
          position: {
            start: {
              line: 17,
              column: 131,
              offset: 1608,
            },
            end: {
              line: 17,
              column: 136,
              offset: 1613,
            },
          },
        },
        {
          type: "text",
          value: " and ",
          position: {
            start: {
              line: 17,
              column: 136,
              offset: 1613,
            },
            end: {
              line: 17,
              column: 141,
              offset: 1618,
            },
          },
        },
        {
          type: "inlineCode",
          value: "s8'4:;2op",
          position: {
            start: {
              line: 17,
              column: 141,
              offset: 1618,
            },
            end: {
              line: 17,
              column: 152,
              offset: 1629,
            },
          },
        },
        {
          type: "text",
          value: ". Strings are made up of ",
          position: {
            start: {
              line: 17,
              column: 152,
              offset: 1629,
            },
            end: {
              line: 17,
              column: 177,
              offset: 1654,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "symbols",
              position: {
                start: {
                  line: 17,
                  column: 179,
                  offset: 1656,
                },
                end: {
                  line: 17,
                  column: 186,
                  offset: 1663,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 177,
              offset: 1654,
            },
            end: {
              line: 17,
              column: 188,
              offset: 1665,
            },
          },
        },
        {
          type: "text",
          value:
            ' (think characters) and don’t inherently mean anything. Some strings are "in" the system, while others aren’t. How do we know which ones? For one thing, a formal system has at least one string that we just take for granted to be in the system, like a freebie. These are called ',
          position: {
            start: {
              line: 17,
              column: 188,
              offset: 1665,
            },
            end: {
              line: 17,
              column: 465,
              offset: 1942,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "axioms",
              position: {
                start: {
                  line: 17,
                  column: 467,
                  offset: 1944,
                },
                end: {
                  line: 17,
                  column: 473,
                  offset: 1950,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 465,
              offset: 1942,
            },
            end: {
              line: 17,
              column: 475,
              offset: 1952,
            },
          },
        },
        {
          type: "text",
          value:
            ". A formal system also has rules for how to take an existing string in the system and create a new one that is also in the system. These rules are called ",
          position: {
            start: {
              line: 17,
              column: 475,
              offset: 1952,
            },
            end: {
              line: 17,
              column: 629,
              offset: 2106,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "rules of deduction",
              position: {
                start: {
                  line: 17,
                  column: 631,
                  offset: 2108,
                },
                end: {
                  line: 17,
                  column: 649,
                  offset: 2126,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 629,
              offset: 2106,
            },
            end: {
              line: 17,
              column: 651,
              offset: 2128,
            },
          },
        },
        {
          type: "text",
          value: ", or ",
          position: {
            start: {
              line: 17,
              column: 651,
              offset: 2128,
            },
            end: {
              line: 17,
              column: 656,
              offset: 2133,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "rules of inference",
              position: {
                start: {
                  line: 17,
                  column: 658,
                  offset: 2135,
                },
                end: {
                  line: 17,
                  column: 676,
                  offset: 2153,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 656,
              offset: 2133,
            },
            end: {
              line: 17,
              column: 678,
              offset: 2155,
            },
          },
        },
        {
          type: "text",
          value: ", and the new strings they generate are called ",
          position: {
            start: {
              line: 17,
              column: 678,
              offset: 2155,
            },
            end: {
              line: 17,
              column: 725,
              offset: 2202,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "theorems",
              position: {
                start: {
                  line: 17,
                  column: 727,
                  offset: 2204,
                },
                end: {
                  line: 17,
                  column: 735,
                  offset: 2212,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 725,
              offset: 2202,
            },
            end: {
              line: 17,
              column: 737,
              offset: 2214,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 17,
              column: 737,
              offset: 2214,
            },
            end: {
              line: 17,
              column: 738,
              offset: 2215,
            },
          },
        },
      ],
      position: {
        start: {
          line: 17,
          column: 1,
          offset: 1478,
        },
        end: {
          line: 17,
          column: 738,
          offset: 2215,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "This might sound a little abstract right now, so let’s play around with a concrete example. I’ll borrow one from Douglas Hofstadter’s book ",
          position: {
            start: {
              line: 19,
              column: 1,
              offset: 2217,
            },
            end: {
              line: 19,
              column: 140,
              offset: 2356,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "Gödel, Escher, Bach",
              position: {
                start: {
                  line: 19,
                  column: 141,
                  offset: 2357,
                },
                end: {
                  line: 19,
                  column: 160,
                  offset: 2376,
                },
              },
            },
          ],
          position: {
            start: {
              line: 19,
              column: 140,
              offset: 2356,
            },
            end: {
              line: 19,
              column: 161,
              offset: 2377,
            },
          },
        },
        {
          type: "text",
          value:
            ", which he calls the P-Q System. I modified it slightly because why not, life is short.",
          position: {
            start: {
              line: 19,
              column: 161,
              offset: 2377,
            },
            end: {
              line: 19,
              column: 248,
              offset: 2464,
            },
          },
        },
      ],
      position: {
        start: {
          line: 19,
          column: 1,
          offset: 2217,
        },
        end: {
          line: 19,
          column: 248,
          offset: 2464,
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
                  value: "The P-Q System (Marcos’s version)",
                  position: {
                    start: {
                      line: 21,
                      column: 5,
                      offset: 2470,
                    },
                    end: {
                      line: 21,
                      column: 38,
                      offset: 2503,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 21,
                  column: 3,
                  offset: 2468,
                },
                end: {
                  line: 21,
                  column: 40,
                  offset: 2505,
                },
              },
            },
          ],
          position: {
            start: {
              line: 21,
              column: 3,
              offset: 2468,
            },
            end: {
              line: 21,
              column: 40,
              offset: 2505,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Allowed symbols: ",
              position: {
                start: {
                  line: 23,
                  column: 3,
                  offset: 2510,
                },
                end: {
                  line: 23,
                  column: 20,
                  offset: 2527,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-",
              position: {
                start: {
                  line: 23,
                  column: 20,
                  offset: 2527,
                },
                end: {
                  line: 23,
                  column: 23,
                  offset: 2530,
                },
              },
            },
            {
              type: "text",
              value: " (hyphen), ",
              position: {
                start: {
                  line: 23,
                  column: 23,
                  offset: 2530,
                },
                end: {
                  line: 23,
                  column: 34,
                  offset: 2541,
                },
              },
            },
            {
              type: "inlineCode",
              value: "p",
              position: {
                start: {
                  line: 23,
                  column: 34,
                  offset: 2541,
                },
                end: {
                  line: 23,
                  column: 37,
                  offset: 2544,
                },
              },
            },
            {
              type: "text",
              value: ", and ",
              position: {
                start: {
                  line: 23,
                  column: 37,
                  offset: 2544,
                },
                end: {
                  line: 23,
                  column: 43,
                  offset: 2550,
                },
              },
            },
            {
              type: "inlineCode",
              value: "q",
              position: {
                start: {
                  line: 23,
                  column: 43,
                  offset: 2550,
                },
                end: {
                  line: 23,
                  column: 46,
                  offset: 2553,
                },
              },
            },
          ],
          position: {
            start: {
              line: 23,
              column: 3,
              offset: 2510,
            },
            end: {
              line: 23,
              column: 46,
              offset: 2553,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Axioms",
                  position: {
                    start: {
                      line: 25,
                      column: 4,
                      offset: 2559,
                    },
                    end: {
                      line: 25,
                      column: 10,
                      offset: 2565,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 25,
                  column: 3,
                  offset: 2558,
                },
                end: {
                  line: 25,
                  column: 11,
                  offset: 2566,
                },
              },
            },
          ],
          position: {
            start: {
              line: 25,
              column: 3,
              offset: 2558,
            },
            end: {
              line: 25,
              column: 11,
              offset: 2566,
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
                          value: "Axiom 1",
                          position: {
                            start: {
                              line: 27,
                              column: 7,
                              offset: 2575,
                            },
                            end: {
                              line: 27,
                              column: 14,
                              offset: 2582,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 27,
                          column: 5,
                          offset: 2573,
                        },
                        end: {
                          line: 27,
                          column: 16,
                          offset: 2584,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": ",
                      position: {
                        start: {
                          line: 27,
                          column: 16,
                          offset: 2584,
                        },
                        end: {
                          line: 27,
                          column: 18,
                          offset: 2586,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "-p-q--",
                      position: {
                        start: {
                          line: 27,
                          column: 18,
                          offset: 2586,
                        },
                        end: {
                          line: 27,
                          column: 26,
                          offset: 2594,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 27,
                      column: 5,
                      offset: 2573,
                    },
                    end: {
                      line: 27,
                      column: 26,
                      offset: 2594,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 27,
                  column: 3,
                  offset: 2571,
                },
                end: {
                  line: 27,
                  column: 26,
                  offset: 2594,
                },
              },
            },
          ],
          position: {
            start: {
              line: 27,
              column: 3,
              offset: 2571,
            },
            end: {
              line: 28,
              column: 2,
              offset: 2596,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Rules of inference",
                  position: {
                    start: {
                      line: 29,
                      column: 4,
                      offset: 2600,
                    },
                    end: {
                      line: 29,
                      column: 22,
                      offset: 2618,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 29,
                  column: 3,
                  offset: 2599,
                },
                end: {
                  line: 29,
                  column: 23,
                  offset: 2619,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 3,
              offset: 2599,
            },
            end: {
              line: 29,
              column: 23,
              offset: 2619,
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
                          value: "Rule 1",
                          position: {
                            start: {
                              line: 31,
                              column: 7,
                              offset: 2628,
                            },
                            end: {
                              line: 31,
                              column: 13,
                              offset: 2634,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 31,
                          column: 5,
                          offset: 2626,
                        },
                        end: {
                          line: 31,
                          column: 15,
                          offset: 2636,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 31,
                          column: 15,
                          offset: 2636,
                        },
                        end: {
                          line: 31,
                          column: 20,
                          offset: 2641,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}p{y}q{z}",
                      position: {
                        start: {
                          line: 31,
                          column: 20,
                          offset: 2641,
                        },
                        end: {
                          line: 31,
                          column: 33,
                          offset: 2654,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 31,
                          column: 33,
                          offset: 2654,
                        },
                        end: {
                          line: 31,
                          column: 54,
                          offset: 2675,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 31,
                              column: 55,
                              offset: 2676,
                            },
                            end: {
                              line: 31,
                              column: 56,
                              offset: 2677,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 31,
                          column: 54,
                          offset: 2675,
                        },
                        end: {
                          line: 31,
                          column: 57,
                          offset: 2678,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", ",
                      position: {
                        start: {
                          line: 31,
                          column: 57,
                          offset: 2678,
                        },
                        end: {
                          line: 31,
                          column: 59,
                          offset: 2680,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "y",
                          position: {
                            start: {
                              line: 31,
                              column: 60,
                              offset: 2681,
                            },
                            end: {
                              line: 31,
                              column: 61,
                              offset: 2682,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 31,
                          column: 59,
                          offset: 2680,
                        },
                        end: {
                          line: 31,
                          column: 62,
                          offset: 2683,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", and ",
                      position: {
                        start: {
                          line: 31,
                          column: 62,
                          offset: 2683,
                        },
                        end: {
                          line: 31,
                          column: 68,
                          offset: 2689,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "z",
                          position: {
                            start: {
                              line: 31,
                              column: 69,
                              offset: 2690,
                            },
                            end: {
                              line: 31,
                              column: 70,
                              offset: 2691,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 31,
                          column: 68,
                          offset: 2689,
                        },
                        end: {
                          line: 31,
                          column: 71,
                          offset: 2692,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " are all made of hyphens, then ",
                      position: {
                        start: {
                          line: 31,
                          column: 71,
                          offset: 2692,
                        },
                        end: {
                          line: 31,
                          column: 102,
                          offset: 2723,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}-p{y}q{z}-",
                      position: {
                        start: {
                          line: 31,
                          column: 102,
                          offset: 2723,
                        },
                        end: {
                          line: 31,
                          column: 117,
                          offset: 2738,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is also a theorem.",
                      position: {
                        start: {
                          line: 31,
                          column: 117,
                          offset: 2738,
                        },
                        end: {
                          line: 31,
                          column: 136,
                          offset: 2757,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 31,
                      column: 5,
                      offset: 2626,
                    },
                    end: {
                      line: 31,
                      column: 136,
                      offset: 2757,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 31,
                  column: 3,
                  offset: 2624,
                },
                end: {
                  line: 31,
                  column: 136,
                  offset: 2757,
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
                          value: "Rule 2",
                          position: {
                            start: {
                              line: 32,
                              column: 7,
                              offset: 2764,
                            },
                            end: {
                              line: 32,
                              column: 13,
                              offset: 2770,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 32,
                          column: 5,
                          offset: 2762,
                        },
                        end: {
                          line: 32,
                          column: 15,
                          offset: 2772,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 32,
                          column: 15,
                          offset: 2772,
                        },
                        end: {
                          line: 32,
                          column: 20,
                          offset: 2777,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}p{y}q{z}",
                      position: {
                        start: {
                          line: 32,
                          column: 20,
                          offset: 2777,
                        },
                        end: {
                          line: 32,
                          column: 33,
                          offset: 2790,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 32,
                          column: 33,
                          offset: 2790,
                        },
                        end: {
                          line: 32,
                          column: 54,
                          offset: 2811,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 32,
                              column: 55,
                              offset: 2812,
                            },
                            end: {
                              line: 32,
                              column: 56,
                              offset: 2813,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 32,
                          column: 54,
                          offset: 2811,
                        },
                        end: {
                          line: 32,
                          column: 57,
                          offset: 2814,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", ",
                      position: {
                        start: {
                          line: 32,
                          column: 57,
                          offset: 2814,
                        },
                        end: {
                          line: 32,
                          column: 59,
                          offset: 2816,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "y",
                          position: {
                            start: {
                              line: 32,
                              column: 60,
                              offset: 2817,
                            },
                            end: {
                              line: 32,
                              column: 61,
                              offset: 2818,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 32,
                          column: 59,
                          offset: 2816,
                        },
                        end: {
                          line: 32,
                          column: 62,
                          offset: 2819,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", and ",
                      position: {
                        start: {
                          line: 32,
                          column: 62,
                          offset: 2819,
                        },
                        end: {
                          line: 32,
                          column: 68,
                          offset: 2825,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "z",
                          position: {
                            start: {
                              line: 32,
                              column: 69,
                              offset: 2826,
                            },
                            end: {
                              line: 32,
                              column: 70,
                              offset: 2827,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 32,
                          column: 68,
                          offset: 2825,
                        },
                        end: {
                          line: 32,
                          column: 71,
                          offset: 2828,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " are all made of hyphens, then ",
                      position: {
                        start: {
                          line: 32,
                          column: 71,
                          offset: 2828,
                        },
                        end: {
                          line: 32,
                          column: 102,
                          offset: 2859,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{y}p{x}q{z}",
                      position: {
                        start: {
                          line: 32,
                          column: 102,
                          offset: 2859,
                        },
                        end: {
                          line: 32,
                          column: 115,
                          offset: 2872,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is also a theorem.",
                      position: {
                        start: {
                          line: 32,
                          column: 115,
                          offset: 2872,
                        },
                        end: {
                          line: 32,
                          column: 134,
                          offset: 2891,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 32,
                      column: 5,
                      offset: 2762,
                    },
                    end: {
                      line: 32,
                      column: 134,
                      offset: 2891,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 32,
                  column: 3,
                  offset: 2760,
                },
                end: {
                  line: 32,
                  column: 134,
                  offset: 2891,
                },
              },
            },
          ],
          position: {
            start: {
              line: 31,
              column: 3,
              offset: 2624,
            },
            end: {
              line: 32,
              column: 134,
              offset: 2891,
            },
          },
        },
      ],
      position: {
        start: {
          line: 21,
          column: 1,
          offset: 2466,
        },
        end: {
          line: 32,
          column: 134,
          offset: 2891,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'As you can see, when defining rules, we can use "variables" to stand in for parts of a string. I chose to show those variables with curly braces, like ',
          position: {
            start: {
              line: 34,
              column: 1,
              offset: 2893,
            },
            end: {
              line: 34,
              column: 152,
              offset: 3044,
            },
          },
        },
        {
          type: "inlineCode",
          value: "{x}",
          position: {
            start: {
              line: 34,
              column: 152,
              offset: 3044,
            },
            end: {
              line: 34,
              column: 157,
              offset: 3049,
            },
          },
        },
        {
          type: "text",
          value:
            ", but it’s important to point out that it’s a convenience notation only; ",
          position: {
            start: {
              line: 34,
              column: 157,
              offset: 3049,
            },
            end: {
              line: 34,
              column: 230,
              offset: 3122,
            },
          },
        },
        {
          type: "inlineCode",
          value: "{",
          position: {
            start: {
              line: 34,
              column: 230,
              offset: 3122,
            },
            end: {
              line: 34,
              column: 233,
              offset: 3125,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 34,
              column: 233,
              offset: 3125,
            },
            end: {
              line: 34,
              column: 235,
              offset: 3127,
            },
          },
        },
        {
          type: "inlineCode",
          value: "}",
          position: {
            start: {
              line: 34,
              column: 235,
              offset: 3127,
            },
            end: {
              line: 34,
              column: 238,
              offset: 3130,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 34,
              column: 238,
              offset: 3130,
            },
            end: {
              line: 34,
              column: 240,
              offset: 3132,
            },
          },
        },
        {
          type: "inlineCode",
          value: "x",
          position: {
            start: {
              line: 34,
              column: 240,
              offset: 3132,
            },
            end: {
              line: 34,
              column: 243,
              offset: 3135,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 34,
              column: 243,
              offset: 3135,
            },
            end: {
              line: 34,
              column: 245,
              offset: 3137,
            },
          },
        },
        {
          type: "inlineCode",
          value: "y",
          position: {
            start: {
              line: 34,
              column: 245,
              offset: 3137,
            },
            end: {
              line: 34,
              column: 248,
              offset: 3140,
            },
          },
        },
        {
          type: "text",
          value: ", and ",
          position: {
            start: {
              line: 34,
              column: 248,
              offset: 3140,
            },
            end: {
              line: 34,
              column: 254,
              offset: 3146,
            },
          },
        },
        {
          type: "inlineCode",
          value: "z",
          position: {
            start: {
              line: 34,
              column: 254,
              offset: 3146,
            },
            end: {
              line: 34,
              column: 257,
              offset: 3149,
            },
          },
        },
        {
          type: "text",
          value:
            " are symbols that don’t belong to this system and could therefore never appear in a string of the P-Q System.",
          position: {
            start: {
              line: 34,
              column: 257,
              offset: 3149,
            },
            end: {
              line: 34,
              column: 366,
              offset: 3258,
            },
          },
        },
      ],
      position: {
        start: {
          line: 34,
          column: 1,
          offset: 2893,
        },
        end: {
          line: 34,
          column: 366,
          offset: 3258,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "With that said, let’s light the fire, grease our skillet, and cook.",
          position: {
            start: {
              line: 36,
              column: 1,
              offset: 3260,
            },
            end: {
              line: 36,
              column: 68,
              offset: 3327,
            },
          },
        },
      ],
      position: {
        start: {
          line: 36,
          column: 1,
          offset: 3260,
        },
        end: {
          line: 36,
          column: 68,
          offset: 3327,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Playing around",
          position: {
            start: {
              line: 38,
              column: 5,
              offset: 3333,
            },
            end: {
              line: 38,
              column: 19,
              offset: 3347,
            },
          },
        },
      ],
      position: {
        start: {
          line: 38,
          column: 1,
          offset: 3329,
        },
        end: {
          line: 38,
          column: 19,
          offset: 3347,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The obvious first thing to do is start deriving some theorems of the P-Q System.",
          position: {
            start: {
              line: 40,
              column: 1,
              offset: 3349,
            },
            end: {
              line: 40,
              column: 81,
              offset: 3429,
            },
          },
        },
      ],
      position: {
        start: {
          line: 40,
          column: 1,
          offset: 3349,
        },
        end: {
          line: 40,
          column: 81,
          offset: 3429,
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
              value: "Theorem 1. ",
              position: {
                start: {
                  line: 42,
                  column: 3,
                  offset: 3433,
                },
                end: {
                  line: 42,
                  column: 14,
                  offset: 3444,
                },
              },
            },
            {
              type: "inlineCode",
              value: "--p-q---",
              position: {
                start: {
                  line: 42,
                  column: 14,
                  offset: 3444,
                },
                end: {
                  line: 42,
                  column: 24,
                  offset: 3454,
                },
              },
            },
            {
              type: "text",
              value: " (by Rule 1 on Axiom 1)\nTheorem 2. ",
              position: {
                start: {
                  line: 42,
                  column: 24,
                  offset: 3454,
                },
                end: {
                  line: 43,
                  column: 14,
                  offset: 3491,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-p--q---",
              position: {
                start: {
                  line: 43,
                  column: 14,
                  offset: 3491,
                },
                end: {
                  line: 43,
                  column: 24,
                  offset: 3501,
                },
              },
            },
            {
              type: "text",
              value: " (by Rule 2 on Theorem 1)\nTheorem 3. ",
              position: {
                start: {
                  line: 43,
                  column: 24,
                  offset: 3501,
                },
                end: {
                  line: 44,
                  column: 14,
                  offset: 3540,
                },
              },
            },
            {
              type: "inlineCode",
              value: "---p-q----",
              position: {
                start: {
                  line: 44,
                  column: 14,
                  offset: 3540,
                },
                end: {
                  line: 44,
                  column: 26,
                  offset: 3552,
                },
              },
            },
            {
              type: "text",
              value: " (by Rule 1 on Theorem 1)\nTheorem 4. ",
              position: {
                start: {
                  line: 44,
                  column: 26,
                  offset: 3552,
                },
                end: {
                  line: 45,
                  column: 14,
                  offset: 3591,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-p---q----",
              position: {
                start: {
                  line: 45,
                  column: 14,
                  offset: 3591,
                },
                end: {
                  line: 45,
                  column: 26,
                  offset: 3603,
                },
              },
            },
            {
              type: "text",
              value: " (by Rule 2 on Theorem 3)\nTheorem 5. ",
              position: {
                start: {
                  line: 45,
                  column: 26,
                  offset: 3603,
                },
                end: {
                  line: 46,
                  column: 14,
                  offset: 3642,
                },
              },
            },
            {
              type: "inlineCode",
              value: "--p—q---",
              position: {
                start: {
                  line: 46,
                  column: 14,
                  offset: 3642,
                },
                end: {
                  line: 46,
                  column: 24,
                  offset: 3652,
                },
              },
            },
            {
              type: "text",
              value: " (by Rule 1 on Theorem 2)",
              position: {
                start: {
                  line: 46,
                  column: 24,
                  offset: 3652,
                },
                end: {
                  line: 46,
                  column: 49,
                  offset: 3677,
                },
              },
            },
          ],
          position: {
            start: {
              line: 42,
              column: 3,
              offset: 3433,
            },
            end: {
              line: 46,
              column: 49,
              offset: 3677,
            },
          },
        },
      ],
      position: {
        start: {
          line: 42,
          column: 1,
          offset: 3431,
        },
        end: {
          line: 46,
          column: 49,
          offset: 3677,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Congratulations! We’ve discovered 5 theorems of the P-Q system.",
          position: {
            start: {
              line: 48,
              column: 1,
              offset: 3679,
            },
            end: {
              line: 48,
              column: 64,
              offset: 3742,
            },
          },
        },
      ],
      position: {
        start: {
          line: 48,
          column: 1,
          offset: 3679,
        },
        end: {
          line: 48,
          column: 64,
          offset: 3742,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Note that the process of generating new theorems is purely ",
          position: {
            start: {
              line: 50,
              column: 1,
              offset: 3744,
            },
            end: {
              line: 50,
              column: 60,
              offset: 3803,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "typographical",
              position: {
                start: {
                  line: 50,
                  column: 62,
                  offset: 3805,
                },
                end: {
                  line: 50,
                  column: 75,
                  offset: 3818,
                },
              },
            },
          ],
          position: {
            start: {
              line: 50,
              column: 60,
              offset: 3803,
            },
            end: {
              line: 50,
              column: 77,
              offset: 3820,
            },
          },
        },
        {
          type: "text",
          value: ". What I mean by this is that we’re not dealing with the ",
          position: {
            start: {
              line: 50,
              column: 77,
              offset: 3820,
            },
            end: {
              line: 50,
              column: 134,
              offset: 3877,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "meaning",
              position: {
                start: {
                  line: 50,
                  column: 135,
                  offset: 3878,
                },
                end: {
                  line: 50,
                  column: 142,
                  offset: 3885,
                },
              },
            },
          ],
          position: {
            start: {
              line: 50,
              column: 134,
              offset: 3877,
            },
            end: {
              line: 50,
              column: 143,
              offset: 3886,
            },
          },
        },
        {
          type: "text",
          value:
            " of anything when we follow the rules of inference, we’re just erasing, adding, or changing symbols on a page (or screen).",
          position: {
            start: {
              line: 50,
              column: 143,
              offset: 3886,
            },
            end: {
              line: 50,
              column: 265,
              offset: 4008,
            },
          },
        },
      ],
      position: {
        start: {
          line: 50,
          column: 1,
          offset: 3744,
        },
        end: {
          line: 50,
          column: 265,
          offset: 4008,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Another thing you might notice is that all theorems of the P-Q System will have a similar ",
          position: {
            start: {
              line: 52,
              column: 1,
              offset: 4010,
            },
            end: {
              line: 52,
              column: 91,
              offset: 4100,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "form",
              position: {
                start: {
                  line: 52,
                  column: 92,
                  offset: 4101,
                },
                end: {
                  line: 52,
                  column: 96,
                  offset: 4105,
                },
              },
            },
          ],
          position: {
            start: {
              line: 52,
              column: 91,
              offset: 4100,
            },
            end: {
              line: 52,
              column: 97,
              offset: 4106,
            },
          },
        },
        {
          type: "text",
          value:
            ". That is, they all begin with a group of hyphens followed by a ",
          position: {
            start: {
              line: 52,
              column: 97,
              offset: 4106,
            },
            end: {
              line: 52,
              column: 161,
              offset: 4170,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p",
          position: {
            start: {
              line: 52,
              column: 161,
              offset: 4170,
            },
            end: {
              line: 52,
              column: 164,
              offset: 4173,
            },
          },
        },
        {
          type: "text",
          value: ", then another group of hyphens followed by a ",
          position: {
            start: {
              line: 52,
              column: 164,
              offset: 4173,
            },
            end: {
              line: 52,
              column: 210,
              offset: 4219,
            },
          },
        },
        {
          type: "inlineCode",
          value: "q",
          position: {
            start: {
              line: 52,
              column: 210,
              offset: 4219,
            },
            end: {
              line: 52,
              column: 213,
              offset: 4222,
            },
          },
        },
        {
          type: "text",
          value:
            ", then a final group of hyphens. Just to give this a name, let’s call strings that follow this pattern ",
          position: {
            start: {
              line: 52,
              column: 213,
              offset: 4222,
            },
            end: {
              line: 52,
              column: 316,
              offset: 4325,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "well-formed",
              position: {
                start: {
                  line: 52,
                  column: 318,
                  offset: 4327,
                },
                end: {
                  line: 52,
                  column: 329,
                  offset: 4338,
                },
              },
            },
          ],
          position: {
            start: {
              line: 52,
              column: 316,
              offset: 4325,
            },
            end: {
              line: 52,
              column: 331,
              offset: 4340,
            },
          },
        },
        {
          type: "text",
          value: " strings.",
          position: {
            start: {
              line: 52,
              column: 331,
              offset: 4340,
            },
            end: {
              line: 52,
              column: 340,
              offset: 4349,
            },
          },
        },
      ],
      position: {
        start: {
          line: 52,
          column: 1,
          offset: 4010,
        },
        end: {
          line: 52,
          column: 340,
          offset: 4349,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "At this point, you might be waiting for me to tell you the whole point of this stupid thing, and why we’re mindlessly shoving around ",
          position: {
            start: {
              line: 54,
              column: 1,
              offset: 4351,
            },
            end: {
              line: 54,
              column: 134,
              offset: 4484,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p",
          position: {
            start: {
              line: 54,
              column: 134,
              offset: 4484,
            },
            end: {
              line: 54,
              column: 137,
              offset: 4487,
            },
          },
        },
        {
          type: "text",
          value: " s, ",
          position: {
            start: {
              line: 54,
              column: 137,
              offset: 4487,
            },
            end: {
              line: 54,
              column: 141,
              offset: 4491,
            },
          },
        },
        {
          type: "inlineCode",
          value: "q",
          position: {
            start: {
              line: 54,
              column: 141,
              offset: 4491,
            },
            end: {
              line: 54,
              column: 144,
              offset: 4494,
            },
          },
        },
        {
          type: "text",
          value:
            " s, and hyphens. As it so happens, this system was intentionally designed to ",
          position: {
            start: {
              line: 54,
              column: 144,
              offset: 4494,
            },
            end: {
              line: 54,
              column: 221,
              offset: 4571,
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
                  line: 54,
                  column: 222,
                  offset: 4572,
                },
                end: {
                  line: 54,
                  column: 231,
                  offset: 4581,
                },
              },
            },
          ],
          position: {
            start: {
              line: 54,
              column: 221,
              offset: 4571,
            },
            end: {
              line: 54,
              column: 232,
              offset: 4582,
            },
          },
        },
        {
          type: "text",
          value:
            " a concept very familiar to us. If it hasn’t jumped out at you, take a closer look at the rules and the theorems we’ve deduced and see if it reminds you of anything.",
          position: {
            start: {
              line: 54,
              column: 232,
              offset: 4582,
            },
            end: {
              line: 54,
              column: 397,
              offset: 4747,
            },
          },
        },
      ],
      position: {
        start: {
          line: 54,
          column: 1,
          offset: 4351,
        },
        end: {
          line: 54,
          column: 397,
          offset: 4747,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "As you may have already noticed, the P-Q System is a representation of addition! More specifically, the addition of two ",
          position: {
            start: {
              line: 56,
              column: 1,
              offset: 4749,
            },
            end: {
              line: 56,
              column: 121,
              offset: 4869,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "nat-nums",
          },
          children: [
            {
              type: "text",
              value: "natural numbers",
              position: {
                start: {
                  line: 56,
                  column: 127,
                  offset: 4875,
                },
                end: {
                  line: 56,
                  column: 142,
                  offset: 4890,
                },
              },
            },
          ],
          position: {
            start: {
              line: 56,
              column: 121,
              offset: 4869,
            },
            end: {
              line: 56,
              column: 158,
              offset: 4906,
            },
          },
        },
        {
          type: "text",
          value: ". The similarity becomes apparent when we ",
          position: {
            start: {
              line: 56,
              column: 158,
              offset: 4906,
            },
            end: {
              line: 56,
              column: 200,
              offset: 4948,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "interpret",
              position: {
                start: {
                  line: 56,
                  column: 201,
                  offset: 4949,
                },
                end: {
                  line: 56,
                  column: 210,
                  offset: 4958,
                },
              },
            },
          ],
          position: {
            start: {
              line: 56,
              column: 200,
              offset: 4948,
            },
            end: {
              line: 56,
              column: 211,
              offset: 4959,
            },
          },
        },
        {
          type: "text",
          value: " the symbols in a certain way:",
          position: {
            start: {
              line: 56,
              column: 211,
              offset: 4959,
            },
            end: {
              line: 56,
              column: 241,
              offset: 4989,
            },
          },
        },
      ],
      position: {
        start: {
          line: 56,
          column: 1,
          offset: 4749,
        },
        end: {
          line: 56,
          column: 241,
          offset: 4989,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "inlineCode",
          value: "p",
          position: {
            start: {
              line: 58,
              column: 1,
              offset: 4991,
            },
            end: {
              line: 58,
              column: 4,
              offset: 4994,
            },
          },
        },
        {
          type: "text",
          value: " = plus, ",
          position: {
            start: {
              line: 58,
              column: 4,
              offset: 4994,
            },
            end: {
              line: 58,
              column: 13,
              offset: 5003,
            },
          },
        },
        {
          type: "inlineCode",
          value: "q",
          position: {
            start: {
              line: 58,
              column: 13,
              offset: 5003,
            },
            end: {
              line: 58,
              column: 16,
              offset: 5006,
            },
          },
        },
        {
          type: "text",
          value: " = equals, ",
          position: {
            start: {
              line: 58,
              column: 16,
              offset: 5006,
            },
            end: {
              line: 58,
              column: 27,
              offset: 5017,
            },
          },
        },
        {
          type: "inlineCode",
          value: "-",
          position: {
            start: {
              line: 58,
              column: 27,
              offset: 5017,
            },
            end: {
              line: 58,
              column: 30,
              offset: 5020,
            },
          },
        },
        {
          type: "text",
          value: " = one, ",
          position: {
            start: {
              line: 58,
              column: 30,
              offset: 5020,
            },
            end: {
              line: 58,
              column: 38,
              offset: 5028,
            },
          },
        },
        {
          type: "inlineCode",
          value: "--",
          position: {
            start: {
              line: 58,
              column: 38,
              offset: 5028,
            },
            end: {
              line: 58,
              column: 42,
              offset: 5032,
            },
          },
        },
        {
          type: "text",
          value: " = two, ",
          position: {
            start: {
              line: 58,
              column: 42,
              offset: 5032,
            },
            end: {
              line: 58,
              column: 50,
              offset: 5040,
            },
          },
        },
        {
          type: "inlineCode",
          value: "---",
          position: {
            start: {
              line: 58,
              column: 50,
              offset: 5040,
            },
            end: {
              line: 58,
              column: 55,
              offset: 5045,
            },
          },
        },
        {
          type: "text",
          value: " = three, etc...",
          position: {
            start: {
              line: 58,
              column: 55,
              offset: 5045,
            },
            end: {
              line: 58,
              column: 71,
              offset: 5061,
            },
          },
        },
      ],
      position: {
        start: {
          line: 58,
          column: 1,
          offset: 4991,
        },
        end: {
          line: 58,
          column: 71,
          offset: 5061,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "This is interesting. Our formal system’s definition says nothing about math, addition, or even ",
          position: {
            start: {
              line: 60,
              column: 1,
              offset: 5063,
            },
            end: {
              line: 60,
              column: 96,
              offset: 5158,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "numbers",
              position: {
                start: {
                  line: 60,
                  column: 97,
                  offset: 5159,
                },
                end: {
                  line: 60,
                  column: 104,
                  offset: 5166,
                },
              },
            },
          ],
          position: {
            start: {
              line: 60,
              column: 96,
              offset: 5158,
            },
            end: {
              line: 60,
              column: 105,
              offset: 5167,
            },
          },
        },
        {
          type: "text",
          value:
            " at all. And yet, purely by virtue of the rules of deduction and axiom we chose, its resemblance to addition is undeniable.",
          position: {
            start: {
              line: 60,
              column: 105,
              offset: 5167,
            },
            end: {
              line: 60,
              column: 228,
              offset: 5290,
            },
          },
        },
      ],
      position: {
        start: {
          line: 60,
          column: 1,
          offset: 5063,
        },
        end: {
          line: 60,
          column: 228,
          offset: 5290,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Isomorphism",
          position: {
            start: {
              line: 62,
              column: 5,
              offset: 5296,
            },
            end: {
              line: 62,
              column: 16,
              offset: 5307,
            },
          },
        },
      ],
      position: {
        start: {
          line: 62,
          column: 1,
          offset: 5292,
        },
        end: {
          line: 62,
          column: 16,
          offset: 5307,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: 'This "resemblance" is a great example of ',
          position: {
            start: {
              line: 64,
              column: 1,
              offset: 5309,
            },
            end: {
              line: 64,
              column: 42,
              offset: 5350,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "isomorphism",
              position: {
                start: {
                  line: 64,
                  column: 44,
                  offset: 5352,
                },
                end: {
                  line: 64,
                  column: 55,
                  offset: 5363,
                },
              },
            },
          ],
          position: {
            start: {
              line: 64,
              column: 42,
              offset: 5350,
            },
            end: {
              line: 64,
              column: 57,
              offset: 5365,
            },
          },
        },
        {
          type: "text",
          value:
            ', which is arguably the most important concept in this essay, and I’ll write more about it separately. To put it loosely, isomorphism refers to a situation where "all the parts of one thing line up with the parts of another". For example, take the Internet and the road system. One could look at these two things and argue that they’re nothing alike; one is made up of silicon and fiber-optic cables, and the other pavement.',
          position: {
            start: {
              line: 64,
              column: 57,
              offset: 5365,
            },
            end: {
              line: 64,
              column: 481,
              offset: 5789,
            },
          },
        },
      ],
      position: {
        start: {
          line: 64,
          column: 1,
          offset: 5309,
        },
        end: {
          line: 64,
          column: 481,
          offset: 5789,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "But it’s much more human to notice the similarity in their ",
          position: {
            start: {
              line: 66,
              column: 1,
              offset: 5791,
            },
            end: {
              line: 66,
              column: 60,
              offset: 5850,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "form",
              position: {
                start: {
                  line: 66,
                  column: 61,
                  offset: 5851,
                },
                end: {
                  line: 66,
                  column: 65,
                  offset: 5855,
                },
              },
            },
          ],
          position: {
            start: {
              line: 66,
              column: 60,
              offset: 5850,
            },
            end: {
              line: 66,
              column: 66,
              offset: 5856,
            },
          },
        },
        {
          type: "text",
          value:
            "; how each element of one maps onto the other. The data packets of the Internet map onto the vehicles on the highway, websites map to physical destinations, IP addresses map to building addresses, routers map to traffic intersections, so on and so forth. One could argue that this isomorphism is not perfect (e.g. it’s not clear what the drivers ",
          position: {
            start: {
              line: 66,
              column: 66,
              offset: 5856,
            },
            end: {
              line: 66,
              column: 412,
              offset: 6202,
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
                  line: 66,
                  column: 413,
                  offset: 6203,
                },
                end: {
                  line: 66,
                  column: 415,
                  offset: 6205,
                },
              },
            },
          ],
          position: {
            start: {
              line: 66,
              column: 412,
              offset: 6202,
            },
            end: {
              line: 66,
              column: 416,
              offset: 6206,
            },
          },
        },
        {
          type: "text",
          value:
            " the vehicle would map to), but there’s clearly something there. The isomorphism is also definitely stronger than, say, a toaster and a boat, whose key features don’t really correspond to each other at all.",
          position: {
            start: {
              line: 66,
              column: 416,
              offset: 6206,
            },
            end: {
              line: 66,
              column: 622,
              offset: 6412,
            },
          },
        },
      ],
      position: {
        start: {
          line: 66,
          column: 1,
          offset: 5791,
        },
        end: {
          line: 66,
          column: 622,
          offset: 6412,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Returning now to the P-Q System, we hopefully have a newfound appreciation for the isomorphism it makes to the process of addition. At this point, ",
          position: {
            start: {
              line: 68,
              column: 1,
              offset: 6414,
            },
            end: {
              line: 68,
              column: 148,
              offset: 6561,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "have-to",
          },
          children: [
            {
              type: "text",
              value: "we have to ask ourselves",
              position: {
                start: {
                  line: 68,
                  column: 154,
                  offset: 6567,
                },
                end: {
                  line: 68,
                  column: 178,
                  offset: 6591,
                },
              },
            },
          ],
          position: {
            start: {
              line: 68,
              column: 148,
              offset: 6561,
            },
            end: {
              line: 68,
              column: 193,
              offset: 6606,
            },
          },
        },
        {
          type: "text",
          value: ", what even ",
          position: {
            start: {
              line: 68,
              column: 193,
              offset: 6606,
            },
            end: {
              line: 68,
              column: 205,
              offset: 6618,
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
                  line: 68,
                  column: 206,
                  offset: 6619,
                },
                end: {
                  line: 68,
                  column: 208,
                  offset: 6621,
                },
              },
            },
          ],
          position: {
            start: {
              line: 68,
              column: 205,
              offset: 6618,
            },
            end: {
              line: 68,
              column: 209,
              offset: 6622,
            },
          },
        },
        {
          type: "text",
          value: " addition?",
          position: {
            start: {
              line: 68,
              column: 209,
              offset: 6622,
            },
            end: {
              line: 68,
              column: 219,
              offset: 6632,
            },
          },
        },
      ],
      position: {
        start: {
          line: 68,
          column: 1,
          offset: 6414,
        },
        end: {
          line: 68,
          column: 219,
          offset: 6632,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "One way to look at addition is a side effect of the fact that numbers are ordered. Let’s go back to the first grade level: if you have 2 cookies, and then you have 3 more, how many cookies do you have in total? Well, you can count the first two cookies and arrive at 2, and then you count three higher than that to arrive at the fifth number, 5. This is expressed by Rule 1 of the P-Q System. Additionally (no pun intended), you could have counted the three cookies first instead, and then counted two higher, and gotten the same result. This is expressed by ",
          position: {
            start: {
              line: 70,
              column: 1,
              offset: 6634,
            },
            end: {
              line: 70,
              column: 560,
              offset: 7193,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "commute",
          },
          children: [
            {
              type: "text",
              value: "Rule 2 of the P-Q System",
              position: {
                start: {
                  line: 70,
                  column: 566,
                  offset: 7199,
                },
                end: {
                  line: 70,
                  column: 590,
                  offset: 7223,
                },
              },
            },
          ],
          position: {
            start: {
              line: 70,
              column: 560,
              offset: 7193,
            },
            end: {
              line: 70,
              column: 605,
              offset: 7238,
            },
          },
        },
        {
          type: "text",
          value: ". These two facts about addition are just what we ",
          position: {
            start: {
              line: 70,
              column: 605,
              offset: 7238,
            },
            end: {
              line: 70,
              column: 655,
              offset: 7288,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "mean",
              position: {
                start: {
                  line: 70,
                  column: 656,
                  offset: 7289,
                },
                end: {
                  line: 70,
                  column: 660,
                  offset: 7293,
                },
              },
            },
          ],
          position: {
            start: {
              line: 70,
              column: 655,
              offset: 7288,
            },
            end: {
              line: 70,
              column: 661,
              offset: 7294,
            },
          },
        },
        {
          type: "text",
          value:
            " by addition; we just take for granted that’s what it means and we ",
          position: {
            start: {
              line: 70,
              column: 661,
              offset: 7294,
            },
            end: {
              line: 70,
              column: 728,
              offset: 7361,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "other-way",
          },
          children: [
            {
              type: "text",
              value: "wouldn’t want it to be any other way",
              position: {
                start: {
                  line: 70,
                  column: 734,
                  offset: 7367,
                },
                end: {
                  line: 70,
                  column: 770,
                  offset: 7403,
                },
              },
            },
          ],
          position: {
            start: {
              line: 70,
              column: 728,
              offset: 7361,
            },
            end: {
              line: 70,
              column: 787,
              offset: 7420,
            },
          },
        },
        {
          type: "text",
          value:
            ". Since the P-Q system encodes these two key mechanisms of addition in its rules of inference, it’s easy to see the ",
          position: {
            start: {
              line: 70,
              column: 787,
              offset: 7420,
            },
            end: {
              line: 70,
              column: 903,
              offset: 7536,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "isomorphism",
          },
          children: [
            {
              type: "text",
              value: "isomorphism between the two",
              position: {
                start: {
                  line: 70,
                  column: 909,
                  offset: 7542,
                },
                end: {
                  line: 70,
                  column: 936,
                  offset: 7569,
                },
              },
            },
          ],
          position: {
            start: {
              line: 70,
              column: 903,
              offset: 7536,
            },
            end: {
              line: 70,
              column: 955,
              offset: 7588,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 70,
              column: 955,
              offset: 7588,
            },
            end: {
              line: 70,
              column: 956,
              offset: 7589,
            },
          },
        },
      ],
      position: {
        start: {
          line: 70,
          column: 1,
          offset: 6634,
        },
        end: {
          line: 70,
          column: 956,
          offset: 7589,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Misconception busting",
          position: {
            start: {
              line: 72,
              column: 5,
              offset: 7595,
            },
            end: {
              line: 72,
              column: 26,
              offset: 7616,
            },
          },
        },
      ],
      position: {
        start: {
          line: 72,
          column: 1,
          offset: 7591,
        },
        end: {
          line: 72,
          column: 26,
          offset: 7616,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'At this point, I can imagine a few possible misconceptions that might be arising, so I want to crush them immediately. For one thing, the P-Q System is not "the formal system for natural number addition". For one thing, the symbols we chose were arbitrary, but moreover, there are infinitely many formal systems that could represent this kind of addition. As I alluded to, Hofstadter’s version also represents addition, but his axioms and rules of inference differ from mine. And ',
          position: {
            start: {
              line: 74,
              column: 1,
              offset: 7618,
            },
            end: {
              line: 74,
              column: 481,
              offset: 8098,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "more",
              position: {
                start: {
                  line: 74,
                  column: 482,
                  offset: 8099,
                },
                end: {
                  line: 74,
                  column: 486,
                  offset: 8103,
                },
              },
            },
          ],
          position: {
            start: {
              line: 74,
              column: 481,
              offset: 8098,
            },
            end: {
              line: 74,
              column: 487,
              offset: 8104,
            },
          },
        },
        {
          type: "text",
          value:
            " moreover, this same system could be used to represent something else, like subtraction (just let ",
          position: {
            start: {
              line: 74,
              column: 487,
              offset: 8104,
            },
            end: {
              line: 74,
              column: 585,
              offset: 8202,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p",
          position: {
            start: {
              line: 74,
              column: 585,
              offset: 8202,
            },
            end: {
              line: 74,
              column: 588,
              offset: 8205,
            },
          },
        },
        {
          type: "text",
          value: ' map to "equals" and ',
          position: {
            start: {
              line: 74,
              column: 588,
              offset: 8205,
            },
            end: {
              line: 74,
              column: 609,
              offset: 8226,
            },
          },
        },
        {
          type: "inlineCode",
          value: "q",
          position: {
            start: {
              line: 74,
              column: 609,
              offset: 8226,
            },
            end: {
              line: 74,
              column: 612,
              offset: 8229,
            },
          },
        },
        {
          type: "text",
          value: ' map to "subtracted from"), or something ',
          position: {
            start: {
              line: 74,
              column: 612,
              offset: 8229,
            },
            end: {
              line: 74,
              column: 653,
              offset: 8270,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "else",
              position: {
                start: {
                  line: 74,
                  column: 654,
                  offset: 8271,
                },
                end: {
                  line: 74,
                  column: 658,
                  offset: 8275,
                },
              },
            },
          ],
          position: {
            start: {
              line: 74,
              column: 653,
              offset: 8270,
            },
            end: {
              line: 74,
              column: 659,
              offset: 8276,
            },
          },
        },
        {
          type: "text",
          value:
            " that we haven’t even thought of. And finally, don’t assume that all formal systems need to necessarily represent something. For example, take this random formal system:",
          position: {
            start: {
              line: 74,
              column: 659,
              offset: 8276,
            },
            end: {
              line: 74,
              column: 828,
              offset: 8445,
            },
          },
        },
      ],
      position: {
        start: {
          line: 74,
          column: 1,
          offset: 7618,
        },
        end: {
          line: 74,
          column: 828,
          offset: 8445,
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
                  value: "Random Formal System",
                  position: {
                    start: {
                      line: 76,
                      column: 5,
                      offset: 8451,
                    },
                    end: {
                      line: 76,
                      column: 25,
                      offset: 8471,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 76,
                  column: 3,
                  offset: 8449,
                },
                end: {
                  line: 76,
                  column: 27,
                  offset: 8473,
                },
              },
            },
          ],
          position: {
            start: {
              line: 76,
              column: 3,
              offset: 8449,
            },
            end: {
              line: 76,
              column: 27,
              offset: 8473,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Allowed symbols: ",
              position: {
                start: {
                  line: 78,
                  column: 3,
                  offset: 8478,
                },
                end: {
                  line: 78,
                  column: 20,
                  offset: 8495,
                },
              },
            },
            {
              type: "inlineCode",
              value: "a",
              position: {
                start: {
                  line: 78,
                  column: 20,
                  offset: 8495,
                },
                end: {
                  line: 78,
                  column: 23,
                  offset: 8498,
                },
              },
            },
            {
              type: "text",
              value: " through ",
              position: {
                start: {
                  line: 78,
                  column: 23,
                  offset: 8498,
                },
                end: {
                  line: 78,
                  column: 32,
                  offset: 8507,
                },
              },
            },
            {
              type: "inlineCode",
              value: "z",
              position: {
                start: {
                  line: 78,
                  column: 32,
                  offset: 8507,
                },
                end: {
                  line: 78,
                  column: 35,
                  offset: 8510,
                },
              },
            },
            {
              type: "text",
              value: " and ",
              position: {
                start: {
                  line: 78,
                  column: 35,
                  offset: 8510,
                },
                end: {
                  line: 78,
                  column: 40,
                  offset: 8515,
                },
              },
            },
            {
              type: "inlineCode",
              value: "6",
              position: {
                start: {
                  line: 78,
                  column: 40,
                  offset: 8515,
                },
                end: {
                  line: 78,
                  column: 43,
                  offset: 8518,
                },
              },
            },
          ],
          position: {
            start: {
              line: 78,
              column: 3,
              offset: 8478,
            },
            end: {
              line: 78,
              column: 43,
              offset: 8518,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Axioms",
                  position: {
                    start: {
                      line: 80,
                      column: 4,
                      offset: 8524,
                    },
                    end: {
                      line: 80,
                      column: 10,
                      offset: 8530,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 80,
                  column: 3,
                  offset: 8523,
                },
                end: {
                  line: 80,
                  column: 11,
                  offset: 8531,
                },
              },
            },
          ],
          position: {
            start: {
              line: 80,
              column: 3,
              offset: 8523,
            },
            end: {
              line: 80,
              column: 11,
              offset: 8531,
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
                          value: "Axiom 1",
                          position: {
                            start: {
                              line: 82,
                              column: 7,
                              offset: 8540,
                            },
                            end: {
                              line: 82,
                              column: 14,
                              offset: 8547,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 82,
                          column: 5,
                          offset: 8538,
                        },
                        end: {
                          line: 82,
                          column: 16,
                          offset: 8549,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": ",
                      position: {
                        start: {
                          line: 82,
                          column: 16,
                          offset: 8549,
                        },
                        end: {
                          line: 82,
                          column: 18,
                          offset: 8551,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "ah6r",
                      position: {
                        start: {
                          line: 82,
                          column: 18,
                          offset: 8551,
                        },
                        end: {
                          line: 82,
                          column: 24,
                          offset: 8557,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 82,
                      column: 5,
                      offset: 8538,
                    },
                    end: {
                      line: 82,
                      column: 24,
                      offset: 8557,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 82,
                  column: 3,
                  offset: 8536,
                },
                end: {
                  line: 82,
                  column: 24,
                  offset: 8557,
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
                          value: "Axiom 2",
                          position: {
                            start: {
                              line: 83,
                              column: 7,
                              offset: 8564,
                            },
                            end: {
                              line: 83,
                              column: 14,
                              offset: 8571,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 83,
                          column: 5,
                          offset: 8562,
                        },
                        end: {
                          line: 83,
                          column: 16,
                          offset: 8573,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": ",
                      position: {
                        start: {
                          line: 83,
                          column: 16,
                          offset: 8573,
                        },
                        end: {
                          line: 83,
                          column: 18,
                          offset: 8575,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "dddd",
                      position: {
                        start: {
                          line: 83,
                          column: 18,
                          offset: 8575,
                        },
                        end: {
                          line: 83,
                          column: 24,
                          offset: 8581,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 83,
                      column: 5,
                      offset: 8562,
                    },
                    end: {
                      line: 83,
                      column: 24,
                      offset: 8581,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 83,
                  column: 3,
                  offset: 8560,
                },
                end: {
                  line: 83,
                  column: 24,
                  offset: 8581,
                },
              },
            },
          ],
          position: {
            start: {
              line: 82,
              column: 3,
              offset: 8536,
            },
            end: {
              line: 84,
              column: 2,
              offset: 8583,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Rules of inference",
                  position: {
                    start: {
                      line: 85,
                      column: 4,
                      offset: 8587,
                    },
                    end: {
                      line: 85,
                      column: 22,
                      offset: 8605,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 85,
                  column: 3,
                  offset: 8586,
                },
                end: {
                  line: 85,
                  column: 23,
                  offset: 8606,
                },
              },
            },
          ],
          position: {
            start: {
              line: 85,
              column: 3,
              offset: 8586,
            },
            end: {
              line: 85,
              column: 23,
              offset: 8606,
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
                          value: "Rule 1",
                          position: {
                            start: {
                              line: 87,
                              column: 7,
                              offset: 8615,
                            },
                            end: {
                              line: 87,
                              column: 13,
                              offset: 8621,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 87,
                          column: 5,
                          offset: 8613,
                        },
                        end: {
                          line: 87,
                          column: 15,
                          offset: 8623,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 87,
                          column: 15,
                          offset: 8623,
                        },
                        end: {
                          line: 87,
                          column: 20,
                          offset: 8628,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "a{x}",
                      position: {
                        start: {
                          line: 87,
                          column: 20,
                          offset: 8628,
                        },
                        end: {
                          line: 87,
                          column: 26,
                          offset: 8634,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 87,
                          column: 26,
                          offset: 8634,
                        },
                        end: {
                          line: 87,
                          column: 47,
                          offset: 8655,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 87,
                              column: 48,
                              offset: 8656,
                            },
                            end: {
                              line: 87,
                              column: 49,
                              offset: 8657,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 87,
                          column: 47,
                          offset: 8655,
                        },
                        end: {
                          line: 87,
                          column: 50,
                          offset: 8658,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a string of at least one symbol, then ",
                      position: {
                        start: {
                          line: 87,
                          column: 50,
                          offset: 8658,
                        },
                        end: {
                          line: 87,
                          column: 92,
                          offset: 8700,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}l6s{x}",
                      position: {
                        start: {
                          line: 87,
                          column: 92,
                          offset: 8700,
                        },
                        end: {
                          line: 87,
                          column: 103,
                          offset: 8711,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is also a theorem.",
                      position: {
                        start: {
                          line: 87,
                          column: 103,
                          offset: 8711,
                        },
                        end: {
                          line: 87,
                          column: 122,
                          offset: 8730,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 87,
                      column: 5,
                      offset: 8613,
                    },
                    end: {
                      line: 87,
                      column: 122,
                      offset: 8730,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 87,
                  column: 3,
                  offset: 8611,
                },
                end: {
                  line: 87,
                  column: 122,
                  offset: 8730,
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
                          value: "Rule 2",
                          position: {
                            start: {
                              line: 88,
                              column: 7,
                              offset: 8737,
                            },
                            end: {
                              line: 88,
                              column: 13,
                              offset: 8743,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 88,
                          column: 5,
                          offset: 8735,
                        },
                        end: {
                          line: 88,
                          column: 15,
                          offset: 8745,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 88,
                          column: 15,
                          offset: 8745,
                        },
                        end: {
                          line: 88,
                          column: 20,
                          offset: 8750,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}d{x}",
                      position: {
                        start: {
                          line: 88,
                          column: 20,
                          offset: 8750,
                        },
                        end: {
                          line: 88,
                          column: 29,
                          offset: 8759,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 88,
                          column: 29,
                          offset: 8759,
                        },
                        end: {
                          line: 88,
                          column: 50,
                          offset: 8780,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 88,
                              column: 51,
                              offset: 8781,
                            },
                            end: {
                              line: 88,
                              column: 52,
                              offset: 8782,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 88,
                          column: 50,
                          offset: 8780,
                        },
                        end: {
                          line: 88,
                          column: 53,
                          offset: 8783,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a string of at least one symbol, then ",
                      position: {
                        start: {
                          line: 88,
                          column: 53,
                          offset: 8783,
                        },
                        end: {
                          line: 88,
                          column: 95,
                          offset: 8825,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "a{x}ii",
                      position: {
                        start: {
                          line: 88,
                          column: 95,
                          offset: 8825,
                        },
                        end: {
                          line: 88,
                          column: 103,
                          offset: 8833,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is also a theorem.",
                      position: {
                        start: {
                          line: 88,
                          column: 103,
                          offset: 8833,
                        },
                        end: {
                          line: 88,
                          column: 122,
                          offset: 8852,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 88,
                      column: 5,
                      offset: 8735,
                    },
                    end: {
                      line: 88,
                      column: 122,
                      offset: 8852,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 88,
                  column: 3,
                  offset: 8733,
                },
                end: {
                  line: 88,
                  column: 122,
                  offset: 8852,
                },
              },
            },
          ],
          position: {
            start: {
              line: 87,
              column: 3,
              offset: 8611,
            },
            end: {
              line: 88,
              column: 122,
              offset: 8852,
            },
          },
        },
      ],
      position: {
        start: {
          line: 76,
          column: 1,
          offset: 8447,
        },
        end: {
          line: 88,
          column: 122,
          offset: 8852,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I have no idea what, if anything, this system could possibly represent. But maybe, by pure coincidence, it happens to be isomorphic to something out there in the world. Who’s to say?",
          position: {
            start: {
              line: 90,
              column: 1,
              offset: 8854,
            },
            end: {
              line: 90,
              column: 183,
              offset: 9036,
            },
          },
        },
      ],
      position: {
        start: {
          line: 90,
          column: 1,
          offset: 8854,
        },
        end: {
          line: 90,
          column: 183,
          offset: 9036,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Tackling truth: soundness and completeness",
          position: {
            start: {
              line: 92,
              column: 5,
              offset: 9042,
            },
            end: {
              line: 92,
              column: 47,
              offset: 9084,
            },
          },
        },
      ],
      position: {
        start: {
          line: 92,
          column: 1,
          offset: 9038,
        },
        end: {
          line: 92,
          column: 47,
          offset: 9084,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "As we pointed out, the P-Q System generates theorems that represent statements about the addition of two natural numbers. Intuitively, we can see that it only produces ",
          position: {
            start: {
              line: 94,
              column: 1,
              offset: 9086,
            },
            end: {
              line: 94,
              column: 169,
              offset: 9254,
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
                  line: 94,
                  column: 170,
                  offset: 9255,
                },
                end: {
                  line: 94,
                  column: 174,
                  offset: 9259,
                },
              },
            },
          ],
          position: {
            start: {
              line: 94,
              column: 169,
              offset: 9254,
            },
            end: {
              line: 94,
              column: 175,
              offset: 9260,
            },
          },
        },
        {
          type: "text",
          value: " equations; we’ll never find that e.g. ",
          position: {
            start: {
              line: 94,
              column: 175,
              offset: 9260,
            },
            end: {
              line: 94,
              column: 214,
              offset: 9299,
            },
          },
        },
        {
          type: "inlineCode",
          value: "-p--q--",
          position: {
            start: {
              line: 94,
              column: 214,
              offset: 9299,
            },
            end: {
              line: 94,
              column: 223,
              offset: 9308,
            },
          },
        },
        {
          type: "text",
          value:
            " is a theorem. Can we prove this? Here’s a sketch of a proof:",
          position: {
            start: {
              line: 94,
              column: 223,
              offset: 9308,
            },
            end: {
              line: 94,
              column: 284,
              offset: 9369,
            },
          },
        },
      ],
      position: {
        start: {
          line: 94,
          column: 1,
          offset: 9086,
        },
        end: {
          line: 94,
          column: 284,
          offset: 9369,
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
                  value: "Proof of the Soundness of the P-Q System",
                  position: {
                    start: {
                      line: 96,
                      column: 5,
                      offset: 9375,
                    },
                    end: {
                      line: 96,
                      column: 45,
                      offset: 9415,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 96,
                  column: 3,
                  offset: 9373,
                },
                end: {
                  line: 96,
                  column: 47,
                  offset: 9417,
                },
              },
            },
          ],
          position: {
            start: {
              line: 96,
              column: 3,
              offset: 9373,
            },
            end: {
              line: 96,
              column: 47,
              offset: 9417,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Our only axiom ",
              position: {
                start: {
                  line: 98,
                  column: 3,
                  offset: 9422,
                },
                end: {
                  line: 98,
                  column: 18,
                  offset: 9437,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-p-q--",
              position: {
                start: {
                  line: 98,
                  column: 18,
                  offset: 9437,
                },
                end: {
                  line: 98,
                  column: 26,
                  offset: 9445,
                },
              },
            },
            {
              type: "text",
              value:
                " represents 1+1=2, which is true. Rule 1 represents adding 1 to both sides of the equation, which will always result in a true statement of addition. Rule 2 commutes the two terms being added, which will never change the truth value of the equality. Therefore, since our only axiom is true and all rules of production generate true statements when applied to a true statement, all theorems of the P-Q System represent true statements of natural number addition.",
              position: {
                start: {
                  line: 98,
                  column: 26,
                  offset: 9445,
                },
                end: {
                  line: 98,
                  column: 487,
                  offset: 9906,
                },
              },
            },
          ],
          position: {
            start: {
              line: 98,
              column: 3,
              offset: 9422,
            },
            end: {
              line: 98,
              column: 487,
              offset: 9906,
            },
          },
        },
      ],
      position: {
        start: {
          line: 96,
          column: 1,
          offset: 9371,
        },
        end: {
          line: 98,
          column: 487,
          offset: 9906,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We can go a step further, though. Just because our system only generates true statements doesn’t mean it’s capable of generating ",
          position: {
            start: {
              line: 100,
              column: 1,
              offset: 9908,
            },
            end: {
              line: 100,
              column: 130,
              offset: 10037,
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
                  line: 100,
                  column: 131,
                  offset: 10038,
                },
                end: {
                  line: 100,
                  column: 134,
                  offset: 10041,
                },
              },
            },
          ],
          position: {
            start: {
              line: 100,
              column: 130,
              offset: 10037,
            },
            end: {
              line: 100,
              column: 135,
              offset: 10042,
            },
          },
        },
        {
          type: "text",
          value:
            " true statements about the addition of two natural numbers. Just take out either Rule 1 or Rule 2 and you’ll have an example of such a system. But as you probably already sensed, the P-Q System ",
          position: {
            start: {
              line: 100,
              column: 135,
              offset: 10042,
            },
            end: {
              line: 100,
              column: 329,
              offset: 10236,
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
                  line: 100,
                  column: 330,
                  offset: 10237,
                },
                end: {
                  line: 100,
                  column: 332,
                  offset: 10239,
                },
              },
            },
          ],
          position: {
            start: {
              line: 100,
              column: 329,
              offset: 10236,
            },
            end: {
              line: 100,
              column: 333,
              offset: 10240,
            },
          },
        },
        {
          type: "text",
          value:
            " capable of generating all true statements of this type. Here’s a rough sketch of that proof:",
          position: {
            start: {
              line: 100,
              column: 333,
              offset: 10240,
            },
            end: {
              line: 100,
              column: 426,
              offset: 10333,
            },
          },
        },
      ],
      position: {
        start: {
          line: 100,
          column: 1,
          offset: 9908,
        },
        end: {
          line: 100,
          column: 426,
          offset: 10333,
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
                  value: "Proof of the Completeness of the P-Q System",
                  position: {
                    start: {
                      line: 102,
                      column: 5,
                      offset: 10339,
                    },
                    end: {
                      line: 102,
                      column: 48,
                      offset: 10382,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 102,
                  column: 3,
                  offset: 10337,
                },
                end: {
                  line: 102,
                  column: 50,
                  offset: 10384,
                },
              },
            },
          ],
          position: {
            start: {
              line: 102,
              column: 3,
              offset: 10337,
            },
            end: {
              line: 102,
              column: 50,
              offset: 10384,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Take an arbitrary true equation a+b=c, where ",
              position: {
                start: {
                  line: 104,
                  column: 3,
                  offset: 10389,
                },
                end: {
                  line: 104,
                  column: 48,
                  offset: 10434,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "a",
                  position: {
                    start: {
                      line: 104,
                      column: 49,
                      offset: 10435,
                    },
                    end: {
                      line: 104,
                      column: 50,
                      offset: 10436,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 48,
                  offset: 10434,
                },
                end: {
                  line: 104,
                  column: 51,
                  offset: 10437,
                },
              },
            },
            {
              type: "text",
              value: ", ",
              position: {
                start: {
                  line: 104,
                  column: 51,
                  offset: 10437,
                },
                end: {
                  line: 104,
                  column: 53,
                  offset: 10439,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "b",
                  position: {
                    start: {
                      line: 104,
                      column: 54,
                      offset: 10440,
                    },
                    end: {
                      line: 104,
                      column: 55,
                      offset: 10441,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 53,
                  offset: 10439,
                },
                end: {
                  line: 104,
                  column: 56,
                  offset: 10442,
                },
              },
            },
            {
              type: "text",
              value: ", and ",
              position: {
                start: {
                  line: 104,
                  column: 56,
                  offset: 10442,
                },
                end: {
                  line: 104,
                  column: 62,
                  offset: 10448,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "c",
                  position: {
                    start: {
                      line: 104,
                      column: 63,
                      offset: 10449,
                    },
                    end: {
                      line: 104,
                      column: 64,
                      offset: 10450,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 62,
                  offset: 10448,
                },
                end: {
                  line: 104,
                  column: 65,
                  offset: 10451,
                },
              },
            },
            {
              type: "text",
              value: " are all natural numbers. Call this equation ",
              position: {
                start: {
                  line: 104,
                  column: 65,
                  offset: 10451,
                },
                end: {
                  line: 104,
                  column: 110,
                  offset: 10496,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "E",
                  position: {
                    start: {
                      line: 104,
                      column: 111,
                      offset: 10497,
                    },
                    end: {
                      line: 104,
                      column: 112,
                      offset: 10498,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 110,
                  offset: 10496,
                },
                end: {
                  line: 104,
                  column: 113,
                  offset: 10499,
                },
              },
            },
            {
              type: "text",
              value:
                ". We will construct a theorem in the P-Q System that represents ",
              position: {
                start: {
                  line: 104,
                  column: 113,
                  offset: 10499,
                },
                end: {
                  line: 104,
                  column: 177,
                  offset: 10563,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "E",
                  position: {
                    start: {
                      line: 104,
                      column: 178,
                      offset: 10564,
                    },
                    end: {
                      line: 104,
                      column: 179,
                      offset: 10565,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 177,
                  offset: 10563,
                },
                end: {
                  line: 104,
                  column: 180,
                  offset: 10566,
                },
              },
            },
            {
              type: "text",
              value: ". Starting from ",
              position: {
                start: {
                  line: 104,
                  column: 180,
                  offset: 10566,
                },
                end: {
                  line: 104,
                  column: 196,
                  offset: 10582,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-p-q--",
              position: {
                start: {
                  line: 104,
                  column: 196,
                  offset: 10582,
                },
                end: {
                  line: 104,
                  column: 204,
                  offset: 10590,
                },
              },
            },
            {
              type: "text",
              value: " (Axiom 1), we first apply Rule 1 (",
              position: {
                start: {
                  line: 104,
                  column: 204,
                  offset: 10590,
                },
                end: {
                  line: 104,
                  column: 239,
                  offset: 10625,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "b",
                  position: {
                    start: {
                      line: 104,
                      column: 240,
                      offset: 10626,
                    },
                    end: {
                      line: 104,
                      column: 241,
                      offset: 10627,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 239,
                  offset: 10625,
                },
                end: {
                  line: 104,
                  column: 242,
                  offset: 10628,
                },
              },
            },
            {
              type: "text",
              value: "-1) times until we have ",
              position: {
                start: {
                  line: 104,
                  column: 242,
                  offset: 10628,
                },
                end: {
                  line: 104,
                  column: 266,
                  offset: 10652,
                },
              },
            },
            {
              type: "inlineCode",
              value: "{y}p-q-{y}",
              position: {
                start: {
                  line: 104,
                  column: 266,
                  offset: 10652,
                },
                end: {
                  line: 104,
                  column: 278,
                  offset: 10664,
                },
              },
            },
            {
              type: "text",
              value: ", where ",
              position: {
                start: {
                  line: 104,
                  column: 278,
                  offset: 10664,
                },
                end: {
                  line: 104,
                  column: 286,
                  offset: 10672,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "y",
                  position: {
                    start: {
                      line: 104,
                      column: 287,
                      offset: 10673,
                    },
                    end: {
                      line: 104,
                      column: 288,
                      offset: 10674,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 286,
                  offset: 10672,
                },
                end: {
                  line: 104,
                  column: 289,
                  offset: 10675,
                },
              },
            },
            {
              type: "text",
              value: " is a substring containing ",
              position: {
                start: {
                  line: 104,
                  column: 289,
                  offset: 10675,
                },
                end: {
                  line: 104,
                  column: 316,
                  offset: 10702,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "b",
                  position: {
                    start: {
                      line: 104,
                      column: 317,
                      offset: 10703,
                    },
                    end: {
                      line: 104,
                      column: 318,
                      offset: 10704,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 316,
                  offset: 10702,
                },
                end: {
                  line: 104,
                  column: 319,
                  offset: 10705,
                },
              },
            },
            {
              type: "text",
              value: " many hyphens. Then we apply Rule 2 to derive ",
              position: {
                start: {
                  line: 104,
                  column: 319,
                  offset: 10705,
                },
                end: {
                  line: 104,
                  column: 365,
                  offset: 10751,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-p{y}q-{y}",
              position: {
                start: {
                  line: 104,
                  column: 365,
                  offset: 10751,
                },
                end: {
                  line: 104,
                  column: 377,
                  offset: 10763,
                },
              },
            },
            {
              type: "text",
              value: ". Then, we apply Rule 1 (",
              position: {
                start: {
                  line: 104,
                  column: 377,
                  offset: 10763,
                },
                end: {
                  line: 104,
                  column: 402,
                  offset: 10788,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "a",
                  position: {
                    start: {
                      line: 104,
                      column: 403,
                      offset: 10789,
                    },
                    end: {
                      line: 104,
                      column: 404,
                      offset: 10790,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 402,
                  offset: 10788,
                },
                end: {
                  line: 104,
                  column: 405,
                  offset: 10791,
                },
              },
            },
            {
              type: "text",
              value: "-1) more times to get ",
              position: {
                start: {
                  line: 104,
                  column: 405,
                  offset: 10791,
                },
                end: {
                  line: 104,
                  column: 427,
                  offset: 10813,
                },
              },
            },
            {
              type: "inlineCode",
              value: "{x}p{y}q{y}{x}",
              position: {
                start: {
                  line: 104,
                  column: 427,
                  offset: 10813,
                },
                end: {
                  line: 104,
                  column: 443,
                  offset: 10829,
                },
              },
            },
            {
              type: "text",
              value: ", where ",
              position: {
                start: {
                  line: 104,
                  column: 443,
                  offset: 10829,
                },
                end: {
                  line: 104,
                  column: 451,
                  offset: 10837,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "x",
                  position: {
                    start: {
                      line: 104,
                      column: 452,
                      offset: 10838,
                    },
                    end: {
                      line: 104,
                      column: 453,
                      offset: 10839,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 451,
                  offset: 10837,
                },
                end: {
                  line: 104,
                  column: 454,
                  offset: 10840,
                },
              },
            },
            {
              type: "text",
              value: " is a substring containing ",
              position: {
                start: {
                  line: 104,
                  column: 454,
                  offset: 10840,
                },
                end: {
                  line: 104,
                  column: 481,
                  offset: 10867,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "a",
                  position: {
                    start: {
                      line: 104,
                      column: 482,
                      offset: 10868,
                    },
                    end: {
                      line: 104,
                      column: 483,
                      offset: 10869,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 481,
                  offset: 10867,
                },
                end: {
                  line: 104,
                  column: 484,
                  offset: 10870,
                },
              },
            },
            {
              type: "text",
              value: " many hyphens. Call this whole string ",
              position: {
                start: {
                  line: 104,
                  column: 484,
                  offset: 10870,
                },
                end: {
                  line: 104,
                  column: 522,
                  offset: 10908,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "S",
                  position: {
                    start: {
                      line: 104,
                      column: 523,
                      offset: 10909,
                    },
                    end: {
                      line: 104,
                      column: 524,
                      offset: 10910,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 522,
                  offset: 10908,
                },
                end: {
                  line: 104,
                  column: 525,
                  offset: 10911,
                },
              },
            },
            {
              type: "text",
              value: ". Note that ",
              position: {
                start: {
                  line: 104,
                  column: 525,
                  offset: 10911,
                },
                end: {
                  line: 104,
                  column: 537,
                  offset: 10923,
                },
              },
            },
            {
              type: "inlineCode",
              value: "{y}{x}",
              position: {
                start: {
                  line: 104,
                  column: 537,
                  offset: 10923,
                },
                end: {
                  line: 104,
                  column: 545,
                  offset: 10931,
                },
              },
            },
            {
              type: "text",
              value: " is a string with ",
              position: {
                start: {
                  line: 104,
                  column: 545,
                  offset: 10931,
                },
                end: {
                  line: 104,
                  column: 563,
                  offset: 10949,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "a",
                  position: {
                    start: {
                      line: 104,
                      column: 564,
                      offset: 10950,
                    },
                    end: {
                      line: 104,
                      column: 565,
                      offset: 10951,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 563,
                  offset: 10949,
                },
                end: {
                  line: 104,
                  column: 566,
                  offset: 10952,
                },
              },
            },
            {
              type: "text",
              value: "+",
              position: {
                start: {
                  line: 104,
                  column: 566,
                  offset: 10952,
                },
                end: {
                  line: 104,
                  column: 567,
                  offset: 10953,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "b",
                  position: {
                    start: {
                      line: 104,
                      column: 568,
                      offset: 10954,
                    },
                    end: {
                      line: 104,
                      column: 569,
                      offset: 10955,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 567,
                  offset: 10953,
                },
                end: {
                  line: 104,
                  column: 570,
                  offset: 10956,
                },
              },
            },
            {
              type: "text",
              value: " many hyphens i.e. ",
              position: {
                start: {
                  line: 104,
                  column: 570,
                  offset: 10956,
                },
                end: {
                  line: 104,
                  column: 589,
                  offset: 10975,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "c",
                  position: {
                    start: {
                      line: 104,
                      column: 590,
                      offset: 10976,
                    },
                    end: {
                      line: 104,
                      column: 591,
                      offset: 10977,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 589,
                  offset: 10975,
                },
                end: {
                  line: 104,
                  column: 592,
                  offset: 10978,
                },
              },
            },
            {
              type: "text",
              value: " many hyphens. Therefore, ",
              position: {
                start: {
                  line: 104,
                  column: 592,
                  offset: 10978,
                },
                end: {
                  line: 104,
                  column: 618,
                  offset: 11004,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "S",
                  position: {
                    start: {
                      line: 104,
                      column: 619,
                      offset: 11005,
                    },
                    end: {
                      line: 104,
                      column: 620,
                      offset: 11006,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 618,
                  offset: 11004,
                },
                end: {
                  line: 104,
                  column: 621,
                  offset: 11007,
                },
              },
            },
            {
              type: "text",
              value: " is a theorem of the P-Q System that represents ",
              position: {
                start: {
                  line: 104,
                  column: 621,
                  offset: 11007,
                },
                end: {
                  line: 104,
                  column: 669,
                  offset: 11055,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "E",
                  position: {
                    start: {
                      line: 104,
                      column: 670,
                      offset: 11056,
                    },
                    end: {
                      line: 104,
                      column: 671,
                      offset: 11057,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 669,
                  offset: 11055,
                },
                end: {
                  line: 104,
                  column: 672,
                  offset: 11058,
                },
              },
            },
            {
              type: "text",
              value: " when interpreted. And since ",
              position: {
                start: {
                  line: 104,
                  column: 672,
                  offset: 11058,
                },
                end: {
                  line: 104,
                  column: 701,
                  offset: 11087,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "E",
                  position: {
                    start: {
                      line: 104,
                      column: 702,
                      offset: 11088,
                    },
                    end: {
                      line: 104,
                      column: 703,
                      offset: 11089,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 701,
                  offset: 11087,
                },
                end: {
                  line: 104,
                  column: 704,
                  offset: 11090,
                },
              },
            },
            {
              type: "text",
              value: " can be ",
              position: {
                start: {
                  line: 104,
                  column: 704,
                  offset: 11090,
                },
                end: {
                  line: 104,
                  column: 712,
                  offset: 11098,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "any",
                  position: {
                    start: {
                      line: 104,
                      column: 713,
                      offset: 11099,
                    },
                    end: {
                      line: 104,
                      column: 716,
                      offset: 11102,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 104,
                  column: 712,
                  offset: 11098,
                },
                end: {
                  line: 104,
                  column: 717,
                  offset: 11103,
                },
              },
            },
            {
              type: "text",
              value:
                " arbitrary true equation about the addition of two natural numbers, all such true equations are represented by theorems of the P-Q System.",
              position: {
                start: {
                  line: 104,
                  column: 717,
                  offset: 11103,
                },
                end: {
                  line: 104,
                  column: 855,
                  offset: 11241,
                },
              },
            },
          ],
          position: {
            start: {
              line: 104,
              column: 3,
              offset: 10389,
            },
            end: {
              line: 104,
              column: 855,
              offset: 11241,
            },
          },
        },
      ],
      position: {
        start: {
          line: 102,
          column: 1,
          offset: 10335,
        },
        end: {
          line: 104,
          column: 855,
          offset: 11241,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "As I already gave away in the proof titles, if we can show that every theorem of a system yields a true statement when interpreted, we say the system is ",
          position: {
            start: {
              line: 106,
              column: 1,
              offset: 11243,
            },
            end: {
              line: 106,
              column: 154,
              offset: 11396,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "sound",
              position: {
                start: {
                  line: 106,
                  column: 156,
                  offset: 11398,
                },
                end: {
                  line: 106,
                  column: 161,
                  offset: 11403,
                },
              },
            },
          ],
          position: {
            start: {
              line: 106,
              column: 154,
              offset: 11396,
            },
            end: {
              line: 106,
              column: 163,
              offset: 11405,
            },
          },
        },
        {
          type: "text",
          value:
            '. If we can show that every true statement (within some domain, like "addition of two natural numbers" or "all facts of number theory") is a theorem of a system, we call that system ',
          position: {
            start: {
              line: 106,
              column: 163,
              offset: 11405,
            },
            end: {
              line: 106,
              column: 345,
              offset: 11587,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "complete",
              position: {
                start: {
                  line: 106,
                  column: 347,
                  offset: 11589,
                },
                end: {
                  line: 106,
                  column: 355,
                  offset: 11597,
                },
              },
            },
          ],
          position: {
            start: {
              line: 106,
              column: 345,
              offset: 11587,
            },
            end: {
              line: 106,
              column: 357,
              offset: 11599,
            },
          },
        },
        {
          type: "text",
          value:
            ". Note that the P-Q System is complete within the domain of adding two natural numbers, but ",
          position: {
            start: {
              line: 106,
              column: 357,
              offset: 11599,
            },
            end: {
              line: 106,
              column: 449,
              offset: 11691,
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
                  line: 106,
                  column: 450,
                  offset: 11692,
                },
                end: {
                  line: 106,
                  column: 453,
                  offset: 11695,
                },
              },
            },
          ],
          position: {
            start: {
              line: 106,
              column: 449,
              offset: 11691,
            },
            end: {
              line: 106,
              column: 454,
              offset: 11696,
            },
          },
        },
        {
          type: "text",
          value:
            " three (or more) natural numbers, rational numbers, real numbers, etc. It does one thing but it does it well.",
          position: {
            start: {
              line: 106,
              column: 454,
              offset: 11696,
            },
            end: {
              line: 106,
              column: 563,
              offset: 11805,
            },
          },
        },
      ],
      position: {
        start: {
          line: 106,
          column: 1,
          offset: 11243,
        },
        end: {
          line: 106,
          column: 563,
          offset: 11805,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Completeness may sound like a high bar, but on its own, it’s actually very easy to achieve. To demonstrate, I will debut my Complete System of Mathematics, in which all mathematical truths, in number theory and beyond, are theorems.",
          position: {
            start: {
              line: 108,
              column: 1,
              offset: 11807,
            },
            end: {
              line: 108,
              column: 233,
              offset: 12039,
            },
          },
        },
      ],
      position: {
        start: {
          line: 108,
          column: 1,
          offset: 11807,
        },
        end: {
          line: 108,
          column: 233,
          offset: 12039,
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
                  value: "Complete System of Mathematics (CSM)",
                  position: {
                    start: {
                      line: 110,
                      column: 5,
                      offset: 12045,
                    },
                    end: {
                      line: 110,
                      column: 41,
                      offset: 12081,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 110,
                  column: 3,
                  offset: 12043,
                },
                end: {
                  line: 110,
                  column: 43,
                  offset: 12083,
                },
              },
            },
          ],
          position: {
            start: {
              line: 110,
              column: 3,
              offset: 12043,
            },
            end: {
              line: 110,
              column: 43,
              offset: 12083,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Allowed symbols: All symbols used in mathematics",
              position: {
                start: {
                  line: 112,
                  column: 3,
                  offset: 12088,
                },
                end: {
                  line: 112,
                  column: 51,
                  offset: 12136,
                },
              },
            },
          ],
          position: {
            start: {
              line: 112,
              column: 3,
              offset: 12088,
            },
            end: {
              line: 112,
              column: 51,
              offset: 12136,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Axioms",
                  position: {
                    start: {
                      line: 114,
                      column: 4,
                      offset: 12142,
                    },
                    end: {
                      line: 114,
                      column: 10,
                      offset: 12148,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 114,
                  column: 3,
                  offset: 12141,
                },
                end: {
                  line: 114,
                  column: 11,
                  offset: 12149,
                },
              },
            },
          ],
          position: {
            start: {
              line: 114,
              column: 3,
              offset: 12141,
            },
            end: {
              line: 114,
              column: 11,
              offset: 12149,
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
                          value: "Axiom 1",
                          position: {
                            start: {
                              line: 116,
                              column: 7,
                              offset: 12158,
                            },
                            end: {
                              line: 116,
                              column: 14,
                              offset: 12165,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 116,
                          column: 5,
                          offset: 12156,
                        },
                        end: {
                          line: 116,
                          column: 16,
                          offset: 12167,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": ø (the empty string)",
                      position: {
                        start: {
                          line: 116,
                          column: 16,
                          offset: 12167,
                        },
                        end: {
                          line: 116,
                          column: 38,
                          offset: 12189,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 116,
                      column: 5,
                      offset: 12156,
                    },
                    end: {
                      line: 116,
                      column: 38,
                      offset: 12189,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 116,
                  column: 3,
                  offset: 12154,
                },
                end: {
                  line: 116,
                  column: 38,
                  offset: 12189,
                },
              },
            },
          ],
          position: {
            start: {
              line: 116,
              column: 3,
              offset: 12154,
            },
            end: {
              line: 117,
              column: 2,
              offset: 12191,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Rules of inference",
                  position: {
                    start: {
                      line: 118,
                      column: 4,
                      offset: 12195,
                    },
                    end: {
                      line: 118,
                      column: 22,
                      offset: 12213,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 118,
                  column: 3,
                  offset: 12194,
                },
                end: {
                  line: 118,
                  column: 23,
                  offset: 12214,
                },
              },
            },
          ],
          position: {
            start: {
              line: 118,
              column: 3,
              offset: 12194,
            },
            end: {
              line: 118,
              column: 23,
              offset: 12214,
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
                          value: "Rule 1",
                          position: {
                            start: {
                              line: 120,
                              column: 7,
                              offset: 12223,
                            },
                            end: {
                              line: 120,
                              column: 13,
                              offset: 12229,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 120,
                          column: 5,
                          offset: 12221,
                        },
                        end: {
                          line: 120,
                          column: 15,
                          offset: 12231,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 120,
                          column: 15,
                          offset: 12231,
                        },
                        end: {
                          line: 120,
                          column: 20,
                          offset: 12236,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}",
                      position: {
                        start: {
                          line: 120,
                          column: 20,
                          offset: 12236,
                        },
                        end: {
                          line: 120,
                          column: 25,
                          offset: 12241,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 120,
                          column: 25,
                          offset: 12241,
                        },
                        end: {
                          line: 120,
                          column: 46,
                          offset: 12262,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 120,
                              column: 47,
                              offset: 12263,
                            },
                            end: {
                              line: 120,
                              column: 48,
                              offset: 12264,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 120,
                          column: 46,
                          offset: 12262,
                        },
                        end: {
                          line: 120,
                          column: 49,
                          offset: 12265,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a string of 0 or more characters, then ",
                      position: {
                        start: {
                          line: 120,
                          column: 49,
                          offset: 12265,
                        },
                        end: {
                          line: 120,
                          column: 92,
                          offset: 12308,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}{y}",
                      position: {
                        start: {
                          line: 120,
                          column: 92,
                          offset: 12308,
                        },
                        end: {
                          line: 120,
                          column: 100,
                          offset: 12316,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is also a theorem, where ",
                      position: {
                        start: {
                          line: 120,
                          column: 100,
                          offset: 12316,
                        },
                        end: {
                          line: 120,
                          column: 126,
                          offset: 12342,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "y",
                          position: {
                            start: {
                              line: 120,
                              column: 127,
                              offset: 12343,
                            },
                            end: {
                              line: 120,
                              column: 128,
                              offset: 12344,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 120,
                          column: 126,
                          offset: 12342,
                        },
                        end: {
                          line: 120,
                          column: 129,
                          offset: 12345,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is any symbol of mathematics.",
                      position: {
                        start: {
                          line: 120,
                          column: 129,
                          offset: 12345,
                        },
                        end: {
                          line: 120,
                          column: 159,
                          offset: 12375,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 120,
                      column: 5,
                      offset: 12221,
                    },
                    end: {
                      line: 120,
                      column: 159,
                      offset: 12375,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 120,
                  column: 3,
                  offset: 12219,
                },
                end: {
                  line: 120,
                  column: 159,
                  offset: 12375,
                },
              },
            },
          ],
          position: {
            start: {
              line: 120,
              column: 3,
              offset: 12219,
            },
            end: {
              line: 120,
              column: 159,
              offset: 12375,
            },
          },
        },
      ],
      position: {
        start: {
          line: 110,
          column: 1,
          offset: 12041,
        },
        end: {
          line: 120,
          column: 159,
          offset: 12375,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "As you can see, all mathematical truths are theorems of CSM. The ",
          position: {
            start: {
              line: 122,
              column: 1,
              offset: 12377,
            },
            end: {
              line: 122,
              column: 66,
              offset: 12442,
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
                  line: 122,
                  column: 67,
                  offset: 12443,
                },
                end: {
                  line: 122,
                  column: 85,
                  offset: 12461,
                },
              },
            },
          ],
          position: {
            start: {
              line: 122,
              column: 66,
              offset: 12442,
            },
            end: {
              line: 122,
              column: 136,
              offset: 12512,
            },
          },
        },
        {
          type: "text",
          value:
            " is a theorem, along with its negation, just to be safe. Every possible addition, true or false, is a theorem. I await my prize.",
          position: {
            start: {
              line: 122,
              column: 136,
              offset: 12512,
            },
            end: {
              line: 122,
              column: 264,
              offset: 12640,
            },
          },
        },
      ],
      position: {
        start: {
          line: 122,
          column: 1,
          offset: 12377,
        },
        end: {
          line: 122,
          column: 264,
          offset: 12640,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'Obviously, CSM is not sound, which is a glaring problem. In reality, an unsound system is basically useless; by comparison, completeness is just a "nice-to-have". With that in mind, we can return to fully appreciate the P-Q System; addition of natural numbers may not be the most exciting thing in the world, but it can be ',
          position: {
            start: {
              line: 124,
              column: 1,
              offset: 12642,
            },
            end: {
              line: 124,
              column: 324,
              offset: 12965,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "fully represented",
              position: {
                start: {
                  line: 124,
                  column: 325,
                  offset: 12966,
                },
                end: {
                  line: 124,
                  column: 342,
                  offset: 12983,
                },
              },
            },
          ],
          position: {
            start: {
              line: 124,
              column: 324,
              offset: 12965,
            },
            end: {
              line: 124,
              column: 343,
              offset: 12984,
            },
          },
        },
        {
          type: "text",
          value: " by something as simple as a two-rule formal system.",
          position: {
            start: {
              line: 124,
              column: 343,
              offset: 12984,
            },
            end: {
              line: 124,
              column: 395,
              offset: 13036,
            },
          },
        },
      ],
      position: {
        start: {
          line: 124,
          column: 1,
          offset: 12642,
        },
        end: {
          line: 124,
          column: 395,
          offset: 13036,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "One last thing to note is that we’re generally only interested in the truth value of ",
          position: {
            start: {
              line: 126,
              column: 1,
              offset: 13038,
            },
            end: {
              line: 126,
              column: 86,
              offset: 13123,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "well-formed",
              position: {
                start: {
                  line: 126,
                  column: 87,
                  offset: 13124,
                },
                end: {
                  line: 126,
                  column: 98,
                  offset: 13135,
                },
              },
            },
          ],
          position: {
            start: {
              line: 126,
              column: 86,
              offset: 13123,
            },
            end: {
              line: 126,
              column: 99,
              offset: 13136,
            },
          },
        },
        {
          type: "text",
          value: " strings. We’re not interested in whether ",
          position: {
            start: {
              line: 126,
              column: 99,
              offset: 13136,
            },
            end: {
              line: 126,
              column: 141,
              offset: 13178,
            },
          },
        },
        {
          type: "inlineCode",
          value: "pqq",
          position: {
            start: {
              line: 126,
              column: 141,
              offset: 13178,
            },
            end: {
              line: 126,
              column: 146,
              offset: 13183,
            },
          },
        },
        {
          type: "text",
          value:
            " is true, because it doesn’t make sense in our interpretation. Even a string like ",
          position: {
            start: {
              line: 126,
              column: 146,
              offset: 13183,
            },
            end: {
              line: 126,
              column: 228,
              offset: 13265,
            },
          },
        },
        {
          type: "inlineCode",
          value: "-p-p-q---",
          position: {
            start: {
              line: 126,
              column: 228,
              offset: 13265,
            },
            end: {
              line: 126,
              column: 239,
              offset: 13276,
            },
          },
        },
        {
          type: "text",
          value: ", which ",
          position: {
            start: {
              line: 126,
              column: 239,
              offset: 13276,
            },
            end: {
              line: 126,
              column: 247,
              offset: 13284,
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
                  line: 126,
                  column: 248,
                  offset: 13285,
                },
                end: {
                  line: 126,
                  column: 253,
                  offset: 13290,
                },
              },
            },
          ],
          position: {
            start: {
              line: 126,
              column: 247,
              offset: 13284,
            },
            end: {
              line: 126,
              column: 254,
              offset: 13291,
            },
          },
        },
        {
          type: "text",
          value:
            ' like it "should" be a theorem, is not well-formed in the P-Q System. Our system was not designed to represent the addition of three numbers, so this string doesn’t make sense in that very narrow context. We have a similar understanding in mathematics; it actually means something to say that ',
          position: {
            start: {
              line: 126,
              column: 254,
              offset: 13291,
            },
            end: {
              line: 126,
              column: 547,
              offset: 13584,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2+2=5",
          position: {
            start: {
              line: 126,
              column: 547,
              offset: 13584,
            },
            end: {
              line: 126,
              column: 554,
              offset: 13591,
            },
          },
        },
        {
          type: "text",
          value:
            " is false. It doesn’t really mean anything to discuss whether ",
          position: {
            start: {
              line: 126,
              column: 554,
              offset: 13591,
            },
            end: {
              line: 126,
              column: 616,
              offset: 13653,
            },
          },
        },
        {
          type: "inlineCode",
          value: "+2(5=",
          position: {
            start: {
              line: 126,
              column: 616,
              offset: 13653,
            },
            end: {
              line: 126,
              column: 623,
              offset: 13660,
            },
          },
        },
        {
          type: "text",
          value:
            ' is true or not. We use the idea of well-formed strings to "filter out" the truly meaningless strings.',
          position: {
            start: {
              line: 126,
              column: 623,
              offset: 13660,
            },
            end: {
              line: 126,
              column: 725,
              offset: 13762,
            },
          },
        },
      ],
      position: {
        start: {
          line: 126,
          column: 1,
          offset: 13038,
        },
        end: {
          line: 126,
          column: 725,
          offset: 13762,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Mindless symbol-pushing rules somehow capture truth?",
          position: {
            start: {
              line: 128,
              column: 5,
              offset: 13768,
            },
            end: {
              line: 128,
              column: 57,
              offset: 13820,
            },
          },
        },
      ],
      position: {
        start: {
          line: 128,
          column: 1,
          offset: 13764,
        },
        end: {
          line: 128,
          column: 57,
          offset: 13820,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'At this point, it’s natural to philosophize a little bit about what’s actually happening when we use symbols and rules to represent reality and "truth".',
          position: {
            start: {
              line: 130,
              column: 1,
              offset: 13822,
            },
            end: {
              line: 130,
              column: 153,
              offset: 13974,
            },
          },
        },
      ],
      position: {
        start: {
          line: 130,
          column: 1,
          offset: 13822,
        },
        end: {
          line: 130,
          column: 153,
          offset: 13974,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "For one thing, by constructing the P-Q System, did we ",
          position: {
            start: {
              line: 132,
              column: 1,
              offset: 13976,
            },
            end: {
              line: 132,
              column: 55,
              offset: 14030,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "gain",
              position: {
                start: {
                  line: 132,
                  column: 56,
                  offset: 14031,
                },
                end: {
                  line: 132,
                  column: 60,
                  offset: 14035,
                },
              },
            },
          ],
          position: {
            start: {
              line: 132,
              column: 55,
              offset: 14030,
            },
            end: {
              line: 132,
              column: 61,
              offset: 14036,
            },
          },
        },
        {
          type: "text",
          value:
            ' any new insight about the concept of addition? On one hand, this system can represent additions that are too big to practically verify by counting. But really, we wouldn’t be surprised by any of these "discoveries"; addition is crazy simple, and we already know how to easily derive the truth value of any particular equation involving the sum of two numbers by using a shortcut for counting (more on this later). In other words, we kinda got out of it what we put into it.',
          position: {
            start: {
              line: 132,
              column: 61,
              offset: 14036,
            },
            end: {
              line: 132,
              column: 535,
              offset: 14510,
            },
          },
        },
      ],
      position: {
        start: {
          line: 132,
          column: 1,
          offset: 13976,
        },
        end: {
          line: 132,
          column: 535,
          offset: 14510,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'We might be tempted to throw our hands in the air and say, "Formal systems are useless! They only tell us things we already know!" And there is an element of truth to that. But I’d like to point out a silver lining. Mathematics, in its most formal setting, is a formal system. ',
          position: {
            start: {
              line: 134,
              column: 1,
              offset: 14512,
            },
            end: {
              line: 134,
              column: 278,
              offset: 14789,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "math-is-formal",
          },
          children: [
            {
              type: "text",
              value: "I won’t elaborate on how or why this is true",
              position: {
                start: {
                  line: 134,
                  column: 284,
                  offset: 14795,
                },
                end: {
                  line: 134,
                  column: 328,
                  offset: 14839,
                },
              },
            },
          ],
          position: {
            start: {
              line: 134,
              column: 278,
              offset: 14789,
            },
            end: {
              line: 134,
              column: 350,
              offset: 14861,
            },
          },
        },
        {
          type: "text",
          value:
            ", because that’s a whole other topic that will get its own article. But for now, you can just take my word on this.",
          position: {
            start: {
              line: 134,
              column: 350,
              offset: 14861,
            },
            end: {
              line: 134,
              column: 465,
              offset: 14976,
            },
          },
        },
      ],
      position: {
        start: {
          line: 134,
          column: 1,
          offset: 14512,
        },
        end: {
          line: 134,
          column: 465,
          offset: 14976,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'Then my question is: could we have invented the Internet without the tool of mathematics? Answering "yes" would put you squarely in clown territory. Let’s take electricity, which is a cornerstone of the Internet. Humans have been aware of electricity for at least ',
          position: {
            start: {
              line: 136,
              column: 1,
              offset: 14978,
            },
            end: {
              line: 136,
              column: 265,
              offset: 15242,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Electricity#History",
          children: [
            {
              type: "text",
              value: "two thousand years",
              position: {
                start: {
                  line: 136,
                  column: 266,
                  offset: 15243,
                },
                end: {
                  line: 136,
                  column: 284,
                  offset: 15261,
                },
              },
            },
          ],
          position: {
            start: {
              line: 136,
              column: 265,
              offset: 15242,
            },
            end: {
              line: 136,
              column: 336,
              offset: 15313,
            },
          },
        },
        {
          type: "text",
          value: ", but our ability to quantify ",
          position: {
            start: {
              line: 136,
              column: 336,
              offset: 15313,
            },
            end: {
              line: 136,
              column: 366,
              offset: 15343,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "exactly",
              position: {
                start: {
                  line: 136,
                  column: 367,
                  offset: 15344,
                },
                end: {
                  line: 136,
                  column: 374,
                  offset: 15351,
                },
              },
            },
          ],
          position: {
            start: {
              line: 136,
              column: 366,
              offset: 15343,
            },
            end: {
              line: 136,
              column: 375,
              offset: 15352,
            },
          },
        },
        {
          type: "text",
          value:
            " how it works was dependent on the invention of symbolic mathematics and advanced mathematical tools like calculus. Obviously, deriving the laws of electromagnetism also required some experimental observation and insight on the physicists’ part to figure out which mathematical steps to take. But nonetheless, I think it’s unimaginable that some great genius in an alternate reality where symbolic math didn’t exist could come up with some non-symbolized version of ",
          position: {
            start: {
              line: 136,
              column: 375,
              offset: 15352,
            },
            end: {
              line: 136,
              column: 841,
              offset: 15818,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Maxwell%27s_equations",
          children: [
            {
              type: "text",
              value: "Maxwell’s Equations",
              position: {
                start: {
                  line: 136,
                  column: 842,
                  offset: 15819,
                },
                end: {
                  line: 136,
                  column: 861,
                  offset: 15838,
                },
              },
            },
          ],
          position: {
            start: {
              line: 136,
              column: 841,
              offset: 15818,
            },
            end: {
              line: 136,
              column: 915,
              offset: 15892,
            },
          },
        },
        {
          type: "text",
          value:
            '. It seems impossible that the kinds of abstractions necessary to describe electricity and magnetism could be accurately represented in our lumps of gray matter without some formalization. By analogy, imagine designing a building where you can only express your blueprint with vague terms like "heavy", or "long", or "at a wide angle". That might work for a small hut, but not a skyscraper.',
          position: {
            start: {
              line: 136,
              column: 915,
              offset: 15892,
            },
            end: {
              line: 136,
              column: 1305,
              offset: 16282,
            },
          },
        },
      ],
      position: {
        start: {
          line: 136,
          column: 1,
          offset: 14978,
        },
        end: {
          line: 136,
          column: 1305,
          offset: 16282,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "So, we wind up in a strange place. On one hand, formal systems possess absolutely no intelligence whatsoever, they’re just a bunch of rules for moving meaningless symbols around; we get out of it what we put into it. But on the other hand, when we build formal systems powerful enough to represent slices of the real world (addition, geometry, rates of change, etc.) and pair it with some experimental data, we steal fire from the gods, harness electromagnetism, and invent the Internet; we get out of it much more than we put into it. This should feel a little strange.",
          position: {
            start: {
              line: 138,
              column: 1,
              offset: 16284,
            },
            end: {
              line: 138,
              column: 571,
              offset: 16854,
            },
          },
        },
      ],
      position: {
        start: {
          line: 138,
          column: 1,
          offset: 16284,
        },
        end: {
          line: 138,
          column: 571,
          offset: 16854,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "A test for theoremhood!",
          position: {
            start: {
              line: 140,
              column: 5,
              offset: 16860,
            },
            end: {
              line: 140,
              column: 28,
              offset: 16883,
            },
          },
        },
      ],
      position: {
        start: {
          line: 140,
          column: 1,
          offset: 16856,
        },
        end: {
          line: 140,
          column: 28,
          offset: 16883,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Easing our foot off of the philosophical gas pedal, I want to return to something I alluded to earlier when I said:",
          position: {
            start: {
              line: 142,
              column: 1,
              offset: 16885,
            },
            end: {
              line: 142,
              column: 116,
              offset: 17000,
            },
          },
        },
      ],
      position: {
        start: {
          line: 142,
          column: 1,
          offset: 16885,
        },
        end: {
          line: 142,
          column: 116,
          offset: 17000,
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
                "We already know how to easily derive the truth value of any particular equation involving the sum of two numbers by using a shortcut for counting.",
              position: {
                start: {
                  line: 144,
                  column: 3,
                  offset: 17004,
                },
                end: {
                  line: 144,
                  column: 149,
                  offset: 17150,
                },
              },
            },
          ],
          position: {
            start: {
              line: 144,
              column: 3,
              offset: 17004,
            },
            end: {
              line: 144,
              column: 149,
              offset: 17150,
            },
          },
        },
      ],
      position: {
        start: {
          line: 144,
          column: 1,
          offset: 17002,
        },
        end: {
          line: 144,
          column: 149,
          offset: 17150,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Without using a calculator, how do you know that 288 plus 8,724 equals 9,012? You would probably do something like the following, either on paper or in your head (if your mental math is better than mine):",
          position: {
            start: {
              line: 146,
              column: 1,
              offset: 17152,
            },
            end: {
              line: 146,
              column: 205,
              offset: 17356,
            },
          },
        },
      ],
      position: {
        start: {
          line: 146,
          column: 1,
          offset: 17152,
        },
        end: {
          line: 146,
          column: 205,
          offset: 17356,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "formal-systems/addition.png",
          alt: "Long addition of 288 and 8724",
          position: {
            start: {
              line: 148,
              column: 1,
              offset: 17358,
            },
            end: {
              line: 148,
              column: 62,
              offset: 17419,
            },
          },
        },
      ],
      position: {
        start: {
          line: 148,
          column: 1,
          offset: 17358,
        },
        end: {
          line: 148,
          column: 62,
          offset: 17419,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "At this point, you feel very confident that 288+8,724=9,012 is a true statement. But how are you so sure? You didn’t imagine 288 cookies, then imagine 8,724 more, and then count how many cookies you had in all. You actually didn’t count anything at all. You used a ",
          position: {
            start: {
              line: 150,
              column: 1,
              offset: 17421,
            },
            end: {
              line: 150,
              column: 266,
              offset: 17686,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "decision procedure",
              position: {
                start: {
                  line: 150,
                  column: 268,
                  offset: 17688,
                },
                end: {
                  line: 150,
                  column: 286,
                  offset: 17706,
                },
              },
            },
          ],
          position: {
            start: {
              line: 150,
              column: 266,
              offset: 17686,
            },
            end: {
              line: 150,
              column: 288,
              offset: 17708,
            },
          },
        },
        {
          type: "text",
          value:
            ' to determine whether that equation was true or not. In the context of formal systems, a decision procedure is a "test" that can determine whether a given string is a theorem of the system ',
          position: {
            start: {
              line: 150,
              column: 288,
              offset: 17708,
            },
            end: {
              line: 150,
              column: 477,
              offset: 17897,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "in a finite amount of time",
              position: {
                start: {
                  line: 150,
                  column: 478,
                  offset: 17898,
                },
                end: {
                  line: 150,
                  column: 504,
                  offset: 17924,
                },
              },
            },
          ],
          position: {
            start: {
              line: 150,
              column: 477,
              offset: 17897,
            },
            end: {
              line: 150,
              column: 505,
              offset: 17925,
            },
          },
        },
        {
          type: "text",
          value:
            ' (we’ll come back to this). If we wanted, we could write out the decision procedure for addition in excruciating detail; it doesn’t even need to rely on addition at all, since we can "hard-code" the sum of every single-digit addition, much in the same way we memorize them. Decision procedures are very powerful because, in a way, they show that we ',
          position: {
            start: {
              line: 150,
              column: 505,
              offset: 17925,
            },
            end: {
              line: 150,
              column: 854,
              offset: 18274,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "deeply understand",
              position: {
                start: {
                  line: 150,
                  column: 855,
                  offset: 18275,
                },
                end: {
                  line: 150,
                  column: 872,
                  offset: 18292,
                },
              },
            },
          ],
          position: {
            start: {
              line: 150,
              column: 854,
              offset: 18274,
            },
            end: {
              line: 150,
              column: 873,
              offset: 18293,
            },
          },
        },
        {
          type: "text",
          value:
            " what’s going on in the formal system. Hofstadter has a great way of describing this:",
          position: {
            start: {
              line: 150,
              column: 873,
              offset: 18293,
            },
            end: {
              line: 150,
              column: 958,
              offset: 18378,
            },
          },
        },
      ],
      position: {
        start: {
          line: 150,
          column: 1,
          offset: 17421,
        },
        end: {
          line: 150,
          column: 958,
          offset: 18378,
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
                'When you have a decision procedure, then you have a very concrete characterization of the nature of all theorems in the system. Offhand, it might seem that the rules and axioms of the formal system provide no less complete a characterization of the theorems of the system than a decision procedure would. The tricky word here is "characterization". Certainly the rules of inference and the axioms of the [formal system] do characterize, ',
              position: {
                start: {
                  line: 152,
                  column: 3,
                  offset: 18382,
                },
                end: {
                  line: 152,
                  column: 440,
                  offset: 18819,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "implicitly",
                  position: {
                    start: {
                      line: 152,
                      column: 441,
                      offset: 18820,
                    },
                    end: {
                      line: 152,
                      column: 451,
                      offset: 18830,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 152,
                  column: 440,
                  offset: 18819,
                },
                end: {
                  line: 152,
                  column: 452,
                  offset: 18831,
                },
              },
            },
            {
              type: "text",
              value: ", those strings that are theorems. Even ",
              position: {
                start: {
                  line: 152,
                  column: 452,
                  offset: 18831,
                },
                end: {
                  line: 152,
                  column: 492,
                  offset: 18871,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "more",
                  position: {
                    start: {
                      line: 152,
                      column: 493,
                      offset: 18872,
                    },
                    end: {
                      line: 152,
                      column: 497,
                      offset: 18876,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 152,
                  column: 492,
                  offset: 18871,
                },
                end: {
                  line: 152,
                  column: 498,
                  offset: 18877,
                },
              },
            },
            {
              type: "text",
              value: " implicitly, they characterize those strings that are ",
              position: {
                start: {
                  line: 152,
                  column: 498,
                  offset: 18877,
                },
                end: {
                  line: 152,
                  column: 552,
                  offset: 18931,
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
                      line: 152,
                      column: 553,
                      offset: 18932,
                    },
                    end: {
                      line: 152,
                      column: 556,
                      offset: 18935,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 152,
                  column: 552,
                  offset: 18931,
                },
                end: {
                  line: 152,
                  column: 557,
                  offset: 18936,
                },
              },
            },
            {
              type: "text",
              value:
                " theorems. But implicit characterization is not enough, for many purposes. If someone claims to have a characterization of all theorems, but it takes him infinitely long to deduce that some particular string is not a theorem, you would probably tend to say that there is something lacking in that characterization– it is not quite concrete enough.",
              position: {
                start: {
                  line: 152,
                  column: 557,
                  offset: 18936,
                },
                end: {
                  line: 152,
                  column: 904,
                  offset: 19283,
                },
              },
            },
          ],
          position: {
            start: {
              line: 152,
              column: 3,
              offset: 18382,
            },
            end: {
              line: 152,
              column: 904,
              offset: 19283,
            },
          },
        },
      ],
      position: {
        start: {
          line: 152,
          column: 1,
          offset: 18380,
        },
        end: {
          line: 152,
          column: 904,
          offset: 19283,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "With that said, let’s cook up a decision procedure for the P-Q System. It might look a bit different than you expected, but perhaps more interesting.",
          position: {
            start: {
              line: 154,
              column: 1,
              offset: 19285,
            },
            end: {
              line: 154,
              column: 150,
              offset: 19434,
            },
          },
        },
      ],
      position: {
        start: {
          line: 154,
          column: 1,
          offset: 19285,
        },
        end: {
          line: 154,
          column: 150,
          offset: 19434,
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
                  value: "Decision procedure for theoremhood in the P-Q System",
                  position: {
                    start: {
                      line: 156,
                      column: 5,
                      offset: 19440,
                    },
                    end: {
                      line: 156,
                      column: 57,
                      offset: 19492,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 156,
                  column: 3,
                  offset: 19438,
                },
                end: {
                  line: 156,
                  column: 59,
                  offset: 19494,
                },
              },
            },
          ],
          position: {
            start: {
              line: 156,
              column: 3,
              offset: 19438,
            },
            end: {
              line: 156,
              column: 59,
              offset: 19494,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Imagine we have a bucket. We’ll be putting in and taking out theorems from this bucket. We’ll start with only Axiom 1 in the bucket, and then repeat the following step: take all strings out of the bucket and apply all applicable rules of inference to each one to get new theorems. Then, put those ",
              position: {
                start: {
                  line: 158,
                  column: 3,
                  offset: 19499,
                },
                end: {
                  line: 158,
                  column: 300,
                  offset: 19796,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "new",
                  position: {
                    start: {
                      line: 158,
                      column: 301,
                      offset: 19797,
                    },
                    end: {
                      line: 158,
                      column: 304,
                      offset: 19800,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 158,
                  column: 300,
                  offset: 19796,
                },
                end: {
                  line: 158,
                  column: 305,
                  offset: 19801,
                },
              },
            },
            {
              type: "text",
              value: " theorems back into the bucket, discarding the old ones ",
              position: {
                start: {
                  line: 158,
                  column: 305,
                  offset: 19801,
                },
                end: {
                  line: 158,
                  column: 361,
                  offset: 19857,
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
                      line: 158,
                      column: 362,
                      offset: 19858,
                    },
                    end: {
                      line: 158,
                      column: 365,
                      offset: 19861,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 158,
                  column: 361,
                  offset: 19857,
                },
                end: {
                  line: 158,
                  column: 366,
                  offset: 19862,
                },
              },
            },
            {
              type: "text",
              value: " any new theorems that are identical to old ones.",
              position: {
                start: {
                  line: 158,
                  column: 366,
                  offset: 19862,
                },
                end: {
                  line: 158,
                  column: 415,
                  offset: 19911,
                },
              },
            },
          ],
          position: {
            start: {
              line: 158,
              column: 3,
              offset: 19499,
            },
            end: {
              line: 158,
              column: 415,
              offset: 19911,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "As we repeatedly apply this step, the theorems in the bucket will get ",
              position: {
                start: {
                  line: 160,
                  column: 3,
                  offset: 19916,
                },
                end: {
                  line: 160,
                  column: 73,
                  offset: 19986,
                },
              },
            },
            {
              type: "textDirective",
              name: "hook",
              attributes: {
                id: "longer",
              },
              children: [
                {
                  type: "text",
                  value: "longer and longer",
                  position: {
                    start: {
                      line: 160,
                      column: 79,
                      offset: 19992,
                    },
                    end: {
                      line: 160,
                      column: 96,
                      offset: 20009,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 160,
                  column: 73,
                  offset: 19986,
                },
                end: {
                  line: 160,
                  column: 110,
                  offset: 20023,
                },
              },
            },
            {
              type: "text",
              value:
                '. More accurately, the length of the shortest theorem in the bucket is guaranteed to eventually increase after enough iterations. This is because neither rule takes a theorem and produces a shorter one. Granted, Rule 2 produces a new theorem of the same length as its predecessor, but our "only add it to the bucket if it hasn’t been seen before" rule guarantees that after Rule 2 has been applied once to a theorem, we won’t see the same theorem again.',
              position: {
                start: {
                  line: 160,
                  column: 110,
                  offset: 20023,
                },
                end: {
                  line: 160,
                  column: 563,
                  offset: 20476,
                },
              },
            },
          ],
          position: {
            start: {
              line: 160,
              column: 3,
              offset: 19916,
            },
            end: {
              line: 160,
              column: 563,
              offset: 20476,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Say you want to test string ",
              position: {
                start: {
                  line: 162,
                  column: 3,
                  offset: 20481,
                },
                end: {
                  line: 162,
                  column: 31,
                  offset: 20509,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "S",
                  position: {
                    start: {
                      line: 162,
                      column: 32,
                      offset: 20510,
                    },
                    end: {
                      line: 162,
                      column: 33,
                      offset: 20511,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 31,
                  offset: 20509,
                },
                end: {
                  line: 162,
                  column: 34,
                  offset: 20512,
                },
              },
            },
            {
              type: "text",
              value: " for theoremhood. Take the length of ",
              position: {
                start: {
                  line: 162,
                  column: 34,
                  offset: 20512,
                },
                end: {
                  line: 162,
                  column: 71,
                  offset: 20549,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "S",
                  position: {
                    start: {
                      line: 162,
                      column: 72,
                      offset: 20550,
                    },
                    end: {
                      line: 162,
                      column: 73,
                      offset: 20551,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 71,
                  offset: 20549,
                },
                end: {
                  line: 162,
                  column: 74,
                  offset: 20552,
                },
              },
            },
            {
              type: "text",
              value: ", call it ",
              position: {
                start: {
                  line: 162,
                  column: 74,
                  offset: 20552,
                },
                end: {
                  line: 162,
                  column: 84,
                  offset: 20562,
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
                      line: 162,
                      column: 85,
                      offset: 20563,
                    },
                    end: {
                      line: 162,
                      column: 86,
                      offset: 20564,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 84,
                  offset: 20562,
                },
                end: {
                  line: 162,
                  column: 87,
                  offset: 20565,
                },
              },
            },
            {
              type: "text",
              value:
                ". As we keep this theorem generator going, eventually, after a ",
              position: {
                start: {
                  line: 162,
                  column: 87,
                  offset: 20565,
                },
                end: {
                  line: 162,
                  column: 150,
                  offset: 20628,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "finite amount of time",
                  position: {
                    start: {
                      line: 162,
                      column: 151,
                      offset: 20629,
                    },
                    end: {
                      line: 162,
                      column: 172,
                      offset: 20650,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 150,
                  offset: 20628,
                },
                end: {
                  line: 162,
                  column: 173,
                  offset: 20651,
                },
              },
            },
            {
              type: "text",
              value: ", all of the theorems in our bucket will be longer than ",
              position: {
                start: {
                  line: 162,
                  column: 173,
                  offset: 20651,
                },
                end: {
                  line: 162,
                  column: 229,
                  offset: 20707,
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
                      line: 162,
                      column: 230,
                      offset: 20708,
                    },
                    end: {
                      line: 162,
                      column: 231,
                      offset: 20709,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 229,
                  offset: 20707,
                },
                end: {
                  line: 162,
                  column: 232,
                  offset: 20710,
                },
              },
            },
            {
              type: "text",
              value: " (as we explained above). At that point, we’ve seen ",
              position: {
                start: {
                  line: 162,
                  column: 232,
                  offset: 20710,
                },
                end: {
                  line: 162,
                  column: 284,
                  offset: 20762,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "every",
                  position: {
                    start: {
                      line: 162,
                      column: 285,
                      offset: 20763,
                    },
                    end: {
                      line: 162,
                      column: 290,
                      offset: 20768,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 284,
                  offset: 20762,
                },
                end: {
                  line: 162,
                  column: 291,
                  offset: 20769,
                },
              },
            },
            {
              type: "text",
              value: " theorem of length ",
              position: {
                start: {
                  line: 162,
                  column: 291,
                  offset: 20769,
                },
                end: {
                  line: 162,
                  column: 310,
                  offset: 20788,
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
                      line: 162,
                      column: 311,
                      offset: 20789,
                    },
                    end: {
                      line: 162,
                      column: 312,
                      offset: 20790,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 310,
                  offset: 20788,
                },
                end: {
                  line: 162,
                  column: 313,
                  offset: 20791,
                },
              },
            },
            {
              type: "text",
              value: ". So either we've seen ",
              position: {
                start: {
                  line: 162,
                  column: 313,
                  offset: 20791,
                },
                end: {
                  line: 162,
                  column: 336,
                  offset: 20814,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "S",
                  position: {
                    start: {
                      line: 162,
                      column: 337,
                      offset: 20815,
                    },
                    end: {
                      line: 162,
                      column: 338,
                      offset: 20816,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 162,
                  column: 336,
                  offset: 20814,
                },
                end: {
                  line: 162,
                  column: 339,
                  offset: 20817,
                },
              },
            },
            {
              type: "text",
              value:
                " (it's a theorem), or we haven't, in which case it is not a theorem.",
              position: {
                start: {
                  line: 162,
                  column: 339,
                  offset: 20817,
                },
                end: {
                  line: 162,
                  column: 407,
                  offset: 20885,
                },
              },
            },
          ],
          position: {
            start: {
              line: 162,
              column: 3,
              offset: 20481,
            },
            end: {
              line: 162,
              column: 407,
              offset: 20885,
            },
          },
        },
      ],
      position: {
        start: {
          line: 156,
          column: 1,
          offset: 19436,
        },
        end: {
          line: 162,
          column: 407,
          offset: 20885,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "That explanation is a bit wordy, but it's very succinctly demonstrated by example. As instructed, we'll start out with just Axiom 1 in the bucket, and then start procedurally generating new theorems.",
          position: {
            start: {
              line: 164,
              column: 1,
              offset: 20887,
            },
            end: {
              line: 164,
              column: 200,
              offset: 21086,
            },
          },
        },
      ],
      position: {
        start: {
          line: 164,
          column: 1,
          offset: 20887,
        },
        end: {
          line: 164,
          column: 200,
          offset: 21086,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value:
        "Bucket (iteration 0)\n  * Axiom 1. -p-q--\n\nNew theorems:\n  Theorem 1. --p-q--- (by Rule 1 on Axiom 1)\n  Theorem 2. -p-q--   (by Rule 2 on Axiom 1); same as Axiom 1\n\nBucket (iteration 1)\n  * Theorem 1: --p-q---\n\nNew theorems:\n  Theorem 3. ---p-q---- (by Rule 1 on Theorem 1)\n  Theorem 4. -p--q---   (by Rule 2 on Theorem 1)\n\nBucket (iteration 2)\n  * Theorem 3. ---p-q----\n  * Theorem 4. -p--q---\n\nNew theorems:\n  Theorem 5. ----p-q----- (by Rule 1 on Theorem 3)\n  Theorem 6. -p---q----   (by Rule 2 on Theorem 3)\n  Theorem 7. --p--q----   (by Rule 1 on Theorem 4)\n  Theorem 8. --p-q---     (by Rule 2 on Theorem 4); same as Theorem 1\n\nBucket (iteration 3):\n  * Theorem 5: ----p-q-----\n  * Theorem 6: -p---q----\n  * Theorem 7: --p--q----",
      position: {
        start: {
          line: 166,
          column: 1,
          offset: 21088,
        },
        end: {
          line: 195,
          column: 4,
          offset: 21830,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "For example, if we wanted to know whether ",
          position: {
            start: {
              line: 197,
              column: 1,
              offset: 21832,
            },
            end: {
              line: 197,
              column: 43,
              offset: 21874,
            },
          },
        },
        {
          type: "inlineCode",
          value: "---p-q---",
          position: {
            start: {
              line: 197,
              column: 43,
              offset: 21874,
            },
            end: {
              line: 197,
              column: 54,
              offset: 21885,
            },
          },
        },
        {
          type: "text",
          value:
            " (interpreted: 3+1=3) is a theorem, we know it’s not, because all the theorems in our bucket are at least 10 symbols long and we haven’t seen this one, which is 9 symbols long.",
          position: {
            start: {
              line: 197,
              column: 54,
              offset: 21885,
            },
            end: {
              line: 197,
              column: 230,
              offset: 22061,
            },
          },
        },
      ],
      position: {
        start: {
          line: 197,
          column: 1,
          offset: 21832,
        },
        end: {
          line: 197,
          column: 230,
          offset: 22061,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "What’s interesting about this decision procedure is that it doesn’t rely on our intuition about addition at all. It ",
          position: {
            start: {
              line: 199,
              column: 1,
              offset: 22063,
            },
            end: {
              line: 199,
              column: 117,
              offset: 22179,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "only",
              position: {
                start: {
                  line: 199,
                  column: 118,
                  offset: 22180,
                },
                end: {
                  line: 199,
                  column: 122,
                  offset: 22184,
                },
              },
            },
          ],
          position: {
            start: {
              line: 199,
              column: 117,
              offset: 22179,
            },
            end: {
              line: 199,
              column: 123,
              offset: 22185,
            },
          },
        },
        {
          type: "text",
          value: " requires that the rules of inference are either ",
          position: {
            start: {
              line: 199,
              column: 123,
              offset: 22185,
            },
            end: {
              line: 199,
              column: 172,
              offset: 22234,
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
                  line: 199,
                  column: 173,
                  offset: 22235,
                },
                end: {
                  line: 199,
                  column: 176,
                  offset: 22238,
                },
              },
            },
          ],
          position: {
            start: {
              line: 199,
              column: 172,
              offset: 22234,
            },
            end: {
              line: 199,
              column: 177,
              offset: 22239,
            },
          },
        },
        {
          type: "text",
          value: " lengthening rules, or ",
          position: {
            start: {
              line: 199,
              column: 177,
              offset: 22239,
            },
            end: {
              line: 199,
              column: 200,
              offset: 22262,
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
                  line: 199,
                  column: 201,
                  offset: 22263,
                },
                end: {
                  line: 199,
                  column: 204,
                  offset: 22266,
                },
              },
            },
          ],
          position: {
            start: {
              line: 199,
              column: 200,
              offset: 22262,
            },
            end: {
              line: 199,
              column: 205,
              offset: 22267,
            },
          },
        },
        {
          type: "text",
          value: " shortening rules, but ",
          position: {
            start: {
              line: 199,
              column: 205,
              offset: 22267,
            },
            end: {
              line: 199,
              column: 228,
              offset: 22290,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "not-mix",
          },
          children: [
            {
              type: "text",
              value: "not a mix of both",
              position: {
                start: {
                  line: 199,
                  column: 234,
                  offset: 22296,
                },
                end: {
                  line: 199,
                  column: 251,
                  offset: 22313,
                },
              },
            },
          ],
          position: {
            start: {
              line: 199,
              column: 228,
              offset: 22290,
            },
            end: {
              line: 199,
              column: 266,
              offset: 22328,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 199,
              column: 266,
              offset: 22328,
            },
            end: {
              line: 199,
              column: 267,
              offset: 22329,
            },
          },
        },
      ],
      position: {
        start: {
          line: 199,
          column: 1,
          offset: 22063,
        },
        end: {
          line: 199,
          column: 267,
          offset: 22329,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'At this point, we’ve covered all the important stuff. As a "fun" exercise to wrap up on, let’s take a look at a different formal system that I designed to represent the Collatz Conjecture.',
          position: {
            start: {
              line: 201,
              column: 1,
              offset: 22331,
            },
            end: {
              line: 201,
              column: 189,
              offset: 22519,
            },
          },
        },
      ],
      position: {
        start: {
          line: 201,
          column: 1,
          offset: 22331,
        },
        end: {
          line: 201,
          column: 189,
          offset: 22519,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Enter the Collatz Conjecture",
          position: {
            start: {
              line: 203,
              column: 4,
              offset: 22524,
            },
            end: {
              line: 203,
              column: 32,
              offset: 22552,
            },
          },
        },
      ],
      position: {
        start: {
          line: 203,
          column: 1,
          offset: 22521,
        },
        end: {
          line: 203,
          column: 32,
          offset: 22552,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Honestly, if you’ve read this far, I kind of assume you already know what the Collatz Conjecture is. I imagine that the kind of person who reads this essay falls under the category of people who are aware of ",
          position: {
            start: {
              line: 205,
              column: 1,
              offset: 22554,
            },
            end: {
              line: 205,
              column: 209,
              offset: 22762,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.youtube.com/watch?v=uNjxe8ShM-8",
          children: [
            {
              type: "text",
              value: "PowerPoint’s Turing-Completeness",
              position: {
                start: {
                  line: 205,
                  column: 210,
                  offset: 22763,
                },
                end: {
                  line: 205,
                  column: 242,
                  offset: 22795,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 209,
              offset: 22762,
            },
            end: {
              line: 205,
              column: 288,
              offset: 22841,
            },
          },
        },
        {
          type: "text",
          value: ", the programming language ",
          position: {
            start: {
              line: 205,
              column: 288,
              offset: 22841,
            },
            end: {
              line: 205,
              column: 315,
              offset: 22868,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Brainfuck",
          children: [
            {
              type: "text",
              value: "brainfuck",
              position: {
                start: {
                  line: 205,
                  column: 316,
                  offset: 22869,
                },
                end: {
                  line: 205,
                  column: 325,
                  offset: 22878,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 315,
              offset: 22868,
            },
            end: {
              line: 205,
              column: 367,
              offset: 22920,
            },
          },
        },
        {
          type: "text",
          value: ", the ",
          position: {
            start: {
              line: 205,
              column: 367,
              offset: 22920,
            },
            end: {
              line: 205,
              column: 373,
              offset: 22926,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Fast_inverse_square_root",
          children: [
            {
              type: "text",
              value: "Quake III fast inverse square root algorithm",
              position: {
                start: {
                  line: 205,
                  column: 374,
                  offset: 22927,
                },
                end: {
                  line: 205,
                  column: 418,
                  offset: 22971,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 373,
              offset: 22926,
            },
            end: {
              line: 205,
              column: 475,
              offset: 23028,
            },
          },
        },
        {
          type: "text",
          value:
            ", and the Collatz Conjecture. But in case you’re the rare person who’s immediately interested in formal systems but hasn’t been introduced to this gem of mathematics, it would be an honor to be the first to show you.",
          position: {
            start: {
              line: 205,
              column: 475,
              offset: 23028,
            },
            end: {
              line: 205,
              column: 691,
              offset: 23244,
            },
          },
        },
      ],
      position: {
        start: {
          line: 205,
          column: 1,
          offset: 22554,
        },
        end: {
          line: 205,
          column: 691,
          offset: 23244,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The idea is to take any positive number, and then follow a very simple rule to get the next number:",
          position: {
            start: {
              line: 207,
              column: 1,
              offset: 23246,
            },
            end: {
              line: 207,
              column: 100,
              offset: 23345,
            },
          },
        },
      ],
      position: {
        start: {
          line: 207,
          column: 1,
          offset: 23246,
        },
        end: {
          line: 207,
          column: 100,
          offset: 23345,
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
                  value: "Collatz Rule:",
                  position: {
                    start: {
                      line: 209,
                      column: 5,
                      offset: 23351,
                    },
                    end: {
                      line: 209,
                      column: 18,
                      offset: 23364,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 209,
                  column: 3,
                  offset: 23349,
                },
                end: {
                  line: 209,
                  column: 20,
                  offset: 23366,
                },
              },
            },
            {
              type: "text",
              value:
                " If your number is even, divide it by 2 to get the next number. If it is odd, multiply it by 3 and then add 1 to get the next number.",
              position: {
                start: {
                  line: 209,
                  column: 20,
                  offset: 23366,
                },
                end: {
                  line: 209,
                  column: 153,
                  offset: 23499,
                },
              },
            },
          ],
          position: {
            start: {
              line: 209,
              column: 3,
              offset: 23349,
            },
            end: {
              line: 209,
              column: 153,
              offset: 23499,
            },
          },
        },
      ],
      position: {
        start: {
          line: 209,
          column: 1,
          offset: 23347,
        },
        end: {
          line: 209,
          column: 153,
          offset: 23499,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "As an example, let’s take 3 as our first number.",
          position: {
            start: {
              line: 211,
              column: 1,
              offset: 23501,
            },
            end: {
              line: 211,
              column: 49,
              offset: 23549,
            },
          },
        },
      ],
      position: {
        start: {
          line: 211,
          column: 1,
          offset: 23501,
        },
        end: {
          line: 211,
          column: 49,
          offset: 23549,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value:
        "1. 3  is odd,  so we get 3*3+1  = 10\n2. 10 is even, so we get 10/2   = 5\n3. 5  is odd,  so we get 5*3+1  = 16\n4. 16 is even, so we get 16/2   = 8\n5. 8  is even, so we get 8/2    = 4\n6. 4  is even, so we get 4/2    = 2\n7. 2  is even, so we get 2/2    = 1\n8. 1  is odd,  so we get 1*3+1  = 4",
      position: {
        start: {
          line: 213,
          column: 1,
          offset: 23551,
        },
        end: {
          line: 222,
          column: 4,
          offset: 23848,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We notice that 1 goes back to 4, which will cause an infinite loop of 4 → 2 → 1 → 4 → etc. What if we pick a different starting number, like 17?",
          position: {
            start: {
              line: 224,
              column: 1,
              offset: 23850,
            },
            end: {
              line: 224,
              column: 145,
              offset: 23994,
            },
          },
        },
      ],
      position: {
        start: {
          line: 224,
          column: 1,
          offset: 23850,
        },
        end: {
          line: 224,
          column: 145,
          offset: 23994,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value:
        "1.  17 is odd,  so we get 17*3+1 = 52\n2.  52 is even, so we get 52/2   = 26\n3.  26 is even, so we get 26/2   = 13\n4.  13 is odd,  so we get 13*3+1 = 40\n5.  40 is even, so we get 40/2   = 20\n6.  20 is even, so we get 20/2   = 10\n7.  10 is even, so we get 10/2   = 5\n8.  5  is odd,  so we get 5*3+1  = 16\n9.  16 is even, so we get 16/2   = 8\n10. 8  is even, so we get 8/2    = 4\n11. 4  is even, so we get 4/2    = 2\n12. 2  is even, so we get 2/2    = 1",
      position: {
        start: {
          line: 226,
          column: 1,
          offset: 23996,
        },
        end: {
          line: 239,
          column: 4,
          offset: 24454,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The same thing happens, it just takes a little longer. We could have stopped as soon as we reached 10, since we already saw that 10 leads to 1. This leads to a very natural question:",
          position: {
            start: {
              line: 241,
              column: 1,
              offset: 24456,
            },
            end: {
              line: 241,
              column: 183,
              offset: 24638,
            },
          },
        },
      ],
      position: {
        start: {
          line: 241,
          column: 1,
          offset: 24456,
        },
        end: {
          line: 241,
          column: 183,
          offset: 24638,
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
                "Does every positive integer eventually reach 1, after enough applications of the Collatz Rule?",
              position: {
                start: {
                  line: 243,
                  column: 3,
                  offset: 24642,
                },
                end: {
                  line: 243,
                  column: 97,
                  offset: 24736,
                },
              },
            },
          ],
          position: {
            start: {
              line: 243,
              column: 3,
              offset: 24642,
            },
            end: {
              line: 243,
              column: 97,
              offset: 24736,
            },
          },
        },
      ],
      position: {
        start: {
          line: 243,
          column: 1,
          offset: 24640,
        },
        end: {
          line: 243,
          column: 97,
          offset: 24736,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "And the answer is... we don’t know. There’s a ",
          position: {
            start: {
              line: 245,
              column: 1,
              offset: 24738,
            },
            end: {
              line: 245,
              column: 47,
              offset: 24784,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "lot",
              position: {
                start: {
                  line: 245,
                  column: 48,
                  offset: 24785,
                },
                end: {
                  line: 245,
                  column: 51,
                  offset: 24788,
                },
              },
            },
          ],
          position: {
            start: {
              line: 245,
              column: 47,
              offset: 24784,
            },
            end: {
              line: 245,
              column: 52,
              offset: 24789,
            },
          },
        },
        {
          type: "text",
          value: " that’s been ",
          position: {
            start: {
              line: 245,
              column: 52,
              offset: 24789,
            },
            end: {
              line: 245,
              column: 65,
              offset: 24802,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "collatz-viz",
          },
          children: [
            {
              type: "text",
              value: "written",
              position: {
                start: {
                  line: 245,
                  column: 71,
                  offset: 24808,
                },
                end: {
                  line: 245,
                  column: 78,
                  offset: 24815,
                },
              },
            },
          ],
          position: {
            start: {
              line: 245,
              column: 65,
              offset: 24802,
            },
            end: {
              line: 245,
              column: 97,
              offset: 24834,
            },
          },
        },
        {
          type: "text",
          value:
            " about the Collatz Conjecture, its apparent unprovability, and what that says about the state of mathematics, but that’s a bit out of scope here and you can find plenty of ",
          position: {
            start: {
              line: 245,
              column: 97,
              offset: 24834,
            },
            end: {
              line: 245,
              column: 269,
              offset: 25006,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.quantamagazine.org/why-mathematicians-still-cant-solve-the-collatz-conjecture-20200922/",
          children: [
            {
              type: "text",
              value: "cool articles",
              position: {
                start: {
                  line: 245,
                  column: 270,
                  offset: 25007,
                },
                end: {
                  line: 245,
                  column: 283,
                  offset: 25020,
                },
              },
            },
          ],
          position: {
            start: {
              line: 245,
              column: 269,
              offset: 25006,
            },
            end: {
              line: 245,
              column: 385,
              offset: 25122,
            },
          },
        },
        {
          type: "text",
          value:
            ' about it elsewhere. I just thought it would be "fun" to craft a formal system that formulates the Collatz Conjecture in a slightly new way. Here it is:',
          position: {
            start: {
              line: 245,
              column: 385,
              offset: 25122,
            },
            end: {
              line: 245,
              column: 537,
              offset: 25274,
            },
          },
        },
      ],
      position: {
        start: {
          line: 245,
          column: 1,
          offset: 24738,
        },
        end: {
          line: 245,
          column: 537,
          offset: 25274,
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
                  value: "The Collatz System",
                  position: {
                    start: {
                      line: 247,
                      column: 5,
                      offset: 25280,
                    },
                    end: {
                      line: 247,
                      column: 23,
                      offset: 25298,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 247,
                  column: 3,
                  offset: 25278,
                },
                end: {
                  line: 247,
                  column: 25,
                  offset: 25300,
                },
              },
            },
          ],
          position: {
            start: {
              line: 247,
              column: 3,
              offset: 25278,
            },
            end: {
              line: 247,
              column: 25,
              offset: 25300,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Allowed symbols: ",
              position: {
                start: {
                  line: 249,
                  column: 3,
                  offset: 25305,
                },
                end: {
                  line: 249,
                  column: 20,
                  offset: 25322,
                },
              },
            },
            {
              type: "inlineCode",
              value: "-",
              position: {
                start: {
                  line: 249,
                  column: 20,
                  offset: 25322,
                },
                end: {
                  line: 249,
                  column: 23,
                  offset: 25325,
                },
              },
            },
            {
              type: "text",
              value: " (hyphen)",
              position: {
                start: {
                  line: 249,
                  column: 23,
                  offset: 25325,
                },
                end: {
                  line: 249,
                  column: 32,
                  offset: 25334,
                },
              },
            },
          ],
          position: {
            start: {
              line: 249,
              column: 3,
              offset: 25305,
            },
            end: {
              line: 249,
              column: 32,
              offset: 25334,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Axioms",
                  position: {
                    start: {
                      line: 251,
                      column: 4,
                      offset: 25340,
                    },
                    end: {
                      line: 251,
                      column: 10,
                      offset: 25346,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 251,
                  column: 3,
                  offset: 25339,
                },
                end: {
                  line: 251,
                  column: 11,
                  offset: 25347,
                },
              },
            },
          ],
          position: {
            start: {
              line: 251,
              column: 3,
              offset: 25339,
            },
            end: {
              line: 251,
              column: 11,
              offset: 25347,
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
                          value: "Axiom 1",
                          position: {
                            start: {
                              line: 253,
                              column: 7,
                              offset: 25356,
                            },
                            end: {
                              line: 253,
                              column: 14,
                              offset: 25363,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 253,
                          column: 5,
                          offset: 25354,
                        },
                        end: {
                          line: 253,
                          column: 16,
                          offset: 25365,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": ",
                      position: {
                        start: {
                          line: 253,
                          column: 16,
                          offset: 25365,
                        },
                        end: {
                          line: 253,
                          column: 18,
                          offset: 25367,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "-",
                      position: {
                        start: {
                          line: 253,
                          column: 18,
                          offset: 25367,
                        },
                        end: {
                          line: 253,
                          column: 21,
                          offset: 25370,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 253,
                      column: 5,
                      offset: 25354,
                    },
                    end: {
                      line: 253,
                      column: 21,
                      offset: 25370,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 253,
                  column: 3,
                  offset: 25352,
                },
                end: {
                  line: 253,
                  column: 21,
                  offset: 25370,
                },
              },
            },
          ],
          position: {
            start: {
              line: 253,
              column: 3,
              offset: 25352,
            },
            end: {
              line: 254,
              column: 2,
              offset: 25372,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Rules of inference",
                  position: {
                    start: {
                      line: 255,
                      column: 4,
                      offset: 25376,
                    },
                    end: {
                      line: 255,
                      column: 22,
                      offset: 25394,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 255,
                  column: 3,
                  offset: 25375,
                },
                end: {
                  line: 255,
                  column: 23,
                  offset: 25395,
                },
              },
            },
          ],
          position: {
            start: {
              line: 255,
              column: 3,
              offset: 25375,
            },
            end: {
              line: 255,
              column: 23,
              offset: 25395,
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
                          value: "Rule 1",
                          position: {
                            start: {
                              line: 257,
                              column: 7,
                              offset: 25404,
                            },
                            end: {
                              line: 257,
                              column: 13,
                              offset: 25410,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 257,
                          column: 5,
                          offset: 25402,
                        },
                        end: {
                          line: 257,
                          column: 15,
                          offset: 25412,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 257,
                          column: 15,
                          offset: 25412,
                        },
                        end: {
                          line: 257,
                          column: 20,
                          offset: 25417,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}",
                      position: {
                        start: {
                          line: 257,
                          column: 20,
                          offset: 25417,
                        },
                        end: {
                          line: 257,
                          column: 25,
                          offset: 25422,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 257,
                          column: 25,
                          offset: 25422,
                        },
                        end: {
                          line: 257,
                          column: 46,
                          offset: 25443,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 257,
                              column: 47,
                              offset: 25444,
                            },
                            end: {
                              line: 257,
                              column: 48,
                              offset: 25445,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 257,
                          column: 46,
                          offset: 25443,
                        },
                        end: {
                          line: 257,
                          column: 49,
                          offset: 25446,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a string of 1 or more hyphens, then ",
                      position: {
                        start: {
                          line: 257,
                          column: 49,
                          offset: 25446,
                        },
                        end: {
                          line: 257,
                          column: 89,
                          offset: 25486,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}{x}",
                      position: {
                        start: {
                          line: 257,
                          column: 89,
                          offset: 25486,
                        },
                        end: {
                          line: 257,
                          column: 97,
                          offset: 25494,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem.",
                      position: {
                        start: {
                          line: 257,
                          column: 97,
                          offset: 25494,
                        },
                        end: {
                          line: 257,
                          column: 111,
                          offset: 25508,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 257,
                      column: 5,
                      offset: 25402,
                    },
                    end: {
                      line: 257,
                      column: 111,
                      offset: 25508,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 257,
                  column: 3,
                  offset: 25400,
                },
                end: {
                  line: 257,
                  column: 111,
                  offset: 25508,
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
                          value: "Rule 2",
                          position: {
                            start: {
                              line: 258,
                              column: 7,
                              offset: 25515,
                            },
                            end: {
                              line: 258,
                              column: 13,
                              offset: 25521,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 258,
                          column: 5,
                          offset: 25513,
                        },
                        end: {
                          line: 258,
                          column: 15,
                          offset: 25523,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": If ",
                      position: {
                        start: {
                          line: 258,
                          column: 15,
                          offset: 25523,
                        },
                        end: {
                          line: 258,
                          column: 20,
                          offset: 25528,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}{x}{x}{x}{x}{x}----",
                      position: {
                        start: {
                          line: 258,
                          column: 20,
                          offset: 25528,
                        },
                        end: {
                          line: 258,
                          column: 44,
                          offset: 25552,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem, where ",
                      position: {
                        start: {
                          line: 258,
                          column: 44,
                          offset: 25552,
                        },
                        end: {
                          line: 258,
                          column: 65,
                          offset: 25573,
                        },
                      },
                    },
                    {
                      type: "emphasis",
                      children: [
                        {
                          type: "text",
                          value: "x",
                          position: {
                            start: {
                              line: 258,
                              column: 66,
                              offset: 25574,
                            },
                            end: {
                              line: 258,
                              column: 67,
                              offset: 25575,
                            },
                          },
                        },
                      ],
                      position: {
                        start: {
                          line: 258,
                          column: 65,
                          offset: 25573,
                        },
                        end: {
                          line: 258,
                          column: 68,
                          offset: 25576,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a string of 0 or more hyphens, then ",
                      position: {
                        start: {
                          line: 258,
                          column: 68,
                          offset: 25576,
                        },
                        end: {
                          line: 258,
                          column: 108,
                          offset: 25616,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "{x}{x}-",
                      position: {
                        start: {
                          line: 258,
                          column: 108,
                          offset: 25616,
                        },
                        end: {
                          line: 258,
                          column: 117,
                          offset: 25625,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " is a theorem.",
                      position: {
                        start: {
                          line: 258,
                          column: 117,
                          offset: 25625,
                        },
                        end: {
                          line: 258,
                          column: 131,
                          offset: 25639,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 258,
                      column: 5,
                      offset: 25513,
                    },
                    end: {
                      line: 258,
                      column: 131,
                      offset: 25639,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 258,
                  column: 3,
                  offset: 25511,
                },
                end: {
                  line: 258,
                  column: 131,
                  offset: 25639,
                },
              },
            },
          ],
          position: {
            start: {
              line: 257,
              column: 3,
              offset: 25400,
            },
            end: {
              line: 258,
              column: 131,
              offset: 25639,
            },
          },
        },
      ],
      position: {
        start: {
          line: 247,
          column: 1,
          offset: 25276,
        },
        end: {
          line: 258,
          column: 131,
          offset: 25639,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "These might look a little different from the original formulation of the Collatz Conjecture because we’re working in ",
          position: {
            start: {
              line: 260,
              column: 1,
              offset: 25641,
            },
            end: {
              line: 260,
              column: 118,
              offset: 25758,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "reverse",
              position: {
                start: {
                  line: 260,
                  column: 119,
                  offset: 25759,
                },
                end: {
                  line: 260,
                  column: 126,
                  offset: 25766,
                },
              },
            },
          ],
          position: {
            start: {
              line: 260,
              column: 118,
              offset: 25758,
            },
            end: {
              line: 260,
              column: 127,
              offset: 25767,
            },
          },
        },
        {
          type: "text",
          value:
            ". Let’s try some examples, where it should become more apparent what’s going on. I’ll also introduce a shorthand where ",
          position: {
            start: {
              line: 260,
              column: 127,
              offset: 25767,
            },
            end: {
              line: 260,
              column: 246,
              offset: 25886,
            },
          },
        },
        {
          type: "inlineCode",
          value: "-13-",
          position: {
            start: {
              line: 260,
              column: 246,
              offset: 25886,
            },
            end: {
              line: 260,
              column: 252,
              offset: 25892,
            },
          },
        },
        {
          type: "text",
          value: " means thirteen hyphens.",
          position: {
            start: {
              line: 260,
              column: 252,
              offset: 25892,
            },
            end: {
              line: 260,
              column: 276,
              offset: 25916,
            },
          },
        },
      ],
      position: {
        start: {
          line: 260,
          column: 1,
          offset: 25641,
        },
        end: {
          line: 260,
          column: 276,
          offset: 25916,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value:
        "Axiom 1:   -\nTheorem 1: --     (by rule 1 on axiom 1)\nTheorem 2: ----   (by rule 1 on theorem 1)\nTheorem 3: -8-    (by rule 1 on theorem 2)\nTheorem 4: -16-   (by rule 1 on theorem 3)\nTheorem 5: -5-    (by rule 2 on theorem 4)\nTheorem 6: -10-   (by rule 1 on theorem 5)\nTheorem 7: ---    (by rule 2 on theorem 6)",
      position: {
        start: {
          line: 262,
          column: 1,
          offset: 25918,
        },
        end: {
          line: 271,
          column: 4,
          offset: 26237,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'As you can see, theoremhood in the Collatz System corresponds to being a number that eventually reaches one via repeated application of the Collatz Rule. We’ll say a number is "Collatzy" if it has this property. From our current list of theorems, 1, 2, 3, 4, 5, 8, 10, and 16 are Collatzy. Are all natural numbers Collatzy? Are all strings in the Collatz system theorems? These are identical ways of posing the Collatz Conjecture.',
          position: {
            start: {
              line: 273,
              column: 1,
              offset: 26239,
            },
            end: {
              line: 273,
              column: 431,
              offset: 26669,
            },
          },
        },
      ],
      position: {
        start: {
          line: 273,
          column: 1,
          offset: 26239,
        },
        end: {
          line: 273,
          column: 431,
          offset: 26669,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "One related question we might have about the Collatz Conjecture is whether there exists a decision procedure for theoremhood: some test that could, ",
          position: {
            start: {
              line: 275,
              column: 1,
              offset: 26671,
            },
            end: {
              line: 275,
              column: 149,
              offset: 26819,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "in a finite amount of time",
              position: {
                start: {
                  line: 275,
                  column: 150,
                  offset: 26820,
                },
                end: {
                  line: 275,
                  column: 176,
                  offset: 26846,
                },
              },
            },
          ],
          position: {
            start: {
              line: 275,
              column: 149,
              offset: 26819,
            },
            end: {
              line: 275,
              column: 177,
              offset: 26847,
            },
          },
        },
        {
          type: "text",
          value:
            ", determine whether a given string is a theorem of the Collatz system (and therefore represents a Collatzy number).",
          position: {
            start: {
              line: 275,
              column: 177,
              offset: 26847,
            },
            end: {
              line: 275,
              column: 292,
              offset: 26962,
            },
          },
        },
      ],
      position: {
        start: {
          line: 275,
          column: 1,
          offset: 26671,
        },
        end: {
          line: 275,
          column: 292,
          offset: 26962,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "A test for theoremhood?",
          position: {
            start: {
              line: 277,
              column: 5,
              offset: 26968,
            },
            end: {
              line: 277,
              column: 28,
              offset: 26991,
            },
          },
        },
      ],
      position: {
        start: {
          line: 277,
          column: 1,
          offset: 26964,
        },
        end: {
          line: 277,
          column: 28,
          offset: 26991,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But, we run into a snag. We can’t use the same method we used to generate a decision procedure for the P-Q System because this system has ",
          position: {
            start: {
              line: 279,
              column: 1,
              offset: 26993,
            },
            end: {
              line: 279,
              column: 139,
              offset: 27131,
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
                  line: 279,
                  column: 140,
                  offset: 27132,
                },
                end: {
                  line: 279,
                  column: 144,
                  offset: 27136,
                },
              },
            },
          ],
          position: {
            start: {
              line: 279,
              column: 139,
              offset: 27131,
            },
            end: {
              line: 279,
              column: 145,
              offset: 27137,
            },
          },
        },
        {
          type: "text",
          value:
            " a lengthening and a shortening rule! This means that we can’t guarantee that all the theorems in our bucket will eventually all be longer than some given length, and even if we could, we couldn’t guarantee that a shorter theorem wouldn’t pop up later. So, this method is out of the question.",
          position: {
            start: {
              line: 279,
              column: 145,
              offset: 27137,
            },
            end: {
              line: 279,
              column: 437,
              offset: 27429,
            },
          },
        },
      ],
      position: {
        start: {
          line: 279,
          column: 1,
          offset: 26993,
        },
        end: {
          line: 279,
          column: 437,
          offset: 27429,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "That said, we didn’t prove that there ",
          position: {
            start: {
              line: 281,
              column: 1,
              offset: 27431,
            },
            end: {
              line: 281,
              column: 39,
              offset: 27469,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "is no",
              position: {
                start: {
                  line: 281,
                  column: 40,
                  offset: 27470,
                },
                end: {
                  line: 281,
                  column: 45,
                  offset: 27475,
                },
              },
            },
          ],
          position: {
            start: {
              line: 281,
              column: 39,
              offset: 27469,
            },
            end: {
              line: 281,
              column: 46,
              offset: 27476,
            },
          },
        },
        {
          type: "text",
          value:
            " decision procedure for Collatziness, but this certainly reduces our confidence. You might wonder, why can’t we just repeatedly use the Collatz rule and call that a decision procedure? The catch is that it’s not guaranteed to finish in a finite amount of time. What if the numbers in the sequence just keep getting bigger and bigger? How do you know for sure it will eventually come back down? The answer is, in general, you don’t.",
          position: {
            start: {
              line: 281,
              column: 46,
              offset: 27476,
            },
            end: {
              line: 281,
              column: 477,
              offset: 27907,
            },
          },
        },
      ],
      position: {
        start: {
          line: 281,
          column: 1,
          offset: 27431,
        },
        end: {
          line: 281,
          column: 477,
          offset: 27907,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Now, there are other ways of coming up with a decision procedure. For example, for the P-Q System, we could have just said:",
          position: {
            start: {
              line: 283,
              column: 1,
              offset: 27909,
            },
            end: {
              line: 283,
              column: 124,
              offset: 28032,
            },
          },
        },
      ],
      position: {
        start: {
          line: 283,
          column: 1,
          offset: 27909,
        },
        end: {
          line: 283,
          column: 124,
          offset: 28032,
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
                    "Decision procedure for theoremhood in the P-Q System (Version 2)",
                  position: {
                    start: {
                      line: 285,
                      column: 5,
                      offset: 28038,
                    },
                    end: {
                      line: 285,
                      column: 69,
                      offset: 28102,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 285,
                  column: 3,
                  offset: 28036,
                },
                end: {
                  line: 285,
                  column: 71,
                  offset: 28104,
                },
              },
            },
          ],
          position: {
            start: {
              line: 285,
              column: 3,
              offset: 28036,
            },
            end: {
              line: 285,
              column: 71,
              offset: 28104,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "If ",
              position: {
                start: {
                  line: 287,
                  column: 3,
                  offset: 28109,
                },
                end: {
                  line: 287,
                  column: 6,
                  offset: 28112,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "S",
                  position: {
                    start: {
                      line: 287,
                      column: 7,
                      offset: 28113,
                    },
                    end: {
                      line: 287,
                      column: 8,
                      offset: 28114,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 6,
                  offset: 28112,
                },
                end: {
                  line: 287,
                  column: 9,
                  offset: 28115,
                },
              },
            },
            {
              type: "text",
              value: " is a well-formed string of the P-Q system of the form ",
              position: {
                start: {
                  line: 287,
                  column: 9,
                  offset: 28115,
                },
                end: {
                  line: 287,
                  column: 64,
                  offset: 28170,
                },
              },
            },
            {
              type: "inlineCode",
              value: "{x}p{y}q{z}",
              position: {
                start: {
                  line: 287,
                  column: 64,
                  offset: 28170,
                },
                end: {
                  line: 287,
                  column: 77,
                  offset: 28183,
                },
              },
            },
            {
              type: "text",
              value: ", it is a theorem if and only if ",
              position: {
                start: {
                  line: 287,
                  column: 77,
                  offset: 28183,
                },
                end: {
                  line: 287,
                  column: 110,
                  offset: 28216,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "length",
                  position: {
                    start: {
                      line: 287,
                      column: 111,
                      offset: 28217,
                    },
                    end: {
                      line: 287,
                      column: 117,
                      offset: 28223,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 110,
                  offset: 28216,
                },
                end: {
                  line: 287,
                  column: 118,
                  offset: 28224,
                },
              },
            },
            {
              type: "text",
              value: "(",
              position: {
                start: {
                  line: 287,
                  column: 118,
                  offset: 28224,
                },
                end: {
                  line: 287,
                  column: 119,
                  offset: 28225,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "x",
                  position: {
                    start: {
                      line: 287,
                      column: 120,
                      offset: 28226,
                    },
                    end: {
                      line: 287,
                      column: 121,
                      offset: 28227,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 119,
                  offset: 28225,
                },
                end: {
                  line: 287,
                  column: 122,
                  offset: 28228,
                },
              },
            },
            {
              type: "text",
              value: ") + ",
              position: {
                start: {
                  line: 287,
                  column: 122,
                  offset: 28228,
                },
                end: {
                  line: 287,
                  column: 126,
                  offset: 28232,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "length",
                  position: {
                    start: {
                      line: 287,
                      column: 127,
                      offset: 28233,
                    },
                    end: {
                      line: 287,
                      column: 133,
                      offset: 28239,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 126,
                  offset: 28232,
                },
                end: {
                  line: 287,
                  column: 134,
                  offset: 28240,
                },
              },
            },
            {
              type: "text",
              value: "(",
              position: {
                start: {
                  line: 287,
                  column: 134,
                  offset: 28240,
                },
                end: {
                  line: 287,
                  column: 135,
                  offset: 28241,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "y",
                  position: {
                    start: {
                      line: 287,
                      column: 136,
                      offset: 28242,
                    },
                    end: {
                      line: 287,
                      column: 137,
                      offset: 28243,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 135,
                  offset: 28241,
                },
                end: {
                  line: 287,
                  column: 138,
                  offset: 28244,
                },
              },
            },
            {
              type: "text",
              value: ") = ",
              position: {
                start: {
                  line: 287,
                  column: 138,
                  offset: 28244,
                },
                end: {
                  line: 287,
                  column: 142,
                  offset: 28248,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "length",
                  position: {
                    start: {
                      line: 287,
                      column: 143,
                      offset: 28249,
                    },
                    end: {
                      line: 287,
                      column: 149,
                      offset: 28255,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 142,
                  offset: 28248,
                },
                end: {
                  line: 287,
                  column: 150,
                  offset: 28256,
                },
              },
            },
            {
              type: "text",
              value: "(",
              position: {
                start: {
                  line: 287,
                  column: 150,
                  offset: 28256,
                },
                end: {
                  line: 287,
                  column: 151,
                  offset: 28257,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "z",
                  position: {
                    start: {
                      line: 287,
                      column: 152,
                      offset: 28258,
                    },
                    end: {
                      line: 287,
                      column: 153,
                      offset: 28259,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 287,
                  column: 151,
                  offset: 28257,
                },
                end: {
                  line: 287,
                  column: 154,
                  offset: 28260,
                },
              },
            },
            {
              type: "text",
              value: ").",
              position: {
                start: {
                  line: 287,
                  column: 154,
                  offset: 28260,
                },
                end: {
                  line: 287,
                  column: 156,
                  offset: 28262,
                },
              },
            },
          ],
          position: {
            start: {
              line: 287,
              column: 3,
              offset: 28109,
            },
            end: {
              line: 287,
              column: 156,
              offset: 28262,
            },
          },
        },
      ],
      position: {
        start: {
          line: 285,
          column: 1,
          offset: 28034,
        },
        end: {
          line: 287,
          column: 156,
          offset: 28262,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But this decision procedure relies on the fact that we already proved the P-Q System to be isomorphic to addition. In other words, it was easy because the P-Q system represents such a simple concept that we could appeal to our higher insights about math in order to describe theoremhood in the P-Q System.",
          position: {
            start: {
              line: 289,
              column: 1,
              offset: 28264,
            },
            end: {
              line: 289,
              column: 306,
              offset: 28569,
            },
          },
        },
      ],
      position: {
        start: {
          line: 289,
          column: 1,
          offset: 28264,
        },
        end: {
          line: 289,
          column: 306,
          offset: 28569,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'But in the Collatz System, so far, mathematicians haven’t found an analogous "higher insight" that would allow us to look at a string of hyphens and deterministically decide whether it is a theorem or not. In other words, we understand addition extremely well, and we understand multiplication extremely well, but put the two together and you’ve already ',
          position: {
            start: {
              line: 291,
              column: 1,
              offset: 28571,
            },
            end: {
              line: 291,
              column: 355,
              offset: 28925,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "add-mul",
          },
          children: [
            {
              type: "text",
              value: "exceeded our current understanding of how numbers work",
              position: {
                start: {
                  line: 291,
                  column: 361,
                  offset: 28931,
                },
                end: {
                  line: 291,
                  column: 415,
                  offset: 28985,
                },
              },
            },
          ],
          position: {
            start: {
              line: 291,
              column: 355,
              offset: 28925,
            },
            end: {
              line: 291,
              column: 430,
              offset: 29000,
            },
          },
        },
        {
          type: "text",
          value:
            ". It’s fascinating to wonder whether some hypothetical being with a completely alien brain could look at a number and immediately glean whether it is Collatzy in the same way that ",
          position: {
            start: {
              line: 291,
              column: 430,
              offset: 29000,
            },
            end: {
              line: 291,
              column: 610,
              offset: 29180,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "verify",
          },
          children: [
            {
              type: "text",
              value: "we can easily verify",
              position: {
                start: {
                  line: 291,
                  column: 616,
                  offset: 29186,
                },
                end: {
                  line: 291,
                  column: 636,
                  offset: 29206,
                },
              },
            },
          ],
          position: {
            start: {
              line: 291,
              column: 610,
              offset: 29180,
            },
            end: {
              line: 291,
              column: 650,
              offset: 29220,
            },
          },
        },
        {
          type: "text",
          value: " that 288+8,724=9,012. Is such a thing possible?",
          position: {
            start: {
              line: 291,
              column: 650,
              offset: 29220,
            },
            end: {
              line: 291,
              column: 698,
              offset: 29268,
            },
          },
        },
      ],
      position: {
        start: {
          line: 291,
          column: 1,
          offset: 28571,
        },
        end: {
          line: 291,
          column: 698,
          offset: 29268,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The Collatz System also illustrates an interesting fact about formal systems, which is that knowing how to generate theorems is ",
          position: {
            start: {
              line: 293,
              column: 1,
              offset: 29270,
            },
            end: {
              line: 293,
              column: 129,
              offset: 29398,
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
                  line: 293,
                  column: 130,
                  offset: 29399,
                },
                end: {
                  line: 293,
                  column: 133,
                  offset: 29402,
                },
              },
            },
          ],
          position: {
            start: {
              line: 293,
              column: 129,
              offset: 29398,
            },
            end: {
              line: 293,
              column: 134,
              offset: 29403,
            },
          },
        },
        {
          type: "text",
          value:
            " necessarily the same as knowing how to generate nontheorems. For that matter, if we knew how to generate a ",
          position: {
            start: {
              line: 293,
              column: 134,
              offset: 29403,
            },
            end: {
              line: 293,
              column: 242,
              offset: 29511,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "single",
              position: {
                start: {
                  line: 293,
                  column: 243,
                  offset: 29512,
                },
                end: {
                  line: 293,
                  column: 249,
                  offset: 29518,
                },
              },
            },
          ],
          position: {
            start: {
              line: 293,
              column: 242,
              offset: 29511,
            },
            end: {
              line: 293,
              column: 250,
              offset: 29519,
            },
          },
        },
        {
          type: "text",
          value:
            " nontheorem of the Collatz System, we would have disproved the Conjecture (and ruined many mathematicians’ life research).",
          position: {
            start: {
              line: 293,
              column: 250,
              offset: 29519,
            },
            end: {
              line: 293,
              column: 372,
              offset: 29641,
            },
          },
        },
      ],
      position: {
        start: {
          line: 293,
          column: 1,
          offset: 29270,
        },
        end: {
          line: 293,
          column: 372,
          offset: 29641,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Conclusion",
          position: {
            start: {
              line: 295,
              column: 4,
              offset: 29646,
            },
            end: {
              line: 295,
              column: 14,
              offset: 29656,
            },
          },
        },
      ],
      position: {
        start: {
          line: 295,
          column: 1,
          offset: 29643,
        },
        end: {
          line: 295,
          column: 14,
          offset: 29656,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "At this point, you may be wondering what you’re supposed to take away from all of this. This is a fair question; I wonder the same thing too. In all seriousness, my main goal was to bring the following to your attention:",
          position: {
            start: {
              line: 297,
              column: 1,
              offset: 29658,
            },
            end: {
              line: 297,
              column: 221,
              offset: 29878,
            },
          },
        },
      ],
      position: {
        start: {
          line: 297,
          column: 1,
          offset: 29658,
        },
        end: {
          line: 297,
          column: 221,
          offset: 29878,
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
                      value: "Symbol-pushing",
                      position: {
                        start: {
                          line: 299,
                          column: 5,
                          offset: 29884,
                        },
                        end: {
                          line: 299,
                          column: 19,
                          offset: 29898,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 299,
                      column: 3,
                      offset: 29882,
                    },
                    end: {
                      line: 299,
                      column: 21,
                      offset: 29900,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    ": Formal systems describe typographic rules for manipulating meaningless symbols.",
                  position: {
                    start: {
                      line: 299,
                      column: 21,
                      offset: 29900,
                    },
                    end: {
                      line: 299,
                      column: 102,
                      offset: 29981,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 299,
                  column: 3,
                  offset: 29882,
                },
                end: {
                  line: 299,
                  column: 102,
                  offset: 29981,
                },
              },
            },
          ],
          position: {
            start: {
              line: 299,
              column: 1,
              offset: 29880,
            },
            end: {
              line: 299,
              column: 102,
              offset: 29981,
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
                      value: "Isomorphism",
                      position: {
                        start: {
                          line: 300,
                          column: 5,
                          offset: 29986,
                        },
                        end: {
                          line: 300,
                          column: 16,
                          offset: 29997,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 300,
                      column: 3,
                      offset: 29984,
                    },
                    end: {
                      line: 300,
                      column: 18,
                      offset: 29999,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    ': Despite having no inherent meaning, formal systems, through their form alone, can have such a strong isomorphism to things in the "real world" (e.g. addition, logic, geometry) that we treat them as equivalent, like treating long addition as a valid way to count things.',
                  position: {
                    start: {
                      line: 300,
                      column: 18,
                      offset: 29999,
                    },
                    end: {
                      line: 300,
                      column: 289,
                      offset: 30270,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 300,
                  column: 3,
                  offset: 29984,
                },
                end: {
                  line: 300,
                  column: 289,
                  offset: 30270,
                },
              },
            },
          ],
          position: {
            start: {
              line: 300,
              column: 1,
              offset: 29982,
            },
            end: {
              line: 300,
              column: 289,
              offset: 30270,
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
                      value: "Understanding",
                      position: {
                        start: {
                          line: 301,
                          column: 5,
                          offset: 30275,
                        },
                        end: {
                          line: 301,
                          column: 18,
                          offset: 30288,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 301,
                      column: 3,
                      offset: 30273,
                    },
                    end: {
                      line: 301,
                      column: 20,
                      offset: 30290,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    ": Using symbols to model the world has allowed us to understand our universe in a much deeper way than our ancestors.",
                  position: {
                    start: {
                      line: 301,
                      column: 20,
                      offset: 30290,
                    },
                    end: {
                      line: 301,
                      column: 137,
                      offset: 30407,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 301,
                  column: 3,
                  offset: 30273,
                },
                end: {
                  line: 301,
                  column: 137,
                  offset: 30407,
                },
              },
            },
          ],
          position: {
            start: {
              line: 301,
              column: 1,
              offset: 30271,
            },
            end: {
              line: 301,
              column: 137,
              offset: 30407,
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
                      value: "Soungness & completeness",
                      position: {
                        start: {
                          line: 302,
                          column: 5,
                          offset: 30412,
                        },
                        end: {
                          line: 302,
                          column: 29,
                          offset: 30436,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 302,
                      column: 3,
                      offset: 30410,
                    },
                    end: {
                      line: 302,
                      column: 31,
                      offset: 30438,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    ": When a formal system attempts to represent truth somehow, we are often interested in soundness and completeness. A system is sound if all of its theorems, when interpreted, are true. A system is complete if all true statements expressible in the system are theorems. Ideally, formal systems that represent truth would be both sound and complete.",
                  position: {
                    start: {
                      line: 302,
                      column: 31,
                      offset: 30438,
                    },
                    end: {
                      line: 302,
                      column: 378,
                      offset: 30785,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 302,
                  column: 3,
                  offset: 30410,
                },
                end: {
                  line: 302,
                  column: 378,
                  offset: 30785,
                },
              },
            },
          ],
          position: {
            start: {
              line: 302,
              column: 1,
              offset: 30408,
            },
            end: {
              line: 302,
              column: 378,
              offset: 30785,
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
                      value: "Formal systems are incomplete",
                      position: {
                        start: {
                          line: 303,
                          column: 5,
                          offset: 30790,
                        },
                        end: {
                          line: 303,
                          column: 34,
                          offset: 30819,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 303,
                      column: 3,
                      offset: 30788,
                    },
                    end: {
                      line: 303,
                      column: 36,
                      offset: 30821,
                    },
                  },
                },
                {
                  type: "text",
                  value:
                    ": We might want to know whether some given string is a theorem or not, in a finite amount of time. A procedure for this exists for some formal systems, but not all. This suggests that, for all the simplicity of formal systems, we cannot always fully characterize their behavior. This fact lies at the root of essentially all mathematical mysteries.",
                  position: {
                    start: {
                      line: 303,
                      column: 36,
                      offset: 30821,
                    },
                    end: {
                      line: 303,
                      column: 384,
                      offset: 31169,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 303,
                  column: 3,
                  offset: 30788,
                },
                end: {
                  line: 303,
                  column: 384,
                  offset: 31169,
                },
              },
            },
          ],
          position: {
            start: {
              line: 303,
              column: 1,
              offset: 30786,
            },
            end: {
              line: 303,
              column: 384,
              offset: 31169,
            },
          },
        },
      ],
      position: {
        start: {
          line: 299,
          column: 1,
          offset: 29880,
        },
        end: {
          line: 303,
          column: 384,
          offset: 31169,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "That’s about it. I intentionally didn’t touch some of the juiciest content which comes up when we connect number theory to formal systems. That’s because I wanted this article to be purely exploratory; something I can point folks to as background for more niche topics.",
          position: {
            start: {
              line: 305,
              column: 1,
              offset: 31171,
            },
            end: {
              line: 305,
              column: 270,
              offset: 31440,
            },
          },
        },
      ],
      position: {
        start: {
          line: 305,
          column: 1,
          offset: 31171,
        },
        end: {
          line: 305,
          column: 270,
          offset: 31440,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But really, more so than any of those takeaways I proposed, I wanted to capture the feeling of looking at something as simple as 1+1=2 and questioning to what extent it represents the real world. The fact that physics works at all would suggest that the universe really is pretty isomorphic to symbols on a page. And I hope you find this as awesome and unsettling as I do. ■",
          position: {
            start: {
              line: 307,
              column: 1,
              offset: 31442,
            },
            end: {
              line: 307,
              column: 375,
              offset: 31816,
            },
          },
        },
      ],
      position: {
        start: {
          line: 307,
          column: 1,
          offset: 31442,
        },
        end: {
          line: 307,
          column: 375,
          offset: 31816,
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
            id: "nat-nums",
          },
          children: [
            {
              type: "text",
              value:
                "In this case, I'm intentionally excluding zero for simplicity's sake, but we could easily modify the P-Q System to include it. For example, we could start with Axiom 1 as ",
              position: {
                start: {
                  line: 309,
                  column: 11,
                  offset: 31828,
                },
                end: {
                  line: 309,
                  column: 182,
                  offset: 31999,
                },
              },
            },
            {
              type: "inlineCode",
              value: "pq",
              position: {
                start: {
                  line: 309,
                  column: 182,
                  offset: 31999,
                },
                end: {
                  line: 309,
                  column: 186,
                  offset: 32003,
                },
              },
            },
            {
              type: "text",
              value:
                " to represent 0+0=0. Alternatively, we could just change our ",
              position: {
                start: {
                  line: 309,
                  column: 186,
                  offset: 32003,
                },
                end: {
                  line: 309,
                  column: 247,
                  offset: 32064,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "interpretation",
                  position: {
                    start: {
                      line: 309,
                      column: 248,
                      offset: 32065,
                    },
                    end: {
                      line: 309,
                      column: 262,
                      offset: 32079,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 309,
                  column: 247,
                  offset: 32064,
                },
                end: {
                  line: 309,
                  column: 263,
                  offset: 32080,
                },
              },
            },
            {
              type: "text",
              value:
                '. i.e. We could say that for the first two hyphen groups, one hyphen means "zero", two hyphens means "one", etc. To the right of the ',
              position: {
                start: {
                  line: 309,
                  column: 263,
                  offset: 32080,
                },
                end: {
                  line: 309,
                  column: 396,
                  offset: 32213,
                },
              },
            },
            {
              type: "inlineCode",
              value: "q",
              position: {
                start: {
                  line: 309,
                  column: 396,
                  offset: 32213,
                },
                end: {
                  line: 309,
                  column: 399,
                  offset: 32216,
                },
              },
            },
            {
              type: "text",
              value:
                ', two hyphens means "zero", three hyphens means "one", etc.',
              position: {
                start: {
                  line: 309,
                  column: 399,
                  offset: 32216,
                },
                end: {
                  line: 309,
                  column: 458,
                  offset: 32275,
                },
              },
            },
          ],
          position: {
            start: {
              line: 309,
              column: 1,
              offset: 31818,
            },
            end: {
              line: 309,
              column: 474,
              offset: 32291,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 309,
              column: 474,
              offset: 32291,
            },
            end: {
              line: 310,
              column: 1,
              offset: 32292,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "have-to",
          },
          children: [
            {
              type: "text",
              value: "Well, I guess we don't ",
              position: {
                start: {
                  line: 310,
                  column: 11,
                  offset: 32302,
                },
                end: {
                  line: 310,
                  column: 34,
                  offset: 32325,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "have",
                  position: {
                    start: {
                      line: 310,
                      column: 35,
                      offset: 32326,
                    },
                    end: {
                      line: 310,
                      column: 39,
                      offset: 32330,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 310,
                  column: 34,
                  offset: 32325,
                },
                end: {
                  line: 310,
                  column: 40,
                  offset: 32331,
                },
              },
            },
            {
              type: "text",
              value: " to, but I do.",
              position: {
                start: {
                  line: 310,
                  column: 40,
                  offset: 32331,
                },
                end: {
                  line: 310,
                  column: 54,
                  offset: 32345,
                },
              },
            },
          ],
          position: {
            start: {
              line: 310,
              column: 1,
              offset: 32292,
            },
            end: {
              line: 310,
              column: 69,
              offset: 32360,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 310,
              column: 69,
              offset: 32360,
            },
            end: {
              line: 311,
              column: 1,
              offset: 32361,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "commute",
          },
          children: [
            {
              type: "text",
              value:
                "In other words, Rule 2 expresses the commutative property of addition.",
              position: {
                start: {
                  line: 311,
                  column: 11,
                  offset: 32371,
                },
                end: {
                  line: 311,
                  column: 81,
                  offset: 32441,
                },
              },
            },
          ],
          position: {
            start: {
              line: 311,
              column: 1,
              offset: 32361,
            },
            end: {
              line: 311,
              column: 96,
              offset: 32456,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 311,
              column: 96,
              offset: 32456,
            },
            end: {
              line: 312,
              column: 1,
              offset: 32457,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "other-way",
          },
          children: [
            {
              type: "text",
              value:
                "Well, we wouldn’t want it to be any other way when we’re talking about counting everyday things, like cookies or people. But depending on the context, addition might not be commutative, like ",
              position: {
                start: {
                  line: 312,
                  column: 11,
                  offset: 32467,
                },
                end: {
                  line: 312,
                  column: 202,
                  offset: 32658,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic",
              children: [
                {
                  type: "text",
                  value: "ordinal arithmetic",
                  position: {
                    start: {
                      line: 312,
                      column: 203,
                      offset: 32659,
                    },
                    end: {
                      line: 312,
                      column: 221,
                      offset: 32677,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 312,
                  column: 202,
                  offset: 32658,
                },
                end: {
                  line: 312,
                  column: 272,
                  offset: 32728,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 312,
                  column: 272,
                  offset: 32728,
                },
                end: {
                  line: 312,
                  column: 273,
                  offset: 32729,
                },
              },
            },
          ],
          position: {
            start: {
              line: 312,
              column: 1,
              offset: 32457,
            },
            end: {
              line: 312,
              column: 290,
              offset: 32746,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 312,
              column: 290,
              offset: 32746,
            },
            end: {
              line: 313,
              column: 1,
              offset: 32747,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "isomorphism",
          },
          children: [
            {
              type: "text",
              value:
                'There’s a nuance here that I want to write about separately, but I’ll just hint at it here. The extent to which addition actually exists "in the real world" is much more debatable than say, electricity. When we point to examples of real-world addition, we pick examples that fit nicely with our abstract idealization of numbers, like cookies. If addition truly represented "putting things together" in the physical world, then 1 plus 1 might equal 1, such as in the case of two water droplets merging. Obviously, you would say that the ',
              position: {
                start: {
                  line: 313,
                  column: 11,
                  offset: 32757,
                },
                end: {
                  line: 313,
                  column: 547,
                  offset: 33293,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "number",
                  position: {
                    start: {
                      line: 313,
                      column: 548,
                      offset: 33294,
                    },
                    end: {
                      line: 313,
                      column: 554,
                      offset: 33300,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 313,
                  column: 547,
                  offset: 33293,
                },
                end: {
                  line: 313,
                  column: 555,
                  offset: 33301,
                },
              },
            },
            {
              type: "text",
              value: " of droplets didn't sum, but the ",
              position: {
                start: {
                  line: 313,
                  column: 555,
                  offset: 33301,
                },
                end: {
                  line: 313,
                  column: 588,
                  offset: 33334,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "volume",
                  position: {
                    start: {
                      line: 313,
                      column: 589,
                      offset: 33335,
                    },
                    end: {
                      line: 313,
                      column: 595,
                      offset: 33341,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 313,
                  column: 588,
                  offset: 33334,
                },
                end: {
                  line: 313,
                  column: 596,
                  offset: 33342,
                },
              },
            },
            {
              type: "text",
              value:
                " did. And while that's true, hopefully that thought experiment makes you aware that your definition of addition is entirely shaped by your abstract, mathematical idealization of it, and you find examples of addition in the real world ",
              position: {
                start: {
                  line: 313,
                  column: 596,
                  offset: 33342,
                },
                end: {
                  line: 313,
                  column: 830,
                  offset: 33576,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "through",
                  position: {
                    start: {
                      line: 313,
                      column: 831,
                      offset: 33577,
                    },
                    end: {
                      line: 313,
                      column: 838,
                      offset: 33584,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 313,
                  column: 830,
                  offset: 33576,
                },
                end: {
                  line: 313,
                  column: 839,
                  offset: 33585,
                },
              },
            },
            {
              type: "text",
              value: " that lens, not the other way around.",
              position: {
                start: {
                  line: 313,
                  column: 839,
                  offset: 33585,
                },
                end: {
                  line: 313,
                  column: 876,
                  offset: 33622,
                },
              },
            },
          ],
          position: {
            start: {
              line: 313,
              column: 1,
              offset: 32747,
            },
            end: {
              line: 313,
              column: 895,
              offset: 33641,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 313,
              column: 895,
              offset: 33641,
            },
            end: {
              line: 314,
              column: 1,
              offset: 33642,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "math-is-formal",
          },
          children: [
            {
              type: "text",
              value:
                "If you're just looking for some intuition on this, consider the rules of algebra: They describe specific operations you're allowed to perform on an equation in order to generate a new, equally true equation. For example, you're allowed to add the same number to both sides of the equal sign. Although we often take creative liberty in choosing ",
              position: {
                start: {
                  line: 314,
                  column: 11,
                  offset: 33652,
                },
                end: {
                  line: 314,
                  column: 355,
                  offset: 33996,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "which",
                  position: {
                    start: {
                      line: 314,
                      column: 356,
                      offset: 33997,
                    },
                    end: {
                      line: 314,
                      column: 361,
                      offset: 34002,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 314,
                  column: 355,
                  offset: 33996,
                },
                end: {
                  line: 314,
                  column: 362,
                  offset: 34003,
                },
              },
            },
            {
              type: "text",
              value:
                " rules to apply, the process of applying the rules itself is purely mechanical.",
              position: {
                start: {
                  line: 314,
                  column: 362,
                  offset: 34003,
                },
                end: {
                  line: 314,
                  column: 441,
                  offset: 34082,
                },
              },
            },
          ],
          position: {
            start: {
              line: 314,
              column: 1,
              offset: 33642,
            },
            end: {
              line: 314,
              column: 463,
              offset: 34104,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 314,
              column: 463,
              offset: 34104,
            },
            end: {
              line: 315,
              column: 1,
              offset: 34105,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "longer",
          },
          children: [
            {
              type: "text",
              value: "Note that I don’t mean the ",
              position: {
                start: {
                  line: 315,
                  column: 11,
                  offset: 34115,
                },
                end: {
                  line: 315,
                  column: 38,
                  offset: 34142,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "number",
                  position: {
                    start: {
                      line: 315,
                      column: 39,
                      offset: 34143,
                    },
                    end: {
                      line: 315,
                      column: 45,
                      offset: 34149,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 315,
                  column: 38,
                  offset: 34142,
                },
                end: {
                  line: 315,
                  column: 46,
                  offset: 34150,
                },
              },
            },
            {
              type: "text",
              value: " of theorems in the bucket, I mean the ",
              position: {
                start: {
                  line: 315,
                  column: 46,
                  offset: 34150,
                },
                end: {
                  line: 315,
                  column: 85,
                  offset: 34189,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "length of each theorem",
                  position: {
                    start: {
                      line: 315,
                      column: 86,
                      offset: 34190,
                    },
                    end: {
                      line: 315,
                      column: 108,
                      offset: 34212,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 315,
                  column: 85,
                  offset: 34189,
                },
                end: {
                  line: 315,
                  column: 109,
                  offset: 34213,
                },
              },
            },
            {
              type: "text",
              value: " in symbols.",
              position: {
                start: {
                  line: 315,
                  column: 109,
                  offset: 34213,
                },
                end: {
                  line: 315,
                  column: 121,
                  offset: 34225,
                },
              },
            },
          ],
          position: {
            start: {
              line: 315,
              column: 1,
              offset: 34105,
            },
            end: {
              line: 315,
              column: 135,
              offset: 34239,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 315,
              column: 135,
              offset: 34239,
            },
            end: {
              line: 316,
              column: 1,
              offset: 34240,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "not-mix",
          },
          children: [
            {
              type: "text",
              value:
                'As we saw, rules that produce theorems of equal length cause a slight headache with this method. But, since there is only a finite number of allowed symbols in a formal system, then we’re still guaranteed that, at the very worst, eventually we’ll have seen every theorem of that length, and we can use the "only add new theorems to the bucket" rule to ensure that the shortest theorem in the bucket eventually has to give way to a longer one.',
              position: {
                start: {
                  line: 316,
                  column: 11,
                  offset: 34250,
                },
                end: {
                  line: 316,
                  column: 453,
                  offset: 34692,
                },
              },
            },
          ],
          position: {
            start: {
              line: 316,
              column: 1,
              offset: 34240,
            },
            end: {
              line: 316,
              column: 468,
              offset: 34707,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 316,
              column: 468,
              offset: 34707,
            },
            end: {
              line: 317,
              column: 1,
              offset: 34708,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "collatz-viz",
          },
          children: [
            {
              type: "text",
              value: "And ",
              position: {
                start: {
                  line: 317,
                  column: 11,
                  offset: 34718,
                },
                end: {
                  line: 317,
                  column: 15,
                  offset: 34722,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://www.reddit.com/r/dataisbeautiful/comments/62iz0m/the_collatz_conjecture_visualized_organically_oc/?rdt=42880",
              children: [
                {
                  type: "text",
                  value: "visualized",
                  position: {
                    start: {
                      line: 317,
                      column: 16,
                      offset: 34723,
                    },
                    end: {
                      line: 317,
                      column: 26,
                      offset: 34733,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 317,
                  column: 15,
                  offset: 34722,
                },
                end: {
                  line: 317,
                  column: 145,
                  offset: 34852,
                },
              },
            },
            {
              type: "text",
              value: "!",
              position: {
                start: {
                  line: 317,
                  column: 145,
                  offset: 34852,
                },
                end: {
                  line: 317,
                  column: 146,
                  offset: 34853,
                },
              },
            },
          ],
          position: {
            start: {
              line: 317,
              column: 1,
              offset: 34708,
            },
            end: {
              line: 317,
              column: 165,
              offset: 34872,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 317,
              column: 165,
              offset: 34872,
            },
            end: {
              line: 318,
              column: 1,
              offset: 34873,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "add-mul",
          },
          children: [
            {
              type: "text",
              value:
                "This might sound like a joke, but it's not really. See: the Goldbach Conjecture, the Twin Primes Conjecture, and odd perfect numbers.",
              position: {
                start: {
                  line: 318,
                  column: 11,
                  offset: 34883,
                },
                end: {
                  line: 318,
                  column: 144,
                  offset: 35016,
                },
              },
            },
          ],
          position: {
            start: {
              line: 318,
              column: 1,
              offset: 34873,
            },
            end: {
              line: 318,
              column: 159,
              offset: 35031,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 318,
              column: 159,
              offset: 35031,
            },
            end: {
              line: 319,
              column: 1,
              offset: 35032,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "verify",
          },
          children: [
            {
              type: "text",
              value:
                "This line of thought is closely related to the P=NP problem. If you haven't heard of it, and you're reached this footnote, you should ",
              position: {
                start: {
                  line: 319,
                  column: 11,
                  offset: 35042,
                },
                end: {
                  line: 319,
                  column: 145,
                  offset: 35176,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/P_versus_NP_problem",
              children: [
                {
                  type: "text",
                  value: "check it out",
                  position: {
                    start: {
                      line: 319,
                      column: 146,
                      offset: 35177,
                    },
                    end: {
                      line: 319,
                      column: 158,
                      offset: 35189,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 319,
                  column: 145,
                  offset: 35176,
                },
                end: {
                  line: 319,
                  column: 210,
                  offset: 35241,
                },
              },
            },
            {
              type: "text",
              value: "!",
              position: {
                start: {
                  line: 319,
                  column: 210,
                  offset: 35241,
                },
                end: {
                  line: 319,
                  column: 211,
                  offset: 35242,
                },
              },
            },
          ],
          position: {
            start: {
              line: 319,
              column: 1,
              offset: 35032,
            },
            end: {
              line: 319,
              column: 225,
              offset: 35256,
            },
          },
        },
      ],
      position: {
        start: {
          line: 309,
          column: 1,
          offset: 31818,
        },
        end: {
          line: 319,
          column: 225,
          offset: 35256,
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
      line: 320,
      column: 1,
      offset: 35257,
    },
  },
};

export default post;
