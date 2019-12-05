import { RouterAction } from "connected-react-router";
import { ItemsLIstActionType } from "../home/mainContent/ItemsList/ItemsListAction";

export type Action = | RouterAction | ItemsLIstActionType;