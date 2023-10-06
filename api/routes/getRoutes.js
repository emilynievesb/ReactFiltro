import { Router } from "express";
import { limitPets, limitSize } from "../utils/rateLimit.js";
import { getProductoController } from "../controllers/getControllers.js";

// accept-version

const getInitRoute = () => {
  const router = Router();
  router.get("/productos", limitPets, limitSize, getProductoController);

  return router;
};

export { getInitRoute };
