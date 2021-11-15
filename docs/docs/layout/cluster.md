---
sidebar_position: 4
---
# Cluster

## Style
File: ```src/40-layouts/_cluster.scss```

### Token Classes
| No | Class | What it is |
| :-| :-| :-|
| 1 | .cluster | Base class |
| 2 | .cluster--no-space | Remove space |

## Basic HTML Structure
```
<div class="cluster">
    <div class="cluster__row">
        <div class="cluster__column">
            <a />
        </div>
        <div class="cluster__column">
            <a />
        </div>
    </div>
</div>
```
Or,
```
<div class="cluster cluster--no-space">
    <ul>
        <li>
            <a />
        </li>
        <li>
            <a />
        </li>
    </ul>
</div>
```

## React/Solid Component
File: ```components/Layout/Cluster```
### Example
```
<Cluster>
    <ul>
        <li>
            <a />
        </li>
    </ul>
</Cluster>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Content |
| 2 | noSpace | boolean | Remove space if true |
| 3 | className | string | Sidebar className |