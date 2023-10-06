import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { ListProducts } from "../components/ListProducts";
import { useState } from "react";
import sideBar from "../img/sidebar.png";

function Products() {
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            height: "100vh",
            overflowY: "auto",
            borderRight: "1px solid #dcdcdc",
          }}
        >
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Box
                  position="fixed"
                  bottom={16}
                  right={16} // Ajusta la posición horizontal
                  zIndex={1000}
                >
                  <Tooltip title="See all sections" arrow>
                    <Button
                      sx={{
                        backgroundColor: "#13161c",
                        width: "1vw",
                        height: "5vh",
                        borderRadius: "10rem",
                        padding: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          backgroundColor: "#13161c",
                        },
                      }}
                      variant="contained"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <img src={sideBar} width={"20vh"} />
                    </Button>
                  </Tooltip>
                </Box>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <ListProducts />
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
}
export { Products };
