---
sidebar_position: 1
---
# Button Core

## Style
```bash
50-components # Root directory
└── button
    └── _core.scss
    └── _default_.scss
    └── *.scss
```

## Basic HTML Structure
```
<a href="http://example.com" class="button">
    <div class="button__content">
        <span class="button__label" />
        <span class="button__icon" />
    </div>
</a>
```

Or if the button,
```
<button type="button" class="button">
    <div class="button__content">
        <span class="button__label" />
        <span class="button__icon" />
    </div>
</button>
```
Note: ```.button__icon``` is optional.

## PUG Mixins
To build the HTML, you can use the PUG mixins, here,
Mixin File: ```static/src/pug/mixins/button.pug```

### +button()
Build basic html button.

#### Parameters

| No | Parameter | What it is |
| :-| :-| :-|
| 1 | label | Button label |
| 2 | variant | Style variant, default: primary |
| 3 | size | Button size, default: md |
| 4 | icon | Button icon, default: false |
| 5 | iconPos | Button icon position, default: 'right' |

### +button-link()
Build button as a link (```<a>```).
#### Parameters

| No | Parameter | What it is |
| :-| :-| :-|
| 1 | label | Button label |
| 2 | link | Button link |
| 3 | variant | Style variant, default: primary |
| 4 | size | Button size, default: md |
| 5 | icon | Button icon, default: false |
| 6 | iconPos | Button icon position, default: 'right' |


## React/Solid Component
Location: ```components/Button```
### Example
```
<Button 
  label="Read More"
  variant="danger"
  size="lg"
  path="/"
/>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | label | node | Button label |
| 2 | variant | string | Style variant, default: primary |
| 3 | size | string | Button size, default: md |
| 4 | radius | string | Border radius, default: none |
| 5 | path | string | Button link path |
| 6 | handler | function | Button click handler |
| 7 | className | string/object | Html classes/styles |
| 8 | disabled | boolean | Disabled status |
| 9 | loading | boolean | Loading status |
| 10 | isLinkOutside | boolean | Add target="blank" if true |
| 11 | isBlock | boolean | Block style if true |
| 12 | icon | string/object/node | Button icon, default: false |
| 13 | iconPosition | string | Button icon position, default: 'right' |
| 14 | hideIcon | boolean | Will hide icon if set true |
| 15 | buttonProps | object | Other html properties |