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
          url: "biggest-number/biggest-number-header.png",
          alt: "A detective figure walking through a landscape labeled by numbers",
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 1,
              column: 111,
              offset: 110,
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
          column: 111,
          offset: 110,
        },
      },
    },
    {
      type: "heading",
      depth: 1,
      children: [
        {
          type: "text",
          value: "No dumb questions: What's the biggest number?",
          position: {
            start: {
              line: 3,
              column: 3,
              offset: 114,
            },
            end: {
              line: 3,
              column: 48,
              offset: 159,
            },
          },
        },
      ],
      position: {
        start: {
          line: 3,
          column: 1,
          offset: 112,
        },
        end: {
          line: 3,
          column: 48,
          offset: 159,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Today we'll address a question that has long occupied the minds of children, mathematicians, and child mathematicians: What's the biggest number?",
          position: {
            start: {
              line: 5,
              column: 1,
              offset: 161,
            },
            end: {
              line: 5,
              column: 146,
              offset: 306,
            },
          },
        },
      ],
      position: {
        start: {
          line: 5,
          column: 1,
          offset: 161,
        },
        end: {
          line: 5,
          column: 146,
          offset: 306,
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
                  value: "Child A",
                  position: {
                    start: {
                      line: 7,
                      column: 5,
                      offset: 312,
                    },
                    end: {
                      line: 7,
                      column: 12,
                      offset: 319,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 7,
                  column: 3,
                  offset: 310,
                },
                end: {
                  line: 7,
                  column: 14,
                  offset: 321,
                },
              },
            },
            {
              type: "text",
              value: ": When I grow up, I'm gonna have a million dollars.",
              position: {
                start: {
                  line: 7,
                  column: 14,
                  offset: 321,
                },
                end: {
                  line: 7,
                  column: 65,
                  offset: 372,
                },
              },
            },
          ],
          position: {
            start: {
              line: 7,
              column: 3,
              offset: 310,
            },
            end: {
              line: 7,
              column: 65,
              offset: 372,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Child B",
                  position: {
                    start: {
                      line: 9,
                      column: 5,
                      offset: 379,
                    },
                    end: {
                      line: 9,
                      column: 12,
                      offset: 386,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 9,
                  column: 3,
                  offset: 377,
                },
                end: {
                  line: 9,
                  column: 14,
                  offset: 388,
                },
              },
            },
            {
              type: "text",
              value: ": Well, when I grow up, I'm gonna have a ",
              position: {
                start: {
                  line: 9,
                  column: 14,
                  offset: 388,
                },
                end: {
                  line: 9,
                  column: 55,
                  offset: 429,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "billion",
                  position: {
                    start: {
                      line: 9,
                      column: 56,
                      offset: 430,
                    },
                    end: {
                      line: 9,
                      column: 63,
                      offset: 437,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 9,
                  column: 55,
                  offset: 429,
                },
                end: {
                  line: 9,
                  column: 64,
                  offset: 438,
                },
              },
            },
            {
              type: "text",
              value: " dollars.",
              position: {
                start: {
                  line: 9,
                  column: 64,
                  offset: 438,
                },
                end: {
                  line: 9,
                  column: 73,
                  offset: 447,
                },
              },
            },
          ],
          position: {
            start: {
              line: 9,
              column: 3,
              offset: 377,
            },
            end: {
              line: 9,
              column: 73,
              offset: 447,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Child A",
                  position: {
                    start: {
                      line: 11,
                      column: 5,
                      offset: 454,
                    },
                    end: {
                      line: 11,
                      column: 12,
                      offset: 461,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 11,
                  column: 3,
                  offset: 452,
                },
                end: {
                  line: 11,
                  column: 14,
                  offset: 463,
                },
              },
            },
            {
              type: "text",
              value: ": Oh yeah? Well, I'm gonna have a ",
              position: {
                start: {
                  line: 11,
                  column: 14,
                  offset: 463,
                },
                end: {
                  line: 11,
                  column: 48,
                  offset: 497,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "billion",
                  position: {
                    start: {
                      line: 11,
                      column: 49,
                      offset: 498,
                    },
                    end: {
                      line: 11,
                      column: 56,
                      offset: 505,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 11,
                  column: 48,
                  offset: 497,
                },
                end: {
                  line: 11,
                  column: 57,
                  offset: 506,
                },
              },
            },
            {
              type: "text",
              value: " billion dollars.",
              position: {
                start: {
                  line: 11,
                  column: 57,
                  offset: 506,
                },
                end: {
                  line: 11,
                  column: 74,
                  offset: 523,
                },
              },
            },
          ],
          position: {
            start: {
              line: 11,
              column: 3,
              offset: 452,
            },
            end: {
              line: 11,
              column: 74,
              offset: 523,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Child B",
                  position: {
                    start: {
                      line: 13,
                      column: 5,
                      offset: 530,
                    },
                    end: {
                      line: 13,
                      column: 12,
                      offset: 537,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 13,
                  column: 3,
                  offset: 528,
                },
                end: {
                  line: 13,
                  column: 14,
                  offset: 539,
                },
              },
            },
            {
              type: "text",
              value: ": Well, I'm gonna have a ",
              position: {
                start: {
                  line: 13,
                  column: 14,
                  offset: 539,
                },
                end: {
                  line: 13,
                  column: 39,
                  offset: 564,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "zillion",
                  position: {
                    start: {
                      line: 13,
                      column: 40,
                      offset: 565,
                    },
                    end: {
                      line: 13,
                      column: 47,
                      offset: 572,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 13,
                  column: 39,
                  offset: 564,
                },
                end: {
                  line: 13,
                  column: 48,
                  offset: 573,
                },
              },
            },
            {
              type: "text",
              value: " dollars.",
              position: {
                start: {
                  line: 13,
                  column: 48,
                  offset: 573,
                },
                end: {
                  line: 13,
                  column: 57,
                  offset: 582,
                },
              },
            },
          ],
          position: {
            start: {
              line: 13,
              column: 3,
              offset: 528,
            },
            end: {
              line: 13,
              column: 57,
              offset: 582,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Child A",
                  position: {
                    start: {
                      line: 15,
                      column: 5,
                      offset: 589,
                    },
                    end: {
                      line: 15,
                      column: 12,
                      offset: 596,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 15,
                  column: 3,
                  offset: 587,
                },
                end: {
                  line: 15,
                  column: 14,
                  offset: 598,
                },
              },
            },
            {
              type: "text",
              value: ": Ok, well, then I'm gonna have ",
              position: {
                start: {
                  line: 15,
                  column: 14,
                  offset: 598,
                },
                end: {
                  line: 15,
                  column: 46,
                  offset: 630,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "infinity",
                  position: {
                    start: {
                      line: 15,
                      column: 47,
                      offset: 631,
                    },
                    end: {
                      line: 15,
                      column: 55,
                      offset: 639,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 15,
                  column: 46,
                  offset: 630,
                },
                end: {
                  line: 15,
                  column: 56,
                  offset: 640,
                },
              },
            },
            {
              type: "text",
              value: " dollars.",
              position: {
                start: {
                  line: 15,
                  column: 56,
                  offset: 640,
                },
                end: {
                  line: 15,
                  column: 65,
                  offset: 649,
                },
              },
            },
          ],
          position: {
            start: {
              line: 15,
              column: 3,
              offset: 587,
            },
            end: {
              line: 15,
              column: 65,
              offset: 649,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Child B",
                  position: {
                    start: {
                      line: 17,
                      column: 5,
                      offset: 656,
                    },
                    end: {
                      line: 17,
                      column: 12,
                      offset: 663,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 17,
                  column: 3,
                  offset: 654,
                },
                end: {
                  line: 17,
                  column: 14,
                  offset: 665,
                },
              },
            },
            {
              type: "text",
              value: ": Fine, then I'll have ",
              position: {
                start: {
                  line: 17,
                  column: 14,
                  offset: 665,
                },
                end: {
                  line: 17,
                  column: 37,
                  offset: 688,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "infinity",
                  position: {
                    start: {
                      line: 17,
                      column: 38,
                      offset: 689,
                    },
                    end: {
                      line: 17,
                      column: 46,
                      offset: 697,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 17,
                  column: 37,
                  offset: 688,
                },
                end: {
                  line: 17,
                  column: 47,
                  offset: 698,
                },
              },
            },
            {
              type: "text",
              value: " infinity dollars.",
              position: {
                start: {
                  line: 17,
                  column: 47,
                  offset: 698,
                },
                end: {
                  line: 17,
                  column: 65,
                  offset: 716,
                },
              },
            },
          ],
          position: {
            start: {
              line: 17,
              column: 3,
              offset: 654,
            },
            end: {
              line: 17,
              column: 65,
              offset: 716,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "strong",
              children: [
                {
                  type: "text",
                  value: "Child A",
                  position: {
                    start: {
                      line: 19,
                      column: 5,
                      offset: 723,
                    },
                    end: {
                      line: 19,
                      column: 12,
                      offset: 730,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 19,
                  column: 3,
                  offset: 721,
                },
                end: {
                  line: 19,
                  column: 14,
                  offset: 732,
                },
              },
            },
            {
              type: "text",
              value: ": Well, I'm gonna have however many dollars you have, ",
              position: {
                start: {
                  line: 19,
                  column: 14,
                  offset: 732,
                },
                end: {
                  line: 19,
                  column: 68,
                  offset: 786,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "plus one",
                  position: {
                    start: {
                      line: 19,
                      column: 69,
                      offset: 787,
                    },
                    end: {
                      line: 19,
                      column: 77,
                      offset: 795,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 19,
                  column: 68,
                  offset: 786,
                },
                end: {
                  line: 19,
                  column: 78,
                  offset: 796,
                },
              },
            },
            {
              type: "text",
              value: "!",
              position: {
                start: {
                  line: 19,
                  column: 78,
                  offset: 796,
                },
                end: {
                  line: 19,
                  column: 79,
                  offset: 797,
                },
              },
            },
          ],
          position: {
            start: {
              line: 19,
              column: 3,
              offset: 721,
            },
            end: {
              line: 19,
              column: 79,
              offset: 797,
            },
          },
        },
      ],
      position: {
        start: {
          line: 7,
          column: 1,
          offset: 308,
        },
        end: {
          line: 19,
          column: 79,
          offset: 797,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Whereas the dialogue above illustrates a naive, blustering approach to the question, we will investigate the topic with rigor in the name of science and progress. Together, we'll discover the monstrosities that lie beyond the number of grains of sand on the earth, past the number of subatomic particles in the universe, and even beyond the number of ",
          position: {
            start: {
              line: 21,
              column: 1,
              offset: 799,
            },
            end: {
              line: 21,
              column: 352,
              offset: 1150,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "possible arrangements",
              position: {
                start: {
                  line: 21,
                  column: 353,
                  offset: 1151,
                },
                end: {
                  line: 21,
                  column: 374,
                  offset: 1172,
                },
              },
            },
          ],
          position: {
            start: {
              line: 21,
              column: 352,
              offset: 1150,
            },
            end: {
              line: 21,
              column: 375,
              offset: 1173,
            },
          },
        },
        {
          type: "text",
          value: " of subatomic particles in the universe.",
          position: {
            start: {
              line: 21,
              column: 375,
              offset: 1173,
            },
            end: {
              line: 21,
              column: 415,
              offset: 1213,
            },
          },
        },
      ],
      position: {
        start: {
          line: 21,
          column: 1,
          offset: 799,
        },
        end: {
          line: 21,
          column: 415,
          offset: 1213,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Ready? Let's begin.",
          position: {
            start: {
              line: 23,
              column: 1,
              offset: 1215,
            },
            end: {
              line: 23,
              column: 20,
              offset: 1234,
            },
          },
        },
      ],
      position: {
        start: {
          line: 23,
          column: 1,
          offset: 1215,
        },
        end: {
          line: 23,
          column: 20,
          offset: 1234,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Infinity",
          position: {
            start: {
              line: 25,
              column: 4,
              offset: 1239,
            },
            end: {
              line: 25,
              column: 12,
              offset: 1247,
            },
          },
        },
      ],
      position: {
        start: {
          line: 25,
          column: 1,
          offset: 1236,
        },
        end: {
          line: 25,
          column: 12,
          offset: 1247,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The first thing we need to do is deal with the question of infinity. You'll see plenty of amateurs at local \"biggest number\" competitions invoke infinity like it's some kind of ace in the hole, but this gambit is easily punished by experience ",
          position: {
            start: {
              line: 27,
              column: 1,
              offset: 1249,
            },
            end: {
              line: 27,
              column: 244,
              offset: 1492,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://googology.fandom.com/wiki/Googology_Wiki",
          children: [
            {
              type: "text",
              value: "googologists",
              position: {
                start: {
                  line: 27,
                  column: 245,
                  offset: 1493,
                },
                end: {
                  line: 27,
                  column: 257,
                  offset: 1505,
                },
              },
            },
          ],
          position: {
            start: {
              line: 27,
              column: 244,
              offset: 1492,
            },
            end: {
              line: 27,
              column: 308,
              offset: 1556,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 27,
              column: 308,
              offset: 1556,
            },
            end: {
              line: 27,
              column: 309,
              offset: 1557,
            },
          },
        },
      ],
      position: {
        start: {
          line: 27,
          column: 1,
          offset: 1249,
        },
        end: {
          line: 27,
          column: 309,
          offset: 1557,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Why? For one thing, there isn't one \"infinity\" in the same way there's only one ",
          position: {
            start: {
              line: 29,
              column: 1,
              offset: 1559,
            },
            end: {
              line: 29,
              column: 81,
              offset: 1639,
            },
          },
        },
        {
          type: "inlineCode",
          value: "5",
          position: {
            start: {
              line: 29,
              column: 81,
              offset: 1639,
            },
            end: {
              line: 29,
              column: 84,
              offset: 1642,
            },
          },
        },
        {
          type: "text",
          value: '. "Infinity" could refer to the number of ',
          position: {
            start: {
              line: 29,
              column: 84,
              offset: 1642,
            },
            end: {
              line: 29,
              column: 126,
              offset: 1684,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Rational_number",
          children: [
            {
              type: "text",
              value: "rational numbers",
              position: {
                start: {
                  line: 29,
                  column: 127,
                  offset: 1685,
                },
                end: {
                  line: 29,
                  column: 143,
                  offset: 1701,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 126,
              offset: 1684,
            },
            end: {
              line: 29,
              column: 191,
              offset: 1749,
            },
          },
        },
        {
          type: "text",
          value: ". Or, it could refer to the number of ",
          position: {
            start: {
              line: 29,
              column: 191,
              offset: 1749,
            },
            end: {
              line: 29,
              column: 229,
              offset: 1787,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Real_number",
          children: [
            {
              type: "text",
              value: "real numbers",
              position: {
                start: {
                  line: 29,
                  column: 230,
                  offset: 1788,
                },
                end: {
                  line: 29,
                  column: 242,
                  offset: 1800,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 229,
              offset: 1787,
            },
            end: {
              line: 29,
              column: 286,
              offset: 1844,
            },
          },
        },
        {
          type: "text",
          value:
            ", which is infinitely larger than the former kind of infinity. You could also consider the number of possible subsets of real numbers and get an even bigger, infinitely ",
          position: {
            start: {
              line: 29,
              column: 286,
              offset: 1844,
            },
            end: {
              line: 29,
              column: 455,
              offset: 2013,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "larger",
              position: {
                start: {
                  line: 29,
                  column: 456,
                  offset: 2014,
                },
                end: {
                  line: 29,
                  column: 462,
                  offset: 2020,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 455,
              offset: 2013,
            },
            end: {
              line: 29,
              column: 463,
              offset: 2021,
            },
          },
        },
        {
          type: "text",
          value: " infinity. Or maybe you're referring to ",
          position: {
            start: {
              line: 29,
              column: 463,
              offset: 2021,
            },
            end: {
              line: 29,
              column: 503,
              offset: 2061,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Transfinite_number",
          children: [
            {
              type: "text",
              value: "transfinite numbers",
              position: {
                start: {
                  line: 29,
                  column: 504,
                  offset: 2062,
                },
                end: {
                  line: 29,
                  column: 523,
                  offset: 2081,
                },
              },
            },
          ],
          position: {
            start: {
              line: 29,
              column: 503,
              offset: 2061,
            },
            end: {
              line: 29,
              column: 574,
              offset: 2132,
            },
          },
        },
        {
          type: "text",
          value: "?",
          position: {
            start: {
              line: 29,
              column: 574,
              offset: 2132,
            },
            end: {
              line: 29,
              column: 575,
              offset: 2133,
            },
          },
        },
      ],
      position: {
        start: {
          line: 29,
          column: 1,
          offset: 1559,
        },
        end: {
          line: 29,
          column: 575,
          offset: 2133,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "More to the point, though, we discard infinities because they behave differently than regular counting numbers like ",
          position: {
            start: {
              line: 31,
              column: 1,
              offset: 2135,
            },
            end: {
              line: 31,
              column: 117,
              offset: 2251,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 31,
              column: 117,
              offset: 2251,
            },
            end: {
              line: 31,
              column: 120,
              offset: 2254,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 31,
              column: 120,
              offset: 2254,
            },
            end: {
              line: 31,
              column: 122,
              offset: 2256,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2",
          position: {
            start: {
              line: 31,
              column: 122,
              offset: 2256,
            },
            end: {
              line: 31,
              column: 125,
              offset: 2259,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 31,
              column: 125,
              offset: 2259,
            },
            end: {
              line: 31,
              column: 127,
              offset: 2261,
            },
          },
        },
        {
          type: "inlineCode",
          value: "3",
          position: {
            start: {
              line: 31,
              column: 127,
              offset: 2261,
            },
            end: {
              line: 31,
              column: 130,
              offset: 2264,
            },
          },
        },
        {
          type: "text",
          value:
            ", etc. Regular old, salt-of-the-earth counting numbers have certain nice properties that you lose with infinities. For example:",
          position: {
            start: {
              line: 31,
              column: 130,
              offset: 2264,
            },
            end: {
              line: 31,
              column: 257,
              offset: 2391,
            },
          },
        },
      ],
      position: {
        start: {
          line: 31,
          column: 1,
          offset: 2135,
        },
        end: {
          line: 31,
          column: 257,
          offset: 2391,
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
                  value: "The ability to count up from ",
                  position: {
                    start: {
                      line: 33,
                      column: 3,
                      offset: 2395,
                    },
                    end: {
                      line: 33,
                      column: 32,
                      offset: 2424,
                    },
                  },
                },
                {
                  type: "inlineCode",
                  value: "1",
                  position: {
                    start: {
                      line: 33,
                      column: 32,
                      offset: 2424,
                    },
                    end: {
                      line: 33,
                      column: 35,
                      offset: 2427,
                    },
                  },
                },
                {
                  type: "text",
                  value: " to the number (at least, in theory)",
                  position: {
                    start: {
                      line: 33,
                      column: 35,
                      offset: 2427,
                    },
                    end: {
                      line: 33,
                      column: 71,
                      offset: 2463,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 33,
                  column: 3,
                  offset: 2395,
                },
                end: {
                  line: 33,
                  column: 71,
                  offset: 2463,
                },
              },
            },
          ],
          position: {
            start: {
              line: 33,
              column: 1,
              offset: 2393,
            },
            end: {
              line: 33,
              column: 71,
              offset: 2463,
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
                    "The ability to write down every digit of the number (at least, in theory)",
                  position: {
                    start: {
                      line: 34,
                      column: 3,
                      offset: 2466,
                    },
                    end: {
                      line: 34,
                      column: 76,
                      offset: 2539,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 34,
                  column: 3,
                  offset: 2466,
                },
                end: {
                  line: 34,
                  column: 76,
                  offset: 2539,
                },
              },
            },
          ],
          position: {
            start: {
              line: 34,
              column: 1,
              offset: 2464,
            },
            end: {
              line: 34,
              column: 76,
              offset: 2539,
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
                    "The ability to imagine a collection containing that number of things (at least, in theory)",
                  position: {
                    start: {
                      line: 35,
                      column: 3,
                      offset: 2542,
                    },
                    end: {
                      line: 35,
                      column: 93,
                      offset: 2632,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 35,
                  column: 3,
                  offset: 2542,
                },
                end: {
                  line: 35,
                  column: 93,
                  offset: 2632,
                },
              },
            },
          ],
          position: {
            start: {
              line: 35,
              column: 1,
              offset: 2540,
            },
            end: {
              line: 35,
              column: 93,
              offset: 2632,
            },
          },
        },
      ],
      position: {
        start: {
          line: 33,
          column: 1,
          offset: 2393,
        },
        end: {
          line: 35,
          column: 93,
          offset: 2632,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Infinity is and has always been slightly problematic for mathematicians because it's so unintuitive. We literally have ",
          position: {
            start: {
              line: 37,
              column: 1,
              offset: 2634,
            },
            end: {
              line: 37,
              column: 120,
              offset: 2753,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "infinity",
          },
          children: [
            {
              type: "text",
              value: "no intuition about infinity",
              position: {
                start: {
                  line: 37,
                  column: 126,
                  offset: 2759,
                },
                end: {
                  line: 37,
                  column: 153,
                  offset: 2786,
                },
              },
            },
          ],
          position: {
            start: {
              line: 37,
              column: 120,
              offset: 2753,
            },
            end: {
              line: 37,
              column: 169,
              offset: 2802,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 37,
              column: 169,
              offset: 2802,
            },
            end: {
              line: 37,
              column: 170,
              offset: 2803,
            },
          },
        },
      ],
      position: {
        start: {
          line: 37,
          column: 1,
          offset: 2634,
        },
        end: {
          line: 37,
          column: 170,
          offset: 2803,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "And finally, infinity is just a joykill. It's like naming Finchley Station on your first turn of ",
          position: {
            start: {
              line: 39,
              column: 1,
              offset: 2805,
            },
            end: {
              line: 39,
              column: 98,
              offset: 2902,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Finchley_Central_(game)",
          children: [
            {
              type: "text",
              value: "Finchley Station (the game)",
              position: {
                start: {
                  line: 39,
                  column: 99,
                  offset: 2903,
                },
                end: {
                  line: 39,
                  column: 126,
                  offset: 2930,
                },
              },
            },
          ],
          position: {
            start: {
              line: 39,
              column: 98,
              offset: 2902,
            },
            end: {
              line: 39,
              column: 184,
              offset: 2988,
            },
          },
        },
        {
          type: "text",
          value:
            ". Naming big numbers is a beautiful sport, and declaring your number to be the biggest ",
          position: {
            start: {
              line: 39,
              column: 184,
              offset: 2988,
            },
            end: {
              line: 39,
              column: 271,
              offset: 3075,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "by definition",
              position: {
                start: {
                  line: 39,
                  column: 272,
                  offset: 3076,
                },
                end: {
                  line: 39,
                  column: 285,
                  offset: 3089,
                },
              },
            },
          ],
          position: {
            start: {
              line: 39,
              column: 271,
              offset: 3075,
            },
            end: {
              line: 39,
              column: 286,
              offset: 3090,
            },
          },
        },
        {
          type: "text",
          value: " is blatantly anticompetitive.",
          position: {
            start: {
              line: 39,
              column: 286,
              offset: 3090,
            },
            end: {
              line: 39,
              column: 316,
              offset: 3120,
            },
          },
        },
      ],
      position: {
        start: {
          line: 39,
          column: 1,
          offset: 2805,
        },
        end: {
          line: 39,
          column: 316,
          offset: 3120,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "With that out of the way, let's start counting.",
          position: {
            start: {
              line: 41,
              column: 1,
              offset: 3122,
            },
            end: {
              line: 41,
              column: 48,
              offset: 3169,
            },
          },
        },
      ],
      position: {
        start: {
          line: 41,
          column: 1,
          offset: 3122,
        },
        end: {
          line: 41,
          column: 48,
          offset: 3169,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "The Cookie Clicker Principle",
          position: {
            start: {
              line: 43,
              column: 4,
              offset: 3174,
            },
            end: {
              line: 43,
              column: 32,
              offset: 3202,
            },
          },
        },
      ],
      position: {
        start: {
          line: 43,
          column: 1,
          offset: 3171,
        },
        end: {
          line: 43,
          column: 32,
          offset: 3202,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "If you've ever seen a movie where an ambitious protagonist wants to become the greatest {karate master, jedi, boxer}, you know that you don't get a training montage until you go back to basics. So, let's revisit the fundamentals.",
          position: {
            start: {
              line: 45,
              column: 1,
              offset: 3204,
            },
            end: {
              line: 45,
              column: 230,
              offset: 3433,
            },
          },
        },
      ],
      position: {
        start: {
          line: 45,
          column: 1,
          offset: 3204,
        },
        end: {
          line: 45,
          column: 230,
          offset: 3433,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: "Square one.",
          url: "biggest-number/sq-one.png",
          alt: "Square one",
          position: {
            start: {
              line: 47,
              column: 1,
              offset: 3435,
            },
            end: {
              line: 47,
              column: 55,
              offset: 3489,
            },
          },
        },
      ],
      position: {
        start: {
          line: 47,
          column: 1,
          offset: 3435,
        },
        end: {
          line: 47,
          column: 55,
          offset: 3489,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Consider the number ",
          position: {
            start: {
              line: 49,
              column: 1,
              offset: 3491,
            },
            end: {
              line: 49,
              column: 21,
              offset: 3511,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 49,
              column: 21,
              offset: 3511,
            },
            end: {
              line: 49,
              column: 24,
              offset: 3514,
            },
          },
        },
        {
          type: "text",
          value: ". We can add one to that and get ",
          position: {
            start: {
              line: 49,
              column: 24,
              offset: 3514,
            },
            end: {
              line: 49,
              column: 57,
              offset: 3547,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1+1",
          position: {
            start: {
              line: 49,
              column: 57,
              offset: 3547,
            },
            end: {
              line: 49,
              column: 62,
              offset: 3552,
            },
          },
        },
        {
          type: "text",
          value: ", which represents a bigger number (namely, ",
          position: {
            start: {
              line: 49,
              column: 62,
              offset: 3552,
            },
            end: {
              line: 49,
              column: 106,
              offset: 3596,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2",
          position: {
            start: {
              line: 49,
              column: 106,
              offset: 3596,
            },
            end: {
              line: 49,
              column: 109,
              offset: 3599,
            },
          },
        },
        {
          type: "text",
          value: "). Add another one and we get ",
          position: {
            start: {
              line: 49,
              column: 109,
              offset: 3599,
            },
            end: {
              line: 49,
              column: 139,
              offset: 3629,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1+1+1",
          position: {
            start: {
              line: 49,
              column: 139,
              offset: 3629,
            },
            end: {
              line: 49,
              column: 146,
              offset: 3636,
            },
          },
        },
        {
          type: "text",
          value: ", or ",
          position: {
            start: {
              line: 49,
              column: 146,
              offset: 3636,
            },
            end: {
              line: 49,
              column: 151,
              offset: 3641,
            },
          },
        },
        {
          type: "inlineCode",
          value: "3",
          position: {
            start: {
              line: 49,
              column: 151,
              offset: 3641,
            },
            end: {
              line: 49,
              column: 154,
              offset: 3644,
            },
          },
        },
        {
          type: "text",
          value:
            ". We could keep adding one forever, which clues us into the fact that we can ",
          position: {
            start: {
              line: 49,
              column: 154,
              offset: 3644,
            },
            end: {
              line: 49,
              column: 231,
              offset: 3721,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "generalize",
              position: {
                start: {
                  line: 49,
                  column: 232,
                  offset: 3722,
                },
                end: {
                  line: 49,
                  column: 242,
                  offset: 3732,
                },
              },
            },
          ],
          position: {
            start: {
              line: 49,
              column: 231,
              offset: 3721,
            },
            end: {
              line: 49,
              column: 243,
              offset: 3733,
            },
          },
        },
        {
          type: "text",
          value:
            " this process. Instead of adding five ones, or ten ones, or a hundred ones, we can summarize the ",
          position: {
            start: {
              line: 49,
              column: 243,
              offset: 3733,
            },
            end: {
              line: 49,
              column: 340,
              offset: 3830,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "act",
              position: {
                start: {
                  line: 49,
                  column: 341,
                  offset: 3831,
                },
                end: {
                  line: 49,
                  column: 344,
                  offset: 3834,
                },
              },
            },
          ],
          position: {
            start: {
              line: 49,
              column: 340,
              offset: 3830,
            },
            end: {
              line: 49,
              column: 345,
              offset: 3835,
            },
          },
        },
        {
          type: "text",
          value: " of summing ",
          position: {
            start: {
              line: 49,
              column: 345,
              offset: 3835,
            },
            end: {
              line: 49,
              column: 357,
              offset: 3847,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "any number",
              position: {
                start: {
                  line: 49,
                  column: 358,
                  offset: 3848,
                },
                end: {
                  line: 49,
                  column: 368,
                  offset: 3858,
                },
              },
            },
          ],
          position: {
            start: {
              line: 49,
              column: 357,
              offset: 3847,
            },
            end: {
              line: 49,
              column: 369,
              offset: 3859,
            },
          },
        },
        {
          type: "text",
          value:
            ' of ones together. Without any further ado, I\'m pleased to present you with our first "fast"-growing function:',
          position: {
            start: {
              line: 49,
              column: 369,
              offset: 3859,
            },
            end: {
              line: 49,
              column: 479,
              offset: 3969,
            },
          },
        },
      ],
      position: {
        start: {
          line: 49,
          column: 1,
          offset: 3491,
        },
        end: {
          line: 49,
          column: 479,
          offset: 3969,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "f(n) = 1+1+...+1+1 (n times) = n",
      position: {
        start: {
          line: 51,
          column: 1,
          offset: 3971,
        },
        end: {
          line: 53,
          column: 4,
          offset: 4011,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Okay, I know what you're thinking.",
          position: {
            start: {
              line: 55,
              column: 1,
              offset: 4013,
            },
            end: {
              line: 55,
              column: 35,
              offset: 4047,
            },
          },
        },
      ],
      position: {
        start: {
          line: 55,
          column: 1,
          offset: 4013,
        },
        end: {
          line: 55,
          column: 35,
          offset: 4047,
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
                "You really are the world's worst detective. That function literally doesn't do anything.",
              position: {
                start: {
                  line: 57,
                  column: 3,
                  offset: 4051,
                },
                end: {
                  line: 57,
                  column: 91,
                  offset: 4139,
                },
              },
            },
          ],
          position: {
            start: {
              line: 57,
              column: 3,
              offset: 4051,
            },
            end: {
              line: 57,
              column: 91,
              offset: 4139,
            },
          },
        },
      ],
      position: {
        start: {
          line: 57,
          column: 1,
          offset: 4049,
        },
        end: {
          line: 57,
          column: 91,
          offset: 4139,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "While that may be true, I wanted to start here because it illustrates the absolute simplest case of a surprisingly powerful strategy that will come up time and time again. I'll call it the ",
          position: {
            start: {
              line: 59,
              column: 1,
              offset: 4141,
            },
            end: {
              line: 59,
              column: 190,
              offset: 4330,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "text",
              value: "Cookie Clicker Principle",
              position: {
                start: {
                  line: 59,
                  column: 192,
                  offset: 4332,
                },
                end: {
                  line: 59,
                  column: 216,
                  offset: 4356,
                },
              },
            },
          ],
          position: {
            start: {
              line: 59,
              column: 190,
              offset: 4330,
            },
            end: {
              line: 59,
              column: 218,
              offset: 4358,
            },
          },
        },
        {
          type: "text",
          value: ". It goes like this:",
          position: {
            start: {
              line: 59,
              column: 218,
              offset: 4358,
            },
            end: {
              line: 59,
              column: 238,
              offset: 4378,
            },
          },
        },
      ],
      position: {
        start: {
          line: 59,
          column: 1,
          offset: 4141,
        },
        end: {
          line: 59,
          column: 238,
          offset: 4378,
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
                  value: "The Cookie Clicker Principle",
                  position: {
                    start: {
                      line: 61,
                      column: 5,
                      offset: 4384,
                    },
                    end: {
                      line: 61,
                      column: 33,
                      offset: 4412,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 61,
                  column: 3,
                  offset: 4382,
                },
                end: {
                  line: 61,
                  column: 35,
                  offset: 4414,
                },
              },
            },
          ],
          position: {
            start: {
              line: 61,
              column: 3,
              offset: 4382,
            },
            end: {
              line: 61,
              column: 35,
              offset: 4414,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Whenever an operation could be performed an arbitrary number of times, it can be generalized with a parameter. Usually, a new notation is needed.",
              position: {
                start: {
                  line: 63,
                  column: 3,
                  offset: 4419,
                },
                end: {
                  line: 63,
                  column: 148,
                  offset: 4564,
                },
              },
            },
          ],
          position: {
            start: {
              line: 63,
              column: 3,
              offset: 4419,
            },
            end: {
              line: 63,
              column: 148,
              offset: 4564,
            },
          },
        },
      ],
      position: {
        start: {
          line: 61,
          column: 1,
          offset: 4380,
        },
        end: {
          line: 63,
          column: 148,
          offset: 4564,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'If you were on the internet in 2013, you\'ll remember spending anywhere between a few seconds to a few days of your life clicking a cookie. The hook of the game, though, was that you could "power up" by buying upgrades which (among other things) allowed you farm ',
          position: {
            start: {
              line: 65,
              column: 1,
              offset: 4566,
            },
            end: {
              line: 65,
              column: 263,
              offset: 4828,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "more cookies",
              position: {
                start: {
                  line: 65,
                  column: 264,
                  offset: 4829,
                },
                end: {
                  line: 65,
                  column: 276,
                  offset: 4841,
                },
              },
            },
          ],
          position: {
            start: {
              line: 65,
              column: 263,
              offset: 4828,
            },
            end: {
              line: 65,
              column: 277,
              offset: 4842,
            },
          },
        },
        {
          type: "text",
          value:
            " per click. This is roughly our guiding principle in the quest for bigger and bigger numbers.",
          position: {
            start: {
              line: 65,
              column: 277,
              offset: 4842,
            },
            end: {
              line: 65,
              column: 370,
              offset: 4935,
            },
          },
        },
      ],
      position: {
        start: {
          line: 65,
          column: 1,
          offset: 4566,
        },
        end: {
          line: 65,
          column: 370,
          offset: 4935,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "In this case, we noticed that the ",
          position: {
            start: {
              line: 67,
              column: 1,
              offset: 4937,
            },
            end: {
              line: 67,
              column: 35,
              offset: 4971,
            },
          },
        },
        {
          type: "inlineCode",
          value: "+",
          position: {
            start: {
              line: 67,
              column: 35,
              offset: 4971,
            },
            end: {
              line: 67,
              column: 38,
              offset: 4974,
            },
          },
        },
        {
          type: "text",
          value:
            " operation could be performed any number of times, so we generalized the process of repeated addition with a parameter, ",
          position: {
            start: {
              line: 67,
              column: 38,
              offset: 4974,
            },
            end: {
              line: 67,
              column: 158,
              offset: 5094,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 67,
              column: 158,
              offset: 5094,
            },
            end: {
              line: 67,
              column: 161,
              offset: 5097,
            },
          },
        },
        {
          type: "text",
          value:
            '. It just so happens that our "symbol" for repeated addition just ',
          position: {
            start: {
              line: 67,
              column: 161,
              offset: 5097,
            },
            end: {
              line: 67,
              column: 227,
              offset: 5163,
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
                  line: 67,
                  column: 228,
                  offset: 5164,
                },
                end: {
                  line: 67,
                  column: 230,
                  offset: 5166,
                },
              },
            },
          ],
          position: {
            start: {
              line: 67,
              column: 227,
              offset: 5163,
            },
            end: {
              line: 67,
              column: 231,
              offset: 5167,
            },
          },
        },
        {
          type: "text",
          value:
            " the number itself, so it doesn't look very impressive. The next example will be a little more illustrative.",
          position: {
            start: {
              line: 67,
              column: 231,
              offset: 5167,
            },
            end: {
              line: 67,
              column: 339,
              offset: 5275,
            },
          },
        },
      ],
      position: {
        start: {
          line: 67,
          column: 1,
          offset: 4937,
        },
        end: {
          line: 67,
          column: 339,
          offset: 5275,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Repeated addition (multiplication)",
          position: {
            start: {
              line: 69,
              column: 4,
              offset: 5280,
            },
            end: {
              line: 69,
              column: 38,
              offset: 5314,
            },
          },
        },
      ],
      position: {
        start: {
          line: 69,
          column: 1,
          offset: 5277,
        },
        end: {
          line: 69,
          column: 38,
          offset: 5314,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "So, with ",
          position: {
            start: {
              line: 71,
              column: 1,
              offset: 5316,
            },
            end: {
              line: 71,
              column: 10,
              offset: 5325,
            },
          },
        },
        {
          type: "inlineCode",
          value: "f(n) = n",
          position: {
            start: {
              line: 71,
              column: 10,
              offset: 5325,
            },
            end: {
              line: 71,
              column: 20,
              offset: 5335,
            },
          },
        },
        {
          type: "text",
          value:
            ", we might notice that the function only spits out a single copy of ",
          position: {
            start: {
              line: 71,
              column: 20,
              offset: 5335,
            },
            end: {
              line: 71,
              column: 88,
              offset: 5403,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 71,
              column: 88,
              offset: 5403,
            },
            end: {
              line: 71,
              column: 91,
              offset: 5406,
            },
          },
        },
        {
          type: "text",
          value: ". Why not two copies? That would correspond to ",
          position: {
            start: {
              line: 71,
              column: 91,
              offset: 5406,
            },
            end: {
              line: 71,
              column: 138,
              offset: 5453,
            },
          },
        },
        {
          type: "inlineCode",
          value: "f'(n) = 2n",
          position: {
            start: {
              line: 71,
              column: 138,
              offset: 5453,
            },
            end: {
              line: 71,
              column: 150,
              offset: 5465,
            },
          },
        },
        {
          type: "text",
          value: ". What about three copies of ",
          position: {
            start: {
              line: 71,
              column: 150,
              offset: 5465,
            },
            end: {
              line: 71,
              column: 179,
              offset: 5494,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 71,
              column: 179,
              offset: 5494,
            },
            end: {
              line: 71,
              column: 182,
              offset: 5497,
            },
          },
        },
        {
          type: "text",
          value: "? That gets us ",
          position: {
            start: {
              line: 71,
              column: 182,
              offset: 5497,
            },
            end: {
              line: 71,
              column: 197,
              offset: 5512,
            },
          },
        },
        {
          type: "inlineCode",
          value: "f''(n) = 3n",
          position: {
            start: {
              line: 71,
              column: 197,
              offset: 5512,
            },
            end: {
              line: 71,
              column: 210,
              offset: 5525,
            },
          },
        },
        {
          type: "text",
          value: ". Whereas ",
          position: {
            start: {
              line: 71,
              column: 210,
              offset: 5525,
            },
            end: {
              line: 71,
              column: 220,
              offset: 5535,
            },
          },
        },
        {
          type: "inlineCode",
          value: "f(10)",
          position: {
            start: {
              line: 71,
              column: 220,
              offset: 5535,
            },
            end: {
              line: 71,
              column: 227,
              offset: 5542,
            },
          },
        },
        {
          type: "text",
          value: " gave us a measly ",
          position: {
            start: {
              line: 71,
              column: 227,
              offset: 5542,
            },
            end: {
              line: 71,
              column: 245,
              offset: 5560,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10",
          position: {
            start: {
              line: 71,
              column: 245,
              offset: 5560,
            },
            end: {
              line: 71,
              column: 249,
              offset: 5564,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 71,
              column: 249,
              offset: 5564,
            },
            end: {
              line: 71,
              column: 251,
              offset: 5566,
            },
          },
        },
        {
          type: "inlineCode",
          value: "f''(n)",
          position: {
            start: {
              line: 71,
              column: 251,
              offset: 5566,
            },
            end: {
              line: 71,
              column: 259,
              offset: 5574,
            },
          },
        },
        {
          type: "text",
          value: " gets us 30. But of course, we could keep going, with ",
          position: {
            start: {
              line: 71,
              column: 259,
              offset: 5574,
            },
            end: {
              line: 71,
              column: 313,
              offset: 5628,
            },
          },
        },
        {
          type: "inlineCode",
          value: "4n",
          position: {
            start: {
              line: 71,
              column: 313,
              offset: 5628,
            },
            end: {
              line: 71,
              column: 317,
              offset: 5632,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 71,
              column: 317,
              offset: 5632,
            },
            end: {
              line: 71,
              column: 319,
              offset: 5634,
            },
          },
        },
        {
          type: "inlineCode",
          value: "5n",
          position: {
            start: {
              line: 71,
              column: 319,
              offset: 5634,
            },
            end: {
              line: 71,
              column: 323,
              offset: 5638,
            },
          },
        },
        {
          type: "text",
          value: ", and so on.",
          position: {
            start: {
              line: 71,
              column: 323,
              offset: 5638,
            },
            end: {
              line: 71,
              column: 335,
              offset: 5650,
            },
          },
        },
      ],
      position: {
        start: {
          line: 71,
          column: 1,
          offset: 5316,
        },
        end: {
          line: 71,
          column: 335,
          offset: 5650,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "This brings us back to the Cookie Clicker Principle. The number of copies of ",
          position: {
            start: {
              line: 73,
              column: 1,
              offset: 5652,
            },
            end: {
              line: 73,
              column: 78,
              offset: 5729,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 73,
              column: 78,
              offset: 5729,
            },
            end: {
              line: 73,
              column: 81,
              offset: 5732,
            },
          },
        },
        {
          type: "text",
          value:
            " could be increased arbitrarily, so why not generalize that idea? We ",
          position: {
            start: {
              line: 73,
              column: 81,
              offset: 5732,
            },
            end: {
              line: 73,
              column: 150,
              offset: 5801,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "could",
              position: {
                start: {
                  line: 73,
                  column: 151,
                  offset: 5802,
                },
                end: {
                  line: 73,
                  column: 156,
                  offset: 5807,
                },
              },
            },
          ],
          position: {
            start: {
              line: 73,
              column: 150,
              offset: 5801,
            },
            end: {
              line: 73,
              column: 157,
              offset: 5808,
            },
          },
        },
        {
          type: "text",
          value: " use a new variable like ",
          position: {
            start: {
              line: 73,
              column: 157,
              offset: 5808,
            },
            end: {
              line: 73,
              column: 182,
              offset: 5833,
            },
          },
        },
        {
          type: "inlineCode",
          value: "m",
          position: {
            start: {
              line: 73,
              column: 182,
              offset: 5833,
            },
            end: {
              line: 73,
              column: 185,
              offset: 5836,
            },
          },
        },
        {
          type: "text",
          value:
            ", but just to keep things simple, we'll be environmentally friendly and reuse the same ",
          position: {
            start: {
              line: 73,
              column: 185,
              offset: 5836,
            },
            end: {
              line: 73,
              column: 272,
              offset: 5923,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 73,
              column: 272,
              offset: 5923,
            },
            end: {
              line: 73,
              column: 275,
              offset: 5926,
            },
          },
        },
        {
          type: "text",
          value: " to produce our next fast-growing function:",
          position: {
            start: {
              line: 73,
              column: 275,
              offset: 5926,
            },
            end: {
              line: 73,
              column: 318,
              offset: 5969,
            },
          },
        },
      ],
      position: {
        start: {
          line: 73,
          column: 1,
          offset: 5652,
        },
        end: {
          line: 73,
          column: 318,
          offset: 5969,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "g(n) = n+n+...+n+n (n times) = n*n",
      position: {
        start: {
          line: 75,
          column: 1,
          offset: 5971,
        },
        end: {
          line: 77,
          column: 4,
          offset: 6013,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Now, with that same input of ",
          position: {
            start: {
              line: 79,
              column: 1,
              offset: 6015,
            },
            end: {
              line: 79,
              column: 30,
              offset: 6044,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10",
          position: {
            start: {
              line: 79,
              column: 30,
              offset: 6044,
            },
            end: {
              line: 79,
              column: 34,
              offset: 6048,
            },
          },
        },
        {
          type: "text",
          value: ", the ",
          position: {
            start: {
              line: 79,
              column: 34,
              offset: 6048,
            },
            end: {
              line: 79,
              column: 40,
              offset: 6054,
            },
          },
        },
        {
          type: "inlineCode",
          value: "g",
          position: {
            start: {
              line: 79,
              column: 40,
              offset: 6054,
            },
            end: {
              line: 79,
              column: 43,
              offset: 6057,
            },
          },
        },
        {
          type: "text",
          value: " function gives us a crisp ",
          position: {
            start: {
              line: 79,
              column: 43,
              offset: 6057,
            },
            end: {
              line: 79,
              column: 70,
              offset: 6084,
            },
          },
        },
        {
          type: "inlineCode",
          value: "100",
          position: {
            start: {
              line: 79,
              column: 70,
              offset: 6084,
            },
            end: {
              line: 79,
              column: 75,
              offset: 6089,
            },
          },
        },
        {
          type: "text",
          value: ". That's pretty good!",
          position: {
            start: {
              line: 79,
              column: 75,
              offset: 6089,
            },
            end: {
              line: 79,
              column: 96,
              offset: 6110,
            },
          },
        },
      ],
      position: {
        start: {
          line: 79,
          column: 1,
          offset: 6015,
        },
        end: {
          line: 79,
          column: 96,
          offset: 6110,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Repeated multiplication (exponentiaion)",
          position: {
            start: {
              line: 81,
              column: 4,
              offset: 6115,
            },
            end: {
              line: 81,
              column: 43,
              offset: 6154,
            },
          },
        },
      ],
      position: {
        start: {
          line: 81,
          column: 1,
          offset: 6112,
        },
        end: {
          line: 81,
          column: 43,
          offset: 6154,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "But, we notice that we arbitrarily chose to multiply ",
          position: {
            start: {
              line: 83,
              column: 1,
              offset: 6156,
            },
            end: {
              line: 83,
              column: 54,
              offset: 6209,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 83,
              column: 54,
              offset: 6209,
            },
            end: {
              line: 83,
              column: 57,
              offset: 6212,
            },
          },
        },
        {
          type: "text",
          value: " by itself only once. Why not multiply ",
          position: {
            start: {
              line: 83,
              column: 57,
              offset: 6212,
            },
            end: {
              line: 83,
              column: 96,
              offset: 6251,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 83,
              column: 96,
              offset: 6251,
            },
            end: {
              line: 83,
              column: 99,
              offset: 6254,
            },
          },
        },
        {
          type: "text",
          value: " by itself twice? Or three times? That would correspond to ",
          position: {
            start: {
              line: 83,
              column: 99,
              offset: 6254,
            },
            end: {
              line: 83,
              column: 158,
              offset: 6313,
            },
          },
        },
        {
          type: "inlineCode",
          value: "g'(n) = n*n*n",
          position: {
            start: {
              line: 83,
              column: 158,
              offset: 6313,
            },
            end: {
              line: 83,
              column: 173,
              offset: 6328,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 83,
              column: 173,
              offset: 6328,
            },
            end: {
              line: 83,
              column: 175,
              offset: 6330,
            },
          },
        },
        {
          type: "inlineCode",
          value: "g''(n) = n*n*n*n",
          position: {
            start: {
              line: 83,
              column: 175,
              offset: 6330,
            },
            end: {
              line: 83,
              column: 193,
              offset: 6348,
            },
          },
        },
        {
          type: "text",
          value:
            ", etc. Well, well, well, we've walked straight into the Cookie Clicker Principle again. So, let's use a different notation to represent the idea of multiplying ",
          position: {
            start: {
              line: 83,
              column: 193,
              offset: 6348,
            },
            end: {
              line: 83,
              column: 353,
              offset: 6508,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 83,
              column: 353,
              offset: 6508,
            },
            end: {
              line: 83,
              column: 356,
              offset: 6511,
            },
          },
        },
        {
          type: "text",
          value:
            " by itself any number of times. In keeping with the pattern, we'll just reuse the same ",
          position: {
            start: {
              line: 83,
              column: 356,
              offset: 6511,
            },
            end: {
              line: 83,
              column: 443,
              offset: 6598,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 83,
              column: 443,
              offset: 6598,
            },
            end: {
              line: 83,
              column: 446,
              offset: 6601,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 83,
              column: 446,
              offset: 6601,
            },
            end: {
              line: 83,
              column: 447,
              offset: 6602,
            },
          },
        },
      ],
      position: {
        start: {
          line: 83,
          column: 1,
          offset: 6156,
        },
        end: {
          line: 83,
          column: 447,
          offset: 6602,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "h(n) = n*n*...*n*n (n times) = n^n",
      position: {
        start: {
          line: 85,
          column: 1,
          offset: 6604,
        },
        end: {
          line: 87,
          column: 4,
          offset: 6646,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Now we're cooking with gas. While ",
          position: {
            start: {
              line: 89,
              column: 1,
              offset: 6648,
            },
            end: {
              line: 89,
              column: 35,
              offset: 6682,
            },
          },
        },
        {
          type: "inlineCode",
          value: "f(10)",
          position: {
            start: {
              line: 89,
              column: 35,
              offset: 6682,
            },
            end: {
              line: 89,
              column: 42,
              offset: 6689,
            },
          },
        },
        {
          type: "text",
          value: " gave us ",
          position: {
            start: {
              line: 89,
              column: 42,
              offset: 6689,
            },
            end: {
              line: 89,
              column: 51,
              offset: 6698,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10",
          position: {
            start: {
              line: 89,
              column: 51,
              offset: 6698,
            },
            end: {
              line: 89,
              column: 55,
              offset: 6702,
            },
          },
        },
        {
          type: "text",
          value: " and ",
          position: {
            start: {
              line: 89,
              column: 55,
              offset: 6702,
            },
            end: {
              line: 89,
              column: 60,
              offset: 6707,
            },
          },
        },
        {
          type: "inlineCode",
          value: "g(10)",
          position: {
            start: {
              line: 89,
              column: 60,
              offset: 6707,
            },
            end: {
              line: 89,
              column: 67,
              offset: 6714,
            },
          },
        },
        {
          type: "text",
          value: " gave us ",
          position: {
            start: {
              line: 89,
              column: 67,
              offset: 6714,
            },
            end: {
              line: 89,
              column: 76,
              offset: 6723,
            },
          },
        },
        {
          type: "inlineCode",
          value: "100",
          position: {
            start: {
              line: 89,
              column: 76,
              offset: 6723,
            },
            end: {
              line: 89,
              column: 81,
              offset: 6728,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 89,
              column: 81,
              offset: 6728,
            },
            end: {
              line: 89,
              column: 83,
              offset: 6730,
            },
          },
        },
        {
          type: "inlineCode",
          value: "h(10)",
          position: {
            start: {
              line: 89,
              column: 83,
              offset: 6730,
            },
            end: {
              line: 89,
              column: 90,
              offset: 6737,
            },
          },
        },
        {
          type: "text",
          value:
            " gives us ten billion. That's more than the number of people on earth! Not bad at all.",
          position: {
            start: {
              line: 89,
              column: 90,
              offset: 6737,
            },
            end: {
              line: 89,
              column: 176,
              offset: 6823,
            },
          },
        },
      ],
      position: {
        start: {
          line: 89,
          column: 1,
          offset: 6648,
        },
        end: {
          line: 89,
          column: 176,
          offset: 6823,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "To illustrate how fast ",
          position: {
            start: {
              line: 91,
              column: 1,
              offset: 6825,
            },
            end: {
              line: 91,
              column: 24,
              offset: 6848,
            },
          },
        },
        {
          type: "inlineCode",
          value: "h",
          position: {
            start: {
              line: 91,
              column: 24,
              offset: 6848,
            },
            end: {
              line: 91,
              column: 27,
              offset: 6851,
            },
          },
        },
        {
          type: "text",
          value: " grows, consider ",
          position: {
            start: {
              line: 91,
              column: 27,
              offset: 6851,
            },
            end: {
              line: 91,
              column: 44,
              offset: 6868,
            },
          },
        },
        {
          type: "inlineCode",
          value: "h(100)",
          position: {
            start: {
              line: 91,
              column: 44,
              offset: 6868,
            },
            end: {
              line: 91,
              column: 52,
              offset: 6876,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 91,
              column: 52,
              offset: 6876,
            },
            end: {
              line: 91,
              column: 53,
              offset: 6877,
            },
          },
        },
      ],
      position: {
        start: {
          line: 91,
          column: 1,
          offset: 6825,
        },
        end: {
          line: 91,
          column: 53,
          offset: 6877,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "h(100) = 100^100 = (10^2)^100 = 10^200",
      position: {
        start: {
          line: 93,
          column: 1,
          offset: 6879,
        },
        end: {
          line: 95,
          column: 4,
          offset: 6925,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "That's a one followed by two hundred zeroes. To put that in perspective, there's a popular number out there called a ",
          position: {
            start: {
              line: 97,
              column: 1,
              offset: 6927,
            },
            end: {
              line: 97,
              column: 118,
              offset: 7044,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "googol",
          },
          children: [
            {
              type: "text",
              value: "googol",
              position: {
                start: {
                  line: 97,
                  column: 124,
                  offset: 7050,
                },
                end: {
                  line: 97,
                  column: 130,
                  offset: 7056,
                },
              },
            },
          ],
          position: {
            start: {
              line: 97,
              column: 118,
              offset: 7044,
            },
            end: {
              line: 97,
              column: 144,
              offset: 7070,
            },
          },
        },
        {
          type: "text",
          value:
            " which would be written as a one followed by a hundred zeroes. To put that in perspective, there's between ",
          position: {
            start: {
              line: 97,
              column: 144,
              offset: 7070,
            },
            end: {
              line: 97,
              column: 251,
              offset: 7177,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10^78",
          position: {
            start: {
              line: 97,
              column: 251,
              offset: 7177,
            },
            end: {
              line: 97,
              column: 258,
              offset: 7184,
            },
          },
        },
        {
          type: "text",
          value: " and ",
          position: {
            start: {
              line: 97,
              column: 258,
              offset: 7184,
            },
            end: {
              line: 97,
              column: 263,
              offset: 7189,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10^82",
          position: {
            start: {
              line: 97,
              column: 263,
              offset: 7189,
            },
            end: {
              line: 97,
              column: 270,
              offset: 7196,
            },
          },
        },
        {
          type: "text",
          value: " atoms in the observable universe, so a googol is at least ",
          position: {
            start: {
              line: 97,
              column: 270,
              offset: 7196,
            },
            end: {
              line: 97,
              column: 329,
              offset: 7255,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "a billion billion",
              position: {
                start: {
                  line: 97,
                  column: 330,
                  offset: 7256,
                },
                end: {
                  line: 97,
                  column: 347,
                  offset: 7273,
                },
              },
            },
          ],
          position: {
            start: {
              line: 97,
              column: 329,
              offset: 7255,
            },
            end: {
              line: 97,
              column: 348,
              offset: 7274,
            },
          },
        },
        {
          type: "text",
          value: " observable universes' worth of atoms. Our ",
          position: {
            start: {
              line: 97,
              column: 348,
              offset: 7274,
            },
            end: {
              line: 97,
              column: 391,
              offset: 7317,
            },
          },
        },
        {
          type: "inlineCode",
          value: "h(100)",
          position: {
            start: {
              line: 97,
              column: 391,
              offset: 7317,
            },
            end: {
              line: 97,
              column: 399,
              offset: 7325,
            },
          },
        },
        {
          type: "text",
          value: ", on the other hand, is worth a ",
          position: {
            start: {
              line: 97,
              column: 399,
              offset: 7325,
            },
            end: {
              line: 97,
              column: 431,
              offset: 7357,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "googol",
              position: {
                start: {
                  line: 97,
                  column: 432,
                  offset: 7358,
                },
                end: {
                  line: 97,
                  column: 438,
                  offset: 7364,
                },
              },
            },
          ],
          position: {
            start: {
              line: 97,
              column: 431,
              offset: 7357,
            },
            end: {
              line: 97,
              column: 439,
              offset: 7365,
            },
          },
        },
        {
          type: "text",
          value: " googols. That's pretty big.",
          position: {
            start: {
              line: 97,
              column: 439,
              offset: 7365,
            },
            end: {
              line: 97,
              column: 467,
              offset: 7393,
            },
          },
        },
      ],
      position: {
        start: {
          line: 97,
          column: 1,
          offset: 6927,
        },
        end: {
          line: 97,
          column: 467,
          offset: 7393,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Repeated exponentiation (Knuth's up-arrows)",
          position: {
            start: {
              line: 99,
              column: 4,
              offset: 7398,
            },
            end: {
              line: 99,
              column: 47,
              offset: 7441,
            },
          },
        },
      ],
      position: {
        start: {
          line: 99,
          column: 1,
          offset: 7395,
        },
        end: {
          line: 99,
          column: 47,
          offset: 7441,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "biggest-number/power-stack.png",
          alt: "A stack of exponents",
          position: {
            start: {
              line: 101,
              column: 1,
              offset: 7443,
            },
            end: {
              line: 101,
              column: 56,
              offset: 7498,
            },
          },
        },
      ],
      position: {
        start: {
          line: 101,
          column: 1,
          offset: 7443,
        },
        end: {
          line: 101,
          column: 56,
          offset: 7498,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But will we stop there? Absolutely not. In the grand scheme of things, what's two hundred zeroes? It's nothing. We notice that we only raised ",
          position: {
            start: {
              line: 103,
              column: 1,
              offset: 7500,
            },
            end: {
              line: 103,
              column: 143,
              offset: 7642,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 103,
              column: 143,
              offset: 7642,
            },
            end: {
              line: 103,
              column: 146,
              offset: 7645,
            },
          },
        },
        {
          type: "text",
          value: " to the power of itself once. Why not raise ",
          position: {
            start: {
              line: 103,
              column: 146,
              offset: 7645,
            },
            end: {
              line: 103,
              column: 190,
              offset: 7689,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 103,
              column: 190,
              offset: 7689,
            },
            end: {
              line: 103,
              column: 193,
              offset: 7692,
            },
          },
        },
        {
          type: "text",
          value: " to the power of ",
          position: {
            start: {
              line: 103,
              column: 193,
              offset: 7692,
            },
            end: {
              line: 103,
              column: 210,
              offset: 7709,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 103,
              column: 210,
              offset: 7709,
            },
            end: {
              line: 103,
              column: 213,
              offset: 7712,
            },
          },
        },
        {
          type: "text",
          value: ", and then raise ",
          position: {
            start: {
              line: 103,
              column: 213,
              offset: 7712,
            },
            end: {
              line: 103,
              column: 230,
              offset: 7729,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 103,
              column: 230,
              offset: 7729,
            },
            end: {
              line: 103,
              column: 233,
              offset: 7732,
            },
          },
        },
        {
          type: "text",
          value: " to ",
          position: {
            start: {
              line: 103,
              column: 233,
              offset: 7732,
            },
            end: {
              line: 103,
              column: 237,
              offset: 7736,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "that",
              position: {
                start: {
                  line: 103,
                  column: 238,
                  offset: 7737,
                },
                end: {
                  line: 103,
                  column: 242,
                  offset: 7741,
                },
              },
            },
          ],
          position: {
            start: {
              line: 103,
              column: 237,
              offset: 7736,
            },
            end: {
              line: 103,
              column: 243,
              offset: 7742,
            },
          },
        },
        {
          type: "text",
          value: " power? Or how about a stack of 4 ",
          position: {
            start: {
              line: 103,
              column: 243,
              offset: 7742,
            },
            end: {
              line: 103,
              column: 277,
              offset: 7776,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 103,
              column: 277,
              offset: 7776,
            },
            end: {
              line: 103,
              column: 280,
              offset: 7779,
            },
          },
        },
        {
          type: "text",
          value: "s? Or 5? Once again, the Cookie Clicker Principle applies.",
          position: {
            start: {
              line: 103,
              column: 280,
              offset: 7779,
            },
            end: {
              line: 103,
              column: 338,
              offset: 7837,
            },
          },
        },
      ],
      position: {
        start: {
          line: 103,
          column: 1,
          offset: 7500,
        },
        end: {
          line: 103,
          column: 338,
          offset: 7837,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Computer pioneer and ",
          position: {
            start: {
              line: 105,
              column: 1,
              offset: 7839,
            },
            end: {
              line: 105,
              column: 22,
              offset: 7860,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/TeX",
          children: [
            {
              type: "text",
              value: "TeX",
              position: {
                start: {
                  line: 105,
                  column: 23,
                  offset: 7861,
                },
                end: {
                  line: 105,
                  column: 26,
                  offset: 7864,
                },
              },
            },
          ],
          position: {
            start: {
              line: 105,
              column: 22,
              offset: 7860,
            },
            end: {
              line: 105,
              column: 62,
              offset: 7900,
            },
          },
        },
        {
          type: "text",
          value: " inventor ",
          position: {
            start: {
              line: 105,
              column: 62,
              offset: 7900,
            },
            end: {
              line: 105,
              column: 72,
              offset: 7910,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Donald_Knuth",
          children: [
            {
              type: "text",
              value: "Donald E. Knuth",
              position: {
                start: {
                  line: 105,
                  column: 73,
                  offset: 7911,
                },
                end: {
                  line: 105,
                  column: 88,
                  offset: 7926,
                },
              },
            },
          ],
          position: {
            start: {
              line: 105,
              column: 72,
              offset: 7910,
            },
            end: {
              line: 105,
              column: 133,
              offset: 7971,
            },
          },
        },
        {
          type: "text",
          value:
            " saw what was going on here, and in the '70s he came up with a new notation to generalize all of this generalization. It's called \"",
          position: {
            start: {
              line: 105,
              column: 133,
              offset: 7971,
            },
            end: {
              line: 105,
              column: 264,
              offset: 8102,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation",
          children: [
            {
              type: "text",
              value: "up-arrow notation",
              position: {
                start: {
                  line: 105,
                  column: 265,
                  offset: 8103,
                },
                end: {
                  line: 105,
                  column: 282,
                  offset: 8120,
                },
              },
            },
          ],
          position: {
            start: {
              line: 105,
              column: 264,
              offset: 8102,
            },
            end: {
              line: 105,
              column: 342,
              offset: 8180,
            },
          },
        },
        {
          type: "text",
          value: "\", and it's pretty powerful. Here's how it works:",
          position: {
            start: {
              line: 105,
              column: 342,
              offset: 8180,
            },
            end: {
              line: 105,
              column: 391,
              offset: 8229,
            },
          },
        },
      ],
      position: {
        start: {
          line: 105,
          column: 1,
          offset: 7839,
        },
        end: {
          line: 105,
          column: 391,
          offset: 8229,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "One arrow (",
          position: {
            start: {
              line: 107,
              column: 1,
              offset: 8231,
            },
            end: {
              line: 107,
              column: 12,
              offset: 8242,
            },
          },
        },
        {
          type: "inlineCode",
          value: "↑",
          position: {
            start: {
              line: 107,
              column: 12,
              offset: 8242,
            },
            end: {
              line: 107,
              column: 15,
              offset: 8245,
            },
          },
        },
        {
          type: "text",
          value: ") means repeated multiplication, a.k.a. exponentiation. So ",
          position: {
            start: {
              line: 107,
              column: 15,
              offset: 8245,
            },
            end: {
              line: 107,
              column: 74,
              offset: 8304,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2↑3",
          position: {
            start: {
              line: 107,
              column: 74,
              offset: 8304,
            },
            end: {
              line: 107,
              column: 79,
              offset: 8309,
            },
          },
        },
        {
          type: "text",
          value:
            ' means "multiply together three copies of two" which becomes ',
          position: {
            start: {
              line: 107,
              column: 79,
              offset: 8309,
            },
            end: {
              line: 107,
              column: 140,
              offset: 8370,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2*2*2 = 2^3 = 8",
          position: {
            start: {
              line: 107,
              column: 140,
              offset: 8370,
            },
            end: {
              line: 107,
              column: 157,
              offset: 8387,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 107,
              column: 157,
              offset: 8387,
            },
            end: {
              line: 107,
              column: 158,
              offset: 8388,
            },
          },
        },
      ],
      position: {
        start: {
          line: 107,
          column: 1,
          offset: 8231,
        },
        end: {
          line: 107,
          column: 158,
          offset: 8388,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Two arrows (",
          position: {
            start: {
              line: 109,
              column: 1,
              offset: 8390,
            },
            end: {
              line: 109,
              column: 13,
              offset: 8402,
            },
          },
        },
        {
          type: "inlineCode",
          value: "↑↑",
          position: {
            start: {
              line: 109,
              column: 13,
              offset: 8402,
            },
            end: {
              line: 109,
              column: 17,
              offset: 8406,
            },
          },
        },
        {
          type: "text",
          value: ") means repeated ",
          position: {
            start: {
              line: 109,
              column: 17,
              offset: 8406,
            },
            end: {
              line: 109,
              column: 34,
              offset: 8423,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "exponentiation",
              position: {
                start: {
                  line: 109,
                  column: 35,
                  offset: 8424,
                },
                end: {
                  line: 109,
                  column: 49,
                  offset: 8438,
                },
              },
            },
          ],
          position: {
            start: {
              line: 109,
              column: 34,
              offset: 8423,
            },
            end: {
              line: 109,
              column: 50,
              offset: 8439,
            },
          },
        },
        {
          type: "text",
          value: ". So, ",
          position: {
            start: {
              line: 109,
              column: 50,
              offset: 8439,
            },
            end: {
              line: 109,
              column: 56,
              offset: 8445,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2↑↑3",
          position: {
            start: {
              line: 109,
              column: 56,
              offset: 8445,
            },
            end: {
              line: 109,
              column: 62,
              offset: 8451,
            },
          },
        },
        {
          type: "text",
          value: " would represent ",
          position: {
            start: {
              line: 109,
              column: 62,
              offset: 8451,
            },
            end: {
              line: 109,
              column: 79,
              offset: 8468,
            },
          },
        },
        {
          type: "inlineCode",
          value: "(2^(2^2))",
          position: {
            start: {
              line: 109,
              column: 79,
              offset: 8468,
            },
            end: {
              line: 109,
              column: 90,
              offset: 8479,
            },
          },
        },
        {
          type: "text",
          value: ", which is ",
          position: {
            start: {
              line: 109,
              column: 90,
              offset: 8479,
            },
            end: {
              line: 109,
              column: 101,
              offset: 8490,
            },
          },
        },
        {
          type: "inlineCode",
          value: "16",
          position: {
            start: {
              line: 109,
              column: 101,
              offset: 8490,
            },
            end: {
              line: 109,
              column: 105,
              offset: 8494,
            },
          },
        },
        {
          type: "text",
          value:
            '. The cute name for a stack of exponents like that is a "power tower".',
          position: {
            start: {
              line: 109,
              column: 105,
              offset: 8494,
            },
            end: {
              line: 109,
              column: 175,
              offset: 8564,
            },
          },
        },
      ],
      position: {
        start: {
          line: 109,
          column: 1,
          offset: 8390,
        },
        end: {
          line: 109,
          column: 175,
          offset: 8564,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Keeping with the pattern, ",
          position: {
            start: {
              line: 111,
              column: 1,
              offset: 8566,
            },
            end: {
              line: 111,
              column: 27,
              offset: 8592,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "three",
              position: {
                start: {
                  line: 111,
                  column: 28,
                  offset: 8593,
                },
                end: {
                  line: 111,
                  column: 33,
                  offset: 8598,
                },
              },
            },
          ],
          position: {
            start: {
              line: 111,
              column: 27,
              offset: 8592,
            },
            end: {
              line: 111,
              column: 34,
              offset: 8599,
            },
          },
        },
        {
          type: "text",
          value: " arrows means repeated double-arrowing, so ",
          position: {
            start: {
              line: 111,
              column: 34,
              offset: 8599,
            },
            end: {
              line: 111,
              column: 77,
              offset: 8642,
            },
          },
        },
        {
          type: "inlineCode",
          value: "2↑↑↑3",
          position: {
            start: {
              line: 111,
              column: 77,
              offset: 8642,
            },
            end: {
              line: 111,
              column: 84,
              offset: 8649,
            },
          },
        },
        {
          type: "text",
          value: " means:",
          position: {
            start: {
              line: 111,
              column: 84,
              offset: 8649,
            },
            end: {
              line: 111,
              column: 91,
              offset: 8656,
            },
          },
        },
      ],
      position: {
        start: {
          line: 111,
          column: 1,
          offset: 8566,
        },
        end: {
          line: 111,
          column: 91,
          offset: 8656,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "2↑↑(2↑↑2) = 2↑↑(2^2) = 2↑↑4 = 2^(2^(2^2)) = 2^16 = 65,536",
      position: {
        start: {
          line: 113,
          column: 1,
          offset: 8658,
        },
        end: {
          line: 115,
          column: 4,
          offset: 8723,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "And so on.",
          position: {
            start: {
              line: 117,
              column: 1,
              offset: 8725,
            },
            end: {
              line: 117,
              column: 11,
              offset: 8735,
            },
          },
        },
      ],
      position: {
        start: {
          line: 117,
          column: 1,
          offset: 8725,
        },
        end: {
          line: 117,
          column: 11,
          offset: 8735,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I intentionally picked small numbers so that the results are manageable, but these examples don't give a sense of how ",
          position: {
            start: {
              line: 119,
              column: 1,
              offset: 8737,
            },
            end: {
              line: 119,
              column: 119,
              offset: 8855,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "insanely powerful",
              position: {
                start: {
                  line: 119,
                  column: 120,
                  offset: 8856,
                },
                end: {
                  line: 119,
                  column: 137,
                  offset: 8873,
                },
              },
            },
          ],
          position: {
            start: {
              line: 119,
              column: 119,
              offset: 8855,
            },
            end: {
              line: 119,
              column: 138,
              offset: 8874,
            },
          },
        },
        {
          type: "text",
          value:
            " the up-arrow notation is for expressing big numbers. Let's define ",
          position: {
            start: {
              line: 119,
              column: 138,
              offset: 8874,
            },
            end: {
              line: 119,
              column: 205,
              offset: 8941,
            },
          },
        },
        {
          type: "inlineCode",
          value: "j(n) = n↑↑n",
          position: {
            start: {
              line: 119,
              column: 205,
              offset: 8941,
            },
            end: {
              line: 119,
              column: 218,
              offset: 8954,
            },
          },
        },
        {
          type: "text",
          value: " and consider ",
          position: {
            start: {
              line: 119,
              column: 218,
              offset: 8954,
            },
            end: {
              line: 119,
              column: 232,
              offset: 8968,
            },
          },
        },
        {
          type: "inlineCode",
          value: "j(10)",
          position: {
            start: {
              line: 119,
              column: 232,
              offset: 8968,
            },
            end: {
              line: 119,
              column: 239,
              offset: 8975,
            },
          },
        },
        {
          type: "text",
          value: ". This would correspond to a power tower ten ",
          position: {
            start: {
              line: 119,
              column: 239,
              offset: 8975,
            },
            end: {
              line: 119,
              column: 284,
              offset: 9020,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10",
          position: {
            start: {
              line: 119,
              column: 284,
              offset: 9020,
            },
            end: {
              line: 119,
              column: 288,
              offset: 9024,
            },
          },
        },
        {
          type: "text",
          value: "s tall. It's hard to even find a way to ",
          position: {
            start: {
              line: 119,
              column: 288,
              offset: 9024,
            },
            end: {
              line: 119,
              column: 328,
              offset: 9064,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "describe",
              position: {
                start: {
                  line: 119,
                  column: 329,
                  offset: 9065,
                },
                end: {
                  line: 119,
                  column: 337,
                  offset: 9073,
                },
              },
            },
          ],
          position: {
            start: {
              line: 119,
              column: 328,
              offset: 9064,
            },
            end: {
              line: 119,
              column: 338,
              offset: 9074,
            },
          },
        },
        {
          type: "text",
          value:
            " how big that number is. We could say it's a one followed by ",
          position: {
            start: {
              line: 119,
              column: 338,
              offset: 9074,
            },
            end: {
              line: 119,
              column: 399,
              offset: 9135,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10↑↑9",
          position: {
            start: {
              line: 119,
              column: 399,
              offset: 9135,
            },
            end: {
              line: 119,
              column: 406,
              offset: 9142,
            },
          },
        },
        {
          type: "text",
          value:
            " zeroes, but that's not very helpful. We could alternatively take a stab at the top part of the stack: ",
          position: {
            start: {
              line: 119,
              column: 406,
              offset: 9142,
            },
            end: {
              line: 119,
              column: 509,
              offset: 9245,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10↑↑4",
          position: {
            start: {
              line: 119,
              column: 509,
              offset: 9245,
            },
            end: {
              line: 119,
              column: 516,
              offset: 9252,
            },
          },
        },
        {
          type: "text",
          value:
            " is a one followed by a hundred million googol zeroes. If you think you can picture that, you can't. There's little point in trying to put the ",
          position: {
            start: {
              line: 119,
              column: 516,
              offset: 9252,
            },
            end: {
              line: 119,
              column: 659,
              offset: 9395,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "whole",
              position: {
                start: {
                  line: 119,
                  column: 660,
                  offset: 9396,
                },
                end: {
                  line: 119,
                  column: 665,
                  offset: 9401,
                },
              },
            },
          ],
          position: {
            start: {
              line: 119,
              column: 659,
              offset: 9395,
            },
            end: {
              line: 119,
              column: 666,
              offset: 9402,
            },
          },
        },
        {
          type: "text",
          value:
            " number into perspective, because it's so much bigger that than we could ever fathom. And that's just with ",
          position: {
            start: {
              line: 119,
              column: 666,
              offset: 9402,
            },
            end: {
              line: 119,
              column: 773,
              offset: 9509,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "two arrows",
              position: {
                start: {
                  line: 119,
                  column: 774,
                  offset: 9510,
                },
                end: {
                  line: 119,
                  column: 784,
                  offset: 9520,
                },
              },
            },
          ],
          position: {
            start: {
              line: 119,
              column: 773,
              offset: 9509,
            },
            end: {
              line: 119,
              column: 785,
              offset: 9521,
            },
          },
        },
        {
          type: "text",
          value:
            ". What if we had used three? Or four? Or five? Wait a second...",
          position: {
            start: {
              line: 119,
              column: 785,
              offset: 9521,
            },
            end: {
              line: 119,
              column: 848,
              offset: 9584,
            },
          },
        },
      ],
      position: {
        start: {
          line: 119,
          column: 1,
          offset: 8737,
        },
        end: {
          line: 119,
          column: 848,
          offset: 9584,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Just when we thought we had generalized the whole thing, from repeated multiplication to repeated exponentiation to repeated ",
          position: {
            start: {
              line: 121,
              column: 1,
              offset: 9586,
            },
            end: {
              line: 121,
              column: 126,
              offset: 9711,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "repeated",
              position: {
                start: {
                  line: 121,
                  column: 127,
                  offset: 9712,
                },
                end: {
                  line: 121,
                  column: 135,
                  offset: 9720,
                },
              },
            },
          ],
          position: {
            start: {
              line: 121,
              column: 126,
              offset: 9711,
            },
            end: {
              line: 121,
              column: 136,
              offset: 9721,
            },
          },
        },
        {
          type: "text",
          value:
            " exponentiation, and so on, the Cookie Clicker Principle reappears!",
          position: {
            start: {
              line: 121,
              column: 136,
              offset: 9721,
            },
            end: {
              line: 121,
              column: 203,
              offset: 9788,
            },
          },
        },
      ],
      position: {
        start: {
          line: 121,
          column: 1,
          offset: 9586,
        },
        end: {
          line: 121,
          column: 203,
          offset: 9788,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'To "automate" the process of up-arrowing, we can use a shorthand to express how ',
          position: {
            start: {
              line: 123,
              column: 1,
              offset: 9790,
            },
            end: {
              line: 123,
              column: 81,
              offset: 9870,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "many",
              position: {
                start: {
                  line: 123,
                  column: 82,
                  offset: 9871,
                },
                end: {
                  line: 123,
                  column: 86,
                  offset: 9875,
                },
              },
            },
          ],
          position: {
            start: {
              line: 123,
              column: 81,
              offset: 9870,
            },
            end: {
              line: 123,
              column: 87,
              offset: 9876,
            },
          },
        },
        {
          type: "text",
          value: " arrows there are, like ",
          position: {
            start: {
              line: 123,
              column: 87,
              offset: 9876,
            },
            end: {
              line: 123,
              column: 111,
              offset: 9900,
            },
          },
        },
        {
          type: "inlineCode",
          value: "(↑^4)",
          position: {
            start: {
              line: 123,
              column: 111,
              offset: 9900,
            },
            end: {
              line: 123,
              column: 118,
              offset: 9907,
            },
          },
        },
        {
          type: "text",
          value:
            ' to represent four up-arrows. Instead of "hard-coding" a specific number of up-arrows, we can "pull it out" as a parameter, just like all the previous times. This would give us our next fast-growing function:',
          position: {
            start: {
              line: 123,
              column: 118,
              offset: 9907,
            },
            end: {
              line: 123,
              column: 326,
              offset: 10115,
            },
          },
        },
      ],
      position: {
        start: {
          line: 123,
          column: 1,
          offset: 9790,
        },
        end: {
          line: 123,
          column: 326,
          offset: 10115,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "k(n) = n(↑^n)n",
      position: {
        start: {
          line: 125,
          column: 1,
          offset: 10117,
        },
        end: {
          line: 127,
          column: 4,
          offset: 10139,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "It goes without saying, but if you thought ",
          position: {
            start: {
              line: 129,
              column: 1,
              offset: 10141,
            },
            end: {
              line: 129,
              column: 44,
              offset: 10184,
            },
          },
        },
        {
          type: "inlineCode",
          value: "j(10)",
          position: {
            start: {
              line: 129,
              column: 44,
              offset: 10184,
            },
            end: {
              line: 129,
              column: 51,
              offset: 10191,
            },
          },
        },
        {
          type: "text",
          value: " was big, consider ",
          position: {
            start: {
              line: 129,
              column: 51,
              offset: 10191,
            },
            end: {
              line: 129,
              column: 70,
              offset: 10210,
            },
          },
        },
        {
          type: "inlineCode",
          value: "k(10)",
          position: {
            start: {
              line: 129,
              column: 70,
              offset: 10210,
            },
            end: {
              line: 129,
              column: 77,
              offset: 10217,
            },
          },
        },
        {
          type: "text",
          value: ": ",
          position: {
            start: {
              line: 129,
              column: 77,
              offset: 10217,
            },
            end: {
              line: 129,
              column: 79,
              offset: 10219,
            },
          },
        },
        {
          type: "inlineCode",
          value: "10↑↑↑↑↑↑↑↑↑↑10",
          position: {
            start: {
              line: 129,
              column: 79,
              offset: 10219,
            },
            end: {
              line: 129,
              column: 95,
              offset: 10235,
            },
          },
        },
        {
          type: "text",
          value:
            ". At this point, I've basically run out of interesting commentary to give for numbers this big. It's just, like, ",
          position: {
            start: {
              line: 129,
              column: 95,
              offset: 10235,
            },
            end: {
              line: 129,
              column: 208,
              offset: 10348,
            },
          },
        },
        {
          type: "strong",
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "big",
                  position: {
                    start: {
                      line: 129,
                      column: 211,
                      offset: 10351,
                    },
                    end: {
                      line: 129,
                      column: 214,
                      offset: 10354,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 129,
                  column: 210,
                  offset: 10350,
                },
                end: {
                  line: 129,
                  column: 215,
                  offset: 10355,
                },
              },
            },
          ],
          position: {
            start: {
              line: 129,
              column: 208,
              offset: 10348,
            },
            end: {
              line: 129,
              column: 217,
              offset: 10357,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 129,
              column: 217,
              offset: 10357,
            },
            end: {
              line: 129,
              column: 218,
              offset: 10358,
            },
          },
        },
      ],
      position: {
        start: {
          line: 129,
          column: 1,
          offset: 10141,
        },
        end: {
          line: 129,
          column: 218,
          offset: 10358,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "You may have lost your appetite, but there's still more to come.",
          position: {
            start: {
              line: 131,
              column: 1,
              offset: 10360,
            },
            end: {
              line: 131,
              column: 65,
              offset: 10424,
            },
          },
        },
      ],
      position: {
        start: {
          line: 131,
          column: 1,
          offset: 10360,
        },
        end: {
          line: 131,
          column: 65,
          offset: 10424,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Hyperoperation",
          position: {
            start: {
              line: 133,
              column: 4,
              offset: 10429,
            },
            end: {
              line: 133,
              column: 18,
              offset: 10443,
            },
          },
        },
      ],
      position: {
        start: {
          line: 133,
          column: 1,
          offset: 10426,
        },
        end: {
          line: 133,
          column: 18,
          offset: 10443,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "By now, you should be convinced that there is ",
          position: {
            start: {
              line: 135,
              column: 1,
              offset: 10445,
            },
            end: {
              line: 135,
              column: 47,
              offset: 10491,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "no limit",
              position: {
                start: {
                  line: 135,
                  column: 48,
                  offset: 10492,
                },
                end: {
                  line: 135,
                  column: 56,
                  offset: 10500,
                },
              },
            },
          ],
          position: {
            start: {
              line: 135,
              column: 47,
              offset: 10491,
            },
            end: {
              line: 135,
              column: 57,
              offset: 10501,
            },
          },
        },
        {
          type: "text",
          value:
            " to how fast we can make a function grow. Each time we come up with a new operator to generalize the act of applying a previous operator, we can always generalize the number of times that the ",
          position: {
            start: {
              line: 135,
              column: 57,
              offset: 10501,
            },
            end: {
              line: 135,
              column: 249,
              offset: 10693,
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
                  line: 135,
                  column: 250,
                  offset: 10694,
                },
                end: {
                  line: 135,
                  column: 253,
                  offset: 10697,
                },
              },
            },
          ],
          position: {
            start: {
              line: 135,
              column: 249,
              offset: 10693,
            },
            end: {
              line: 135,
              column: 254,
              offset: 10698,
            },
          },
        },
        {
          type: "text",
          value: " operator is applied.",
          position: {
            start: {
              line: 135,
              column: 254,
              offset: 10698,
            },
            end: {
              line: 135,
              column: 275,
              offset: 10719,
            },
          },
        },
      ],
      position: {
        start: {
          line: 135,
          column: 1,
          offset: 10445,
        },
        end: {
          line: 135,
          column: 275,
          offset: 10719,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Mathematicians have devised many, many notations to describe functions that grow unspeakably faster than ",
          position: {
            start: {
              line: 137,
              column: 1,
              offset: 10721,
            },
            end: {
              line: 137,
              column: 106,
              offset: 10826,
            },
          },
        },
        {
          type: "inlineCode",
          value: "k",
          position: {
            start: {
              line: 137,
              column: 106,
              offset: 10826,
            },
            end: {
              line: 137,
              column: 109,
              offset: 10829,
            },
          },
        },
        {
          type: "text",
          value: ". One example is ",
          position: {
            start: {
              line: 137,
              column: 109,
              offset: 10829,
            },
            end: {
              line: 137,
              column: 126,
              offset: 10846,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/John_Horton_Conway",
          children: [
            {
              type: "text",
              value: "Conway",
              position: {
                start: {
                  line: 137,
                  column: 127,
                  offset: 10847,
                },
                end: {
                  line: 137,
                  column: 133,
                  offset: 10853,
                },
              },
            },
          ],
          position: {
            start: {
              line: 137,
              column: 126,
              offset: 10846,
            },
            end: {
              line: 137,
              column: 184,
              offset: 10904,
            },
          },
        },
        {
          type: "text",
          value:
            "'s chained-arrow notation. Without getting into the weeds of it, in the chained-arrow notation, ",
          position: {
            start: {
              line: 137,
              column: 184,
              offset: 10904,
            },
            end: {
              line: 137,
              column: 280,
              offset: 11000,
            },
          },
        },
        {
          type: "inlineCode",
          value: "a→b",
          position: {
            start: {
              line: 137,
              column: 280,
              offset: 11000,
            },
            end: {
              line: 137,
              column: 285,
              offset: 11005,
            },
          },
        },
        {
          type: "text",
          value: " corresponds to regular exponentiation, ",
          position: {
            start: {
              line: 137,
              column: 285,
              offset: 11005,
            },
            end: {
              line: 137,
              column: 325,
              offset: 11045,
            },
          },
        },
        {
          type: "inlineCode",
          value: "a→b→n",
          position: {
            start: {
              line: 137,
              column: 325,
              offset: 11045,
            },
            end: {
              line: 137,
              column: 332,
              offset: 11052,
            },
          },
        },
        {
          type: "text",
          value: " corresponds to ",
          position: {
            start: {
              line: 137,
              column: 332,
              offset: 11052,
            },
            end: {
              line: 137,
              column: 348,
              offset: 11068,
            },
          },
        },
        {
          type: "inlineCode",
          value: "a(↑^n)b",
          position: {
            start: {
              line: 137,
              column: 348,
              offset: 11068,
            },
            end: {
              line: 137,
              column: 357,
              offset: 11077,
            },
          },
        },
        {
          type: "text",
          value:
            ", and a chain of four arrows or more is... just crazy. I won't give a full definition since it's not easy to summarize, but feel free to check out the definition on ",
          position: {
            start: {
              line: 137,
              column: 357,
              offset: 11077,
            },
            end: {
              line: 137,
              column: 522,
              offset: 11242,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Conway_chained_arrow_notation",
          children: [
            {
              type: "text",
              value: "Wikipedia",
              position: {
                start: {
                  line: 137,
                  column: 523,
                  offset: 11243,
                },
                end: {
                  line: 137,
                  column: 532,
                  offset: 11252,
                },
              },
            },
          ],
          position: {
            start: {
              line: 137,
              column: 522,
              offset: 11242,
            },
            end: {
              line: 137,
              column: 594,
              offset: 11314,
            },
          },
        },
        {
          type: "text",
          value: " if you're curious.",
          position: {
            start: {
              line: 137,
              column: 594,
              offset: 11314,
            },
            end: {
              line: 137,
              column: 613,
              offset: 11333,
            },
          },
        },
      ],
      position: {
        start: {
          line: 137,
          column: 1,
          offset: 10721,
        },
        end: {
          line: 137,
          column: 613,
          offset: 11333,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We can generalize the up-arrow function in a different way, where the number of up-arrows is calculated recursively:",
          position: {
            start: {
              line: 139,
              column: 1,
              offset: 11335,
            },
            end: {
              line: 139,
              column: 117,
              offset: 11451,
            },
          },
        },
      ],
      position: {
        start: {
          line: 139,
          column: 1,
          offset: 11335,
        },
        end: {
          line: 139,
          column: 117,
          offset: 11451,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "m(n) = 3↑↑↑↑3 if n = 1, else 3(↑^m(n-1))3",
      position: {
        start: {
          line: 141,
          column: 1,
          offset: 11453,
        },
        end: {
          line: 143,
          column: 4,
          offset: 11502,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "To put that into words: ",
          position: {
            start: {
              line: 145,
              column: 1,
              offset: 11504,
            },
            end: {
              line: 145,
              column: 25,
              offset: 11528,
            },
          },
        },
        {
          type: "inlineCode",
          value: "m(1)",
          position: {
            start: {
              line: 145,
              column: 25,
              offset: 11528,
            },
            end: {
              line: 145,
              column: 31,
              offset: 11534,
            },
          },
        },
        {
          type: "text",
          value: " is already incomprehensibly, inexplicably large. ",
          position: {
            start: {
              line: 145,
              column: 31,
              offset: 11534,
            },
            end: {
              line: 145,
              column: 81,
              offset: 11584,
            },
          },
        },
        {
          type: "inlineCode",
          value: "m(2)",
          position: {
            start: {
              line: 145,
              column: 81,
              offset: 11584,
            },
            end: {
              line: 145,
              column: 87,
              offset: 11590,
            },
          },
        },
        {
          type: "text",
          value: " goes ahead and sticks ",
          position: {
            start: {
              line: 145,
              column: 87,
              offset: 11590,
            },
            end: {
              line: 145,
              column: 110,
              offset: 11613,
            },
          },
        },
        {
          type: "inlineCode",
          value: "m(1)",
          position: {
            start: {
              line: 145,
              column: 110,
              offset: 11613,
            },
            end: {
              line: 145,
              column: 116,
              offset: 11619,
            },
          },
        },
        {
          type: "text",
          value: " up-arrows between the ",
          position: {
            start: {
              line: 145,
              column: 116,
              offset: 11619,
            },
            end: {
              line: 145,
              column: 139,
              offset: 11642,
            },
          },
        },
        {
          type: "inlineCode",
          value: "3",
          position: {
            start: {
              line: 145,
              column: 139,
              offset: 11642,
            },
            end: {
              line: 145,
              column: 142,
              offset: 11645,
            },
          },
        },
        {
          type: "text",
          value: "s. Then, ",
          position: {
            start: {
              line: 145,
              column: 142,
              offset: 11645,
            },
            end: {
              line: 145,
              column: 151,
              offset: 11654,
            },
          },
        },
        {
          type: "inlineCode",
          value: "m(3)",
          position: {
            start: {
              line: 145,
              column: 151,
              offset: 11654,
            },
            end: {
              line: 145,
              column: 157,
              offset: 11660,
            },
          },
        },
        {
          type: "text",
          value: " sticks ",
          position: {
            start: {
              line: 145,
              column: 157,
              offset: 11660,
            },
            end: {
              line: 145,
              column: 165,
              offset: 11668,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "that",
              position: {
                start: {
                  line: 145,
                  column: 166,
                  offset: 11669,
                },
                end: {
                  line: 145,
                  column: 170,
                  offset: 11673,
                },
              },
            },
          ],
          position: {
            start: {
              line: 145,
              column: 165,
              offset: 11668,
            },
            end: {
              line: 145,
              column: 171,
              offset: 11674,
            },
          },
        },
        {
          type: "text",
          value: " many up-arrows between the ",
          position: {
            start: {
              line: 145,
              column: 171,
              offset: 11674,
            },
            end: {
              line: 145,
              column: 199,
              offset: 11702,
            },
          },
        },
        {
          type: "inlineCode",
          value: "3",
          position: {
            start: {
              line: 145,
              column: 199,
              offset: 11702,
            },
            end: {
              line: 145,
              column: 202,
              offset: 11705,
            },
          },
        },
        {
          type: "text",
          value: "s, et cetera. If you repeated this process ",
          position: {
            start: {
              line: 145,
              column: 202,
              offset: 11705,
            },
            end: {
              line: 145,
              column: 245,
              offset: 11748,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "sixty four",
              position: {
                start: {
                  line: 145,
                  column: 246,
                  offset: 11749,
                },
                end: {
                  line: 145,
                  column: 256,
                  offset: 11759,
                },
              },
            },
          ],
          position: {
            start: {
              line: 145,
              column: 245,
              offset: 11748,
            },
            end: {
              line: 145,
              column: 257,
              offset: 11760,
            },
          },
        },
        {
          type: "text",
          value: " times, you would get Graham's number.",
          position: {
            start: {
              line: 145,
              column: 257,
              offset: 11760,
            },
            end: {
              line: 145,
              column: 295,
              offset: 11798,
            },
          },
        },
      ],
      position: {
        start: {
          line: 145,
          column: 1,
          offset: 11504,
        },
        end: {
          line: 145,
          column: 295,
          offset: 11798,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Graham's number arose when mathematician Ronald Graham was trying to find an upper bound on the solution to a ",
          position: {
            start: {
              line: 147,
              column: 1,
              offset: 11800,
            },
            end: {
              line: 147,
              column: 111,
              offset: 11910,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Graham%27s_number#Context",
          children: [
            {
              type: "text",
              value: "graph theory problem",
              position: {
                start: {
                  line: 147,
                  column: 112,
                  offset: 11911,
                },
                end: {
                  line: 147,
                  column: 132,
                  offset: 11931,
                },
              },
            },
          ],
          position: {
            start: {
              line: 147,
              column: 111,
              offset: 11910,
            },
            end: {
              line: 147,
              column: 190,
              offset: 11989,
            },
          },
        },
        {
          type: "text",
          value:
            ", and it was the largest number ever used in a mathematical publication up to that point. To quote Wikipedia:",
          position: {
            start: {
              line: 147,
              column: 190,
              offset: 11989,
            },
            end: {
              line: 147,
              column: 299,
              offset: 12098,
            },
          },
        },
      ],
      position: {
        start: {
          line: 147,
          column: 1,
          offset: 11800,
        },
        end: {
          line: 147,
          column: 299,
          offset: 12098,
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
                "It (Graham's number) is so large that the observable universe is far too small to contain an ordinary digital representation of Graham's number, assuming that each digit occupies one ",
              position: {
                start: {
                  line: 149,
                  column: 3,
                  offset: 12102,
                },
                end: {
                  line: 149,
                  column: 186,
                  offset: 12285,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/Planck_units#Derived_units",
              children: [
                {
                  type: "text",
                  value: "Planck volume",
                  position: {
                    start: {
                      line: 149,
                      column: 187,
                      offset: 12286,
                    },
                    end: {
                      line: 149,
                      column: 200,
                      offset: 12299,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 149,
                  column: 186,
                  offset: 12285,
                },
                end: {
                  line: 149,
                  column: 259,
                  offset: 12358,
                },
              },
            },
            {
              type: "text",
              value:
                ", possibly the smallest measurable space. But even the number of digits in this digital representation of Graham's number would itself be a number so large that ",
              position: {
                start: {
                  line: 149,
                  column: 259,
                  offset: 12358,
                },
                end: {
                  line: 149,
                  column: 420,
                  offset: 12519,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "its",
                  position: {
                    start: {
                      line: 149,
                      column: 421,
                      offset: 12520,
                    },
                    end: {
                      line: 149,
                      column: 424,
                      offset: 12523,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 149,
                  column: 420,
                  offset: 12519,
                },
                end: {
                  line: 149,
                  column: 425,
                  offset: 12524,
                },
              },
            },
            {
              type: "text",
              value:
                " digital representation cannot be represented in the observable universe.",
              position: {
                start: {
                  line: 149,
                  column: 425,
                  offset: 12524,
                },
                end: {
                  line: 149,
                  column: 498,
                  offset: 12597,
                },
              },
            },
          ],
          position: {
            start: {
              line: 149,
              column: 3,
              offset: 12102,
            },
            end: {
              line: 149,
              column: 498,
              offset: 12597,
            },
          },
        },
      ],
      position: {
        start: {
          line: 149,
          column: 1,
          offset: 12100,
        },
        end: {
          line: 149,
          column: 498,
          offset: 12597,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "It's so dang big that even if you stuck a ",
          position: {
            start: {
              line: 151,
              column: 1,
              offset: 12599,
            },
            end: {
              line: 151,
              column: 43,
              offset: 12641,
            },
          },
        },
        {
          type: "inlineCode",
          value: "9",
          position: {
            start: {
              line: 151,
              column: 43,
              offset: 12641,
            },
            end: {
              line: 151,
              column: 46,
              offset: 12644,
            },
          },
        },
        {
          type: "text",
          value:
            " in every Planck volume in the observable universe and interpreted the whole thing as a power tower (i.e. ",
          position: {
            start: {
              line: 151,
              column: 46,
              offset: 12644,
            },
            end: {
              line: 151,
              column: 152,
              offset: 12750,
            },
          },
        },
        {
          type: "inlineCode",
          value: "9^(9^(9^...))",
          position: {
            start: {
              line: 151,
              column: 152,
              offset: 12750,
            },
            end: {
              line: 151,
              column: 167,
              offset: 12765,
            },
          },
        },
        {
          type: "text",
          value: "), the result would ",
          position: {
            start: {
              line: 151,
              column: 167,
              offset: 12765,
            },
            end: {
              line: 151,
              column: 187,
              offset: 12785,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "still",
              position: {
                start: {
                  line: 151,
                  column: 188,
                  offset: 12786,
                },
                end: {
                  line: 151,
                  column: 193,
                  offset: 12791,
                },
              },
            },
          ],
          position: {
            start: {
              line: 151,
              column: 187,
              offset: 12785,
            },
            end: {
              line: 151,
              column: 194,
              offset: 12792,
            },
          },
        },
        {
          type: "text",
          value: " be smaller than Graham's number.",
          position: {
            start: {
              line: 151,
              column: 194,
              offset: 12792,
            },
            end: {
              line: 151,
              column: 227,
              offset: 12825,
            },
          },
        },
      ],
      position: {
        start: {
          line: 151,
          column: 1,
          offset: 12599,
        },
        end: {
          line: 151,
          column: 227,
          offset: 12825,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "But in the grand scheme of things, what's a universe-scale power tower? There's still bigger fish to fry. For example, there's the ",
          position: {
            start: {
              line: 153,
              column: 1,
              offset: 12827,
            },
            end: {
              line: 153,
              column: 132,
              offset: 12958,
            },
          },
        },
        {
          type: "inlineCode",
          value: "TREE",
          position: {
            start: {
              line: 153,
              column: 132,
              offset: 12958,
            },
            end: {
              line: 153,
              column: 138,
              offset: 12964,
            },
          },
        },
        {
          type: "text",
          value: " function, which grows so fast that ",
          position: {
            start: {
              line: 153,
              column: 138,
              offset: 12964,
            },
            end: {
              line: 153,
              column: 174,
              offset: 13000,
            },
          },
        },
        {
          type: "inlineCode",
          value: "TREE(3)",
          position: {
            start: {
              line: 153,
              column: 174,
              offset: 13000,
            },
            end: {
              line: 153,
              column: 183,
              offset: 13009,
            },
          },
        },
        {
          type: "text",
          value: " is already ",
          position: {
            start: {
              line: 153,
              column: 183,
              offset: 13009,
            },
            end: {
              line: 153,
              column: 195,
              offset: 13021,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Kruskal%27s_tree_theorem#TREE_function",
          children: [
            {
              type: "text",
              value: "unfathomably larger",
              position: {
                start: {
                  line: 153,
                  column: 196,
                  offset: 13022,
                },
                end: {
                  line: 153,
                  column: 215,
                  offset: 13041,
                },
              },
            },
          ],
          position: {
            start: {
              line: 153,
              column: 195,
              offset: 13021,
            },
            end: {
              line: 153,
              column: 286,
              offset: 13112,
            },
          },
        },
        {
          type: "text",
          value: " than Graham's number. ",
          position: {
            start: {
              line: 153,
              column: 286,
              offset: 13112,
            },
            end: {
              line: 153,
              column: 309,
              offset: 13135,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "hierarchy",
          },
          children: [
            {
              type: "text",
              value: "Need we go on",
              position: {
                start: {
                  line: 153,
                  column: 315,
                  offset: 13141,
                },
                end: {
                  line: 153,
                  column: 328,
                  offset: 13154,
                },
              },
            },
          ],
          position: {
            start: {
              line: 153,
              column: 309,
              offset: 13135,
            },
            end: {
              line: 153,
              column: 345,
              offset: 13171,
            },
          },
        },
        {
          type: "text",
          value: "?",
          position: {
            start: {
              line: 153,
              column: 345,
              offset: 13171,
            },
            end: {
              line: 153,
              column: 346,
              offset: 13172,
            },
          },
        },
      ],
      position: {
        start: {
          line: 153,
          column: 1,
          offset: 12827,
        },
        end: {
          line: 153,
          column: 346,
          offset: 13172,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Forbidden functions",
          position: {
            start: {
              line: 155,
              column: 4,
              offset: 13177,
            },
            end: {
              line: 155,
              column: 23,
              offset: 13196,
            },
          },
        },
      ],
      position: {
        start: {
          line: 155,
          column: 1,
          offset: 13174,
        },
        end: {
          line: 155,
          column: 23,
          offset: 13196,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Actually, it turns out that we mortals are forbidden from constructing the ",
          position: {
            start: {
              line: 157,
              column: 1,
              offset: 13198,
            },
            end: {
              line: 157,
              column: 76,
              offset: 13273,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "fastest",
              position: {
                start: {
                  line: 157,
                  column: 77,
                  offset: 13274,
                },
                end: {
                  line: 157,
                  column: 84,
                  offset: 13281,
                },
              },
            },
          ],
          position: {
            start: {
              line: 157,
              column: 76,
              offset: 13273,
            },
            end: {
              line: 157,
              column: 85,
              offset: 13282,
            },
          },
        },
        {
          type: "text",
          value:
            "-growing functions. Why? To understand that, we need to understand the difference between ",
          position: {
            start: {
              line: 157,
              column: 85,
              offset: 13282,
            },
            end: {
              line: 157,
              column: 175,
              offset: 13372,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "computable",
              position: {
                start: {
                  line: 157,
                  column: 176,
                  offset: 13373,
                },
                end: {
                  line: 157,
                  column: 186,
                  offset: 13383,
                },
              },
            },
          ],
          position: {
            start: {
              line: 157,
              column: 175,
              offset: 13372,
            },
            end: {
              line: 157,
              column: 187,
              offset: 13384,
            },
          },
        },
        {
          type: "text",
          value: " and ",
          position: {
            start: {
              line: 157,
              column: 187,
              offset: 13384,
            },
            end: {
              line: 157,
              column: 192,
              offset: 13389,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "uncomputable",
              position: {
                start: {
                  line: 157,
                  column: 193,
                  offset: 13390,
                },
                end: {
                  line: 157,
                  column: 205,
                  offset: 13402,
                },
              },
            },
          ],
          position: {
            start: {
              line: 157,
              column: 192,
              offset: 13389,
            },
            end: {
              line: 157,
              column: 206,
              offset: 13403,
            },
          },
        },
        {
          type: "text",
          value: " functions.",
          position: {
            start: {
              line: 157,
              column: 206,
              offset: 13403,
            },
            end: {
              line: 157,
              column: 217,
              offset: 13414,
            },
          },
        },
      ],
      position: {
        start: {
          line: 157,
          column: 1,
          offset: 13198,
        },
        end: {
          line: 157,
          column: 217,
          offset: 13414,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'In broad terms, a computable function is one that could be run by an algorithm (a little circular, I know). By "algorithm", we informally mean "a step-by-step process". Formally, that "step-by-step process" is usually a well-studied model of computation, the most famous example being the Turing machine. If you\'re not familiar with Turing machines, I always like to recommend ',
          position: {
            start: {
              line: 159,
              column: 1,
              offset: 13416,
            },
            end: {
              line: 159,
              column: 378,
              offset: 13793,
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
              value: "this Quanta article",
              position: {
                start: {
                  line: 159,
                  column: 379,
                  offset: 13794,
                },
                end: {
                  line: 159,
                  column: 398,
                  offset: 13813,
                },
              },
            },
          ],
          position: {
            start: {
              line: 159,
              column: 378,
              offset: 13793,
            },
            end: {
              line: 159,
              column: 493,
              offset: 13908,
            },
          },
        },
        {
          type: "text",
          value:
            ". If you're in a \"TL;DR\" mood, then (a) I'm surprised you made it this far, and (b) if you just know the vibe of a Turing machine, you'll still probably get the gist of this section.",
          position: {
            start: {
              line: 159,
              column: 493,
              offset: 13908,
            },
            end: {
              line: 159,
              column: 675,
              offset: 14090,
            },
          },
        },
      ],
      position: {
        start: {
          line: 159,
          column: 1,
          offset: 13416,
        },
        end: {
          line: 159,
          column: 675,
          offset: 14090,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Let's consider a specific function: a function that adds two to an input. Even if you're not an algorithms person, you could probably guess that this function is super computable. In Python, we would just write:",
          position: {
            start: {
              line: 161,
              column: 1,
              offset: 14092,
            },
            end: {
              line: 161,
              column: 212,
              offset: 14303,
            },
          },
        },
      ],
      position: {
        start: {
          line: 161,
          column: 1,
          offset: 14092,
        },
        end: {
          line: 161,
          column: 212,
          offset: 14303,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value: "def add_two(n):\n  return n + 2",
      position: {
        start: {
          line: 163,
          column: 1,
          offset: 14305,
        },
        end: {
          line: 166,
          column: 4,
          offset: 14343,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The Turing machine would be similarly simple. I sketched it out below, in case you were curious:",
          position: {
            start: {
              line: 168,
              column: 1,
              offset: 14345,
            },
            end: {
              line: 168,
              column: 97,
              offset: 14441,
            },
          },
        },
      ],
      position: {
        start: {
          line: 168,
          column: 1,
          offset: 14345,
        },
        end: {
          line: 168,
          column: 97,
          offset: 14441,
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
              type: "inlineCode",
              value: "ADD_TWO",
              position: {
                start: {
                  line: 170,
                  column: 3,
                  offset: 14445,
                },
                end: {
                  line: 170,
                  column: 12,
                  offset: 14454,
                },
              },
            },
            {
              type: "text",
              value: " (Turing machine)",
              position: {
                start: {
                  line: 170,
                  column: 12,
                  offset: 14454,
                },
                end: {
                  line: 170,
                  column: 29,
                  offset: 14471,
                },
              },
            },
          ],
          position: {
            start: {
              line: 170,
              column: 3,
              offset: 14445,
            },
            end: {
              line: 170,
              column: 29,
              offset: 14471,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Assume the input is represented as ",
              position: {
                start: {
                  line: 172,
                  column: 3,
                  offset: 14476,
                },
                end: {
                  line: 172,
                  column: 38,
                  offset: 14511,
                },
              },
            },
            {
              type: "inlineCode",
              value: "n",
              position: {
                start: {
                  line: 172,
                  column: 38,
                  offset: 14511,
                },
                end: {
                  line: 172,
                  column: 41,
                  offset: 14514,
                },
              },
            },
            {
              type: "text",
              value: " ",
              position: {
                start: {
                  line: 172,
                  column: 41,
                  offset: 14514,
                },
                end: {
                  line: 172,
                  column: 42,
                  offset: 14515,
                },
              },
            },
            {
              type: "inlineCode",
              value: "1",
              position: {
                start: {
                  line: 172,
                  column: 42,
                  offset: 14515,
                },
                end: {
                  line: 172,
                  column: 45,
                  offset: 14518,
                },
              },
            },
            {
              type: "text",
              value: "s on the tape (otherwise ",
              position: {
                start: {
                  line: 172,
                  column: 45,
                  offset: 14518,
                },
                end: {
                  line: 172,
                  column: 70,
                  offset: 14543,
                },
              },
            },
            {
              type: "inlineCode",
              value: "0",
              position: {
                start: {
                  line: 172,
                  column: 70,
                  offset: 14543,
                },
                end: {
                  line: 172,
                  column: 73,
                  offset: 14546,
                },
              },
            },
            {
              type: "text",
              value: "), and the Turing machine head starts at the leftmost ",
              position: {
                start: {
                  line: 172,
                  column: 73,
                  offset: 14546,
                },
                end: {
                  line: 172,
                  column: 127,
                  offset: 14600,
                },
              },
            },
            {
              type: "inlineCode",
              value: "1",
              position: {
                start: {
                  line: 172,
                  column: 127,
                  offset: 14600,
                },
                end: {
                  line: 172,
                  column: 130,
                  offset: 14603,
                },
              },
            },
            {
              type: "text",
              value: ". Also assume the Turing machine starts in state ",
              position: {
                start: {
                  line: 172,
                  column: 130,
                  offset: 14603,
                },
                end: {
                  line: 172,
                  column: 179,
                  offset: 14652,
                },
              },
            },
            {
              type: "inlineCode",
              value: "S0",
              position: {
                start: {
                  line: 172,
                  column: 179,
                  offset: 14652,
                },
                end: {
                  line: 172,
                  column: 183,
                  offset: 14656,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 172,
                  column: 183,
                  offset: 14656,
                },
                end: {
                  line: 172,
                  column: 184,
                  offset: 14657,
                },
              },
            },
          ],
          position: {
            start: {
              line: 172,
              column: 3,
              offset: 14476,
            },
            end: {
              line: 172,
              column: 184,
              offset: 14657,
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
                      value: "When reading ",
                      position: {
                        start: {
                          line: 174,
                          column: 5,
                          offset: 14664,
                        },
                        end: {
                          line: 174,
                          column: 18,
                          offset: 14677,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "1",
                      position: {
                        start: {
                          line: 174,
                          column: 18,
                          offset: 14677,
                        },
                        end: {
                          line: 174,
                          column: 21,
                          offset: 14680,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " in state ",
                      position: {
                        start: {
                          line: 174,
                          column: 21,
                          offset: 14680,
                        },
                        end: {
                          line: 174,
                          column: 31,
                          offset: 14690,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "S0",
                      position: {
                        start: {
                          line: 174,
                          column: 31,
                          offset: 14690,
                        },
                        end: {
                          line: 174,
                          column: 35,
                          offset: 14694,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": Move right, remain in state ",
                      position: {
                        start: {
                          line: 174,
                          column: 35,
                          offset: 14694,
                        },
                        end: {
                          line: 174,
                          column: 65,
                          offset: 14724,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "S0",
                      position: {
                        start: {
                          line: 174,
                          column: 65,
                          offset: 14724,
                        },
                        end: {
                          line: 174,
                          column: 69,
                          offset: 14728,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 174,
                      column: 5,
                      offset: 14664,
                    },
                    end: {
                      line: 174,
                      column: 69,
                      offset: 14728,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 174,
                  column: 3,
                  offset: 14662,
                },
                end: {
                  line: 174,
                  column: 69,
                  offset: 14728,
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
                      value: "When reading ",
                      position: {
                        start: {
                          line: 175,
                          column: 5,
                          offset: 14733,
                        },
                        end: {
                          line: 175,
                          column: 18,
                          offset: 14746,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "0",
                      position: {
                        start: {
                          line: 175,
                          column: 18,
                          offset: 14746,
                        },
                        end: {
                          line: 175,
                          column: 21,
                          offset: 14749,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " in state ",
                      position: {
                        start: {
                          line: 175,
                          column: 21,
                          offset: 14749,
                        },
                        end: {
                          line: 175,
                          column: 31,
                          offset: 14759,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "S0",
                      position: {
                        start: {
                          line: 175,
                          column: 31,
                          offset: 14759,
                        },
                        end: {
                          line: 175,
                          column: 35,
                          offset: 14763,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": Write a ",
                      position: {
                        start: {
                          line: 175,
                          column: 35,
                          offset: 14763,
                        },
                        end: {
                          line: 175,
                          column: 45,
                          offset: 14773,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "1",
                      position: {
                        start: {
                          line: 175,
                          column: 45,
                          offset: 14773,
                        },
                        end: {
                          line: 175,
                          column: 48,
                          offset: 14776,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ", move right, switch to state ",
                      position: {
                        start: {
                          line: 175,
                          column: 48,
                          offset: 14776,
                        },
                        end: {
                          line: 175,
                          column: 78,
                          offset: 14806,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "S1",
                      position: {
                        start: {
                          line: 175,
                          column: 78,
                          offset: 14806,
                        },
                        end: {
                          line: 175,
                          column: 82,
                          offset: 14810,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 175,
                      column: 5,
                      offset: 14733,
                    },
                    end: {
                      line: 175,
                      column: 82,
                      offset: 14810,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 175,
                  column: 3,
                  offset: 14731,
                },
                end: {
                  line: 175,
                  column: 82,
                  offset: 14810,
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
                      value: "When in state ",
                      position: {
                        start: {
                          line: 176,
                          column: 5,
                          offset: 14815,
                        },
                        end: {
                          line: 176,
                          column: 19,
                          offset: 14829,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "S1",
                      position: {
                        start: {
                          line: 176,
                          column: 19,
                          offset: 14829,
                        },
                        end: {
                          line: 176,
                          column: 23,
                          offset: 14833,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: ": Write a ",
                      position: {
                        start: {
                          line: 176,
                          column: 23,
                          offset: 14833,
                        },
                        end: {
                          line: 176,
                          column: 33,
                          offset: 14843,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "1",
                      position: {
                        start: {
                          line: 176,
                          column: 33,
                          offset: 14843,
                        },
                        end: {
                          line: 176,
                          column: 36,
                          offset: 14846,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " and switch to the ",
                      position: {
                        start: {
                          line: 176,
                          column: 36,
                          offset: 14846,
                        },
                        end: {
                          line: 176,
                          column: 55,
                          offset: 14865,
                        },
                      },
                    },
                    {
                      type: "inlineCode",
                      value: "HALT",
                      position: {
                        start: {
                          line: 176,
                          column: 55,
                          offset: 14865,
                        },
                        end: {
                          line: 176,
                          column: 61,
                          offset: 14871,
                        },
                      },
                    },
                    {
                      type: "text",
                      value: " state (terminate).",
                      position: {
                        start: {
                          line: 176,
                          column: 61,
                          offset: 14871,
                        },
                        end: {
                          line: 176,
                          column: 80,
                          offset: 14890,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 176,
                      column: 5,
                      offset: 14815,
                    },
                    end: {
                      line: 176,
                      column: 80,
                      offset: 14890,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 176,
                  column: 3,
                  offset: 14813,
                },
                end: {
                  line: 176,
                  column: 80,
                  offset: 14890,
                },
              },
            },
          ],
          position: {
            start: {
              line: 174,
              column: 3,
              offset: 14662,
            },
            end: {
              line: 176,
              column: 80,
              offset: 14890,
            },
          },
        },
      ],
      position: {
        start: {
          line: 170,
          column: 1,
          offset: 14443,
        },
        end: {
          line: 176,
          column: 80,
          offset: 14890,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "When the Turing machine terminates, it will have left ",
          position: {
            start: {
              line: 178,
              column: 1,
              offset: 14892,
            },
            end: {
              line: 178,
              column: 55,
              offset: 14946,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n + 2",
          position: {
            start: {
              line: 178,
              column: 55,
              offset: 14946,
            },
            end: {
              line: 178,
              column: 62,
              offset: 14953,
            },
          },
        },
        {
          type: "text",
          value: " ",
          position: {
            start: {
              line: 178,
              column: 62,
              offset: 14953,
            },
            end: {
              line: 178,
              column: 63,
              offset: 14954,
            },
          },
        },
        {
          type: "inlineCode",
          value: "1",
          position: {
            start: {
              line: 178,
              column: 63,
              offset: 14954,
            },
            end: {
              line: 178,
              column: 66,
              offset: 14957,
            },
          },
        },
        {
          type: "text",
          value: "s on the tape.",
          position: {
            start: {
              line: 178,
              column: 66,
              offset: 14957,
            },
            end: {
              line: 178,
              column: 80,
              offset: 14971,
            },
          },
        },
      ],
      position: {
        start: {
          line: 178,
          column: 1,
          offset: 14892,
        },
        end: {
          line: 178,
          column: 80,
          offset: 14971,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "A slightly more complicated function would be one that computes the ",
          position: {
            start: {
              line: 180,
              column: 1,
              offset: 14973,
            },
            end: {
              line: 180,
              column: 69,
              offset: 15041,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 180,
              column: 69,
              offset: 15041,
            },
            end: {
              line: 180,
              column: 72,
              offset: 15044,
            },
          },
        },
        {
          type: "text",
          value: "th prime. That is, ",
          position: {
            start: {
              line: 180,
              column: 72,
              offset: 15044,
            },
            end: {
              line: 180,
              column: 91,
              offset: 15063,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p(1) = 2",
          position: {
            start: {
              line: 180,
              column: 91,
              offset: 15063,
            },
            end: {
              line: 180,
              column: 101,
              offset: 15073,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 180,
              column: 101,
              offset: 15073,
            },
            end: {
              line: 180,
              column: 103,
              offset: 15075,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p(2) = 3",
          position: {
            start: {
              line: 180,
              column: 103,
              offset: 15075,
            },
            end: {
              line: 180,
              column: 113,
              offset: 15085,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 180,
              column: 113,
              offset: 15085,
            },
            end: {
              line: 180,
              column: 115,
              offset: 15087,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p(3) = 5",
          position: {
            start: {
              line: 180,
              column: 115,
              offset: 15087,
            },
            end: {
              line: 180,
              column: 125,
              offset: 15097,
            },
          },
        },
        {
          type: "text",
          value: ", ",
          position: {
            start: {
              line: 180,
              column: 125,
              offset: 15097,
            },
            end: {
              line: 180,
              column: 127,
              offset: 15099,
            },
          },
        },
        {
          type: "inlineCode",
          value: "p(10) = 29",
          position: {
            start: {
              line: 180,
              column: 127,
              offset: 15099,
            },
            end: {
              line: 180,
              column: 139,
              offset: 15111,
            },
          },
        },
        {
          type: "text",
          value: ", and so on.",
          position: {
            start: {
              line: 180,
              column: 139,
              offset: 15111,
            },
            end: {
              line: 180,
              column: 151,
              offset: 15123,
            },
          },
        },
      ],
      position: {
        start: {
          line: 180,
          column: 1,
          offset: 14973,
        },
        end: {
          line: 180,
          column: 151,
          offset: 15123,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Considering how much mystery and intrigue surrounds the primes, you might guess that this function wouldn't be computable, but it is. In plain English, the algorithm could ",
          position: {
            start: {
              line: 182,
              column: 1,
              offset: 15125,
            },
            end: {
              line: 182,
              column: 173,
              offset: 15297,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "sqrt",
          },
          children: [
            {
              type: "text",
              value: "look like this",
              position: {
                start: {
                  line: 182,
                  column: 179,
                  offset: 15303,
                },
                end: {
                  line: 182,
                  column: 193,
                  offset: 15317,
                },
              },
            },
          ],
          position: {
            start: {
              line: 182,
              column: 173,
              offset: 15297,
            },
            end: {
              line: 182,
              column: 205,
              offset: 15329,
            },
          },
        },
        {
          type: "text",
          value: ":",
          position: {
            start: {
              line: 182,
              column: 205,
              offset: 15329,
            },
            end: {
              line: 182,
              column: 206,
              offset: 15330,
            },
          },
        },
      ],
      position: {
        start: {
          line: 182,
          column: 1,
          offset: 15125,
        },
        end: {
          line: 182,
          column: 206,
          offset: 15330,
        },
      },
    },
    {
      type: "code",
      lang: null,
      meta: null,
      value:
        "is_prime(n):\n  loop i from 2 to n - 1:\n    if i divides n:\n      return FALSE\n  return TRUE\n\np(n):\n  num_primes = 1\n  x = 2\n  while num_primes < n:\n    x = x + 1\n    if is_prime(x):\n      num_primes += 1\n  return x",
      position: {
        start: {
          line: 184,
          column: 1,
          offset: 15332,
        },
        end: {
          line: 199,
          column: 4,
          offset: 15554,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'It may be a "brute force" approach, but brute force is computable! The corresponding Turing machine for this pseudocode would be a beast, for sure, but it ',
          position: {
            start: {
              line: 201,
              column: 1,
              offset: 15556,
            },
            end: {
              line: 201,
              column: 156,
              offset: 15711,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "can",
              position: {
                start: {
                  line: 201,
                  column: 157,
                  offset: 15712,
                },
                end: {
                  line: 201,
                  column: 160,
                  offset: 15715,
                },
              },
            },
          ],
          position: {
            start: {
              line: 201,
              column: 156,
              offset: 15711,
            },
            end: {
              line: 201,
              column: 161,
              offset: 15716,
            },
          },
        },
        {
          type: "text",
          value: " be constructed, which is all that matters.",
          position: {
            start: {
              line: 201,
              column: 161,
              offset: 15716,
            },
            end: {
              line: 201,
              column: 204,
              offset: 15759,
            },
          },
        },
      ],
      position: {
        start: {
          line: 201,
          column: 1,
          offset: 15556,
        },
        end: {
          line: 201,
          column: 204,
          offset: 15759,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Now that we have a sense of what a computable function is, what would it mean for a function to be ",
          position: {
            start: {
              line: 203,
              column: 1,
              offset: 15761,
            },
            end: {
              line: 203,
              column: 100,
              offset: 15860,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "uncomputable",
              position: {
                start: {
                  line: 203,
                  column: 101,
                  offset: 15861,
                },
                end: {
                  line: 203,
                  column: 113,
                  offset: 15873,
                },
              },
            },
          ],
          position: {
            start: {
              line: 203,
              column: 100,
              offset: 15860,
            },
            end: {
              line: 203,
              column: 114,
              offset: 15874,
            },
          },
        },
        {
          type: "text",
          value: "? Just to set your expectations, ",
          position: {
            start: {
              line: 203,
              column: 114,
              offset: 15874,
            },
            end: {
              line: 203,
              column: 147,
              offset: 15907,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "most",
              position: {
                start: {
                  line: 203,
                  column: 148,
                  offset: 15908,
                },
                end: {
                  line: 203,
                  column: 152,
                  offset: 15912,
                },
              },
            },
          ],
          position: {
            start: {
              line: 203,
              column: 147,
              offset: 15907,
            },
            end: {
              line: 203,
              column: 153,
              offset: 15913,
            },
          },
        },
        {
          type: "text",
          value:
            " functions are uncomputable. There are a few especially notable examples, though. One has to do with the halting problem, which could be loosely stated like this:",
          position: {
            start: {
              line: 203,
              column: 153,
              offset: 15913,
            },
            end: {
              line: 203,
              column: 315,
              offset: 16075,
            },
          },
        },
      ],
      position: {
        start: {
          line: 203,
          column: 1,
          offset: 15761,
        },
        end: {
          line: 203,
          column: 315,
          offset: 16075,
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
                  value: "The halting problem (informally)",
                  position: {
                    start: {
                      line: 205,
                      column: 5,
                      offset: 16081,
                    },
                    end: {
                      line: 205,
                      column: 37,
                      offset: 16113,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 205,
                  column: 3,
                  offset: 16079,
                },
                end: {
                  line: 205,
                  column: 39,
                  offset: 16115,
                },
              },
            },
          ],
          position: {
            start: {
              line: 205,
              column: 3,
              offset: 16079,
            },
            end: {
              line: 205,
              column: 39,
              offset: 16115,
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
                  value: "Context",
                  position: {
                    start: {
                      line: 207,
                      column: 4,
                      offset: 16121,
                    },
                    end: {
                      line: 207,
                      column: 11,
                      offset: 16128,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 207,
                  column: 3,
                  offset: 16120,
                },
                end: {
                  line: 207,
                  column: 12,
                  offset: 16129,
                },
              },
            },
          ],
          position: {
            start: {
              line: 207,
              column: 3,
              offset: 16120,
            },
            end: {
              line: 207,
              column: 12,
              offset: 16129,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Turing machines compute inputs. When a Turing machine computes an input, the computation will either run forever or (eventually) halt. Consider the fact that we can encode a Turing machine as a single integer (in much the same way a computer program can be represented as binary, which is also a number). We could do the same with any input to a Turing machine. Then, we could construct a single number ",
              position: {
                start: {
                  line: 209,
                  column: 3,
                  offset: 16134,
                },
                end: {
                  line: 209,
                  column: 406,
                  offset: 16537,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 209,
                  column: 406,
                  offset: 16537,
                },
                end: {
                  line: 209,
                  column: 409,
                  offset: 16540,
                },
              },
            },
            {
              type: "text",
              value: " for any combination of a Turing machine ",
              position: {
                start: {
                  line: 209,
                  column: 409,
                  offset: 16540,
                },
                end: {
                  line: 209,
                  column: 450,
                  offset: 16581,
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
                      line: 209,
                      column: 451,
                      offset: 16582,
                    },
                    end: {
                      line: 209,
                      column: 454,
                      offset: 16585,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 209,
                  column: 450,
                  offset: 16581,
                },
                end: {
                  line: 209,
                  column: 455,
                  offset: 16586,
                },
              },
            },
            {
              type: "text",
              value: " input.",
              position: {
                start: {
                  line: 209,
                  column: 455,
                  offset: 16586,
                },
                end: {
                  line: 209,
                  column: 462,
                  offset: 16593,
                },
              },
            },
          ],
          position: {
            start: {
              line: 209,
              column: 3,
              offset: 16134,
            },
            end: {
              line: 209,
              column: 462,
              offset: 16593,
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
                  value: "The halting problem",
                  position: {
                    start: {
                      line: 211,
                      column: 4,
                      offset: 16599,
                    },
                    end: {
                      line: 211,
                      column: 23,
                      offset: 16618,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 211,
                  column: 3,
                  offset: 16598,
                },
                end: {
                  line: 211,
                  column: 24,
                  offset: 16619,
                },
              },
            },
          ],
          position: {
            start: {
              line: 211,
              column: 3,
              offset: 16598,
            },
            end: {
              line: 211,
              column: 24,
              offset: 16619,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Is it possible to write a function ",
              position: {
                start: {
                  line: 213,
                  column: 3,
                  offset: 16624,
                },
                end: {
                  line: 213,
                  column: 38,
                  offset: 16659,
                },
              },
            },
            {
              type: "inlineCode",
              value: "HALTS",
              position: {
                start: {
                  line: 213,
                  column: 38,
                  offset: 16659,
                },
                end: {
                  line: 213,
                  column: 45,
                  offset: 16666,
                },
              },
            },
            {
              type: "text",
              value: " that returns one value (say, ",
              position: {
                start: {
                  line: 213,
                  column: 45,
                  offset: 16666,
                },
                end: {
                  line: 213,
                  column: 75,
                  offset: 16696,
                },
              },
            },
            {
              type: "inlineCode",
              value: "0",
              position: {
                start: {
                  line: 213,
                  column: 75,
                  offset: 16696,
                },
                end: {
                  line: 213,
                  column: 78,
                  offset: 16699,
                },
              },
            },
            {
              type: "text",
              value: ") if the Turing machine and input encoded by ",
              position: {
                start: {
                  line: 213,
                  column: 78,
                  offset: 16699,
                },
                end: {
                  line: 213,
                  column: 123,
                  offset: 16744,
                },
              },
            },
            {
              type: "inlineCode",
              value: "N",
              position: {
                start: {
                  line: 213,
                  column: 123,
                  offset: 16744,
                },
                end: {
                  line: 213,
                  column: 126,
                  offset: 16747,
                },
              },
            },
            {
              type: "text",
              value: " runs forever, and a different value (say, ",
              position: {
                start: {
                  line: 213,
                  column: 126,
                  offset: 16747,
                },
                end: {
                  line: 213,
                  column: 169,
                  offset: 16790,
                },
              },
            },
            {
              type: "inlineCode",
              value: "1",
              position: {
                start: {
                  line: 213,
                  column: 169,
                  offset: 16790,
                },
                end: {
                  line: 213,
                  column: 172,
                  offset: 16793,
                },
              },
            },
            {
              type: "text",
              value: ") if it eventually halts?",
              position: {
                start: {
                  line: 213,
                  column: 172,
                  offset: 16793,
                },
                end: {
                  line: 213,
                  column: 197,
                  offset: 16818,
                },
              },
            },
          ],
          position: {
            start: {
              line: 213,
              column: 3,
              offset: 16624,
            },
            end: {
              line: 213,
              column: 197,
              offset: 16818,
            },
          },
        },
      ],
      position: {
        start: {
          line: 205,
          column: 1,
          offset: 16077,
        },
        end: {
          line: 213,
          column: 197,
          offset: 16818,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "In 1936, Alonzo Church and Alan Turing independently proved that it is ",
          position: {
            start: {
              line: 215,
              column: 1,
              offset: 16820,
            },
            end: {
              line: 215,
              column: 72,
              offset: 16891,
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
                  line: 215,
                  column: 73,
                  offset: 16892,
                },
                end: {
                  line: 215,
                  column: 83,
                  offset: 16902,
                },
              },
            },
          ],
          position: {
            start: {
              line: 215,
              column: 72,
              offset: 16891,
            },
            end: {
              line: 215,
              column: 84,
              offset: 16903,
            },
          },
        },
        {
          type: "text",
          value: " to write an algorithm for ",
          position: {
            start: {
              line: 215,
              column: 84,
              offset: 16903,
            },
            end: {
              line: 215,
              column: 111,
              offset: 16930,
            },
          },
        },
        {
          type: "inlineCode",
          value: "HALTS",
          position: {
            start: {
              line: 215,
              column: 111,
              offset: 16930,
            },
            end: {
              line: 215,
              column: 118,
              offset: 16937,
            },
          },
        },
        {
          type: "text",
          value:
            ". Which is a bummer, because this function would be the most godlike superpower for mathematicians and computer scientists. I mean, so many great mathematical mysteries could be solved with this method: take the ",
          position: {
            start: {
              line: 215,
              column: 118,
              offset: 16937,
            },
            end: {
              line: 215,
              column: 330,
              offset: 17149,
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
              value: "Goldbach Conjecture",
              position: {
                start: {
                  line: 215,
                  column: 331,
                  offset: 17150,
                },
                end: {
                  line: 215,
                  column: 350,
                  offset: 17169,
                },
              },
            },
          ],
          position: {
            start: {
              line: 215,
              column: 330,
              offset: 17149,
            },
            end: {
              line: 215,
              column: 406,
              offset: 17225,
            },
          },
        },
        {
          type: "text",
          value:
            ", which manages to come up in almost every one of my essays. The conjecture states that every even number greater than two can be expressed as the sum of two primes. There's currently no proof. But, if we had ",
          position: {
            start: {
              line: 215,
              column: 406,
              offset: 17225,
            },
            end: {
              line: 215,
              column: 615,
              offset: 17434,
            },
          },
        },
        {
          type: "inlineCode",
          value: "HALTS",
          position: {
            start: {
              line: 215,
              column: 615,
              offset: 17434,
            },
            end: {
              line: 215,
              column: 622,
              offset: 17441,
            },
          },
        },
        {
          type: "text",
          value:
            ", then we could do the following: Write a program that counts up and stops if it ever finds an even number that breaks the rule. Then, pass its code to ",
          position: {
            start: {
              line: 215,
              column: 622,
              offset: 17441,
            },
            end: {
              line: 215,
              column: 774,
              offset: 17593,
            },
          },
        },
        {
          type: "inlineCode",
          value: "HALTS",
          position: {
            start: {
              line: 215,
              column: 774,
              offset: 17593,
            },
            end: {
              line: 215,
              column: 781,
              offset: 17600,
            },
          },
        },
        {
          type: "text",
          value: ". If ",
          position: {
            start: {
              line: 215,
              column: 781,
              offset: 17600,
            },
            end: {
              line: 215,
              column: 786,
              offset: 17605,
            },
          },
        },
        {
          type: "inlineCode",
          value: "HALTS",
          position: {
            start: {
              line: 215,
              column: 786,
              offset: 17605,
            },
            end: {
              line: 215,
              column: 793,
              offset: 17612,
            },
          },
        },
        {
          type: "text",
          value: " returns ",
          position: {
            start: {
              line: 215,
              column: 793,
              offset: 17612,
            },
            end: {
              line: 215,
              column: 802,
              offset: 17621,
            },
          },
        },
        {
          type: "inlineCode",
          value: "0",
          position: {
            start: {
              line: 215,
              column: 802,
              offset: 17621,
            },
            end: {
              line: 215,
              column: 805,
              offset: 17624,
            },
          },
        },
        {
          type: "text",
          value: ", then the conjecture is true, otherwise, it's false!",
          position: {
            start: {
              line: 215,
              column: 805,
              offset: 17624,
            },
            end: {
              line: 215,
              column: 858,
              offset: 17677,
            },
          },
        },
      ],
      position: {
        start: {
          line: 215,
          column: 1,
          offset: 16820,
        },
        end: {
          line: 215,
          column: 858,
          offset: 17677,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "biggest-number/prometheus.png",
          alt: "Prometheus tries to steal the HALTS function",
          position: {
            start: {
              line: 217,
              column: 1,
              offset: 17679,
            },
            end: {
              line: 217,
              column: 79,
              offset: 17757,
            },
          },
        },
      ],
      position: {
        start: {
          line: 217,
          column: 1,
          offset: 17679,
        },
        end: {
          line: 217,
          column: 79,
          offset: 17757,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "Busy beavers strike again",
          position: {
            start: {
              line: 219,
              column: 5,
              offset: 17763,
            },
            end: {
              line: 219,
              column: 30,
              offset: 17788,
            },
          },
        },
      ],
      position: {
        start: {
          line: 219,
          column: 1,
          offset: 17759,
        },
        end: {
          line: 219,
          column: 30,
          offset: 17788,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "So, solving the halting problem is uncomputable, and as a result, anything that ",
          position: {
            start: {
              line: 221,
              column: 1,
              offset: 17790,
            },
            end: {
              line: 221,
              column: 81,
              offset: 17870,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "depends",
              position: {
                start: {
                  line: 221,
                  column: 82,
                  offset: 17871,
                },
                end: {
                  line: 221,
                  column: 89,
                  offset: 17878,
                },
              },
            },
          ],
          position: {
            start: {
              line: 221,
              column: 81,
              offset: 17870,
            },
            end: {
              line: 221,
              column: 90,
              offset: 17879,
            },
          },
        },
        {
          type: "text",
          value:
            " on cracking the halting problem is also uncomputable. This brings me to the Busy Beaver problem, which I described in more detail in my previous essay on ",
          position: {
            start: {
              line: 221,
              column: 90,
              offset: 17879,
            },
            end: {
              line: 221,
              column: 245,
              offset: 18034,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://worldsworstdetective.com/unthinkable-thoughts#chaos-in-the-patterns-in-the-chaos-in-the-patterns",
          children: [
            {
              type: "text",
              value: "unthinkable thoughts",
              position: {
                start: {
                  line: 221,
                  column: 246,
                  offset: 18035,
                },
                end: {
                  line: 221,
                  column: 266,
                  offset: 18055,
                },
              },
            },
          ],
          position: {
            start: {
              line: 221,
              column: 245,
              offset: 18034,
            },
            end: {
              line: 221,
              column: 373,
              offset: 18162,
            },
          },
        },
        {
          type: "text",
          value: ". To summarize quickly, we can define a function ",
          position: {
            start: {
              line: 221,
              column: 373,
              offset: 18162,
            },
            end: {
              line: 221,
              column: 422,
              offset: 18211,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB(n)",
          position: {
            start: {
              line: 221,
              column: 422,
              offset: 18211,
            },
            end: {
              line: 221,
              column: 429,
              offset: 18218,
            },
          },
        },
        {
          type: "text",
          value: " that tells us the ",
          position: {
            start: {
              line: 221,
              column: 429,
              offset: 18218,
            },
            end: {
              line: 221,
              column: 448,
              offset: 18237,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "longest",
              position: {
                start: {
                  line: 221,
                  column: 449,
                  offset: 18238,
                },
                end: {
                  line: 221,
                  column: 456,
                  offset: 18245,
                },
              },
            },
          ],
          position: {
            start: {
              line: 221,
              column: 448,
              offset: 18237,
            },
            end: {
              line: 221,
              column: 457,
              offset: 18246,
            },
          },
        },
        {
          type: "text",
          value: " number of steps that a Turing machine with ",
          position: {
            start: {
              line: 221,
              column: 457,
              offset: 18246,
            },
            end: {
              line: 221,
              column: 501,
              offset: 18290,
            },
          },
        },
        {
          type: "inlineCode",
          value: "n",
          position: {
            start: {
              line: 221,
              column: 501,
              offset: 18290,
            },
            end: {
              line: 221,
              column: 504,
              offset: 18293,
            },
          },
        },
        {
          type: "text",
          value: " ",
          position: {
            start: {
              line: 221,
              column: 504,
              offset: 18293,
            },
            end: {
              line: 221,
              column: 505,
              offset: 18294,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "states",
          },
          children: [
            {
              type: "text",
              value: "states",
              position: {
                start: {
                  line: 221,
                  column: 511,
                  offset: 18300,
                },
                end: {
                  line: 221,
                  column: 517,
                  offset: 18306,
                },
              },
            },
          ],
          position: {
            start: {
              line: 221,
              column: 505,
              offset: 18294,
            },
            end: {
              line: 221,
              column: 531,
              offset: 18320,
            },
          },
        },
        {
          type: "text",
          value:
            " can run (with no input) before eventually halting. By definition, Turing machines that run forever are disqualified, which is where the halting problem shows up.",
          position: {
            start: {
              line: 221,
              column: 531,
              offset: 18320,
            },
            end: {
              line: 221,
              column: 693,
              offset: 18482,
            },
          },
        },
      ],
      position: {
        start: {
          line: 221,
          column: 1,
          offset: 17790,
        },
        end: {
          line: 221,
          column: 693,
          offset: 18482,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Currently, we know the value of ",
          position: {
            start: {
              line: 223,
              column: 1,
              offset: 18484,
            },
            end: {
              line: 223,
              column: 33,
              offset: 18516,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB(1)",
          position: {
            start: {
              line: 223,
              column: 33,
              offset: 18516,
            },
            end: {
              line: 223,
              column: 40,
              offset: 18523,
            },
          },
        },
        {
          type: "text",
          value: " through ",
          position: {
            start: {
              line: 223,
              column: 40,
              offset: 18523,
            },
            end: {
              line: 223,
              column: 49,
              offset: 18532,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB(5)",
          position: {
            start: {
              line: 223,
              column: 49,
              offset: 18532,
            },
            end: {
              line: 223,
              column: 56,
              offset: 18539,
            },
          },
        },
        {
          type: "text",
          value: ". Although we can calculate ",
          position: {
            start: {
              line: 223,
              column: 56,
              offset: 18539,
            },
            end: {
              line: 223,
              column: 84,
              offset: 18567,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB",
          position: {
            start: {
              line: 223,
              column: 84,
              offset: 18567,
            },
            end: {
              line: 223,
              column: 88,
              offset: 18571,
            },
          },
        },
        {
          type: "text",
          value: " for ",
          position: {
            start: {
              line: 223,
              column: 88,
              offset: 18571,
            },
            end: {
              line: 223,
              column: 93,
              offset: 18576,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "specific",
              position: {
                start: {
                  line: 223,
                  column: 94,
                  offset: 18577,
                },
                end: {
                  line: 223,
                  column: 102,
                  offset: 18585,
                },
              },
            },
          ],
          position: {
            start: {
              line: 223,
              column: 93,
              offset: 18576,
            },
            end: {
              line: 223,
              column: 103,
              offset: 18586,
            },
          },
        },
        {
          type: "text",
          value: " input values, we ",
          position: {
            start: {
              line: 223,
              column: 103,
              offset: 18586,
            },
            end: {
              line: 223,
              column: 121,
              offset: 18604,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "cannot",
              position: {
                start: {
                  line: 223,
                  column: 122,
                  offset: 18605,
                },
                end: {
                  line: 223,
                  column: 128,
                  offset: 18611,
                },
              },
            },
          ],
          position: {
            start: {
              line: 223,
              column: 121,
              offset: 18604,
            },
            end: {
              line: 223,
              column: 129,
              offset: 18612,
            },
          },
        },
        {
          type: "text",
          value: " write an algorithm that computes ",
          position: {
            start: {
              line: 223,
              column: 129,
              offset: 18612,
            },
            end: {
              line: 223,
              column: 163,
              offset: 18646,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB(n)",
          position: {
            start: {
              line: 223,
              column: 163,
              offset: 18646,
            },
            end: {
              line: 223,
              column: 170,
              offset: 18653,
            },
          },
        },
        {
          type: "text",
          value:
            " in general, because that would violate the uncomputability of the halting problem.",
          position: {
            start: {
              line: 223,
              column: 170,
              offset: 18653,
            },
            end: {
              line: 223,
              column: 253,
              offset: 18736,
            },
          },
        },
      ],
      position: {
        start: {
          line: 223,
          column: 1,
          offset: 18484,
        },
        end: {
          line: 223,
          column: 253,
          offset: 18736,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "And here's the real kicker: In 1961, it was ",
          position: {
            start: {
              line: 225,
              column: 1,
              offset: 18738,
            },
            end: {
              line: 225,
              column: 45,
              offset: 18782,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://gwern.net/doc/cs/computable/1962-rado.pdf",
          children: [
            {
              type: "text",
              value: "proved",
              position: {
                start: {
                  line: 225,
                  column: 46,
                  offset: 18783,
                },
                end: {
                  line: 225,
                  column: 52,
                  offset: 18789,
                },
              },
            },
          ],
          position: {
            start: {
              line: 225,
              column: 45,
              offset: 18782,
            },
            end: {
              line: 225,
              column: 104,
              offset: 18841,
            },
          },
        },
        {
          type: "text",
          value: " that ",
          position: {
            start: {
              line: 225,
              column: 104,
              offset: 18841,
            },
            end: {
              line: 225,
              column: 110,
              offset: 18847,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB(n)",
          position: {
            start: {
              line: 225,
              column: 110,
              offset: 18847,
            },
            end: {
              line: 225,
              column: 117,
              offset: 18854,
            },
          },
        },
        {
          type: "text",
          value: " will eventually grow faster than ",
          position: {
            start: {
              line: 225,
              column: 117,
              offset: 18854,
            },
            end: {
              line: 225,
              column: 151,
              offset: 18888,
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
                  line: 225,
                  column: 152,
                  offset: 18889,
                },
                end: {
                  line: 225,
                  column: 155,
                  offset: 18892,
                },
              },
            },
          ],
          position: {
            start: {
              line: 225,
              column: 151,
              offset: 18888,
            },
            end: {
              line: 225,
              column: 156,
              offset: 18893,
            },
          },
        },
        {
          type: "text",
          value:
            " computable function. In other words, if we can explain, in a step-by-step manner, how to compute the result of a fast-growing function, then ",
          position: {
            start: {
              line: 225,
              column: 156,
              offset: 18893,
            },
            end: {
              line: 225,
              column: 298,
              offset: 19035,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "by definition",
              position: {
                start: {
                  line: 225,
                  column: 299,
                  offset: 19036,
                },
                end: {
                  line: 225,
                  column: 312,
                  offset: 19049,
                },
              },
            },
          ],
          position: {
            start: {
              line: 225,
              column: 298,
              offset: 19035,
            },
            end: {
              line: 225,
              column: 313,
              offset: 19050,
            },
          },
        },
        {
          type: "text",
          value: " that function doesn't grow as fast as ",
          position: {
            start: {
              line: 225,
              column: 313,
              offset: 19050,
            },
            end: {
              line: 225,
              column: 352,
              offset: 19089,
            },
          },
        },
        {
          type: "inlineCode",
          value: "BB(n)",
          position: {
            start: {
              line: 225,
              column: 352,
              offset: 19089,
            },
            end: {
              line: 225,
              column: 359,
              offset: 19096,
            },
          },
        },
        {
          type: "text",
          value: " (or countless other uncomputable functions).",
          position: {
            start: {
              line: 225,
              column: 359,
              offset: 19096,
            },
            end: {
              line: 225,
              column: 404,
              offset: 19141,
            },
          },
        },
      ],
      position: {
        start: {
          line: 225,
          column: 1,
          offset: 18738,
        },
        end: {
          line: 225,
          column: 404,
          offset: 19141,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "In ",
          position: {
            start: {
              line: 227,
              column: 1,
              offset: 19143,
            },
            end: {
              line: 227,
              column: 4,
              offset: 19146,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "other",
              position: {
                start: {
                  line: 227,
                  column: 5,
                  offset: 19147,
                },
                end: {
                  line: 227,
                  column: 10,
                  offset: 19152,
                },
              },
            },
          ],
          position: {
            start: {
              line: 227,
              column: 4,
              offset: 19146,
            },
            end: {
              line: 227,
              column: 11,
              offset: 19153,
            },
          },
        },
        {
          type: "text",
          value: " other words, we can't fly too close to the sun.",
          position: {
            start: {
              line: 227,
              column: 11,
              offset: 19153,
            },
            end: {
              line: 227,
              column: 59,
              offset: 19201,
            },
          },
        },
      ],
      position: {
        start: {
          line: 227,
          column: 1,
          offset: 19143,
        },
        end: {
          line: 227,
          column: 59,
          offset: 19201,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Sidenote: Sbiis Saibian",
          position: {
            start: {
              line: 229,
              column: 4,
              offset: 19206,
            },
            end: {
              line: 229,
              column: 27,
              offset: 19229,
            },
          },
        },
      ],
      position: {
        start: {
          line: 229,
          column: 1,
          offset: 19203,
        },
        end: {
          line: 229,
          column: 27,
          offset: 19229,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I've pretty much finished talking shop, but there's another fascinating angle to this story, which is the individual known pseudonymously as ",
          position: {
            start: {
              line: 231,
              column: 1,
              offset: 19231,
            },
            end: {
              line: 231,
              column: 142,
              offset: 19372,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://googology.fandom.com/wiki/User:Sbiis_Saibian",
          children: [
            {
              type: "text",
              value: "Sbiis Saibian",
              position: {
                start: {
                  line: 231,
                  column: 143,
                  offset: 19373,
                },
                end: {
                  line: 231,
                  column: 156,
                  offset: 19386,
                },
              },
            },
          ],
          position: {
            start: {
              line: 231,
              column: 142,
              offset: 19372,
            },
            end: {
              line: 231,
              column: 211,
              offset: 19441,
            },
          },
        },
        {
          type: "text",
          value: ". While not the creator of the ",
          position: {
            start: {
              line: 231,
              column: 211,
              offset: 19441,
            },
            end: {
              line: 231,
              column: 242,
              offset: 19472,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://googology.fandom.com/wiki/Googology_Wiki",
          children: [
            {
              type: "text",
              value: "Googology wiki",
              position: {
                start: {
                  line: 231,
                  column: 243,
                  offset: 19473,
                },
                end: {
                  line: 231,
                  column: 257,
                  offset: 19487,
                },
              },
            },
          ],
          position: {
            start: {
              line: 231,
              column: 242,
              offset: 19472,
            },
            end: {
              line: 231,
              column: 308,
              offset: 19538,
            },
          },
        },
        {
          type: "text",
          value:
            " (the fandom page for people who enjoy hunting down large numbers), Saibian is one of the most prolific contributors. I was immediately enchanted by the seriousness with which Saibian treats the subject. In fact, my introduction to this entire topic was reading his ",
          position: {
            start: {
              line: 231,
              column: 308,
              offset: 19538,
            },
            end: {
              line: 231,
              column: 574,
              offset: 19804,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://googology.fandom.com/wiki/User_blog:Sbiis_Saibian/Introduction_to_Googology",
          children: [
            {
              type: "text",
              value: "Introduction to Googology",
              position: {
                start: {
                  line: 231,
                  column: 575,
                  offset: 19805,
                },
                end: {
                  line: 231,
                  column: 600,
                  offset: 19830,
                },
              },
            },
          ],
          position: {
            start: {
              line: 231,
              column: 574,
              offset: 19804,
            },
            end: {
              line: 231,
              column: 686,
              offset: 19916,
            },
          },
        },
        {
          type: "text",
          value: " page. Just to sample a few highlights:",
          position: {
            start: {
              line: 231,
              column: 686,
              offset: 19916,
            },
            end: {
              line: 231,
              column: 725,
              offset: 19955,
            },
          },
        },
      ],
      position: {
        start: {
          line: 231,
          column: 1,
          offset: 19231,
        },
        end: {
          line: 231,
          column: 725,
          offset: 19955,
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
              value: '"Googology is not JUST a study. It is a craft."',
              position: {
                start: {
                  line: 233,
                  column: 3,
                  offset: 19959,
                },
                end: {
                  line: 233,
                  column: 50,
                  offset: 20006,
                },
              },
            },
          ],
          position: {
            start: {
              line: 233,
              column: 3,
              offset: 19959,
            },
            end: {
              line: 233,
              column: 50,
              offset: 20006,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                '"If your [sic] going to be a googologist, your going to need to broaden your perspective on infinity."',
              position: {
                start: {
                  line: 235,
                  column: 3,
                  offset: 20011,
                },
                end: {
                  line: 235,
                  column: 105,
                  offset: 20113,
                },
              },
            },
          ],
          position: {
            start: {
              line: 235,
              column: 3,
              offset: 20011,
            },
            end: {
              line: 235,
              column: 105,
              offset: 20113,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                '"In googology your goal is to come up with an honest-to-goodness real ACTUAL number that you can point to and say exists."',
              position: {
                start: {
                  line: 237,
                  column: 3,
                  offset: 20118,
                },
                end: {
                  line: 237,
                  column: 125,
                  offset: 20240,
                },
              },
            },
          ],
          position: {
            start: {
              line: 237,
              column: 3,
              offset: 20118,
            },
            end: {
              line: 237,
              column: 125,
              offset: 20240,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                '"Once you realize how pitiful addition, multiplication, and exponentation is here, the next most likely thing you are to do is grab a bunch of powerful notations you barely understand and smoosh them together in some haphazard manner."',
              position: {
                start: {
                  line: 239,
                  column: 3,
                  offset: 20245,
                },
                end: {
                  line: 239,
                  column: 238,
                  offset: 20480,
                },
              },
            },
          ],
          position: {
            start: {
              line: 239,
              column: 3,
              offset: 20245,
            },
            end: {
              line: 239,
              column: 238,
              offset: 20480,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "\"Don't expect googologist's [sic] to be impressed. Just show us the money. Define your number and we shall see what it does and does not dwarf, otherwise it's just hogwash.\"",
              position: {
                start: {
                  line: 241,
                  column: 3,
                  offset: 20485,
                },
                end: {
                  line: 241,
                  column: 176,
                  offset: 20658,
                },
              },
            },
          ],
          position: {
            start: {
              line: 241,
              column: 3,
              offset: 20485,
            },
            end: {
              line: 241,
              column: 176,
              offset: 20658,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                '"Hidden within every large number notation is a clock ... which ticks slower and slower."',
              position: {
                start: {
                  line: 243,
                  column: 3,
                  offset: 20663,
                },
                end: {
                  line: 243,
                  column: 92,
                  offset: 20752,
                },
              },
            },
          ],
          position: {
            start: {
              line: 243,
              column: 3,
              offset: 20663,
            },
            end: {
              line: 243,
              column: 92,
              offset: 20752,
            },
          },
        },
      ],
      position: {
        start: {
          line: 233,
          column: 1,
          offset: 19957,
        },
        end: {
          line: 243,
          column: 92,
          offset: 20752,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "And my personal favorite:",
          position: {
            start: {
              line: 245,
              column: 1,
              offset: 20754,
            },
            end: {
              line: 245,
              column: 26,
              offset: 20779,
            },
          },
        },
      ],
      position: {
        start: {
          line: 245,
          column: 1,
          offset: 20754,
        },
        end: {
          line: 245,
          column: 26,
          offset: 20779,
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
                '"This is one of the oldest and lamest tricks in the book. Probably since the dawn of large number competitions, there was always been some snarky person who has tried some variation of "my number is whatever your number is plus one". It\'s precisely these sort of school yard "tactics" which have kept googology from making further progress amongst the masses."',
              position: {
                start: {
                  line: 247,
                  column: 3,
                  offset: 20783,
                },
                end: {
                  line: 247,
                  column: 363,
                  offset: 21143,
                },
              },
            },
          ],
          position: {
            start: {
              line: 247,
              column: 3,
              offset: 20783,
            },
            end: {
              line: 247,
              column: 363,
              offset: 21143,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "– Sbiis Saibian",
              position: {
                start: {
                  line: 249,
                  column: 3,
                  offset: 21148,
                },
                end: {
                  line: 249,
                  column: 18,
                  offset: 21163,
                },
              },
            },
          ],
          position: {
            start: {
              line: 249,
              column: 3,
              offset: 21148,
            },
            end: {
              line: 249,
              column: 18,
              offset: 21163,
            },
          },
        },
      ],
      position: {
        start: {
          line: 247,
          column: 1,
          offset: 20781,
        },
        end: {
          line: 249,
          column: 18,
          offset: 21163,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'I was completely fascinated by this anonymous individual and his seemingly unbounded devotion to large numbers. To learn more about the subject, I read through his "',
          position: {
            start: {
              line: 251,
              column: 1,
              offset: 21165,
            },
            end: {
              line: 251,
              column: 166,
              offset: 21330,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://sites.google.com/site/largenumbers/home?authuser=0",
          children: [
            {
              type: "text",
              value: "online textbook",
              position: {
                start: {
                  line: 251,
                  column: 167,
                  offset: 21331,
                },
                end: {
                  line: 251,
                  column: 182,
                  offset: 21346,
                },
              },
            },
          ],
          position: {
            start: {
              line: 251,
              column: 166,
              offset: 21330,
            },
            end: {
              line: 251,
              column: 243,
              offset: 21407,
            },
          },
        },
        {
          type: "text",
          value:
            '" on large numbers. Saibian begins the first section with an introduction so steeped in religious awe that I hardly knew what to make of it:',
          position: {
            start: {
              line: 251,
              column: 243,
              offset: 21407,
            },
            end: {
              line: 251,
              column: 383,
              offset: 21547,
            },
          },
        },
      ],
      position: {
        start: {
          line: 251,
          column: 1,
          offset: 21165,
        },
        end: {
          line: 251,
          column: 383,
          offset: 21547,
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
                "... somewhere in the heavens ... they are waiting ... they exist in another dimension far removed from our own and our mundane concerns ... they live in the gaping yawn of eternity in the sea of infinity ... few are aware of their existence ... the contemplation of the smaller members of their kind is enough to drive men insane ...",
              position: {
                start: {
                  line: 253,
                  column: 3,
                  offset: 21551,
                },
                end: {
                  line: 253,
                  column: 336,
                  offset: 21884,
                },
              },
            },
          ],
          position: {
            start: {
              line: 253,
              column: 3,
              offset: 21551,
            },
            end: {
              line: 253,
              column: 336,
              offset: 21884,
            },
          },
        },
      ],
      position: {
        start: {
          line: 253,
          column: 1,
          offset: 21549,
        },
        end: {
          line: 253,
          column: 336,
          offset: 21884,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'First of all, starting with an ellipsis is such a baller move. "Gaping Yawn of Eternity" sounds like the name of an album I would have liked in middle school, back when I planned on naming my first album ',
          position: {
            start: {
              line: 255,
              column: 1,
              offset: 21886,
            },
            end: {
              line: 255,
              column: 205,
              offset: 22090,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "album",
          },
          children: [
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "Pi Cubed",
                  position: {
                    start: {
                      line: 255,
                      column: 212,
                      offset: 22097,
                    },
                    end: {
                      line: 255,
                      column: 220,
                      offset: 22105,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 255,
                  column: 211,
                  offset: 22096,
                },
                end: {
                  line: 255,
                  column: 221,
                  offset: 22106,
                },
              },
            },
          ],
          position: {
            start: {
              line: 255,
              column: 205,
              offset: 22090,
            },
            end: {
              line: 255,
              column: 234,
              offset: 22119,
            },
          },
        },
        {
          type: "text",
          value:
            ". I have this picture of Saibian crafting massive number after massive number, feeling the burden of humanity on his shoulders as he tames the unspeakable horrors that lie beyond our meager world of billions and trillions.",
          position: {
            start: {
              line: 255,
              column: 234,
              offset: 22119,
            },
            end: {
              line: 255,
              column: 456,
              offset: 22341,
            },
          },
        },
      ],
      position: {
        start: {
          line: 255,
          column: 1,
          offset: 21886,
        },
        end: {
          line: 255,
          column: 456,
          offset: 22341,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "biggest-number/boulder.png",
          alt: "Detective rolling a boulder up a hill",
          position: {
            start: {
              line: 257,
              column: 1,
              offset: 22343,
            },
            end: {
              line: 257,
              column: 69,
              offset: 22411,
            },
          },
        },
      ],
      position: {
        start: {
          line: 257,
          column: 1,
          offset: 22343,
        },
        end: {
          line: 257,
          column: 69,
          offset: 22411,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Every fact I learn about Sbiis Saibian makes me even more curious about the kind of person he is. The most interesting tidbit I've discovered about Saibian is his ",
          position: {
            start: {
              line: 259,
              column: 1,
              offset: 22413,
            },
            end: {
              line: 259,
              column: 164,
              offset: 22576,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://sites.google.com/site/largenumbers/home/appendix/f",
          children: [
            {
              type: "text",
              value: "Decimice",
              position: {
                start: {
                  line: 259,
                  column: 165,
                  offset: 22577,
                },
                end: {
                  line: 259,
                  column: 173,
                  offset: 22585,
                },
              },
            },
          ],
          position: {
            start: {
              line: 259,
              column: 164,
              offset: 22576,
            },
            end: {
              line: 259,
              column: 234,
              offset: 22646,
            },
          },
        },
        {
          type: "text",
          value: ". Saibian writes that, since childhood, he's had strong ",
          position: {
            start: {
              line: 259,
              column: 234,
              offset: 22646,
            },
            end: {
              line: 259,
              column: 290,
              offset: 22702,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Synesthesia",
          children: [
            {
              type: "text",
              value: "color associations",
              position: {
                start: {
                  line: 259,
                  column: 291,
                  offset: 22703,
                },
                end: {
                  line: 259,
                  column: 309,
                  offset: 22721,
                },
              },
            },
          ],
          position: {
            start: {
              line: 259,
              column: 290,
              offset: 22702,
            },
            end: {
              line: 259,
              column: 353,
              offset: 22765,
            },
          },
        },
        {
          type: "text",
          value:
            " with different digits. Wanting to give each digit a distinct personality, he designed and drew ten anthropomorphic mice to represent each of the ten digits, giving each one a unique color theme and even a list of hobbies. He adds:",
          position: {
            start: {
              line: 259,
              column: 353,
              offset: 22765,
            },
            end: {
              line: 259,
              column: 584,
              offset: 22996,
            },
          },
        },
      ],
      position: {
        start: {
          line: 259,
          column: 1,
          offset: 22413,
        },
        end: {
          line: 259,
          column: 584,
          offset: 22996,
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
                '"One character in particular "Fourzi", representing the number 4, has become my avatar and kind of my unofficial "fursona" in the context of googology."',
              position: {
                start: {
                  line: 261,
                  column: 3,
                  offset: 23000,
                },
                end: {
                  line: 261,
                  column: 155,
                  offset: 23152,
                },
              },
            },
          ],
          position: {
            start: {
              line: 261,
              column: 3,
              offset: 23000,
            },
            end: {
              line: 261,
              column: 155,
              offset: 23152,
            },
          },
        },
      ],
      position: {
        start: {
          line: 261,
          column: 1,
          offset: 22998,
        },
        end: {
          line: 261,
          column: 155,
          offset: 23152,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'But even here, in the realm of colored-pencil-drawn numerological mice, Saibian feels the need to define "a few important conventions" he used in creating the Decimice:',
          position: {
            start: {
              line: 263,
              column: 1,
              offset: 23154,
            },
            end: {
              line: 263,
              column: 169,
              offset: 23322,
            },
          },
        },
      ],
      position: {
        start: {
          line: 263,
          column: 1,
          offset: 23154,
        },
        end: {
          line: 263,
          column: 169,
          offset: 23322,
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
                '"Firstly and most importantly, if a number is "even" then it is "male" and if it is "odd" then it is "female". Male names end in -zi where as female names end in -ri. All names are exactly two syllables long."',
              position: {
                start: {
                  line: 265,
                  column: 3,
                  offset: 23326,
                },
                end: {
                  line: 265,
                  column: 212,
                  offset: 23535,
                },
              },
            },
          ],
          position: {
            start: {
              line: 265,
              column: 3,
              offset: 23326,
            },
            end: {
              line: 265,
              column: 212,
              offset: 23535,
            },
          },
        },
      ],
      position: {
        start: {
          line: 265,
          column: 1,
          offset: 23324,
        },
        end: {
          line: 265,
          column: 212,
          offset: 23535,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "It may sound like I'm just making fun of Sbiis Saibian and his obsession with numbers. I will admit that his prose occasionally leans into a bombastic and/or angsty tone that makes it a little difficult to take seriously. But the truth is that, to an extent, I get it.",
          position: {
            start: {
              line: 267,
              column: 1,
              offset: 23537,
            },
            end: {
              line: 267,
              column: 269,
              offset: 23805,
            },
          },
        },
      ],
      position: {
        start: {
          line: 267,
          column: 1,
          offset: 23537,
        },
        end: {
          line: 267,
          column: 269,
          offset: 23805,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "In my 6th grade math class, there was a poster directly next to my desk with the first hundred digits of pi. When I zoned out in class, I would memorize a few digits, and eventually I had the whole thing memorized. This lead me to read Wikipedia pages about pi and its relationship with prime numbers, which got me into number theory. In high school, I was reading about Russell's Paradox, Gödel's Incompleteness Theorem, and the Riemann Hypothesis. I didn't necessarily ",
          position: {
            start: {
              line: 269,
              column: 1,
              offset: 23807,
            },
            end: {
              line: 269,
              column: 472,
              offset: 24278,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "understand",
              position: {
                start: {
                  line: 269,
                  column: 473,
                  offset: 24279,
                },
                end: {
                  line: 269,
                  column: 483,
                  offset: 24289,
                },
              },
            },
          ],
          position: {
            start: {
              line: 269,
              column: 472,
              offset: 24278,
            },
            end: {
              line: 269,
              column: 484,
              offset: 24290,
            },
          },
        },
        {
          type: "text",
          value: " all of it, but it all felt ",
          position: {
            start: {
              line: 269,
              column: 484,
              offset: 24290,
            },
            end: {
              line: 269,
              column: 512,
              offset: 24318,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "important",
              position: {
                start: {
                  line: 269,
                  column: 513,
                  offset: 24319,
                },
                end: {
                  line: 269,
                  column: 522,
                  offset: 24328,
                },
              },
            },
          ],
          position: {
            start: {
              line: 269,
              column: 512,
              offset: 24318,
            },
            end: {
              line: 269,
              column: 523,
              offset: 24329,
            },
          },
        },
        {
          type: "text",
          value: " in a way I couldn't quite put into words.",
          position: {
            start: {
              line: 269,
              column: 523,
              offset: 24329,
            },
            end: {
              line: 269,
              column: 565,
              offset: 24371,
            },
          },
        },
      ],
      position: {
        start: {
          line: 269,
          column: 1,
          offset: 23807,
        },
        end: {
          line: 269,
          column: 565,
          offset: 24371,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "I distinctly remember a moment in college when I became hyper-aware of the fact that humans' unique ability to conceptualize numbers as an abstract thing enabled us to ",
          position: {
            start: {
              line: 271,
              column: 1,
              offset: 24373,
            },
            end: {
              line: 271,
              column: 169,
              offset: 24541,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "describe the laws of physics",
              position: {
                start: {
                  line: 271,
                  column: 170,
                  offset: 24542,
                },
                end: {
                  line: 271,
                  column: 198,
                  offset: 24570,
                },
              },
            },
          ],
          position: {
            start: {
              line: 271,
              column: 169,
              offset: 24541,
            },
            end: {
              line: 271,
              column: 199,
              offset: 24571,
            },
          },
        },
        {
          type: "text",
          value: " and even ",
          position: {
            start: {
              line: 271,
              column: 199,
              offset: 24571,
            },
            end: {
              line: 271,
              column: 209,
              offset: 24581,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "communicate at the speed of light",
              position: {
                start: {
                  line: 271,
                  column: 210,
                  offset: 24582,
                },
                end: {
                  line: 271,
                  column: 243,
                  offset: 24615,
                },
              },
            },
          ],
          position: {
            start: {
              line: 271,
              column: 209,
              offset: 24581,
            },
            end: {
              line: 271,
              column: 244,
              offset: 24616,
            },
          },
        },
        {
          type: "text",
          value:
            ". In that moment, I felt a kind of existential terror. I looked around at everyday objects like lamps and laptops with a new sense of awe and disbelief. Somehow, the world kept turning.",
          position: {
            start: {
              line: 271,
              column: 244,
              offset: 24616,
            },
            end: {
              line: 271,
              column: 429,
              offset: 24801,
            },
          },
        },
      ],
      position: {
        start: {
          line: 271,
          column: 1,
          offset: 24373,
        },
        end: {
          line: 271,
          column: 429,
          offset: 24801,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'And that\'s kind of the crux of this essay. The main reason I found Sbiis Saibian (and the entire subject of googology) so fascinating is that it makes me feel, simultaneously, two polar opposite reactions: "Who cares?" and "How could you not care?"',
          position: {
            start: {
              line: 273,
              column: 1,
              offset: 24803,
            },
            end: {
              line: 273,
              column: 249,
              offset: 25051,
            },
          },
        },
      ],
      position: {
        start: {
          line: 273,
          column: 1,
          offset: 24803,
        },
        end: {
          line: 273,
          column: 249,
          offset: 25051,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "Who cares?",
          position: {
            start: {
              line: 275,
              column: 4,
              offset: 25056,
            },
            end: {
              line: 275,
              column: 14,
              offset: 25066,
            },
          },
        },
      ],
      position: {
        start: {
          line: 275,
          column: 1,
          offset: 25053,
        },
        end: {
          line: 275,
          column: 14,
          offset: 25066,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "So... what are the practical implications of this? Sure, very big numbers are often useful, like the speed of light or the number of bits in a massive data warehouse. But once we start dealing with numbers like Graham's number, whose size absolutely dwarfs the scale of the universe, what's the point?",
          position: {
            start: {
              line: 277,
              column: 1,
              offset: 25068,
            },
            end: {
              line: 277,
              column: 302,
              offset: 25369,
            },
          },
        },
      ],
      position: {
        start: {
          line: 277,
          column: 1,
          offset: 25068,
        },
        end: {
          line: 277,
          column: 302,
          offset: 25369,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Some philosophers have taken this viewpoint to the extreme: to ",
          position: {
            start: {
              line: 279,
              column: 1,
              offset: 25371,
            },
            end: {
              line: 279,
              column: 64,
              offset: 25434,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/Ultrafinitism",
          children: [
            {
              type: "text",
              value: "ultrafinitists",
              position: {
                start: {
                  line: 279,
                  column: 65,
                  offset: 25435,
                },
                end: {
                  line: 279,
                  column: 79,
                  offset: 25449,
                },
              },
            },
          ],
          position: {
            start: {
              line: 279,
              column: 64,
              offset: 25434,
            },
            end: {
              line: 279,
              column: 125,
              offset: 25495,
            },
          },
        },
        {
          type: "text",
          value: ", if something (e.g. a number) can't be ",
          position: {
            start: {
              line: 279,
              column: 125,
              offset: 25495,
            },
            end: {
              line: 279,
              column: 165,
              offset: 25535,
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
                  line: 279,
                  column: 166,
                  offset: 25536,
                },
                end: {
                  line: 279,
                  column: 174,
                  offset: 25544,
                },
              },
            },
          ],
          position: {
            start: {
              line: 279,
              column: 165,
              offset: 25535,
            },
            end: {
              line: 279,
              column: 175,
              offset: 25545,
            },
          },
        },
        {
          type: "text",
          value:
            " constructed, then we're not justified in saying it exists. Since it doesn't seem possible to ever have Graham's number of ",
          position: {
            start: {
              line: 279,
              column: 175,
              offset: 25545,
            },
            end: {
              line: 279,
              column: 298,
              offset: 25668,
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
                  line: 279,
                  column: 299,
                  offset: 25669,
                },
                end: {
                  line: 279,
                  column: 307,
                  offset: 25677,
                },
              },
            },
          ],
          position: {
            start: {
              line: 279,
              column: 298,
              offset: 25668,
            },
            end: {
              line: 279,
              column: 308,
              offset: 25678,
            },
          },
        },
        {
          type: "text",
          value:
            ', an ultrafinitist would argue that the number itself hasn\'t actually been "found" or "discovered". It\'s just as nonexistent as unicorns. Ultrafinitism takes issue with the circular definition of numbers in classical mathematics: at the lowest level, a number is the repeated application of adding one, so e.g. ',
          position: {
            start: {
              line: 279,
              column: 308,
              offset: 25678,
            },
            end: {
              line: 279,
              column: 619,
              offset: 25989,
            },
          },
        },
        {
          type: "inlineCode",
          value: "3 = 1+1+1",
          position: {
            start: {
              line: 279,
              column: 619,
              offset: 25989,
            },
            end: {
              line: 279,
              column: 630,
              offset: 26000,
            },
          },
        },
        {
          type: "text",
          value:
            ". But for numbers like Graham's number, you'd just say \"Trust me, there's Graham's number of ",
          position: {
            start: {
              line: 279,
              column: 630,
              offset: 26000,
            },
            end: {
              line: 279,
              column: 723,
              offset: 26093,
            },
          },
        },
        {
          type: "inlineCode",
          value: "+1",
          position: {
            start: {
              line: 279,
              column: 723,
              offset: 26093,
            },
            end: {
              line: 279,
              column: 727,
              offset: 26097,
            },
          },
        },
        {
          type: "text",
          value: "s\". Ultrafinitists aren't a big fan of that circularity.",
          position: {
            start: {
              line: 279,
              column: 727,
              offset: 26097,
            },
            end: {
              line: 279,
              column: 783,
              offset: 26153,
            },
          },
        },
      ],
      position: {
        start: {
          line: 279,
          column: 1,
          offset: 25371,
        },
        end: {
          line: 279,
          column: 783,
          offset: 26153,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Pedantic? Maybe. But it illustrates the point that the physical, actual, as-it-relates-to-humans usefulness of numbers like Graham's number (or any of the unimaginably larger numbers googologists have cooked up) seems like basically zero.",
          position: {
            start: {
              line: 281,
              column: 1,
              offset: 26155,
            },
            end: {
              line: 281,
              column: 239,
              offset: 26393,
            },
          },
        },
      ],
      position: {
        start: {
          line: 281,
          column: 1,
          offset: 26155,
        },
        end: {
          line: 281,
          column: 239,
          offset: 26393,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Furthermore, we know that there's no pot of gold at the end of the rainbow, so to speak. Above every fast-growing function is another, equally pointless faster-growing function, and above ",
          position: {
            start: {
              line: 283,
              column: 1,
              offset: 26395,
            },
            end: {
              line: 283,
              column: 189,
              offset: 26583,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "that",
              position: {
                start: {
                  line: 283,
                  column: 190,
                  offset: 26584,
                },
                end: {
                  line: 283,
                  column: 194,
                  offset: 26588,
                },
              },
            },
          ],
          position: {
            start: {
              line: 283,
              column: 189,
              offset: 26583,
            },
            end: {
              line: 283,
              column: 195,
              offset: 26589,
            },
          },
        },
        {
          type: "text",
          value:
            " is an infinite number of uncomputable functions that will never be described. So who cares?",
          position: {
            start: {
              line: 283,
              column: 195,
              offset: 26589,
            },
            end: {
              line: 283,
              column: 287,
              offset: 26681,
            },
          },
        },
      ],
      position: {
        start: {
          line: 283,
          column: 1,
          offset: 26395,
        },
        end: {
          line: 283,
          column: 287,
          offset: 26681,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "How could you not care?",
          position: {
            start: {
              line: 285,
              column: 4,
              offset: 26686,
            },
            end: {
              line: 285,
              column: 27,
              offset: 26709,
            },
          },
        },
      ],
      position: {
        start: {
          line: 285,
          column: 1,
          offset: 26683,
        },
        end: {
          line: 285,
          column: 27,
          offset: 26709,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "First, I'd like to refute the idea that \"googology is pointless because there's very limited practical value\". As Sbiis Saibian himself stated, googology is a ",
          position: {
            start: {
              line: 287,
              column: 1,
              offset: 26711,
            },
            end: {
              line: 287,
              column: 160,
              offset: 26870,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "craft",
              position: {
                start: {
                  line: 287,
                  column: 161,
                  offset: 26871,
                },
                end: {
                  line: 287,
                  column: 166,
                  offset: 26876,
                },
              },
            },
          ],
          position: {
            start: {
              line: 287,
              column: 160,
              offset: 26870,
            },
            end: {
              line: 287,
              column: 167,
              offset: 26877,
            },
          },
        },
        {
          type: "text",
          value:
            ". It's an art, it's a challenge. When George Mallory was asked why he wanted to climb Mount Everest, he reportedly said, \"Because it's there.\" Well, googologists seek out bigger numbers because they're ",
          position: {
            start: {
              line: 287,
              column: 167,
              offset: 26877,
            },
            end: {
              line: 287,
              column: 369,
              offset: 27079,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "there",
              position: {
                start: {
                  line: 287,
                  column: 370,
                  offset: 27080,
                },
                end: {
                  line: 287,
                  column: 375,
                  offset: 27085,
                },
              },
            },
          ],
          position: {
            start: {
              line: 287,
              column: 369,
              offset: 27079,
            },
            end: {
              line: 287,
              column: 376,
              offset: 27086,
            },
          },
        },
        {
          type: "text",
          value: ". What's more human than that?",
          position: {
            start: {
              line: 287,
              column: 376,
              offset: 27086,
            },
            end: {
              line: 287,
              column: 406,
              offset: 27116,
            },
          },
        },
      ],
      position: {
        start: {
          line: 287,
          column: 1,
          offset: 26711,
        },
        end: {
          line: 287,
          column: 406,
          offset: 27116,
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
                "\"People ask me, 'What is the use of climbing Mount Everest?' and my answer must at once be, 'It is of no use. There is not the slightest prospect of any gain whatsoever. Oh, we may learn a little about the behaviour of the human body at high altitudes, and possibly medical men may turn our observation to some account for the purposes of aviation. But otherwise nothing will come of it. We shall not bring back a single bit of gold or silver, not a gem, nor any coal or iron... What we get from this adventure is just sheer joy. And joy is, after all, the end of life. We do not live to eat and make money. We eat and make money to be able to live. That is what life means and what life is for.\"",
              position: {
                start: {
                  line: 289,
                  column: 3,
                  offset: 27120,
                },
                end: {
                  line: 289,
                  column: 699,
                  offset: 27816,
                },
              },
            },
          ],
          position: {
            start: {
              line: 289,
              column: 3,
              offset: 27120,
            },
            end: {
              line: 289,
              column: 699,
              offset: 27816,
            },
          },
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "– George Mallory",
              position: {
                start: {
                  line: 291,
                  column: 3,
                  offset: 27821,
                },
                end: {
                  line: 291,
                  column: 19,
                  offset: 27837,
                },
              },
            },
          ],
          position: {
            start: {
              line: 291,
              column: 3,
              offset: 27821,
            },
            end: {
              line: 291,
              column: 19,
              offset: 27837,
            },
          },
        },
      ],
      position: {
        start: {
          line: 289,
          column: 1,
          offset: 27118,
        },
        end: {
          line: 291,
          column: 19,
          offset: 27837,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Well put, George. Also, saying that the study of large numbers is useless because we'll probably never use the numbers themselves is kind of like arguing that ",
          position: {
            start: {
              line: 293,
              column: 1,
              offset: 27839,
            },
            end: {
              line: 293,
              column: 160,
              offset: 27998,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "school",
              position: {
                start: {
                  line: 293,
                  column: 161,
                  offset: 27999,
                },
                end: {
                  line: 293,
                  column: 167,
                  offset: 28005,
                },
              },
            },
          ],
          position: {
            start: {
              line: 293,
              column: 160,
              offset: 27998,
            },
            end: {
              line: 293,
              column: 168,
              offset: 28006,
            },
          },
        },
        {
          type: "text",
          value:
            " is useless because no one remembers what year the French Revolution started, or what the Golgi apparatus does, or what a covalent bond is. Just like school teaches kids how to self-organize and handle social situations (among other things), there's value in the ",
          position: {
            start: {
              line: 293,
              column: 168,
              offset: 28006,
            },
            end: {
              line: 293,
              column: 431,
              offset: 28269,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "method",
              position: {
                start: {
                  line: 293,
                  column: 432,
                  offset: 28270,
                },
                end: {
                  line: 293,
                  column: 438,
                  offset: 28276,
                },
              },
            },
          ],
          position: {
            start: {
              line: 293,
              column: 431,
              offset: 28269,
            },
            end: {
              line: 293,
              column: 439,
              offset: 28277,
            },
          },
        },
        {
          type: "text",
          value: " that googologists use to define larger numbers.",
          position: {
            start: {
              line: 293,
              column: 439,
              offset: 28277,
            },
            end: {
              line: 293,
              column: 487,
              offset: 28325,
            },
          },
        },
      ],
      position: {
        start: {
          line: 293,
          column: 1,
          offset: 27839,
        },
        end: {
          line: 293,
          column: 487,
          offset: 28325,
        },
      },
    },
    {
      type: "heading",
      depth: 3,
      children: [
        {
          type: "text",
          value: "The abstraction dojo",
          position: {
            start: {
              line: 295,
              column: 5,
              offset: 28331,
            },
            end: {
              line: 295,
              column: 25,
              offset: 28351,
            },
          },
        },
      ],
      position: {
        start: {
          line: 295,
          column: 1,
          offset: 28327,
        },
        end: {
          line: 295,
          column: 25,
          offset: 28351,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "image",
          title: null,
          url: "biggest-number/pendulum.png",
          alt: "A physical pendulum being abstracted to an ideal pendulum being abstracted to a formula",
          position: {
            start: {
              line: 297,
              column: 1,
              offset: 28353,
            },
            end: {
              line: 297,
              column: 120,
              offset: 28472,
            },
          },
        },
      ],
      position: {
        start: {
          line: 297,
          column: 1,
          offset: 28353,
        },
        end: {
          line: 297,
          column: 120,
          offset: 28472,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "To me, googology is like a dojo where one's capacity for ",
          position: {
            start: {
              line: 299,
              column: 1,
              offset: 28474,
            },
            end: {
              line: 299,
              column: 58,
              offset: 28531,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "abstraction",
              position: {
                start: {
                  line: 299,
                  column: 59,
                  offset: 28532,
                },
                end: {
                  line: 299,
                  column: 70,
                  offset: 28543,
                },
              },
            },
          ],
          position: {
            start: {
              line: 299,
              column: 58,
              offset: 28531,
            },
            end: {
              line: 299,
              column: 71,
              offset: 28544,
            },
          },
        },
        {
          type: "text",
          value: " is pushed to its limits. I very quickly ran into my ",
          position: {
            start: {
              line: 299,
              column: 71,
              offset: 28544,
            },
            end: {
              line: 299,
              column: 124,
              offset: 28597,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "own",
              position: {
                start: {
                  line: 299,
                  column: 125,
                  offset: 28598,
                },
                end: {
                  line: 299,
                  column: 128,
                  offset: 28601,
                },
              },
            },
          ],
          position: {
            start: {
              line: 299,
              column: 124,
              offset: 28597,
            },
            end: {
              line: 299,
              column: 129,
              offset: 28602,
            },
          },
        },
        {
          type: "text",
          value:
            " limits for abstraction when trying to intuitively understand Conway's chained arrow notation for chains of four or more arrows. The definition itself was simple enough, and I was able to work through a few examples with four arrows. But I still wasn't able to ",
          position: {
            start: {
              line: 299,
              column: 129,
              offset: 28602,
            },
            end: {
              line: 299,
              column: 390,
              offset: 28863,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "grok",
          },
          children: [
            {
              type: "text",
              value: "grok",
              position: {
                start: {
                  line: 299,
                  column: 396,
                  offset: 28869,
                },
                end: {
                  line: 299,
                  column: 400,
                  offset: 28873,
                },
              },
            },
          ],
          position: {
            start: {
              line: 299,
              column: 390,
              offset: 28863,
            },
            end: {
              line: 299,
              column: 412,
              offset: 28885,
            },
          },
        },
        {
          type: "text",
          value:
            " it; I didn't fully see what the chained arrows were supposed to ",
          position: {
            start: {
              line: 299,
              column: 412,
              offset: 28885,
            },
            end: {
              line: 299,
              column: 477,
              offset: 28950,
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
                  line: 299,
                  column: 478,
                  offset: 28951,
                },
                end: {
                  line: 299,
                  column: 487,
                  offset: 28960,
                },
              },
            },
          ],
          position: {
            start: {
              line: 299,
              column: 477,
              offset: 28950,
            },
            end: {
              line: 299,
              column: 488,
              offset: 28961,
            },
          },
        },
        {
          type: "text",
          value:
            " in the same way that I deeply understand what addition, multiplication, and exponentiation represent.",
          position: {
            start: {
              line: 299,
              column: 488,
              offset: 28961,
            },
            end: {
              line: 299,
              column: 590,
              offset: 29063,
            },
          },
        },
      ],
      position: {
        start: {
          line: 299,
          column: 1,
          offset: 28474,
        },
        end: {
          line: 299,
          column: 590,
          offset: 29063,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The study of large numbers pushes this understanding of numbers to the absolute extreme; to the scale of the universe, and then so far beyond it that the observable universe becomes a rounding error. It's so irreverent, I totally love it. But, as Saibian pointed out, crafting these massive numbers requires much more skill than \"smooshing powerful notations in a haphazard manner\"; each new notation requires effort and ingenuity, holding in one's head multiple dizzying towers of abstraction, and generalizing ",
          position: {
            start: {
              line: 301,
              column: 1,
              offset: 29065,
            },
            end: {
              line: 301,
              column: 513,
              offset: 29577,
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
                  line: 301,
                  column: 514,
                  offset: 29578,
                },
                end: {
                  line: 301,
                  column: 519,
                  offset: 29583,
                },
              },
            },
          ],
          position: {
            start: {
              line: 301,
              column: 513,
              offset: 29577,
            },
            end: {
              line: 301,
              column: 520,
              offset: 29584,
            },
          },
        },
        {
          type: "text",
          value: " towers with an even ",
          position: {
            start: {
              line: 301,
              column: 520,
              offset: 29584,
            },
            end: {
              line: 301,
              column: 541,
              offset: 29605,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "grander",
              position: {
                start: {
                  line: 301,
                  column: 542,
                  offset: 29606,
                },
                end: {
                  line: 301,
                  column: 549,
                  offset: 29613,
                },
              },
            },
          ],
          position: {
            start: {
              line: 301,
              column: 541,
              offset: 29605,
            },
            end: {
              line: 301,
              column: 550,
              offset: 29614,
            },
          },
        },
        {
          type: "text",
          value: " layer of abstraction.",
          position: {
            start: {
              line: 301,
              column: 550,
              offset: 29614,
            },
            end: {
              line: 301,
              column: 572,
              offset: 29636,
            },
          },
        },
      ],
      position: {
        start: {
          line: 301,
          column: 1,
          offset: 29065,
        },
        end: {
          line: 301,
          column: 572,
          offset: 29636,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Humans have a unique power for identifying abstract patterns and generalizing them. It's that very skill which has allowed us to generalize, say, counting numbers to rational numbers, to irrational numbers, to negative numbers (and zero), to complex numbers, to multidimensional vectors, and so on. Each one of those breakthroughs improved (or enabled the existence of) all kinds of human endeavors from accounting and steam engines to GPS and quantum computers.",
          position: {
            start: {
              line: 303,
              column: 1,
              offset: 29638,
            },
            end: {
              line: 303,
              column: 463,
              offset: 30100,
            },
          },
        },
      ],
      position: {
        start: {
          line: 303,
          column: 1,
          offset: 29638,
        },
        end: {
          line: 303,
          column: 463,
          offset: 30100,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            'One of my favorite examples of this principle is the work of Claude Shannon, who realized that the amount of "information" in a message could be ',
          position: {
            start: {
              line: 305,
              column: 1,
              offset: 30102,
            },
            end: {
              line: 305,
              column: 146,
              offset: 30247,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "measured",
              position: {
                start: {
                  line: 305,
                  column: 147,
                  offset: 30248,
                },
                end: {
                  line: 305,
                  column: 155,
                  offset: 30256,
                },
              },
            },
          ],
          position: {
            start: {
              line: 305,
              column: 146,
              offset: 30247,
            },
            end: {
              line: 305,
              column: 156,
              offset: 30257,
            },
          },
        },
        {
          type: "text",
          value:
            ", regardless of whether that message was a telegraph, a sequence of numbers, or the results of coin tosses. His ",
          position: {
            start: {
              line: 305,
              column: 156,
              offset: 30257,
            },
            end: {
              line: 305,
              column: 268,
              offset: 30369,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.quantamagazine.org/how-claude-shannons-information-theory-invented-the-future-20201222/",
          children: [
            {
              type: "text",
              value: "development of this idea",
              position: {
                start: {
                  line: 305,
                  column: 269,
                  offset: 30370,
                },
                end: {
                  line: 305,
                  column: 293,
                  offset: 30394,
                },
              },
            },
          ],
          position: {
            start: {
              line: 305,
              column: 268,
              offset: 30369,
            },
            end: {
              line: 305,
              column: 395,
              offset: 30496,
            },
          },
        },
        {
          type: "text",
          value:
            " resulted in a theory so general that it revolutionized basically ",
          position: {
            start: {
              line: 305,
              column: 395,
              offset: 30496,
            },
            end: {
              line: 305,
              column: 461,
              offset: 30562,
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
                  line: 305,
                  column: 462,
                  offset: 30563,
                },
                end: {
                  line: 305,
                  column: 467,
                  offset: 30568,
                },
              },
            },
          ],
          position: {
            start: {
              line: 305,
              column: 461,
              offset: 30562,
            },
            end: {
              line: 305,
              column: 468,
              offset: 30569,
            },
          },
        },
        {
          type: "text",
          value: " domain of science, and was the basis for many ",
          position: {
            start: {
              line: 305,
              column: 468,
              offset: 30569,
            },
            end: {
              line: 305,
              column: 515,
              offset: 30616,
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
                  line: 305,
                  column: 516,
                  offset: 30617,
                },
                end: {
                  line: 305,
                  column: 519,
                  offset: 30620,
                },
              },
            },
          ],
          position: {
            start: {
              line: 305,
              column: 515,
              offset: 30616,
            },
            end: {
              line: 305,
              column: 520,
              offset: 30621,
            },
          },
        },
        {
          type: "text",
          value:
            " disciplines. Just to name a few: electrical engineering, statistics, computer science, neurology, physics, cryptography, biology, and artificial intelligence. That's a ",
          position: {
            start: {
              line: 305,
              column: 520,
              offset: 30621,
            },
            end: {
              line: 305,
              column: 689,
              offset: 30790,
            },
          },
        },
        {
          type: "textDirective",
          name: "hook",
          attributes: {
            id: "flood",
          },
          children: [
            {
              type: "text",
              value: "pretty powerful abstraction",
              position: {
                start: {
                  line: 305,
                  column: 695,
                  offset: 30796,
                },
                end: {
                  line: 305,
                  column: 722,
                  offset: 30823,
                },
              },
            },
          ],
          position: {
            start: {
              line: 305,
              column: 689,
              offset: 30790,
            },
            end: {
              line: 305,
              column: 735,
              offset: 30836,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 305,
              column: 735,
              offset: 30836,
            },
            end: {
              line: 305,
              column: 736,
              offset: 30837,
            },
          },
        },
      ],
      position: {
        start: {
          line: 305,
          column: 1,
          offset: 30102,
        },
        end: {
          line: 305,
          column: 736,
          offset: 30837,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Today, we're seeing computer scientists attempt to generalize ",
          position: {
            start: {
              line: 307,
              column: 1,
              offset: 30839,
            },
            end: {
              line: 307,
              column: 63,
              offset: 30901,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "thought itself",
              position: {
                start: {
                  line: 307,
                  column: 64,
                  offset: 30902,
                },
                end: {
                  line: 307,
                  column: 78,
                  offset: 30916,
                },
              },
            },
          ],
          position: {
            start: {
              line: 307,
              column: 63,
              offset: 30901,
            },
            end: {
              line: 307,
              column: 79,
              offset: 30917,
            },
          },
        },
        {
          type: "text",
          value:
            " as a massive, immensely complex function. If such a thing were truly possible, would that mean that we generalized our own ",
          position: {
            start: {
              line: 307,
              column: 79,
              offset: 30917,
            },
            end: {
              line: 307,
              column: 203,
              offset: 31041,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "ability",
              position: {
                start: {
                  line: 307,
                  column: 204,
                  offset: 31042,
                },
                end: {
                  line: 307,
                  column: 211,
                  offset: 31049,
                },
              },
            },
          ],
          position: {
            start: {
              line: 307,
              column: 203,
              offset: 31041,
            },
            end: {
              line: 307,
              column: 212,
              offset: 31050,
            },
          },
        },
        {
          type: "text",
          value:
            " to generalize? What does that even mean for human intelligence? It's all very ",
          position: {
            start: {
              line: 307,
              column: 212,
              offset: 31050,
            },
            end: {
              line: 307,
              column: 291,
              offset: 31129,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach",
          children: [
            {
              type: "text",
              value: "Gödel-y",
              position: {
                start: {
                  line: 307,
                  column: 292,
                  offset: 31130,
                },
                end: {
                  line: 307,
                  column: 299,
                  offset: 31137,
                },
              },
            },
          ],
          position: {
            start: {
              line: 307,
              column: 291,
              offset: 31129,
            },
            end: {
              line: 307,
              column: 356,
              offset: 31194,
            },
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: {
              line: 307,
              column: 356,
              offset: 31194,
            },
            end: {
              line: 307,
              column: 357,
              offset: 31195,
            },
          },
        },
      ],
      position: {
        start: {
          line: 307,
          column: 1,
          offset: 30839,
        },
        end: {
          line: 307,
          column: 357,
          offset: 31195,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "In other words, humans have used abstractions like numbers and information theory to harness the laws of reality and propel ourselves into the next technological age. But in the face of all of that technological progress, I think there's something deeply artistic about discovering higher abstractions just for the sake of ",
          position: {
            start: {
              line: 309,
              column: 1,
              offset: 31197,
            },
            end: {
              line: 309,
              column: 324,
              offset: 31520,
            },
          },
        },
        {
          type: "emphasis",
          children: [
            {
              type: "text",
              value: "doing",
              position: {
                start: {
                  line: 309,
                  column: 325,
                  offset: 31521,
                },
                end: {
                  line: 309,
                  column: 330,
                  offset: 31526,
                },
              },
            },
          ],
          position: {
            start: {
              line: 309,
              column: 324,
              offset: 31520,
            },
            end: {
              line: 309,
              column: 331,
              offset: 31527,
            },
          },
        },
        {
          type: "text",
          value:
            " it, despite the Sisyphean nature of the task. In my mind, googologists are like martial arts masters, honing their craft in the art of self defense without expecting a fight. Beyond the realm of practical value, I salute the googologists building their towers in the sky. Damn, now I'm starting to sound like Sbiis.",
          position: {
            start: {
              line: 309,
              column: 331,
              offset: 31527,
            },
            end: {
              line: 309,
              column: 647,
              offset: 31843,
            },
          },
        },
      ],
      position: {
        start: {
          line: 309,
          column: 1,
          offset: 31197,
        },
        end: {
          line: 309,
          column: 647,
          offset: 31843,
        },
      },
    },
    {
      type: "heading",
      depth: 2,
      children: [
        {
          type: "text",
          value: "So... what's the biggest number?",
          position: {
            start: {
              line: 311,
              column: 4,
              offset: 31848,
            },
            end: {
              line: 311,
              column: 36,
              offset: 31880,
            },
          },
        },
      ],
      position: {
        start: {
          line: 311,
          column: 1,
          offset: 31845,
        },
        end: {
          line: 311,
          column: 36,
          offset: 31880,
        },
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Probably ",
          position: {
            start: {
              line: 313,
              column: 1,
              offset: 31882,
            },
            end: {
              line: 313,
              column: 10,
              offset: 31891,
            },
          },
        },
        {
          type: "link",
          title: null,
          url: "https://www.youtube.com/watch?v=SMKnskpPYeo",
          children: [
            {
              type: "text",
              value: "ten",
              position: {
                start: {
                  line: 313,
                  column: 11,
                  offset: 31892,
                },
                end: {
                  line: 313,
                  column: 14,
                  offset: 31895,
                },
              },
            },
          ],
          position: {
            start: {
              line: 313,
              column: 10,
              offset: 31891,
            },
            end: {
              line: 313,
              column: 60,
              offset: 31941,
            },
          },
        },
        {
          type: "text",
          value: ". ■",
          position: {
            start: {
              line: 313,
              column: 60,
              offset: 31941,
            },
            end: {
              line: 313,
              column: 63,
              offset: 31944,
            },
          },
        },
      ],
      position: {
        start: {
          line: 313,
          column: 1,
          offset: 31882,
        },
        end: {
          line: 313,
          column: 63,
          offset: 31944,
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
            id: "hierarchy",
          },
          children: [
            {
              type: "text",
              value: "I ",
              position: {
                start: {
                  line: 315,
                  column: 11,
                  offset: 31956,
                },
                end: {
                  line: 315,
                  column: 13,
                  offset: 31958,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "was",
                  position: {
                    start: {
                      line: 315,
                      column: 14,
                      offset: 31959,
                    },
                    end: {
                      line: 315,
                      column: 17,
                      offset: 31962,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 315,
                  column: 13,
                  offset: 31958,
                },
                end: {
                  line: 315,
                  column: 18,
                  offset: 31963,
                },
              },
            },
            {
              type: "text",
              value:
                " actually planning to going on, specifically to talk about the ",
              position: {
                start: {
                  line: 315,
                  column: 18,
                  offset: 31963,
                },
                end: {
                  line: 315,
                  column: 81,
                  offset: 32026,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/Fast-growing_hierarchy",
              children: [
                {
                  type: "text",
                  value: "Fast-growing hierarchy",
                  position: {
                    start: {
                      line: 315,
                      column: 82,
                      offset: 32027,
                    },
                    end: {
                      line: 315,
                      column: 104,
                      offset: 32049,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 315,
                  column: 81,
                  offset: 32026,
                },
                end: {
                  line: 315,
                  column: 159,
                  offset: 32104,
                },
              },
            },
            {
              type: "text",
              value:
                ". But, as I was trying to understand what the heck it is, I realized I was slightly out of my league and would need to spend a lot more time understanding it before I could try explaining it. I'll leave it here for reference, though, in case you're braver than I am.",
              position: {
                start: {
                  line: 315,
                  column: 159,
                  offset: 32104,
                },
                end: {
                  line: 315,
                  column: 425,
                  offset: 32370,
                },
              },
            },
          ],
          position: {
            start: {
              line: 315,
              column: 1,
              offset: 31946,
            },
            end: {
              line: 315,
              column: 442,
              offset: 32387,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 315,
              column: 442,
              offset: 32387,
            },
            end: {
              line: 316,
              column: 1,
              offset: 32388,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "sqrt",
          },
          children: [
            {
              type: "text",
              value:
                "Yes, I know we could optimize this by only iterating up to ",
              position: {
                start: {
                  line: 316,
                  column: 11,
                  offset: 32398,
                },
                end: {
                  line: 316,
                  column: 70,
                  offset: 32457,
                },
              },
            },
            {
              type: "inlineCode",
              value: "sqrt(n)",
              position: {
                start: {
                  line: 316,
                  column: 70,
                  offset: 32457,
                },
                end: {
                  line: 316,
                  column: 79,
                  offset: 32466,
                },
              },
            },
            {
              type: "text",
              value: ", but the point is only that it's ",
              position: {
                start: {
                  line: 316,
                  column: 79,
                  offset: 32466,
                },
                end: {
                  line: 316,
                  column: 113,
                  offset: 32500,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "possible",
                  position: {
                    start: {
                      line: 316,
                      column: 114,
                      offset: 32501,
                    },
                    end: {
                      line: 316,
                      column: 122,
                      offset: 32509,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 316,
                  column: 113,
                  offset: 32500,
                },
                end: {
                  line: 316,
                  column: 123,
                  offset: 32510,
                },
              },
            },
            {
              type: "text",
              value: ", not necessarily ",
              position: {
                start: {
                  line: 316,
                  column: 123,
                  offset: 32510,
                },
                end: {
                  line: 316,
                  column: 141,
                  offset: 32528,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "efficient",
                  position: {
                    start: {
                      line: 316,
                      column: 142,
                      offset: 32529,
                    },
                    end: {
                      line: 316,
                      column: 151,
                      offset: 32538,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 316,
                  column: 141,
                  offset: 32528,
                },
                end: {
                  line: 316,
                  column: 152,
                  offset: 32539,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 316,
                  column: 152,
                  offset: 32539,
                },
                end: {
                  line: 316,
                  column: 153,
                  offset: 32540,
                },
              },
            },
          ],
          position: {
            start: {
              line: 316,
              column: 1,
              offset: 32388,
            },
            end: {
              line: 316,
              column: 165,
              offset: 32552,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 316,
              column: 165,
              offset: 32552,
            },
            end: {
              line: 317,
              column: 1,
              offset: 32553,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "states",
          },
          children: [
            {
              type: "text",
              value:
                'Informally, the number of states can be thought of as a measure of how "complex" the Turing machine\'s "code" is.',
              position: {
                start: {
                  line: 317,
                  column: 11,
                  offset: 32563,
                },
                end: {
                  line: 317,
                  column: 123,
                  offset: 32675,
                },
              },
            },
          ],
          position: {
            start: {
              line: 317,
              column: 1,
              offset: 32553,
            },
            end: {
              line: 317,
              column: 137,
              offset: 32689,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 317,
              column: 137,
              offset: 32689,
            },
            end: {
              line: 318,
              column: 1,
              offset: 32690,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "album",
          },
          children: [
            {
              type: "text",
              value:
                "That's not a joke. I decided that the album cover would be an actual cube with the digits of pi written on it. I honestly, truly, legitimately thought that would be cool. Thank god we don't stay 12 forever.",
              position: {
                start: {
                  line: 318,
                  column: 11,
                  offset: 32700,
                },
                end: {
                  line: 318,
                  column: 217,
                  offset: 32906,
                },
              },
            },
          ],
          position: {
            start: {
              line: 318,
              column: 1,
              offset: 32690,
            },
            end: {
              line: 318,
              column: 230,
              offset: 32919,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 318,
              column: 230,
              offset: 32919,
            },
            end: {
              line: 319,
              column: 1,
              offset: 32920,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "grok",
          },
          children: [
            {
              type: "text",
              value: "For the uninitiated, to ",
              position: {
                start: {
                  line: 319,
                  column: 11,
                  offset: 32930,
                },
                end: {
                  line: 319,
                  column: 35,
                  offset: 32954,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "grok",
                  position: {
                    start: {
                      line: 319,
                      column: 36,
                      offset: 32955,
                    },
                    end: {
                      line: 319,
                      column: 40,
                      offset: 32959,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 319,
                  column: 35,
                  offset: 32954,
                },
                end: {
                  line: 319,
                  column: 41,
                  offset: 32960,
                },
              },
            },
            {
              type: "text",
              value:
                ' something means to understand something deeply, typically from experience. It\'s contrasted with a "shallow" kind of understanding that you might get from passively reading a description of the thing.',
              position: {
                start: {
                  line: 319,
                  column: 41,
                  offset: 32960,
                },
                end: {
                  line: 319,
                  column: 241,
                  offset: 33160,
                },
              },
            },
          ],
          position: {
            start: {
              line: 319,
              column: 1,
              offset: 32920,
            },
            end: {
              line: 319,
              column: 253,
              offset: 33172,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 319,
              column: 253,
              offset: 33172,
            },
            end: {
              line: 320,
              column: 1,
              offset: 33173,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "infinity",
          },
          children: [
            {
              type: "text",
              value:
                "If you disagree with that bold philosophical claim, (1) I'm talking about an experience with an infinite number of ",
              position: {
                start: {
                  line: 320,
                  column: 11,
                  offset: 33183,
                },
                end: {
                  line: 320,
                  column: 126,
                  offset: 33298,
                },
              },
            },
            {
              type: "emphasis",
              children: [
                {
                  type: "text",
                  value: "discrete",
                  position: {
                    start: {
                      line: 320,
                      column: 127,
                      offset: 33299,
                    },
                    end: {
                      line: 320,
                      column: 135,
                      offset: 33307,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 320,
                  column: 126,
                  offset: 33298,
                },
                end: {
                  line: 320,
                  column: 136,
                  offset: 33308,
                },
              },
            },
            {
              type: "text",
              value: " things, and (2) fight me.",
              position: {
                start: {
                  line: 320,
                  column: 136,
                  offset: 33308,
                },
                end: {
                  line: 320,
                  column: 162,
                  offset: 33334,
                },
              },
            },
          ],
          position: {
            start: {
              line: 320,
              column: 1,
              offset: 33173,
            },
            end: {
              line: 320,
              column: 178,
              offset: 33350,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 320,
              column: 178,
              offset: 33350,
            },
            end: {
              line: 321,
              column: 1,
              offset: 33351,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "googol",
          },
          children: [
            {
              type: "text",
              value: "Yes, this is the namesake of the company ",
              position: {
                start: {
                  line: 321,
                  column: 11,
                  offset: 33361,
                },
                end: {
                  line: 321,
                  column: 52,
                  offset: 33402,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://www.bing.com/",
              children: [
                {
                  type: "text",
                  value: "Google",
                  position: {
                    start: {
                      line: 321,
                      column: 53,
                      offset: 33403,
                    },
                    end: {
                      line: 321,
                      column: 59,
                      offset: 33409,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 321,
                  column: 52,
                  offset: 33402,
                },
                end: {
                  line: 321,
                  column: 83,
                  offset: 33433,
                },
              },
            },
            {
              type: "text",
              value: ".",
              position: {
                start: {
                  line: 321,
                  column: 83,
                  offset: 33433,
                },
                end: {
                  line: 321,
                  column: 84,
                  offset: 33434,
                },
              },
            },
          ],
          position: {
            start: {
              line: 321,
              column: 1,
              offset: 33351,
            },
            end: {
              line: 321,
              column: 98,
              offset: 33448,
            },
          },
        },
        {
          type: "text",
          value: "\n",
          position: {
            start: {
              line: 321,
              column: 98,
              offset: 33448,
            },
            end: {
              line: 322,
              column: 1,
              offset: 33449,
            },
          },
        },
        {
          type: "textDirective",
          name: "footnote",
          attributes: {
            id: "flood",
          },
          children: [
            {
              type: "text",
              value:
                "If that at all sounds interesting, I highly recommend reading ",
              position: {
                start: {
                  line: 322,
                  column: 11,
                  offset: 33459,
                },
                end: {
                  line: 322,
                  column: 73,
                  offset: 33521,
                },
              },
            },
            {
              type: "link",
              title: null,
              url: "https://en.wikipedia.org/wiki/The_Information:_A_History,_a_Theory,_a_Flood",
              children: [
                {
                  type: "emphasis",
                  children: [
                    {
                      type: "text",
                      value: "The Information: A History, a Theory, a Flood",
                      position: {
                        start: {
                          line: 322,
                          column: 75,
                          offset: 33523,
                        },
                        end: {
                          line: 322,
                          column: 120,
                          offset: 33568,
                        },
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 322,
                      column: 74,
                      offset: 33522,
                    },
                    end: {
                      line: 322,
                      column: 121,
                      offset: 33569,
                    },
                  },
                },
              ],
              position: {
                start: {
                  line: 322,
                  column: 73,
                  offset: 33521,
                },
                end: {
                  line: 322,
                  column: 199,
                  offset: 33647,
                },
              },
            },
            {
              type: "text",
              value: " by James Gleick.",
              position: {
                start: {
                  line: 322,
                  column: 199,
                  offset: 33647,
                },
                end: {
                  line: 322,
                  column: 216,
                  offset: 33664,
                },
              },
            },
          ],
          position: {
            start: {
              line: 322,
              column: 1,
              offset: 33449,
            },
            end: {
              line: 322,
              column: 229,
              offset: 33677,
            },
          },
        },
      ],
      position: {
        start: {
          line: 315,
          column: 1,
          offset: 31946,
        },
        end: {
          line: 322,
          column: 229,
          offset: 33677,
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
      line: 323,
      column: 1,
      offset: 33678,
    },
  },
};

export default post;
