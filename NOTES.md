# Diagram Class

## Diagram Data Structure:

```
{
	id,		// Probably assigned by DB?
	title,
	description,
	board: {
		size: {
			x,
			y
		},
		location: centre / corner (tl, tr, etc) / whole board
	},
	positions: [
		{
			caption,
			stones: {
				black: [],
				white: []
			},
			labels: [],
			symbols: []
		}
	]
}
```

## Features:

- Returns a diagram object.
- Create board. - Initialised within class constructor.
- Generate ID.
- Add position.
- Remove position.
- Add stone.
- Remove stone.
- Add label.
- Remove label.
- Add symbol.
- Remove symbol.
