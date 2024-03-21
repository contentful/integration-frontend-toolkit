## Searchable List

This is a generalized component that uses [fuse.js](https://www.fusejs.io/) to make a list of items, searchable on the client side.

### How to use Searchable List

1. Pass a list of things you want to be searchable, this can be a list of anonymous objects, or primatives.

```js
const channels = [
  {
    id: '123',
    name: 'research & development',
    foo: ['bar', 'qwerty', 'ipsum'],
    skills: {
      skiing: {
        rating: 6,
      },
      biking: {
        rating: 8,
      },
    },
  },
  {
    id: '456',
    name: 'design & implementation',
    foo: ['baz', 'lorem', 'atom'],
    skills: {
      swimming: {
        rating: 7,
      },
      biking: {
        rating: 4,
      },
    },
  },
];
```

2. Define how you would like your items to be rendered visually

```js
const renderListItem = (item) => {
  return (
    <li>
      <p>{item.name}<p>
      <ul>
        foo: {item.foo.map(f => <li>{f}</li>)}
      </ul>
    </li>
  )
}
```

3. define a string searchQuery: `const searchQuery = 'research and dev'`

4. define the indexes you would like to match on `const searchKeys = ['name', 'foo', 'skills']`

5. Optional: pick any item(s) that you would like to be "pinned" (always returned/rendered) no matter what the search query is. This is useful for situations where a user has already made a selection, but continues to search, so that they know what selection they've already chosen.

6. Render & pass your props!

```js
<SearchableList
  items={channels}
  renderListItem={renderListItem}
  searchKeys={searchKeys}
  searchQuery={searchQuery}
/>
```

### Limitations at scale

Since this search operations is occuring client side, with limited memory, this solution will not fit all of your searching needs. Keep in mind the size of your dataset:

1. when you are retrieving the initial payload to populate a list. i.e. fetching 10,000 records (to pass to `<SearchableList>`) in a single network request is probably not a great idea.
2. When you are actually searching, fuzzy searching is not a database.
