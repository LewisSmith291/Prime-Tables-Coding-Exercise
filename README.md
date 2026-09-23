# Prime Multiplication Table Coding Challenge

## Requirements
- Node.js 24 or later
- No dependencies, no `npm install` required

## How to run?
- `node index.js 10` writes -> `primeTable.md`
- `npm test` runs -> 16 tests
- `npm run test:coverage` runs -> test coverage
- The N input must be 1-1000. Invalid inputs will throw errors

## Structure
`prime.js` generates the prime numbers for any given n.
- The generator is plain (n) => numer[], so another algorithm can be dropped in just by changing one line in `index.js`. The same tests will apply to it.

`table.js` builds and formats the table.

`index.js` wires it all together.

## What I am pleased with
I am very pleased with my implementation of the Sieve of Eratosthenes as a JS algorithm. The performance of the algorithm is very good, especially thanks to the p * p optimisations added afterwards. It generates 1,000,000 primes in about 450ms.

I am also pleased with my implementation of finding the upper bound for the sieve using Rosser's theorem. This helps the performance by not making it do more than it needs.

I am proud of my test coverage. 100% of the files are covered, and all tests pass successfully. 

Below is an example of the N = 3 output:
|    |  2 |  3 |  5 |
| -- | -- | -- | -- |
|  2 |  4 |  6 | 10 |
|  3 |  6 |  9 | 15 |
|  5 | 10 | 15 | 25 |

## Design Decisions
I chose to have a Markdown file output with a seperator row (slightly different from the spec) becuase I wanted the readability of a .md file (native to GitHub and VSCode). If I chose a CLI output, it would be hard to read as the text would wrap awkwardly. 

Validation is performed only at the CLI input level as I felt that was all which would be neccesary for this coding task, especially since it is the only entry point.

N is capped at 1000. This is not becuase the generative algorithm stops working above this (as shown in tests it performs correctly for even N = 1,000,000), but rather because it was giving an error when the output was above 11MB. Beyond this size, V8's maximum string length is exceeded and an error is provided rather than the file successfully writing. I chose 1000 as the cap as I wanted to show that it does work for really large files still. The example outputs I included only go up to 100, as this is roughly where the .md file preview stops working properly, feel free to run the test with N = 1000 and manually look at the table generated.

## What I would improve with more time
I would include trial division as a second generation mode, and compare the performance between it and the current implementaion.

I would have it so rows would be streamed to the file instead of building one string, which would bypass the string limit. 

I would also consider pursuing a HTML output file, as this would allow me to make an input inerface and a nicely styled output table. But I felt that this avenue would take a lot longer than outputting to a .md file. 

Lastly, I might consider adding an interactive prompt via `readline` and `--output` for the filename. 