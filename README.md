# a-union
Creates the union of the passed-in arrays

# Install
```sh
$ npm install --save a-union
```

## Examples

```js
var union = require('a-union');

union([1, 2, 3], [4, 2, 1], [2, 11])
//=> [1, 2, 3, 4, 11]

union(['a', 'a', 'b', 'a'], ['c', 'a', 'd'])
//=> ['a', 'b', 'c', 'd']

```

While combining arrays the order of elemnets are remaied same as the arrays in argument. For example,

```js
union([1, 2, 3, 4, 4, 5, 1, 6], [1, 9, 8])
//=> [1, 2, 3, 4, 5, 6, 9, 8]
```

## Usage

#### `require('a-union')( *array )`
Return union of the passed-in arrays, in-order.

**Arguments**:
- `*array`: sequence of arrays

**Returns**: Return a new array containing union of all the array elements passed.

## License

&copy; 2016 vikram. MIT License
