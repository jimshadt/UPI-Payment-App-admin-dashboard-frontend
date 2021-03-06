import * as Yup from "yup";
import { store } from "store/store";
import { toggleSidebar, createNewUser } from "store/actions";

export const handleSingleUserCreation = (value) => {
    store.dispatch(toggleSidebar(false));
    store.dispatch(createNewUser(value));
};

export const generateCreateInputs = () => {
    const inputs = [
        {
            name: "username",
            label: "Name",
            type: "text",
            placeHolder: "Enter name",
            visibility: true,
        },
        {
            name: "email",
            label: "email",
            type: "text",
            placeHolder: "Enter email ID",
            visibility: true,
        },
    ];
    return inputs;
};

export const validationSchema = Yup.object().shape({
    username: Yup.string().max(255).required("Name is required"),
    email: Yup.string().email("Invalid email address").required("email ID is required"),
});

export const initialValues = {
    username: "",
    email: "",
    mobile:"",
};
