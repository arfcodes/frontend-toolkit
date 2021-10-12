---
sidebar_position: 1
---
# Core

## Directory
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
| 1 | Label | Button label |
| 2 | Label | Button label |

### +button-link()
Build button as a link (```<a>```).