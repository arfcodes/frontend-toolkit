---
sidebar_position: 2
---
# Grid

## Style
File: ```src/40-layouts/_grid_.scss```

### Token Classes
| No | Class |
| :-| :-| :-|
| 1 | .row | Grid wrapper |
| 2 | .col--1 | 1 Column & width: 8.3333% |
| 3 | .col--2 | 2 Columns & width: 16.6666% |
| 4 | .col--3 | 3 Columns & width: 25% |
| 5 | .col--4 | 4 Columns & width: 33.3333% |
| 6 | .col--5 | 5 Columns & width: 41.6666% |
| 7 | .col--6 | 6 Columns & width: 50% |
| 8 | .col--7 | 7 Columns & width: 58.3333% |
| 9 | .col--8 | 8 Columns & width: 66.6666% |
| 10 | .col--9 | 9 Columns & width: 75% |
| 11 | .col--10 | 10 Columns & width: 83.3333% |
| 12 | .col--11 | 11 Columns & width: 91.6666% |
| 13 | .gap--xs | Size: $gap-size-xs |
| 14 | .gap--sm | Size: $gap-size-sm |
| 15 | .gap--md | Size: $gap-size-md |
| 16 | .gap--lg | Size: $gap-size-lg |
| 17 | .gap--xl | Size: $gap-size-xl |
| 18 | .gap--2xl | Size: $gap-size-2xl |
| 19 | .gap--3xl | Size: $gap-size-3xl |

## Basic HTML Structure
```
<div class="row gap--xl">
    <div class="col--3">
        <p></p>
    </div>
    <div class="col--3">
        <p></p>
    </div>
    <div class="col--3">
        <p></p>
    </div>
    <div class="col--3">
        <p></p>
    </div>
</div>
```