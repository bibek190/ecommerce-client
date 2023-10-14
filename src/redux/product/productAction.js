import { collection, doc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config";
import { setProductList } from "./productSlice";

export const fetchProductsAction = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "product"));
    const productList = [];
    querySnapshot.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();
      productList.push({
        ...data,
        slug,
      });
    });
    dispatch(setProductList(productList));
    console.log(productList);
  } catch (e) {
    toast.error(e.message);
  }
};
fetchProductsAction();
