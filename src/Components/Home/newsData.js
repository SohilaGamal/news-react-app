import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
  },
});

export default function NewsCard(props) {
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = props.newsList.filter((elem) => {
    if (inputText === "") {
      return elem;
    } else {
      return elem.title.toLowerCase().includes(inputText);
    }
  });

  const { t } = useTranslation();

  return props.newsList.length === 0 ? (
    t("No Newsfeed yet!")
  ) : (
    <div>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label={t("Search")}
        />
      </div>

      <div className="row">
        {filteredData.map((item, indx) => {
          return (
            <div className="col-lg-3 col-sm-12" key={indx}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="140"
                    image={item.urlToImage}
                    title={item.title}
                  />
                  <CardContent>
                    <Link
                      to={{
                        pathname: "/details",
                        // state: item,
                      }}
                      state={{details: item}}
                    >
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                      </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
