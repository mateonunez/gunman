# Gunman

A simple Pistolero to test (and shot) Fastify and Lyra together.

## Getting Started

```bash
npm install
```

## Usage

```bash
curl -X GET http://localhost:5555/query/gunman
``` 

## Autocannon

```bash
❯ autocannon -c 100 -d 5 -p 10 -l http://127.0.0.1:5555/query/gunman
Running 5s test @ http://127.0.0.1:5555/query/gunman
100 connections with 10 pipelining factor


┌─────────┬────────┬─────────┬─────────┬─────────┬────────────┬────────────┬─────────┐
│ Stat    │ 2.5%   │ 50%     │ 97.5%   │ 99%     │ Avg        │ Stdev      │ Max     │
├─────────┼────────┼─────────┼─────────┼─────────┼────────────┼────────────┼─────────┤
│ Latency │ 519 ms │ 2648 ms │ 4804 ms │ 4804 ms │ 2657.73 ms │ 1291.66 ms │ 4804 ms │
└─────────┴────────┴─────────┴─────────┴─────────┴────────────┴────────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 20      │ 20      │ 40      │ 40      │ 34      │ 8       │ 20      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 19.5 kB │ 19.5 kB │ 39.1 kB │ 39.1 kB │ 33.2 kB │ 7.81 kB │ 19.5 kB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 519          │
├────────────┼──────────────┤
│ 0.01       │ 519          │
├────────────┼──────────────┤
│ 0.1        │ 519          │
├────────────┼──────────────┤
│ 1          │ 519          │
├────────────┼──────────────┤
│ 2.5        │ 519          │
├────────────┼──────────────┤
│ 10         │ 842          │
├────────────┼──────────────┤
│ 25         │ 1603         │
├────────────┼──────────────┤
│ 50         │ 2648         │
├────────────┼──────────────┤
│ 75         │ 3741         │
├────────────┼──────────────┤
│ 90         │ 4501         │
├────────────┼──────────────┤
│ 97.5       │ 4804         │
├────────────┼──────────────┤
│ 99         │ 4804         │
├────────────┼──────────────┤
│ 99.9       │ 4804         │
├────────────┼──────────────┤
│ 99.99      │ 4804         │
├────────────┼──────────────┤
│ 99.999     │ 4804         │
└────────────┴──────────────┘

1k requests in 5.02s, 166 kB read
```
