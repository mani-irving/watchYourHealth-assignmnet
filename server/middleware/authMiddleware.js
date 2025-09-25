import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const authMiddleware = asyncHandler(async (req, res, next) => {
  // Step 1: Get token from cookies or Authorization header
  const token =
    req.cookies?.token ||
    req.header("Authorization")?.replace("Bearer ", "").trim();

  if (!token) {
    throw new ApiError(401, "Unauthorized: No token provided");
  }

  // Step 2: Verify token
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new ApiError(401, "Invalid or expired token");
  }

  // Step 3: Get user's Name
  const user = decodedToken;

  // Step 4: Attach user to request object and continue
  req.user = user;
  next();
});

export default authMiddleware;
