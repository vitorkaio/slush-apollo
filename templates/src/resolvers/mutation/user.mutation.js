
const User = {
  async createUser(_, { name, age }) {
    return {
      name,
      age
    }
  }
}

export default User
