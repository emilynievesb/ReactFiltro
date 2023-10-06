import { useState } from "react";
import * as React from "react";
import { Box, imageListClasses } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { List } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import { productosFetch } from "../shared/services/fetchServices";
import sideBar from "../img/sidebar.png";

function Products() {
  const [productos, setProductos] = React.useState([]);
  const [cardProducto, setCardProducto] = React.useState({});
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

  React.useEffect(() => {
    async function fetchData() {
      const data = await productosFetch();
      setProductos(data);
    }
    if (productos.length === 0) {
      fetchData();
    }
  }),
    [];

  const handleClickProduct = (event) => {
    const index = event.currentTarget.getAttribute("index");
    setCardProducto(productos[index]);
    console.log(cardProducto);
  };
  return (
    <>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "30%",
            height: "100vh",
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
                  <List sx={{ padding: "1rem" }}>
                    {productos.length !== 0
                      ? productos.map((product, index) => (
                          <ListItem
                            key={index}
                            index={index}
                            onClick={handleClickProduct}
                          >
                            <ListItemIcon>
                              <FolderIcon />
                            </ListItemIcon>
                            <Typography>
                              Producto {Number(index) + 1}
                            </Typography>
                          </ListItem>
                        ))
                      : null}
                  </List>
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100vh",
          }}
        >
          {Object.keys(cardProducto).length !== 0 ? (
            <div>
              <Typography variant="h5">{cardProducto.nombre}</Typography>
              {cardProducto.imagen.map((imagen, index) => (
                <img key={index} src={imagen} width={"40%"} />
              ))}
              <Typography variant="h5">
                Descripción: {cardProducto.descripcion}
              </Typography>
              <Typography variant="h5">
                Valoracion: {cardProducto.valoracion}
              </Typography>
              <Typography variant="h5">
                Precio: ${cardProducto.precio}
              </Typography>
            </div>
          ) : null}
        </Box>
      </Box>
    </>
  );
}
export { Products };
