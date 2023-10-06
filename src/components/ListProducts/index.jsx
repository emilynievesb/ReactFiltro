import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import Divider from "@mui/material/Divider";
import { productosFetch } from "../../shared/services/fetchServices";
import { List } from "@mui/material";

export default function ListProducts() {
  const [productos, setProductos] = React.useState([]);
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
  return (
    <List>
      {productos.length !== 0
        ? productos.map((product, index) => (
            <div>
              <ListItem key={index}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <Typography>Producto {index + 1}</Typography>
              </ListItem>
              <Divider />
            </div>
          ))
        : null}
    </List>
  );
}
export { ListProducts };
