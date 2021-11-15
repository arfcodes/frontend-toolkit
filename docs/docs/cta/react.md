---
sidebar_label: React
sidebar_position: 3
---
# React/Solid

## Components
### Base
Location: ```components/Cta/Base.jsx```

### Example
```
<CtaBase
    thumbnail={Image}
    thumbnailPosition="right"
>
    <h2>...</h2>
    <p>...</p>
    <p>
        <a href="">..</a>
    </p>
</CtaBase>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Main content |
| 2 | className | string|object |  Root classname |
| 3 | vAlign | top / middle / bottom | Set vertical align for main part |
| 4 | textAlign | left / center / right | Set text align for main content |
| 5 | thumbnail | string | Image thumbnail url/file |
| 6 | thumbnailColSize | number | Thumbnail column size, see [column size values](../layout/grid) |
| 7 | thumbnailPosition | left / right | Thumbnail position |

### Main
Location: ```components/Cta/index.jsx```

### Example
```
<Cta
    title="Title"
    subtitle="Subtitle"
    action={<button />}
>
    <p>...</p>
</Cta>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | children | node | Content body |
| 2 | header | node | Content header, if parameter is set, title & subtitle will be ignore |
| 3 | title | string | Content title |
| 4 | subtitle | string | Content subtitle |
| 5 | action | node | Cta action component |
| 6 | className | string|object |  Root classname |
| 7 | vAlign | top / middle / bottom | Set vertical align for main part |
| 8 | textAlign | left / center / right | Set text align for main content |
| 9 | thumbnail | string | Image thumbnail url/file |
| 10 | thumbnailColSize | number | Thumbnail column size, see [column size values](../layout/grid) |
| 11 | thumbnailPosition | left / right | Thumbnail position |

### With Section
CTA component with section

Location: ```components/Cta/WithSection.jsx```

### Example
```
<Cta
    title="Title"
    subtitle="Subtitle"
    action={<button />}
>
    <p>...</p>
</Cta>
```

### Parameters
| No | Parameter | Type | What it is |
| :-| :-| :-| :-|
| 1 | sectionProps | node | Section properties, read , see [this](../section) for more detail |
|   | {...} | any | All main CTA settings available for this component |