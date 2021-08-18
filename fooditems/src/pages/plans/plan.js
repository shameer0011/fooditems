import React, { useState } from "react";
import { Checkbox, Grid } from "@material-ui/core";
import data from "../../data.json";
import { useStyles } from "./plan_style";
import { storeImage, removeStoreImage } from "../../Action/store_image";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Plans = (props) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [selectedButton, setselectedButton] = useState(null);
  const [selectOnes, setSelectOnes] = useState("Only one item to be select");
  const handleChange = (e, date, breakfast) => {
    if (e.target.checked) {
      breakfast.map((image) => props.dispatch(storeImage(image)));
    } else {
      breakfast.map((image) => props.dispatch(removeStoreImage(image)));
    }
  };
  const styleColor = (e) => {};
  const selectOne = (userType) => {
    setselectedButton(userType);
    if (userType === "TWO") {
      setIndex(1);
    }
    if (userType === "ADVANCED") {
      setIndex(0);
    }
  };

  return (
    <div>
      <h3 style={{textAlign:"center"}}>Choose Your Dishes</h3>
      {data.products.map((i) => {
        return (
          <>
          <Grid container>
            <Grid item xs={6}>
            <div className={classes.row}>
              <div className={classes.column}>
                {i.date}
                <Checkbox
                  // checked={props.completedList.includes(data)}
                  onChange={(e) => handleChange(e, i.date, i.breakfast)}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </div>
            </Grid>
          </Grid>
          </>
        );
      })}
      <div>
        {props.imageList.length < 2 ? (
          <h2 style={{ color: "red" }}>{selectOnes}</h2>
        ) : (
          ""
        )}
        {props.imageList.slice(index, index + 1).map((i) => {
          return (
            <>
              <div className={classes.image}>
                  <div className={classes.container}>
                    <img
                      src={i}
                      alt="g"
                      style={{ height: "300px", width: "400px" }}
                    />
                    <div className={classes.close}>
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                        onClick={styleColor}
                      >
                        <Button
                          style={{
                            backgroundColor:
                              selectedButton === "ADVANCED" ? "red" : "green",
                            color: "black",
                          }}
                          onClick={() => selectOne("ADVANCED")}
                        >
                          One
                        </Button>
                        <Button
                          style={{
                            backgroundColor:
                              selectedButton === "TWO" ? "red" : "green",
                            color: "black",
                          }}
                          onClick={() => selectOne("TWO")}
                        >
                          Two
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    completedList: state.completeTodoList,
    imageList: state.imageReducersList,
  };
};
export default connect(mapStateToProps)(Plans);
