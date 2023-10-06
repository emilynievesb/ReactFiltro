import { Router } from "express";
import { limitPets, limitSize } from "../utils/rateLimit.js";
import { postProductoController } from "../controllers/postControllers.js";

// accept-version

const postInitRoute = () => {
  const router = Router();
  router.post("/producto", limitPets, limitSize, postProductoController);

  return router;
};

export { postInitRoute };
