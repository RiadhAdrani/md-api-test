import { AppBar, Box, Switch, FormGroup, FormControlLabel, Snackbar, Alert } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DARK } from "styles/theme/themes";
import LinkButton from "components/shared/LinkButton";
import useTheme from "hooks/useTheme";
import useSearch from "hooks/useSearch";
import { Home, Tv } from "@mui/icons-material";
import { Stack } from "@mui/system";
import HeaderSearch from "./Header.search";
import HeaderSearchIconWrapper from "./Header.searchIconWrapper";
import HeaderSearchBase from "./Header.searchBase";
import HeaderBar from "./Header.bar";

const Header = () => {
    const { getCurrent, toggle } = useTheme();
    const { setSearchQuery, showError, setShowError } = useSearch();

    return (
        <Box>
            <AppBar position="static">
                <HeaderBar>
                    <Stack direction={"row"}>
                        <LinkButton to="/">
                            <Home style={{ marginRight: "5px" }} /> <span>Home</span>
                        </LinkButton>
                        <LinkButton to="/watchlist">
                            <Tv style={{ marginRight: "5px" }} /> <span>Watch List</span>
                        </LinkButton>
                    </Stack>
                    <HeaderSearch>
                        <HeaderSearchIconWrapper>
                            <SearchIcon />
                        </HeaderSearchIconWrapper>
                        <HeaderSearchBase
                            placeholder="Search"
                            onInput={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                        />
                    </HeaderSearch>
                    <FormGroup style={{ padding: "0px 10px" }}>
                        <FormControlLabel
                            checked={getCurrent() === DARK}
                            control={
                                <Switch
                                    size="small"
                                    onChange={() => {
                                        toggle();
                                    }}
                                />
                            }
                            label="Toggle Theme"
                        ></FormControlLabel>
                    </FormGroup>
                </HeaderBar>
            </AppBar>
            <Snackbar
                open={showError}
                autoHideDuration={5000}
                onClose={() => {
                    setShowError(false);
                }}
            >
                <Alert severity="error">"Something went wrong..."</Alert>
            </Snackbar>
        </Box>
    );
};

export default Header;
