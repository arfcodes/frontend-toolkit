---
sidebar_position: 1
---
# Container

## Style
File: ```src/40-layouts/_container.scss```

### Token Classes
| No | Class | What it is |
| :-| :-| :-|
| 1 | .container | Base class |
| 2 | .container--xs | Width: xs |
| 3 | .container--sm | Width: sm |
| 4 | .container--md | Width: md |
| 5 | .container--lg | Width: lg |
| 6 | .container--xl | Width: xl |
| 7 | .container--full | Full width |
| 8 | .container--fluid-right | Fluid in right |
| 9 | .container--fluid-left | Fluid in left |

## Basic HTML Structure
```
<div class="container container--md">
    <p></p>
</div>
```
Or,
```
<div class="container--fluid-right container--lg">
    <p></p>
</div>
```

## React/Solid Component
File: ```components/Layout/Container```
### Example
```
<Container size="xl">
    <p></p>
</Container>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Content |
| 2 | size | xs/sm/md/lg/xl | Container size, default: md |
| 3 | fluid | left/right/both | Container size |
| 4 | className | string | Container className |