import { BadRequest } from "../utils/errors";
import { User } from "../entities/User";
import { AppDataSource } from "../ormconfig";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "../entities/User";

export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  async register(data: Partial<User>) {
    const exists = await this.userRepository.findOneBy({ email: data.email! });
    if (exists) throw new BadRequest("Email taken");

    const user = this.userRepository.create({ ...data, role: Role.USER });
    await this.userRepository.save(user);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string,{
      expiresIn:"1d",});
    return { token,
       user };
  }

  async login({ email, password }: { email: string; password: string }) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) throw new BadRequest("Invalid credentials");
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new BadRequest("Invalid credentials");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
    return { token, user };
  }
}