# Component Library Documentation

## Overview
This component library provides a set of reusable, well-designed components that follow consistent design patterns and can be easily composed to create new pages and sections.

## Architecture

### Directory Structure
```
src/components/
├── ui/              # Base UI components
├── layout/          # Layout and container components  
├── content/         # Content-specific components
├── complex/         # Complex, specialized components
└── README.md        # This documentation
```

## Component Categories

### UI Components (`src/components/ui/`)
Base components that provide fundamental UI functionality.

#### `Button`
Unified button component with multiple variants and sizes.
```jsx
<Button variant="primary" size="lg">Get Started</Button>
<Button variant="outline">Learn More</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta'
- `size`: 'sm' | 'default' | 'lg' | 'xl'
- `disabled`: boolean
- `onClick`: function

#### `Card`
Base card component with hover effects and variants.
```jsx
<Card variant="elevated" padding="lg">Content here</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'gradient' | 'outlined' | 'glass'
- `hover`: boolean (default: true)
- `padding`: 'none' | 'sm' | 'default' | 'lg' | 'xl'

#### `InputField`
Form input with label, validation, and tooltip support.
```jsx
<InputField 
  label="Fleet Size"
  tooltip="Number of units in your fleet"
  value={value}
  onChange={handleChange}
/>
```

#### `Accordion`
Generic accordion for collapsible content.
```jsx
<Accordion 
  items={[{question: "...", answer: "..."}]}
  allowMultiple={false}
/>
```

#### `Tooltip`
Reusable tooltip component.
```jsx
<Tooltip content="Helpful information" position="top" />
```

### Layout Components (`src/components/layout/`)
Components that handle page structure and layout.

#### `Section`
Standard section wrapper with background and padding variants.
```jsx
<Section background="gray" padding="lg" id="features">
  Content here
</Section>
```

**Props:**
- `background`: 'white' | 'gray' | 'gradient' | 'violet' | 'dark'
- `padding`: 'none' | 'sm' | 'default' | 'lg' | 'xl'

#### `Container`
Max-width container with responsive padding.
```jsx
<Container size="lg">Content here</Container>
```

**Props:**
- `size`: 'sm' | 'default' | 'lg' | 'full'

#### `SectionHeader`
Reusable title + subtitle + description pattern.
```jsx
<SectionHeader
  title="How It Works"
  description="Simple process to upgrade your fleet"
  align="center"
/>
```

#### `Grid`
Responsive grid with configurable columns.
```jsx
<Grid cols={3} gap="lg">
  {items.map(item => <GridItem key={item.id} />)}
</Grid>
```

**Props:**
- `cols`: 1 | 2 | 3 | 4 | 'auto' | custom string
- `gap`: 'sm' | 'default' | 'lg' | 'xl'

### Content Components (`src/components/content/`)
Components for specific content patterns.

#### `FeatureCard`
Icon + title + description pattern.
```jsx
<FeatureCard
  icon={ZapIcon}
  title="UV Disinfection"
  description="Automated disinfection technology"
  iconColor="violet-primary"
/>
```

#### `StatCard`
Large stat + title + description + optional solution.
```jsx
<StatCard
  stat="73%"
  title="Route Inefficiency"
  description="of operators report..."
  solution={{title: "...", description: "..."}}
  statColor="rose-600"
/>
```

#### `StepCard`
Numbered step with title and description.
```jsx
<StepCard
  number="1"
  title="Install"
  description="15-minute retrofit installation"
  showConnector={true}
/>
```

#### `MetricDisplay`
Large number + label for ROI results.
```jsx
<MetricDisplay
  value="$25,000"
  label="Annual Benefit"
  tooltip="Total yearly value..."
  variant="primary"
/>
```

## Usage Patterns

### Basic Section Layout
```jsx
function MySection() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeader
          title="Section Title"
          description="Section description"
        />
        <Grid cols={3}>
          {items.map(item => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
```

### Form Section
```jsx
function FormSection() {
  return (
    <Section background="white">
      <Container size="sm">
        <SectionHeader title="Contact Us" />
        <Card variant="elevated">
          <InputField label="Name" value={name} onChange={setName} />
          <InputField label="Email" value={email} onChange={setEmail} />
          <Button variant="primary">Submit</Button>
        </Card>
      </Container>
    </Section>
  )
}
```

## Design Tokens

### Colors
- `violet-primary`: #7B68EE
- `violet-secondary`: #6A5ACD  
- `gray-primary`: #2C3E50
- `green-primary`: #27AE60
- `green-light`: #E6F4EA

### Spacing
- Section padding: 16/20 (py-16 lg:py-20)
- Container padding: 4/6/8 (px-4 sm:px-6 lg:px-8)
- Card padding: 6 (p-6)

### Typography
- Headings: font-bold text-gray-primary
- Body: text-gray-secondary leading-relaxed
- Labels: text-sm font-medium text-gray-700

## Benefits

### Consistency
- Unified styling and behavior across all components
- Consistent spacing, colors, and interactions

### Maintainability  
- Changes to base components propagate everywhere
- Easier to update design system
- Reduced code duplication

### Reusability
- Components can be composed for new pages/sections
- Easy to create new content with existing patterns

### Developer Experience
- Clear component hierarchy and purpose
- Easier to find and modify components
- Type-safe props (with TypeScript)

## Future Enhancements

1. **TypeScript Migration**: Add proper TypeScript definitions
2. **Storybook Integration**: Component playground and documentation  
3. **Theme System**: Dynamic theme switching capability
4. **Animation Library**: Consistent micro-interactions
5. **Form Components**: More complex form elements (Select, Radio, etc.)
6. **Data Components**: Table, List, and data display components