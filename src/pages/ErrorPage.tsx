import { CardMedia, Grid } from "@mui/material";
import Error404 from "../assets/Error404.svg";

const ErrorPage = () => {
  return (
    <Grid item xs={12} justifyContent="center" display="flex">
      <CardMedia
        component="img"
        image={Error404}
        // onLoad={() => console.log("this is loading")}
        // onError={() => console.log("this is error")}
        alt="Error 404 image"
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "800px",
          },
          objectFit: "cover",
        }}
      />
    </Grid>
  );
};

export default ErrorPage;
