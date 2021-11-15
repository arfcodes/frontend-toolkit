---
sidebar_position: 3
---
# Sidebar

## Style
File: ```src/40-layouts/_sidebar.scss```

### Token Classes
| No | Class | What it is |
| :-| :-| :-|
| 1 | .sidebar | Base class |
| 2 | .sidebar--xs | Width: xs |
| 3 | .sidebar--sm | Width: sm |
| 4 | .sidebar--md | Width: md |
| 5 | .sidebar--lg | Width: lg |
| 6 | .sidebar--xl | Width: xl |
| 7 | .sidebar--no-space | Remove gap space |
| 8 | .sidebar--no-space-x | Remove horizontal gap space |

## Basic HTML Structure
```
<div class="sidebar sidebar--lg">
    <div class="sidebar__inner">
        <div class="sidebar__main">
            <nav />
        </div>
        <div class="sidebar__content">
            <p />
        </div>
    </div>
</div>
```
Or,
```
<div class="sidebar sidebar--lg sidebar--no-space">
    <div class="sidebar__inner">
        <div class="sidebar__main">
            <nav />
        </div>
        <div class="sidebar__content">
            <p />
        </div>
    </div>
</div>
```

## React/Solid Component
File: ```components/Layout/Sidebar```
### Example
```
<Sidebar
    size={size}
    main={
        <div />
    }
    content={
        <div />
    }
/>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Main content, used if main & content is not set |
| 2 | main | node | Main sidebar |
| 3 | content | node | Main content |
| 4 | size | xs/sm/md/lg/xl | Sidebar size |
| 5 | reverse | boolean | Right sidebar if true |
| 6 | className | string | Sidebar className |