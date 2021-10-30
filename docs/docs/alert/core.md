---
sidebar_position: 1
---
# Core

## Directory
```bash
50-components # Root directory
└── alert
    └── _core.scss
    └── _default.scss
```

## Basic HTML Structure
```
<div class="alert alert--success">
    <div class="alert__inner">
        <div class="alert__icon">
            <div class="icon--svg">
                <svg />
            </div>
        </div>
        <div class="alert__content"></div>
        <div class="alert__close">
            <button type="button">
                <div class="icon--svg">
                    <svg />
                </div>
            </button>
        </div>
    </div>
</div>
```
Note: ```.alert__icon``` and ```.alert__close``` is optional.

## PUG Mixins
To build the HTML, you can use the PUG mixins, here,
Mixin File: ```static/src/pug/mixins/alert.pug```

### +alert()
Build basic html alert.

#### Parameters

| No | Parameter | What it is |
| :-| :-| :-|
| 1 | content | Alert content |
| 2 | variant | Style variant, default: success |
| 3 | hideIcon | Hide icon if true |
| 4 | buttonClose | Show button close if true |
| 5 | autoClose |  Auto hide alert if true |
| 6 | autoCloseDelay |  Delay (in milisecond) for close/hide alert |


## JS Component
File: ```static/src/js/components/Alert.js```
For handle close and auto close in static website.

### Example
```
import AlertLib from './src/js/components/Alert';

new AlertLib().init();
```

### Parameters
| No | Parameter | What it is |
| :-| :-| :-| :-|
| 1 | selector | Root element selector, default: .alert |
| 2 | onClose | Callback function is call when alert just closed |

## React/Solid Component
Location: ```components/Alert```
### Example
```
<Alert 
  variant="danger"
  buttonClose
/>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Alert content |
| 2 | variant | string | Style variant, default: success |
| 3 | hideIcon | boolean | Hide icon if true |
| 4 | buttonClose | boolean | Show button close if true |
| 5 | autoClose | boolean |  Auto hide alert if true |
| 6 | autoCloseDelay | number |  Delay (in milisecond) for close/hide alert |
| 7 | className | string|object |  Root classname |
| 8 | multipleLine | boolean |  Add ```p``` tag to content if true |