---
sidebar_position: 6
---
# Cover

## SCSS
File: ```src/40-layouts/_cover_.scss```

## Basic HTML Structure
```
<div class="cover">
    <div class="cover__header">
        <div />
    </div>
    <div class="cover__main">
        <div />
    </div>
    <div class="cover__footer">
        <div />
    </div>
</div>
```

## React/Solid Component
File: ```components/Layout/Cover```
### Example
```
<Cover
    header={<h1>Header</h1>}
    footer={<p>footer</p>}
>
    <p></p>
</Cover>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Main content |
| 2 | header | node | Header content, optional |
| 3 | footer | node | Footer content, optional |
| 4 | center | boolean | Centering content if true |
| 5 | className | string | Root classname |