import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  loginForm: {
    justifyContent: "center",
    minHeight: "90vh",
  },
  buttonBlock: {
    width: "100%",
  },
  loginBackground: {
    justifyContent: "center",
    minHeight: "30vh",
    padding: "50px",
  },
  row: {
    display: "table",
    width: "100%",
    tableLayout: "fixed",
    borderSpacing: "10px",
  },
  image: {
    position: "absolute",
    top: "95px",
    left: "337px",
  },
  column: {
    display: "TableCell",
  },
  container: {
    margin: 15,
    width: 160,
    height: 100,
  },
  cover: {
    flex: 1,
    borderRadius: 5,
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 250,
    left: 120,
    width: 25,
    height: 25,
    color: "tomato",
  },
}));
