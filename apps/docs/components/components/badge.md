---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Badge

The Badge generates a small badge to the top-right of its child.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=16643%3A48728&t=LIzxPt9OJb9F1mXf-1)

## Props

| Prop name | Type               | Default value | Possible values |
| --------- | ------------------ | ------------- | --------------- |
| bordered  | `Boolean`          | `false`       |                 |
| dot       | `Boolean`          | `false`       |                 |
| invisible | `Boolean`          | `false`       |                 |
| value     | `String`, `Number` |               |                 |

### React only:

| Prop name | Type        | Default value | Possible values |
| --------- | ----------- | ------------- | --------------- |
| children  | `ReactNode` |               |                 |
| className | `String`    |               |                 |

## Slots

### Vue only:

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | default slot for optional content |

## Accessibility notes

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfBadge/VsfBadge.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfBadge/VsfBadge.tsx