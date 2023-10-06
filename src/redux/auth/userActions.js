import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase-config";

export const createNewClientUser = (userInfo) => async (dispatch) => {
  try {
    const resPending = createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    const { user } = await resPending;
    console.log(user);

    toast.success("Succesfully created account..");
  } catch (e) {
    toast.error(e.message);
  }
};
