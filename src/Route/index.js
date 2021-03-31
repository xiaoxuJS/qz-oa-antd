import React from "react";
import { Switch, Route } from "react-router-dom";
import { userRouter } from "./routes";

function UserRoutes() {
  const renderRouter = (item, index) => {
    return item.component ? (
      <Route key={index} path={item.path} component={item.component} exact = {true} />
    ) : null;
  };
  return (
    <Switch>
      {/* 渲染路由表 */}
      {userRouter.map(renderRouter)}
    </Switch>
  );
}

export default UserRoutes;
