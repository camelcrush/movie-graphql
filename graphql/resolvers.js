const js = {
  name: "js",
  age: 18,
  gender: "femail",
};

const resolvers = {
  Query: {
    person: () => js,
  },
};

export default resolvers;
