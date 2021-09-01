import React, { useCallback, useState} from "react";
import logo from "../../assets/img/icons/logo.png"
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { HeaderMenus} from "./index"

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuBar: {
        background: "#fff",
        color: "#444",
    },
    toolBar: {
        margin: "0 auto",
        maxWidth: 1024,
        width: "100%",
    },
    iconButtons: {
        margin: "0 0 0 auto",
    }
})


const Header = () => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                    <img src={logo} alt="React Logo" width="128px"/>
                    <div className={classes.iconButtons}>
                        <HeaderMenus />
                    </div>                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header