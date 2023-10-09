import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setUser } from "./userSlice";

export const createNewClientUser = (userInfo) => async (dispatch) => {
  try {
    const resPending = createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    const { user } = await resPending;
    console.log(user);
    // setDoc

    const { fName, email, phone } = userInfo;
    const data = { fName, email, phone };
    await setDoc(doc(db, "Client", user.uid), data);

    toast.success("Succesfully created account..");
  } catch (e) {
    toast.error(e.message);
  }
};
// Login user

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

      // send firestore data to redux
      dispatch(getUserInfo(user.uid));
    } catch (e) {
      toast.error(e.message);
    }
  };

// get data from firebase to redux

export const getUserInfo = (uid) => async (dispatch) => {
  try {
    const userSnap = await getDoc(doc(db, "Client", uid));

    if (userSnap.exists()) {
      const userData = userSnap.data();
      dispatch(setUser({ ...userData, uid }));
    }
  } catch (e) {
    toast.error(e.message);
  }
};
