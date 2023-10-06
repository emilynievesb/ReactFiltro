import { Box } from "@mui/material";
import ListProducts from "../components/ListProducts";

function Products() {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "15%",
            height: "100vh",
            overflowY: "auto",
            borderRight: "1px solid #dcdcdc",
          }}
        >
          <ListProducts />
        </Box>
      </Box>
    </>
  );
}
export { Products };
