import { Add, Remove } from "@mui/icons-material";
import Button from "../Button";

const AddButton = ({ itemIsAdded = false, onClick = () => {} }) => {
    const icon = itemIsAdded ? <Remove /> : <Add />;
    const text = itemIsAdded ? "Remove from watch list" : "Add to watch list";

    return (
        <Button onClick={onClick}>
            {icon}
            <div style={{ width: "2.5px" }}></div>
            {text}
        </Button>
    );
};

export default AddButton;
