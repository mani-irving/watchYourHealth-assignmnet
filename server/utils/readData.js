import { data } from "../data/data";

export function findSessionById(sessionId) {
  return data.find((s) => s.session_id === sessionId);
}
