import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import gqlClient from "../graphql/client.js";
import { GetUserByEmailQuery, CreateVideoMutation, CreateNextAdminUserMutation} from "../graphql/mutations.js";

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

class AuthService {
  async signup(signupRequest) {
    const { email, password, firstname, lastname } = signupRequest;
    const hashedPassword = await bcrypt.hash(password, 8);
    const adminUserData = {
      email,
      password: hashedPassword,
      firstname,
      lastname,
    };
    const response = await gqlClient.request(CreateNextAdminUserMutation, {
      adminUserData,
    });
    if (!response?.createNextAdminUser) {
      throw new Error("CreateNextAdminUser Failed");
    }
    const token = jwt.sign({ user: response.createNextAdminUser }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
    return { user: response.createNextAdminUser, token };
  }

  async createVideo(createVideoRequest) {
    const { titulo, modulo, videoId, subModulo } = createVideoRequest;
    const videoData = {
      titulo,
      modulo,
      videoId,
      subModulo,
    };
    const response = await gqlClient.request(CreateVideoMutation, {
      videoData,
    });
    if (!response?.createVideo) {
      throw new Error("CreateVideo Failed");
    }
    return { user: response.createVideo };
  }


  async signin(email, password) {
    const getUserResponse = await gqlClient.request(GetUserByEmailQuery, {
      email,
    });
    const { nextAdminUser } = getUserResponse;
    if (!nextAdminUser) {
      throw new Error("Invalid Email Or Password");
    }
    const isMatch = await bcrypt.compare(password, nextAdminUser.password);
    if (!isMatch) {
      throw new Error("Invalid Email Or Password");
    }
    const token = jwt.sign(
      {
        id: nextAdminUser.id,
        email: nextAdminUser.email,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
    return token;
  }
  
  async getCurrentUser(token) {
    const decoded = jwt.verify(token, JWT_SECRET);
    const getUserResponse = await gqlClient.request(GetUserByEmailQuery, {
      email: decoded.email,
    });
    const { nextAdminUser } = getUserResponse;
    if (!nextAdminUser) {
      throw new Error("User not found");
    }
    delete nextAdminUser.password;
    return nextAdminUser;
  }

}

export default AuthService;