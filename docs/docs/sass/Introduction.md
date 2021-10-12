---
sidebar_position: 1
title: Introduction
---
# Introduction
The SASS architecture get inspiration from the W3 Design System, https://design-system.w3.org/.

## Directory Structure
```bash
sass # Root directory
└── src
   ├── 00-settings
   ├── 10-tokens
   ├── 20-tools
   |    ├── functions
   |    └── mixins
   |
   ├── 30-core
   ├── 40-layouts
   ├── 50-components
   ├── 60-third-party
   ├── 70-pages
   ├── 80-utilities
   |
   ├── _all.scss
   ├── _base_.scss
   ├── _core-components_.scss
   ├── _general_.scss
   ├── _tools_.scss
   └── _utilities_.scss
```

### 00-settings
Global SASS variable.

### 10-tokens
Global token classes.

### 20-tools
Global SASS mixins and functions

### 30-core
Essentials styles for your projects, like reset, typography, basic elements style, etc.

### 40-layouts
Basic layout styles, most of them get inspiration from [Every Layout](https://every-layout.dev/).

### 60-components
General components style for your projects.

### 70-third-party
Any styles that comes from external sources.

### 80-pages
Styles required for specific page.

### 90-utilities
Overrides or helper classes.
