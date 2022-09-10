import styled from "@emotion/styled";

const Grid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "15px",
    gridAutoRows: "1fr",
    [theme.breakpoints.down("xl")]: {
        gridTemplateColumns: "repeat(4,1fr)",
    },
    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(3,1fr)",
    },
    [theme.breakpoints.down(990)]: {
        gridTemplateColumns: "repeat(2,1fr)",
    },
    [theme.breakpoints.down(550)]: {
        gridTemplateColumns: "repeat(1,1fr)",
    },
}));

const ItemsGrid = (props) => {
    return <Grid {...props}>{props.children}</Grid>;
};

export default ItemsGrid;
