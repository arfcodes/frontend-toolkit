---
title: Section
sidebar_position: 50
---

# Section

## SCSS
File: ```src/50-components/_section.scss```

### Classes
| No | Class | What it is |
| :-| :-| :-|
| 1 | .section | Root class |
| 2 | .section__inner | Inner class |
| 3 | .section__background | Section background class |
| 4 | .section__title | Section title class |
| 5 | .section__main | Section main class |

### Root Classes
- You can use ```bg--${color}``` for set section background color
- You can use ```text--${color}``` for set text color
- You can use ```text--${align}``` for set text alignment
- You can use ```space--${size}``` for set vertical space


## HTML Structure
**Example 1**
```
<div class="section bg--muted space--md">
    <div class="section__inner">
        <div class="container container--sm">
            <h2 class="section__title title title--xl"></h2>
            <div class="section__main">
                <p></p>
            </div>
        </div>
    </div>
</div>
```
**Example 2**
```
<div class="section bg--muted space-t--md space-b--2xl">
    <div class="section__inner">
        <div class="container container--sm">
            <h4 class="title title--xl"></h4>
            <p></p>
        </div>
    </div>
</div>
```
**Example 3**
```
<div class="section bg--black text--white space--2xl">
    <div class="section__bg" style="background-image: url(''); opacity: 0.4;"></div>
    <div class="section__inner">
        <div class="container container--sm">
            <h4 class="title title--xl"></h4>
            <p></p>
        </div>
    </div>
</div>
```
**Example 4**
```
<div class="section bg--muted space--2xl text--center">
    <div class="section__inner">
        <div class="container container--sm">
            <h4 class="title title--xl"></h4>
            <p></p>
        </div>
    </div>
</div>
```

## React/Solid Component
File: ```components/Section```
### Example
```
<Section
    space="2xl"
    bg="https://placeimg.com/1000/560/tech/grayscale"
    title="First Section"
    titleClassName="title title--lg"
    containerSize="sm"
    bgOpacity={0.2}
    className="bg--black text--white"
>
    <p></p>
</Section>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Section content |
| 2 | title | string/node | Section title |
| 3 | titleClassName | string | Section title className |
| 4 | bg | string | Background image |
| 5 | bgClassName | string | Background className |
| 6 | bgOpacity | number | Background opacity |
| 7 | space | string/array | Section space |
| 8 | containerSize | string | Content container size |
| 9 | className | string | Root className |