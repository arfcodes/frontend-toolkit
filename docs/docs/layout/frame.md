---
sidebar_position: 7
---
# Frame

## Style
File: ```src/40-layouts/_frame_.scss```

### Token Classes
| No | Class | What it is |
| :-| :-| :-|
| 1 | .frame | Base class |
| 2 | .frame--square | Square frame |
| 3 | .frame--16-9 | Aspect ratio: 16/9 |
| 4 | .frame--3-2 | Aspect ratio: 3/2 |
| 5 | .frame--4-3 | Aspect ratio: 4/3 |

## Basic HTML Structure
```
<div class="frame frame--16-9">
    <img />
</div>
```

## React/Solid Component
File: ```components/Layout/Frame```
### Example
```
<Frame aspectRatio="16-9">
    <img />
</Frame>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Main content |
| 2 | aspectRatio | 16-9/3-2/4-3/square | Image aspect ratio |
| 3 | className | string | Frame className |