import User from "./models/User.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.sendFile(__dirname + "/pages/error.html");
      // res.status(401).json({ success: false, message: "User already exist" });
    }

    const userData = new User(req.body);
    const saveData = await userData.save();
    return res.sendFile(__dirname + "/pages/success.html");
    // res
    //   .status(200)
    //   .json({ success: true, message: "Success full creted", data: saveData });
  } catch (error) {
    return res.sendFile(__dirname + "/pages/error.html");
    // res.status(500).json({ success: false, message: "server error" });
  }
};

export default register;
