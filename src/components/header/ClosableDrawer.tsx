import React, { useCallback, useState } from "react";
import { Divider } from "@material-ui/core";
import { Drawer } from "@material-ui/core"
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import HistoryIcon from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person"
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyle = makeStyles((theme:any) => ({
    drawer: {
        [theme.breakpoints.up("sm")]:{
            flexShrink: 0,
            width: 256,
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 256
    },
    searchField: {
        alignItems: "center",
        display: "flex",
        marginLeft: 32
    }
}))

const ClosableDrawer = () => {
    const classes = useStyle()

    const [keyword, setKeyword] = useState("")

}