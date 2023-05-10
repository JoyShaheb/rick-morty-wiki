import React, { FC } from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  ListItem,
  ListItemButton,
  Drawer,
  Divider,
  Button,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { MaterialUISwitch } from "./MaterialUISwitch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { RootState, themeSwitch } from "../../store";
import { MuiThemeEnums } from "../../types/enums";
import { mobileBreakpoint } from "../../utils/mobileBreakpoint";

interface iNavbarProps {
  window?: () => Window;
  children?: JSX.Element | JSX.Element[];
}

type handleDrawerToggleType = () => void;

const Navbar: FC<iNavbarProps> = ({ window, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme: string = useSelector((state: RootState) => state.system.mode);

  const brandName = "Rick & Morty Wiki";

  const drawerWidth = 240;
  const navItems: string[] = ["Characters", "Episode", "Location"];
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle: handleDrawerToggleType = () =>
    setMobileOpen((prevState: boolean) => !prevState);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography onClick={() => navigate(`/`)} variant="h6" sx={{ my: 2 }}>
        {brandName}
      </Typography>
      <Divider />
      <Stack direction="column" justifyContent="center" alignItems="center">
        {navItems.map((item: string) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => navigate(`/${item}`)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <FormControlLabel
          checked={theme === MuiThemeEnums.DARK ? true : false}
          control={<MaterialUISwitch />}
          label=""
          onChange={(e) =>
            (e.target as SwitchProps).checked
              ? dispatch(themeSwitch(MuiThemeEnums.DARK))
              : dispatch(themeSwitch(MuiThemeEnums.LIGHT))
          }
        />
      </Stack>
    </Box>
  );

  const container: (() => HTMLElement) | undefined =
    typeof window !== "undefined" ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ zIndex: 5 }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              p: "0 !important",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { [mobileBreakpoint]: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              onClick={() => navigate(`/`)}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              {brandName}
            </Typography>
            <Box sx={{ display: { xs: "none", [mobileBreakpoint]: "block" } }}>
              {navItems.map((item: string) => (
                <Button
                  onClick={() =>
                    item === "Home" ? navigate(`/`) : navigate(`/${item}`)
                  }
                  key={item}
                  sx={{ color: "#fff" }}
                >
                  {item}
                </Button>
              ))}
              <FormControlLabel
                checked={theme === MuiThemeEnums.DARK ? true : false}
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                label=""
                onChange={(e) =>
                  (e.target as SwitchProps).checked
                    ? dispatch(themeSwitch(MuiThemeEnums.DARK))
                    : dispatch(themeSwitch(MuiThemeEnums.LIGHT))
                }
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", [mobileBreakpoint]: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Container maxWidth="xl" component="main">
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
