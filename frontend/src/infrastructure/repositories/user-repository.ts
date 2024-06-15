import backendClient from "@/lib/backend-client";
import User from "@/models/user";

class UserRepository {
  async getUser() {
    const res = await backendClient.get("/api/v1/user");
    if (res.ok) {
      const data = await res.json();
      return this.toModel(data);
    } else {
      return User.empty();
    }
  }

  private toModel(data: { name: string; email: string }) {
    return new User(data.name, data.email);
  }
}

const userRepository = new UserRepository();
export default userRepository;
