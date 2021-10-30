---
sidebar_position: 1
---
# Core

## Directory
```bash
50-components # Root directory
└── title
    └── _core.scss
    └── _default.scss
    └── _style1.scss
```

## Basic HTML Structure
```
<h2 class=""title title--sm">
    Lorem ipsum
</h2>
```
Or with icon,
```
<h2 class=""title title--xl title--with-icon">
    <span class=""title__icon">
        <i></i>
    </span>
    <span class=""title__content">
        Lorem ipsum
    </span>
</h2>
```

## React/Solid Component
Location: ```components/Title```
### Example
```
<Title size="md">
    Lorem Ipsum
</Title>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Title content |
| 2 | size | 2xs/xs/sm/md/lg/xl/2xl | Title size, default: md |
| 3 | uppercase | boolean | Uppercase if true |
| 4 | center | boolean | Align text to center if true |
| 5 | as | h1/h2/h3/h4/h5/h6 | Title html tag |
| 6 | className | string|object |  Root classname |