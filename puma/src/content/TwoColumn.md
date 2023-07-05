---
title: "TwoColumn Module"
author: "Bill"
date: 7/5/2023
category: "documentation"
tags: "docs", "modules"
---
# TwoColumn Module
A flexible multi-column module designed to add content with all the base CSS complete for mobile support and passthrough properties.


It’s built using the “PageSection” module and two “Column” module instances.


The final outcome is
`<section id=”sectId” class=”sectionClass”>
<div id=”sectId-header” class=”headerClass”>
      <slot name="intro"/>
</div>
<div id=”colOneId” class=”colOneClass”>
      <slot name="left-col"/>
</div>
<div id=”colTwoId” class=”colTwoClass”>
      <slot name="right-col"/>
</div>
</div>`

## CSS
The CSS is designed to house multiple formats wi an intelligent naming convention to support various layouts. 


The naming convention is as follows:
* `c-`: the lower class “c” refers to “Columns”.
* Ratio numbering: the numbers following refer to the flex numbers given to each column on the row. Ie: 13 would equate to `grid-column-template: 1fr 3fr;`


## Properties (Props)
The module takes several props and passes them into the child components.


### Classes
The classes props are taken in as an array, with a singular name. After that, they are spread into a new variable with a pluralized name to allow for local classes to be added to the array passed by props. Finally, all classes are passed to children elements via the pluralized name. This allows the naming convention to be recycled as the props are passed down.


Accepted props are as follows:
* `sectionClass` simply passes any array, with a blank array as a default `[...sectionClass]`
* `colOneClass` is an array with the  default class col-1 `[...colOneClass, "col-1"]`
* `colTwoClass` is an array with the default class col-2 `[...colOneClass, "col-2"]`
* `headerClass`  is an array with the default class section-header `[...headerClasses, "section-header"]`


### Ids
Unless specifically used in just the module ids are taken in as a string value with a name corresponding to the element they are set to apply to. Again they use a singular name for the prop.


* `sectId`: applies to the `PageSection sectId` as a value to get passed down to the section tab
* `colOneId` defaults to "left-container" if no id is passed down.
* `colTwoId` defaults to "right-container" if no id is passed down.
* `header`: applies to the section header as a concatenated value comprised of  the `sectId` prop and "-header"


## Slots
There are three slots currently available. 


### intro
The intro is the section header, designed for intro copy or HTML passed in from the parent module. It is full-length on all screen sizes


### left-col &  right-col
The left column comes sized to split the row it’s on into 4 parts, always leaving at least 1 part for the second column.

Columns are visible on desktop and tablet modes, then stacking for phones.