---
sidebar_position: 5
---
# Switcher

## Style
File: ```src/40-layouts/_switcher_.scss```

### Token Classes
| No | Class | What it is |
| :-| :-| :-|
| 1 | .switcher | Base class and children width: 33.3333% |
| 2 | .switcher--50 | Children width: 50% |
| 3 | .switcher--25 | Children width: 25% |
| 4 | .sidebar--no-space | Remove gap space |
| 5 | .sidebar--no-space-x | Remove horizontal gap space |

## Basic HTML Structure
```
<div class="switcher">
    <div class="switcher__row">
        <div class="switcher__column">
            <div class="switcher__inner">
                <div />
            </div>
        </div>
        <div class="switcher__column">
            <div class="switcher__inner">
                <div />
            </div>
        </div>
        <div class="switcher__column">
            <div class="switcher__inner">
                <div />
            </div>
        </div>
    </div>
</div>
```

## React/Solid Component
File: ```components/Layout/Switcher```
### Example
```
<Switcher>
    <div class="switcher__column">
        <div class="switcher__inner">
            <div />
        </div>
    </div>
</Switcher>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Content |
| 2 | columnSize | 25/33/50 | Column size |
| 3 | noSpace | boolean | Remove space if true |
| 4 | noSpaceX | boolean | Remove horizontal space if true |