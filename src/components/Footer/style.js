import { createTheme,} from '@mui/material/styles';
const theme = createTheme()
export const styleObj = {
    detailClass: {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        width:"30vw",
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "90vw",
            margin: "auto"
        }
    },
    containerClass: {
        // border: "1px solid",
        // backgroundColor: "#EFDDD9",
        marginTop: '20px',
        display: "flex",
        background: 'url("./images/cool-background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            // backgroundColor: "red"
            // border: "1px solid red"
        }
    },
    linksClass: {
        // border: "1px solid",
        width: "30vw",
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "90vw",
            margin: "auto"
        }
    },
    textClass: {
        // border: "1px solid",
        marginTop:10
    },
    nameClass: {
        fontWeight: "bold"
    },
    impLinkClass: {
        fontWeight: "bold"
    },
    optionsClass: {
        marginTop: 10,
        "&:hover": {
            cursor: "pointer",
            color: "blue"
        }
    },
    contactClass: {
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            width: "90vw",
            margin: "auto"
        }
    },
    locationClass:{
        display: "flex",
        marginTop: 10
    },
    callClass: {
        display: "flex",
        marginTop: 10
    },
    emailClass: {
        display: "flex",
        marginTop: 10
    },
    contact: {
        fontWeight: "bold"
    }
}