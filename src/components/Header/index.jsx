import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../../features/Auth/component/Register";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // State to handle form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    // Reset the form fields when closing the dialog
    setUsername("");
    setEmail("");
    setPassword("");
    setDialogOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              EZ SHOP
            </Link>
          </Typography>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>
          <Button color="inherit" onClick={handleDialogOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {/* Dialog for Registration */}
      <Dialog
        disableEscapeKeyDown
        disableRestoreFocus
        open={dialogOpen}
        onClose={handleDialogClose}>
        <DialogContent dividers>
          <Register></Register>
          <Button style={{ float: "right", mt: 1 }} onClick={handleDialogClose}>
            Cancel
          </Button>
        </DialogContent>
      </Dialog>

      {/* Drawer for Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <ListItem button component={NavLink} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={NavLink} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
