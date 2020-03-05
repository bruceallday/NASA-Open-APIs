import React from 'react'
import clsx from 'clsx'

import { useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from "@material-ui/core/ListItem";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItemText from '@material-ui/core/ListItemText'

import {
  Link
} from "react-router-dom"

import { useStyles } from "./header.styles";
import { HEADER_PAGE_LINKS } from './header.data'

export default function Header() {

    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          // {/*position="fixed"*/}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <ChevronRightIcon style={{ color: "#212121" }} />
            </IconButton>

            <Typography>
              <img
                className={classes.nasaLogoImage}
                src="/nasologo.png"
                alt="nasa logo"
              />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ color: "#212121" }} />
              ) : (
                <ChevronRightIcon style={{ color: "#212121" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {HEADER_PAGE_LINKS.map((text, index) => (
              <Link key={index} to={`/${text[2]}`} className={classes.pageLink}>
                <ListItem button key={text} onClick={handleDrawerClose}>
                  <ListItemText primary={<div>{text[0] }<span style={{color: 'grey'}} >{` ${text[1]}`}</span></div>} style={{ color: "#212121" }} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {/*["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))*/}
          </List>
        </Drawer>
      </div>
    );
}


