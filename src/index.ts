// should have no errors
["a", "b"].map((c) => c.toUpperCase());

// TS should complain about `includes` because it's not part of ES5
[1, 2, 3].includes(0);
