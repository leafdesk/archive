const a = {
  b: {
    c: {
      d: {
        e: 1,
      },
    },
  },
};

const {
  b: {
    c: { d },
  },
} = a;

const {
  b: {
    c: {
      d: { e },
    },
  },
} = a;

// console.log(d);
console.log(e);
