# Overloaded your distributed system? The solution lies in your control system course.

By Bilal Akhtar

- Introduction to Control Systems cousre poorly received
- Lots of math, TL;DR is the controller sees the output, the controller sees the input, wants to bring output to an r value

## So you want to run a software service?

Anatomy of a distributed system: nodes <-> nodes

Reality: Host (node) <-> Host (Noisy neighbor) <-> ..., different countries

Thinking as a black box: Input (you control) + Resources (CPU, Memory, Disk, network) -> System -> Output (you observe)

- Easy solution #1: Buy more resources
  - Cloud and infrastructure costs can really add up
  - Code will inevitably come under overload and/or some other unexpected scenario
  - Users will "hold it wrong"

## Example use case: CockroachDB

A distributed SQL database, combining the horizontal scalability and resilience of a noSQL database with the consistency and transactional guarantees of a SQL database

Can run:

- On any cloud hardware
- Across multiple data centres and regulations

Some examples of overload:

- Unreliable hardware or external events (eg. disk stall)
- Resource contention (eg. high CPU)

...causing high tail latency

- Throughput: How much work happens over a period of time (think mbps)
- Latency: How long does it take for something to happen (think ping milliseconds)
- Tail latency: latency observed by the slowest requests

### Problem #1: CPU exhaustion

Many languages, including GO, have the concept of "lightweight threads" where multiple user-level threads map to fewer system-level threads

Advantages:

- Lower overhead of spinning up new user-level threads
- Faster thread-switching

Disadvantages:

- Overhead of intermediary runtime that manages thread scheduling

### How CockroachDB handles CPU exhaustion

- Runnable goroutines per CPU: The number of user-level threads waiting to be run per OS-level thread / CPU. High runnable count = more threads waiting just to run
- Goroutine scheduling latency: The amount of time a goroutine waits for its turn to run. High latency = more time to get to a CPU (even if the runnable count is low)

### Reducing overload

CockroachDB's Cake-like architecture (where SQL is above KV, which is above Storage) allows for natural vertical interface points where we can intercept requests

If CPU is overloaded, we make lower-priority requests wait at those interface points

"Grant chaining" where we prioritize in-progress work over work that hasn't begun yet.

Better to induce wait ourselves than to let the OS or Go runtime handle all the work

### Key learning: you don't need to know the right answer!

High latency /runnable count?

- Send less work to the system
- Make low-priority work wait

Low latency / runnable count?

- Send more work to the system than before
- Allow more low-priority work to happen

## More courses

- Discrete control systems
- Rubbing control theory on the Go scheduler

## General takeaways

- Observe your system and define what are acceptable latencies and/or performance characteristics
- Emit metrics from your system that you care about, and consider adding hooks for OpenTelemetry traces
- Write a controller or rate-limiter that admits more work if the system is underloaded, and throttles work by priority if it is overloaded
- Tune parameters to avoid overshooting or undershooting

More general takeaway

- "Irrelevant courses" in software engineering (usually!) have an academic reason to exist
- Instructors may not connect those learnings to real-world uses, at least not rightaway
- You likely will appreciate taking the course later!
