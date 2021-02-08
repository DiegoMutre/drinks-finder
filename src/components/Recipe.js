import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {
    // Modal Config
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleModalClick = () => {
        setOpen(!open);
    };

    // Use the modal Context
    const { setIdRecipe } = useContext(ModalContext);

    // Click the button
    const handleButtonClick = () => {
        setIdRecipe(recipe.idDrink);
        handleModalClick();
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img
                    className="card-img-top"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <div className="card-body">
                    <button
                        className="btn btn-block btn-primary"
                        onClick={handleButtonClick}
                    >
                        See Recipe
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            handleModalClick();
                            setIdRecipe(null);
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>From Modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
