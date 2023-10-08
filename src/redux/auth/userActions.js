import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";

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

export const loginClientUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const authSnapPromise = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Logged Succesfully");
      const { user } = authSnapPromise;
      console.log("user", user);
      getUser(user);
    } catch (e) {
      toast.error(e.message);
    }
  };

export const getUser = (info) => async (dispatch) => {
  try {
    const docRef = await setDoc(doc(db, "Client"), info);
  } catch (e) {
    toast.error(e.message);
  }
};
