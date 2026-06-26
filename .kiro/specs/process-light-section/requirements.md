# Requirements Document

## Introduction

Создание нового компонента "ProcessLight" - светлая версия секции "Делаем сложное понятным" с горизонтально прокручивающимися тегами процесса. Компонент должен отображаться после существующей секции Process и работать корректно на десктопе и мобильных устройствах.

## Glossary

- **ProcessLight**: Новый React компонент для отображения светлой версии секции процесса
- **Tag**: Элемент-кнопка с текстом, отображающий этап процесса работы
- **Marquee**: Горизонтально прокручивающаяся анимация элементов
- **Plus Icon**: Синий круглый элемент с символом "+" между тегами
- **Equals Icon**: Синий круглый элемент с символом "=" перед финальным тегом
- **Result Tag**: Финальный синий тег "уверенность в результате"

## Requirements

### Requirement 1

**User Story:** As a website visitor, I want to see a light-themed process section, so that I can understand the company's workflow in a visually appealing way.

#### Acceptance Criteria

1. THE ProcessLight component SHALL display a white/light gray background (#f5f5f5 or similar)
2. THE ProcessLight component SHALL display the heading "Делаем сложное понятным" in dark text using the druk-font
3. THE ProcessLight component SHALL display the description paragraph in gray text below the heading
4. THE ProcessLight component SHALL be positioned after the existing Process section in the page layout

### Requirement 2

**User Story:** As a website visitor, I want to see process tags in a horizontal scrolling marquee, so that I can view all process steps in an engaging animated way.

#### Acceptance Criteria

1. THE ProcessLight component SHALL display three rows of horizontally scrolling tags
2. WHEN the page loads, THE tags in each row SHALL animate horizontally in a continuous loop
3. THE first row SHALL contain tags: "ТЗ", "брифинг", "аналитика", "roadmap" with plus icons between them
4. THE second row SHALL contain tags: "прозрачный процесс работы", "коммуникация" with plus icons between them
5. THE third row SHALL contain: "осознанность команды" tag, equals icon, and "уверенность в результате" result tag
6. THE tags SHALL have white background with light gray border and rounded-full shape
7. THE plus icons SHALL be blue (#4F46E5 or similar accent color) circles with white "+" symbol
8. THE result tag "уверенность в результате" SHALL have blue background with white text

### Requirement 3

**User Story:** As a mobile user, I want the process section to display correctly on smaller screens, so that I can view the content without layout issues.

#### Acceptance Criteria

1. WHILE viewing on mobile devices (width < 640px), THE ProcessLight component SHALL adjust text sizes appropriately
2. WHILE viewing on mobile devices, THE marquee animation SHALL continue to function smoothly
3. WHILE viewing on mobile devices, THE heading SHALL use smaller font size (text-3xl or similar)
4. WHILE viewing on mobile devices, THE tags SHALL maintain readable size and proper spacing
5. THE ProcessLight component SHALL use responsive padding and margins for all screen sizes

### Requirement 4

**User Story:** As a website visitor, I want the marquee animation to be smooth and continuous, so that the experience feels polished and professional.

#### Acceptance Criteria

1. THE marquee animation SHALL scroll continuously without visible jumps or resets
2. THE marquee rows SHALL scroll at slightly different speeds for visual interest
3. THE marquee animation SHALL duplicate content to create seamless infinite scroll effect
4. WHEN hovering over the section, THE animation MAY pause or slow down for better readability
