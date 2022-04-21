import React from "react";
import { useTranslation } from "react-i18next";

import "./settings-styles.css";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function Settings() {

  const classes = useStyles();

  const [lang, setLang] = React.useState("en");

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  return (
    <div className="settings">
      <FormControl className={classes.formControl}>
        <InputLabel id="selectLang">{t("Languages")}</InputLabel>
        <Select
          labelId="selectLang"
          id="selectLang"
          value={lang}
          onChange={changeLanguage}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="sp">Spanish(española)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
