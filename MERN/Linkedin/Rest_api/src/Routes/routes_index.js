const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request From: ${req.originalUrl}`);
        console.log(`Request Method: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("get request succeful");
      }
    )
    .post((req, res) => {
      res.send("post request succesful");
    });

  app
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("put  request succesful");
    })
    .delete((req, res) => {
      res.send("delete  request succesful");
    });
};

export default routes;
