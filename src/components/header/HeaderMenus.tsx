import React from "react";
import { IconButton, Menu } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MenuIcon from "@material-ui/icons/Menu"

const HeaderMenus = () => {
    return (
        <>
            <IconButton>
                <Badge badgeContent={3} color="secondary">                    
                </Badge>                
            </IconButton>
            <IconButton>
                <FavoriteBorderIcon />                
            </IconButton>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default HeaderMenus