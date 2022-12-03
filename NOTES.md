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
				white: [],
				black: []
			},
			labels: {
				[]
			},
			symbols: []
		}
	]
}
```

## Features:

- Returns a diagram object?
- Create board.
- Add position.
- Remove position.
- Add stone.
- Remove stone.
- Add label.
- Remove label.
- Add symbol.
- Remove symbol.
