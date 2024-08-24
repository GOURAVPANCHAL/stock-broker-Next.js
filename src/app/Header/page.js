"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pages = ["Home", "About", "Blog", "Contact"];
const ResponsiveAppBar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        style={{ background: "#1C2534", color: "white", boxShadow: "none" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography
              sx={{
                display: { xs: "block", sm: "block", md: "block" },
                fontWeight: 700,
                textDecoration: "none",
              }}
              fontSize="24px"
              href="/"
            >
              <Link
                style={{ textDecoration: "none", color: "rgb(154 217 83)" }}
                href="/"
              >
                NXTGEN <span style={{ color: "white" }}> broker</span>
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      fontStyle={{ textTransform: "none" }}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  key={page}
                  passHref
                >
                  <Button
                    style={{
                      color: "white",
                      fontSize: "18px",
                      boxShadow: "none",
                      textTransform: "none",
                    }}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
              <style jsx>{`
                nav {
                  padding: 1rem;
                  background: #333;
                }
              `}</style>
            </Box>

            {/* Open An Account Button */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  color: "rgb(154 217 83)",
                  borderColor: "rgb(154 217 83)",
                  textTransform: "none",
                }}
                onClick={() => router.push("/open_account")}
              >
                Open An Account
              </Button>
            </Box>

            {/* Responsive Open An Account Button */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  color: "rgb(154 217 83)",
                  borderColor: "rgb(154 217 83)",
                  textTransform: "none",
                  fontSize: "14px",
                }}
                onClick={() => router.push("/open_account")}
              >
                Open An Account
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default ResponsiveAppBar;
